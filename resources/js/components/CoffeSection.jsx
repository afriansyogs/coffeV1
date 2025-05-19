const CoffeeSection = ({ title, data }) => {
  return (
    <>
      <div className="max-w-7xl">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold font-serif mb-6 lg:mb-8 tracking-widest uppercase text-black">{title}</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 lg:mb-8 uppercase text-black">{title}</h2>
        <ul className="space-y-6">
          {data.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1 text-[11px] leading-tight">
                <p className="uppercase font-semibold text-gray-800">{item.name}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{item.description}</p>
              </div>
              <span className="text-[11px] font-semibold text-gray-800 whitespace-nowrap">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</span>
              <span className="text-[11px] font-semibold text-red-400 whitespace-nowrap">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</span>
            </li>
          ))}
        </ul>
        <a href="/product" className="mt-6 text-[10px] font-semibold uppercase tracking-wider text-gray-700 hover:underline">
          View All
        </a>
      </div>
    </>
  )
}

export default CoffeeSection;