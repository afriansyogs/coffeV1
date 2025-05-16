import React from "react";

const BannerSection = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 pt-24">
        <div className="w-full mx-4 bg-white rounded-xl flex flex-col md:flex-row overflow-hidden shadow-sm">
          {/* Bagian Gambar */}
          <div className="md:w-1/2 h-[440px]">
            <img
              alt="Hand holding a brown paper bag of specialty coffee with a white label, wooden beams in the background"
              className="w-full h-full object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/990daf9d-fce3-4978-27f3-11ce8fd0466d.jpg"
              width="600"
            />
          </div>

          {/* Bagian Konten */}
          <div className="md:w-1/2 bg-base-200 relative flex flex-col justify-center items-center p-10 text-center">
            <img
              alt="Light coffee beans pattern scattered on a pale background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
              src="https://storage.googleapis.com/a1aa/image/94e86459-526d-4c3f-5165-fad50cc0f5bb.jpg"
            />
            <div className="relative z-10 max-w-md">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-900">
                SPECIAL{" "}
              <span className="text-brown">COFFEE</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                Morbi justo vel clari non leo elementum massa. Molestie ipsum
                concimentum egestas vitae ut cras aenean enim. Laoreet odio
                adipiscing auctor scelerisque phasellus nisl faucibus.
              </p>
              <button className="btn btn-outline hover:bg-brown hover:text-white border-2 border-brown mt-8">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerSection;