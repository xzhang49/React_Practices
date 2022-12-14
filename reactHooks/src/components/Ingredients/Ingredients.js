import React, { useReducer, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
}

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...curHttpState, loading: false, }
    case 'ERROR':
      return { loading: false, error: action.errorMessage }
    case 'CLEAR':
      return { ...curHttpState, error: null};
    default:
      throw new Error('Should not be reached!');
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback(filterIngredients => {
    // setUserIngredients(filterIngredients);
    dispatch({ type: 'SET', ingredients: filterIngredients });
  }, []);

  const addIngredientHandler = ingredient => {
    // setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch('firebase/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json '}
    }).then(response => {
      // setIsLoading(false);
      dispatchHttp({type: 'RESPONSE'});
      return response.json();
    }).then(responseData => {
      // setUserIngredients(prevIngredients => [
      //   ...prevIngredients,
      //   {id: responseData.name, ...ingredient}
      // ]);
      dispatch({type: 'ADD', ingredient: { id: responseData.name, ...ingredient }});
    });
  };

  const removeIngredientHandler = ingredientId => {
    // setIsLoading(true);
    dispatchHttp({type: 'SEND'});
    fetch(`firebase/ingredients/${ingredientId}.json`, {
      method: 'DELETE'
    }).then(response => {
      dispatchHttp({type: 'RESPONSE'});
      // setIsLoading(false);
      // setUserIngredients(prevIngredients =>
      //   prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
      // );
      dispatch({type: 'DELETE', id: ingredientId })
    }).catch(error => {
      dispatchHttp({type: 'ERROR', errorMessage: 'Something went wrong!'});
      // setError('Something went wrong!');
      // setIsLoading(false);
    });
  };

  const clearError = () => {
    dispatchHttp({type: 'CLEAR'});
    // setError(null);
  }

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>} 

      <IngredientForm 
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList 
          ingredients={userIngredients} 
          onRemoveItem={removeIngredientHandler} 
        />
      </section>
    </div>
  );
}

export default Ingredients;
