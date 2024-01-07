import { useDrinks } from './useDrinks';

function DrinksMenu() {
  const { data, isLoading } = useDrinks();
  if (isLoading) return;
  console.log(data);
  return <div>DrinksMenu</div>;
}

export default DrinksMenu;
