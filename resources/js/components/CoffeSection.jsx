const CoffeeSection = ({ newArrival }) => {
  return(
    <>
      <h2 className="text-lg font-normal mb-6 tracking-widest">{title}</h2>
      <ul className="space-y-6">
        {newArrival.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <img src={item.product_img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1 text-xs leading-4">
              <p className="uppercase font-semibold tracking-wide text-gray-700">{item.name}</p>
              <p className="text-[9px] text-gray-500 mt-0.5">{item.description}</p>
            </div>
            <span className="text-xs font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
      <button className="mt-6 text-[9px] font-semibold uppercase tracking-widest text-gray-700 hover:underline">VIEW ALL</button>
    </>
  )
}

export default CoffeeSection;