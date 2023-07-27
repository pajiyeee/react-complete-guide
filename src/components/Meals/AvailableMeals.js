import { useCallback, useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMealHandler = useCallback(async function addMeal() {
    try {
      const response = await fetch(
        'https://react-http-b0bc6-default-rtdb.firebaseio.com/meals.json',
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMealHandler();
  }, [fetchMealHandler]);

  const mealList = meals.map(meal => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  if (loading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
