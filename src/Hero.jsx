export default function Hero() {
  return (
    <section className="relative bg-gray-900 flex flex-col justify-center items-center h-screen text-center px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-80 h-80 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse absolute -top-20 -left-20"></div>
        <div className="w-96 h-96 bg-purple-500/40 rounded-full filter blur-3xl animate-pulse absolute -bottom-40 -right-20"></div>
      </div>
      <h1 className="relative text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-text">
        FRANCELL
      </h1>
      <p className="relative text-lg md:text-2xl mb-6 max-w-xl text-gray-300">
        Soluciones completas para tu celular: reparación rápida y accesorios de calidad.
      </p>
      <a href="#services" className="relative bg-blue-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition">
        Conocer Servicios
      </a>
    </section>
  );
}