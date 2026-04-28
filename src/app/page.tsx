"use client";
import { useState } from "react";

// --- BASE DE DATOS DE PRODUCTOS ACTUALIZADA ---
// Asegúrate de subir las fotos a la carpeta 'public' con estos nombres
const products = [
  // --- MERMELADAS ---
  { id: 1, name: 'Mermelada de Frutillas', price: 2500, category: 'mermeladas', image: '/frutillas.jpg', desc: 'Recién llegadas, clásico y distinguido' },
  { id: 2, name: 'Mermelada de Duraznos', price: 2700, category: 'mermeladas', image: '/duraznos.jpg', desc: 'Dulce, cremoso y aromático', discount: 10 },
  { id: 3, name: 'Mermelada de Moras', price: 2800, category: 'mermeladas', image: '/moras.jpg', desc: 'Producción semanal' },
  { id: 4, name: 'Mermelada de Pimientos', price: 2600, category: 'mermeladas', image: '/pimientos.jpg', desc: 'Sabor único y diferente', discount: 15 },
  
  // --- POSTRES (Solo Dulce de Leche) ---
  { id: 5, name: 'Dulce de Leche Tradicional', price: 3200, category: 'postres', image: '/dulce-leche.jpg', desc: 'Fuego lento, sabor de siempre' },
  
  // --- CONSERVAS ---
  { id: 6, name: 'Pasta de Aceitunas', price: 2900, category: 'conservas', image: '/aceitunas.jpg', desc: 'Ideal para tablas de quesos', discount: 10 },
  { id: 7, name: 'Ajos Confitados', price: 2400, category: 'conservas', image: '/ajos.jpg', desc: 'En aceto balsámico' },
  { id: 8, name: 'Cebollas al Malbec', price: 2500, category: 'conservas', image: '/cebollas.jpg', desc: 'Acompañamiento gourmet' },

  // --- PLATOS CASEROS (NUEVOS) ---
  { id: 9, name: 'Promo Tortilla + Buñuelos', price: 3500, category: 'platos', image: '/promo-tortilla.jpg', desc: 'La más vendida! + Mermelada de Pimientos', discount: 10 },
  { id: 10, name: 'Guiso de Lentejas', price: 3800, category: 'platos', image: '/guiso.jpg', desc: 'Sabores de otoño, bien casero' },
  { id: 11, name: 'Tortilla Clásica', price: 2200, category: 'platos', image: '/promo-tortilla.jpg', desc: 'Receta de la nona' },
];

type Product = typeof products[0];
type CartItem = Product & { quantity: number };

export default function Tienda() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');

  // Filtrado de productos
  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Lógica del Carrito
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
      {/* NAVBAR CON LOGO OVALADO */}
      <nav className="fixed top-0 w-full bg-[#FDF6E9]/95 backdrop-blur-md z-40 border-b border-gray-200 p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* LOGO SVG OVALADO ELEGANTE */}
          <div className="w-24 h-10 sm:w-32 sm:h-12 flex items-center justify-center">
            <svg viewBox="0 0 180 90" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs><filter id="shadow"><feDropShadow dx="1" dy="1" stdDeviation="1" flood-opacity="0.1"/></filter></defs>
              <rect x="2" y="2" width="176" height="86" rx="43" fill="#FDF6E9" stroke="#C4882F" stroke-width="3" filter="url(#shadow)"/>
              <path d="M30 25 Q90 35 150 25" stroke="#3D5A45" stroke-width="1.5" fill="none" opacity="0.5"/>
              <text x="90" y="52" fill="#3D5A45" font-size="22" font-family="'Playfair Display', serif" font-weight="800" text-anchor="middle" letter-spacing="1.5">MARIA VE</text>
              <line x1="40" y1="58" x2="140" y2="58" stroke="#C4882F" stroke-width="1.5"/>
              <text x="90" y="72" fill="#8B7355" font-size="9" font-family="'DM Sans', sans-serif" text-anchor="middle" letter-spacing="2" font-weight="600">IDEAS Y SABORES</text>
              <circle cx="30" cy="58" r="2.5" fill="#C4882F"/>
              <circle cx="150" cy="58" r="2.5" fill="#C4882F"/>
            </svg>
          </div>
        </div>
        
        <button onClick={() => setIsCartOpen(true)} className="relative p-2 bg-white rounded-full shadow-sm hover:shadow-md transition">
          <svg className="w-6 h-6 text-[#3D5A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-[#B85C38] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>}
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 pt-28">
        <h1 className="text-3xl font-bold font-serif text-[#3D5A45] text-center mb-2">Nuestros Productos</h1>
        <p className="text-center text-gray-500 mb-8">Seleccioná y agregá al carrito</p>
        
        {/* FILTROS (Agregué "Platos Caseros") */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['todos', 'mermeladas', 'postres', 'conservas', 'platos'].map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeCategory === c ? 'bg-[#3D5A45] text-white border-[#3D5A45]' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
            >
              {c === 'todos' ? 'Todos' : c === 'platos' ? 'Platos Caseros' : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map(p => (
            <div key={p.id} className="bg-white rounded-2xl shadow overflow-hidden flex flex-col hover:shadow-lg transition hover:-translate-y-1">
              <div className="relative aspect-square bg-[#F5E6D3]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                {p.discount && <span className="absolute top-2 right-2 bg-[#B85C38] text-white text-xs px-2 py-1 rounded-full shadow-md">{p.discount}% OFF</span>}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <span className="text-xs text-[#B85C38] font-semibold uppercase tracking-wide">{p.category}</span>
                <h3 className="font-serif font-semibold text-base mt-1">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5 mb-2">{p.desc}</p>
                <div className="mt-auto flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="font-bold text-lg text-[#3D5A45]">${p.price.toLocaleString()}</span>
                  <button onClick={() => addToCart(p)} className="bg-[#3D5A45] text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-[#2A3D30] transition flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CARRITO SIDEBAR */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setIsCartOpen(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in" onClick={e => e.stopPropagation()}>
            <div className="p-4 bg-[#3D5A45] text-white flex justify-between items-center">
              <h3 className="font-bold font-serif text-lg">Tu Carrito</h3>
              <button onClick={() => setIsCartOpen(false)} className="p-1 hover:bg-white/20 rounded-full text-white">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {cart.length === 0 ? <p className="text-center text-gray-400 mt-10">Tu carrito está vacío.</p> : 
                cart.map(item => (
                  <div key={item.id} className="flex gap-3 bg-white p-3 rounded-xl shadow-sm items-center">
                    <img src={item.image} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-[#B85C38] font-bold text-sm">${item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300 font-bold">-</button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300 font-bold">+</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="p-4 border-t bg-[#FDF6E9]">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-gray-600">Total a pagar:</span>
                <span className="font-display text-2xl font-bold text-[#B85C38]">${total.toLocaleString()}</span>
              </div>
              <button onClick={sendOrder} disabled={cart.length === 0} className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#20BA5A] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enviar Pedido por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
