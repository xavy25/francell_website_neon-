const services = [
  { title: "Reparación de Celulares", desc: "Arreglamos pantallas, baterías y más con rapidez y garantía.", color: "from-blue-500 to-purple-500" },
  { title: "Venta de Accesorios", desc: "Fundas, cargadores, auriculares y todo lo que tu celular necesita.", color: "from-green-400 to-blue-500" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {services.map((service, idx) => (
          <div key={idx} className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-br ${service.color}`}>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-100">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}