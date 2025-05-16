const Introduction = () => {
  return (
    <>
      <div className="relative bg-[#faf9f7] py-28 px-4 flex justify-center items-center">
        {/* motif_s - pojok kiri atas */}
        <img
          alt="Motif S"
          aria-hidden="true"
          className="absolute top-0 left-0 w-40 h-40 z-10 pointer-events-none select-none"
          src="/assets/img/motif_s.png"
        />

        {/* motif_e - pojok kanan bawah  */}
        <img
          alt="Motif E"
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-40 h-40 z-10 pointer-events-none select-none"
          src="/assets/img/motif_e.png"
        />

        {/* Conten center */}
        <div className="max-w-4xl px-8 text-center relative z-20">
          <p className="text-brown italic text-2xl font-bold leading-relaxed">
            "Find warmth in every sip at Burga. More than just coffee, we create moments. Enjoy enticing aromas, rich flavors, and an inviting atmosphere to share stories and enjoy the day."
          </p>
        </div>
      </div>
    </>
  )
}

export default Introduction;