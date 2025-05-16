import { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const carouselData = [
    {
      name: "Johann Sebastian Bach",
      description: "Without my morning coffee, I'm just like a dried-up piece of roast goat. A day without coffee feels incomplete, as if energy and inspiration are missing. The aroma, the warmth, and the rich taste of each sip awaken the senses, preparing me for the challenges ahead."
    },
    {
      name: "Albert Camus",
      description: "Should I kill myself, or have a cup of coffee?Should I kill myself, or have a cup of coffee? In the quiet moments of reflection, coffee becomes more than just a drink—it is a reason to pause, to contemplate, and to find meaning in the simplest pleasures. Sometimes, it is the smallest things, like the first sip of coffee, that remind us why we keep going."
    },
    {
      name: "Honoré de Balzac",
      description: "Coffee sharpens the mind and fuels creativity, turning fatigue into energy. As ideas flow, words effortlessly fill the page. A thinker’s best ally, it transforms hesitation into inspiration."
    },
  ]
  const nextSlide = () => setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
  return (
    <>
      <div className="relative w-full bg-brown-900 text-white md:py-10 mt-20 overflow-hidden bg-[#faf9f7]">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
          {carouselData.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 text-center">
              <h1 className="text-xl font-semibold text-brown w-3/4 mx-auto">"{item.description}"</h1>
              <p className="text-lg text-dark-brown mt-2 font-bold">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Navigasi */}
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between px-4">
          <button className="btn btn-circle" onClick={prevSlide}>❮</button>
          <button className="btn btn-circle" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </>
  )
}

export default Carousel;