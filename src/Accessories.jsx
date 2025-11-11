import { useState } from "react";

const products = [
  { id: 1, name: "Cargador Rápido", price: 15000 },
  { id: 2, name: "Auriculares Bluetooth", price: 25000 },
  { id: 3, name: "Funda Silicona", price: 8000 },
];

export default function Accessories() {
  const [cart, setCart] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setOrderConfirmed(false);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = () => {
    if (cart.length === 0 || customerName.trim() === "") {
      alert("Por favor, agrega productos y tu nombre antes de realizar el pedido.");
      return;
    }

    const messageItems = cart.map(item => `${item.name} x ${item.qty}`).join(", ");
    const whatsappMessage = encodeURIComponent(
      `Hola, quiero realizar un pedido de FRANCELL:\n` +
      `Nombre: ${customerName}\n` +
      `Dirección: ${customerAddress || "No proporcionada"}\n` +
      `Productos: ${messageItems}\n` +
      `Total: $${total}`
    );

    const phoneNumber = "56998754690"; // Reemplaza con tu número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

    setCart([]);
    setCustomerName("");
    setCustomerAddress("");
    setOrderConfirmed(true);
  };

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6 animate-text-neon">Accesorios</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {products.map(p => (
          <div key={p.id} className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="mb-4">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-400 hover:bg-purple-500 text-gray-900 px-4 py-2 rounded font-semibold transition hover:shadow-[0_0_20px_#0ff]"
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4 animate-text-neon">Carrito:</h3>
        {cart.length === 0 ? <p>Está vacío</p> :
          <>
            <ul className="flex flex-col items-center gap-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-center gap-4 bg-gray-700 px-6 py-3 rounded w-72 shadow-md animate-text-neon hover:shadow-[0_0_15px_#0ff]"
                >
                  <span>{item.name} x {item.qty} - ${item.price * item.qty}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded transition hover:shadow-[0_0_15px_#f0f]"
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-bold text-lg animate-text-neon">Total: ${total}</p>

            {/* Formulario de cliente con estilo neón */}
            <div className="flex flex-col gap-3 mt-4 w-80">
              <input
                type="text"
                placeholder="Tu nombre"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="p-3 rounded border border-cyan-500 bg-gray-900 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 animate-text-neon"
              />
              <input
                type="text"
                placeholder="Dirección (opcional)"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="p-3 rounded border border-purple-500 bg-gray-900 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 animate-text-neon"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition hover:shadow-[0_0_20px_#f0f]"
              >
                Borrar selección
              </button>
              <button
                onClick={handleOrder}
                className="bg-green-400 hover:bg-green-600 text-gray-900 px-4 py-2 rounded font-semibold transition hover:shadow-[0_0_20px_#0f0]"
              >
                Realizar Pedido
              </button>
            </div>

            {orderConfirmed && <p className="mt-3 text-green-400 font-semibold">¡Pedido realizado con éxito!</p>}
          </>
        }
      </div>
    </section>
  );
}
