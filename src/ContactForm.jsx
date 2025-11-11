import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form, 'TU_PUBLIC_KEY')
      .then(() => setSubmitted(true))
      .catch((err) => console.error(err));

    form.reset();
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Contacto</h2>
      {submitted && <p className="mb-4 text-green-400">¡Mensaje enviado!</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" name="user_name" placeholder="Nombre" className="p-3 rounded border border-gray-700 bg-gray-900 text-white" required />
        <input type="email" name="user_email" placeholder="Email" className="p-3 rounded border border-gray-700 bg-gray-900 text-white" required />
        <textarea name="message" placeholder="Mensaje" className="p-3 rounded border border-gray-700 bg-gray-900 text-white" required />
        <button type="submit" className="bg-blue-400 hover:bg-purple-500 text-gray-900 p-3 rounded font-semibold transition">Enviar</button>
      </form>
    </section>
  );
}
