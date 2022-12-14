import { useCoffeeContext } from "../context/CoffeeContext";


const SelectedCoffeeBean = () => {

  const { coffeeBean } = useCoffeeContext()

  return ( 
    <div className="selected-coffee">
      <h2>{coffeeBean.name}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;