import CoffeeSection from "./CoffeSection";

const CoffeMenu = ({ newArrival }) => {
  return(
    <>
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* New Arrivals */}
      {/* <CoffeeSection title="NEW ARRIVALS" newArrival={newArrival} /> */}
      {/* Best Selling */}
      {/* <CoffeeSection title="BEST SELLING" data={coffeeData.bestSelling} /> */}
    </div>

    </>
  )
}

export default CoffeMenu;