import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '플레인 베이글',
    description: '뉴욕에서 바로 날아온 생지를 사용해 만든 플레인 베이글',
    price: 22.99,
  },
  {
    id: 'm2',
    name: '통밀 베이글',
    description: '촉촉하고 쫀득한 통밀의 씹는 맛까지 더한 베이글',
    price: 16.5,
  },
  {
    id: 'm3',
    name: '블루베리 베이글',
    description:
      '쫀득쫀득 찰진 베이글 사이 사이로 쏙쏙 박힌 상금한 블루베리의 맛',
    price: 10.99,
  },
  {
    id: 'm4',
    name: '시나몬 앤 레이즌 베이글',
    description: '계피의 향긋함과 건포도의 달콤함이 조화롭게 어우러진 베이글',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map(meal => {
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

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
