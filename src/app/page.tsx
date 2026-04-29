"use client";
import { useState } from "react";

// --- PRODUCTOS (Reorganizados según tu pedido) ---
const products = [
  // --- MERMELADAS (Confitura Bordeaux movida aquí) ---
  { id: 1, name: 'Mermelada de Frutillas', price: 2500, category: 'mermeladas', image: '/frutillas.jpg', desc: 'Clásico y distinguido' },
  { id: 2, name: 'Mermelada de Duraznos', price: 2700, category: 'mermeladas', image: '/duraznos.jpg', desc: 'Cremoso y aromático', discount: 10 },
  { id: 3, name: 'Mermelada de Moras', price: 2800, category: 'mermeladas', image: '/moras.jpg', desc: 'Producción semanal' },
  { id: 4, name: 'Mermelada de Pimientos', price: 2600, category: 'mermeladas', image: '/pimientos.jpg', desc: 'Sabor único', discount: 15 },
  { id: 5, name: 'Confitura Bordeaux', price: 3000, category: 'mermeladas', image: '/confitura.jpg', desc: 'Edición especial' }, // MOVIDA AQUÍ
  
  // --- POSTRES (Solo Dulce de Leche) ---
  { id: 6, name: 'Dulce de Leche', price: 3200, category: 'postres', image: '/dulce-leche.jpg', desc: 'Fuego lento tradicional' },
  
  // --- CONSERVAS (Pimientos Agridulces movida aquí) ---
  { id: 7, name: 'Pasta de Aceitunas', price: 2900, category: 'conservas', image: '/aceitunas.jpg', desc: 'Ideal para tablas', discount: 10 },
  { id: 8, name: 'Ajos Confitados', price: 2400, category: 'conservas', image: '/ajos.jpg', desc: 'En aceto balsámico' },
  { id: 9, name: 'Cebollas al Malbec', price: 2500, category: 'conservas', image: '/cebollas.jpg', desc: 'Acompañamiento gourmet' },
  { id: 10, name: 'Pimientos Agridulces', price: 2600, category: 'conservas', image: '/pimientos-agridulces.jpg', desc: 'Para los amantes del sabor' }, // MOVIDA AQUÍ
  
  // --- PLATOS CASEROS (Guiso de Garbanzos movido aquí) ---
  { id: 11, name: 'Promo Tortilla + Buñuelos', price: 3500, category: 'platos', image: '/promo-tortilla.jpg', desc: 'La más vendida + Mermelada', discount: 10 },
  { id: 12, name: 'Guiso de Lentejas', price: 3800, category: 'platos', image: '/guiso.jpg', desc: 'Sabores de otoño' },
  { id: 13, name: 'Guiso de Garbanzos', price: 3700, category: 'platos', image: '/garbanzos.jpg', desc: 'Casero y contundente' }, // MOVIDO AQUÍ
];

type Product = typeof products[0];
type CartItem = Product & { quantity: number };

export default function Tienda() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const sendOrder = () => {
    let message = '*¡Hola Maria Ve! Quiero hacer un pedido:*\n\n';
    cart.forEach(item => message += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toLocaleString()}\n`);
    message += `\n*Total: $${total.toLocaleString()}*`;
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen pb-24">
 {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#FDF6E9]/95 backdrop-blur-md z-40 border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* LOGO NUEVO - MÁS GRANDE */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex items-center justify-center border-2 border-[#C4882F] shadow-sm bg-white">
            <img 
              src="/logo.png" 
              alt="Maria Ve Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-serif font-bold text-[#3D5A45] text-lg">Maria Ve</span>
            <span className="block text-xs text-gray-500 -mt-1">Ideas y Sabores</span>
          </div>
        </div>
        
        <button onClick={() => setIsCartOpen(true)} className="relative p-2 bg-white rounded-full shadow-sm">
          <svg className="w-6 h-6 text-[#3D5A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-[#B85C38] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>}
        </button>
      </nav>

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold font-serif text-[#3D5A45] text-center mb-8">Tienda Online</h1>
        
        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['todos', 'mermeladas', 'postres', 'conservas', 'platos'].map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeCategory === c ? 'bg-[#3D5A45] text-white border-[#3D5A45]' : 'bg-white border-gray-200'}`}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map(p => (
            <div key={p.id} className="bg-white rounded-2xl shadow overflow-hidden flex flex-col hover:shadow-lg transition">
              <div className="relative aspect-square bg-[#F5E6D3]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                {p.discount && <span className="absolute top-2 right-2 bg-[#B85C38] text-white text-xs px-2 py-1 rounded-full">{p.discount}% OFF</span>}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-serif font-semibold">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1 mb-2">{p.desc}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-bold text-[#3D5A45]">${p.price.toLocaleString()}</span>
                  <button onClick={() => addToCart(p)} className="bg-[#3D5A45] text-white px-3 py-1.5 rounded-full text-sm hover:bg-[#2A3D30]">Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CARRITO */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setIsCartOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-4 bg-[#3D5A45] text-white flex justify-between items-center">
              <h3 className="font-bold font-serif">Tu Carrito</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-white hover:opacity-80">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {cart.length === 0 ? <p className="text-center text-gray-500 mt-10">El carrito está vacío.</p> : 
                cart.map(item => (
                  <div key={item.id} className="flex gap-3 bg-[#FDF6E9] p-3 rounded-xl items-center">
                    <img src={item.image} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-[#B85C38] font-bold">${item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 rounded-full bg-gray-200 text-xs hover:bg-gray-300">-</button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 rounded-full bg-gray-200 text-xs hover:bg-gray-300">+</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="p-4 border-t bg-[#FDF6E9]">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-xl text-[#B85C38]">${total.toLocaleString()}</span>
              </div>
              <button onClick={sendOrder} disabled={cart.length === 0} className="w-full bg-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 disabled:opacity-50">
                Enviar Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
