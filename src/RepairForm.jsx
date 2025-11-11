import { useState } from "react";

export default function RepairForm() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "56998754690"; // Cambia por tu número de WhatsApp (incluye código país)
    const message = `Hola, soy ${name}. Solicito reparación para mi celular ${model} con el siguiente problema: ${issue}.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Limpiar formulario
    setName("");
    setModel("");
    setIssue("");
  };

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Solicitar Reparación</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded border border-gray-700 bg-gray-900 text-white"
          required
        />
        <input
          type="text"
          placeholder="Modelo del celular"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="p-3 rounded border border-gray-700 bg-gray-900 text-white"
          required
        />
        <select
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="p-3 rounded border border-gray-700 bg-gray-900 text-white"
          required
        >
          <option value="">Selecciona el problema</option>
          <option value="Pantalla rota">Pantalla rota</option>
          <option value="Batería">Batería</option>
          <option value="Otro">Otro</option>
        </select>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-blue-400 text-gray-900 p-3 rounded font-semibold transition hover:shadow-[0_0_15px_#0ff]"
        >
          Enviar Solicitud
        </button>
      </form>
    </section>
  );
}
