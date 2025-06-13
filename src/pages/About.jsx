
const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-8 py-24 text-white bg-[url('/about.jpg')]"
    
    >
      <div className="w-[85vw] bg-white/10 backdrop-blur-md p-16 rounded-3xl shadow-2xl">
        <h1 className="text-6xl text-teal-400 mb-10 font-black tracking-tighter ">
          About TasteBud
        </h1>
        <p className="text-xl leading-9 text-gray-100 font-light tracking-tight">
          Welcome to <span className="text-teal-300 font-semibold">TasteBud</span> — your ultimate culinary journey
          begins here.🥝 <br />
          <br />
          Whether you're craving something sweet, spicy, or soulful, TasteBud serves as your digital kitchen companion.
          Discover recipes crafted by chefs and home-cooks alike, or add your own twist to age-old classics. With a modern
          UI, favorites feature, and a personal touch, TasteBud makes every recipe a memory and every visit a delight.
          <br />
          <br />
          Built with love, served with flavor.
        </p>
      </div>
    </div>
  );
}

export default About