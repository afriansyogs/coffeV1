const Service = () => {
  const serviceData = [
    {
      icon: "fas fa-shipping-fast",
      title: "FAST DELIVERY",
      description: "No waiting, no fees, just fast and free delivery!",
    },
    {
      icon: "fa-solid fa-shop",
      title: "PICKUP IN STORE",
      description: "Get your items faster with easy in-store pickup!",
    },
    {
      icon: "fa-solid fa-dolly",
      title: "NO SHIPPING CHARGE",
      description: "Enjoy free shipping on all orders—no extra fees!",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "FRIENDLY SERVICE",
      description: "Our team is here to assist you with a smile.",
    },
  ];
  return(
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-14 lg:gap-20 py-8 bg-transparent border-t-2 border-b-4 border-t-base-300 border-b-brown">
        {serviceData.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center"
          >
            <i className={`${feature.icon} text-brown text-3xl sm:text-4xl p-2`}></i>
            <h3 className="text-dark-brown font-semibold text-base sm:text-lg leading-tight">{feature.title}</h3>
            <p className="text-brown text-xs sm:text-sm mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Service;