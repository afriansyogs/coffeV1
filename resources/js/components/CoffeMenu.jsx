import CoffeeSection from "./CoffeSection";

const CoffeMenu = ({ newArrival }) => {
  const coffeeData = {
    newArrivals: [
      { name: "Coffe Arabica Region", description: "High-quality Arabica coffee with a distinctive taste from various regions.", price: 25000, img: "assets/img/product/3_p2_instan_coffe.png" },
      { name: "BOLDE Expresso Coffee Maker G8 Coffee Machine", description: "A modern espresso machine for brewing the perfect cup of coffee.", price: 30000, img: "assets/img/product/1_p1_coffe_maker.png" },
      { name: "1 Set Mug Coffee Premium", description: "A premium coffee mug set for enjoying coffee in style.", price: 28000, img: "assets/img/product/1_p3_coffe_gift.png" },
      { name: "Cafe Direct", description: "High-quality instant coffee with an authentic taste from selected coffee beans.", price: 25000, img: "assets/img/product/2_p1_instan_coffe.png" },
      { name: "Coffee Bar Syrup", description: "Special coffee syrup, adding sweetness and a unique aroma to every sip.", price: 28000, img: "assets/img/product/1_p1_coffe_a.png" }
    ],
    bestSelling: [
      { name: "Coffee Organic", description: "Premium organic coffee with a rich aroma and smooth taste, sourced from high-quality beans.", price: 25000, img: "assets/img/product/1_p2_instan_coffe.png" },
      { name: "Portable Coffee Maker", description: "A compact and convenient coffee maker, perfect for brewing fresh coffee anytime, anywhere.", price: 28000, img: "assets/img/product/2_p1_coffe_maker.png" },
      { name: "Otten Coffee Maker", description: "A high-quality coffee machine designed for effortless brewing and exceptional coffee flavor.", price: 30000, img: "assets/img/product/3_p1_coffe_maker.png" },
      { name: "Coffee Arabica Region", description: "Premium Arabica coffee beans from select regions, offering a rich and aromatic experience.", price: 25000, img: "assets/img/product/3_p1_instan_coffe.png" },
      { name: "1 Set of Coffee Brewing Tools", description: "A complete set of coffee brewing tools to enhance your coffee-making experience.", price: 28000, img: "assets/img/product/1_p3_coffe_gift.png" }
    ]
  };
  
  return(
    <>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* sementara dummy data bukan dari db  */}
        <CoffeeSection title="NEW ARRIVALS" data={coffeeData.newArrivals} />
        <CoffeeSection title="BEST SELLING" data={coffeeData.bestSelling} />

      {/* New Arrivals */}
      {/* <CoffeeSection title="NEW ARRIVALS" newArrival={newArrival} /> */}
      {/* Best Selling */}
      {/* <CoffeeSection title="BEST SELLING" data={coffeeData.bestSelling} /> */}
    </div>

    </>
  )
}

export default CoffeMenu;