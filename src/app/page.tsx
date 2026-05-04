'use client';

import { useState, useEffect } from 'react';

// ============================================
// PRODUCTOS - MARÍA VE IDEAS Y SABORES
// ============================================
const productos = [
  // --- NUEVOS PRODUCTOS ---
  {
    id: 14,
    nombre: 'Tortilla - Buñuelos con Mermelada',
    precio: 10.00,
    imagen: '/products-maria/Tortilla - Buñuelos con Mermelada.jpg',
    descripcion: 'Deliciosa combinación de tortilla y buñuelos acompañados de mermelada.',
    categoria: 'Platos Caseros',
    destacado: true,
    badge: 'Especial',
    rating: 4.9,
    reviews: 78
  },
  {
    id: 15,
    nombre: 'Buñuelos de Viento',
    precio: 7.50,
    imagen: '/products-maria/bunuelos.jpg',
    descripcion: 'Buñuelos caseros esponjosos y dorados. Rellenos de crema.',
    categoria: 'Postres',
    destacado: true,
    badge: 'Casero',
    rating: 4.8,
    reviews: 55
  },
  {
    id: 16,
    nombre: 'Mermelada de Fresa',
    precio: 8.50,
    imagen: '/products-maria/mermelada-fresa.jpg',
    descripcion: 'Mermelada natural elaborada con fresas frescas de temporada.',
    categoria: 'Mermeladas',
    badge: 'Natural',
    rating: 4.9,
    reviews: 62
  },
  // --- PRODUCTOS ORIGINALES ---
  { id: 1, nombre: 'Garbanzos Caseros', precio: 8.50, imagen: '/products-maria/producto-1.jpg', descripcion: 'Mermelada artesanal de frutillas frescas.', categoria: 'Platos Caseros', destacado: true, badge: 'Nuevo', rating: 4.9, reviews: 45 },
  { id: 2, nombre: 'Alfajores Especial de la Casa', precio: 12.00, imagen: '/products-maria/producto-2.jpg', descripcion: 'Postre artesanal preparado con receta tradicional.', categoria: 'Postres', destacado: true, badge: 'Favorito', rating: 4.8, reviews: 67 },
  { id: 3, nombre: 'Mermelada Gourmet de Autor Moras', precio: 9.00, imagen: '/products-maria/producto-3.jpg', descripcion: 'Creación única con combinación de sabores sorprendente.', categoria: 'Mermeladas', destacado: true, badge: 'Premium', rating: 4.9, reviews: 38 },
  { id: 4, nombre: 'Cebollas Artesanales al Malbec', precio: 14.50, imagen: '/products-maria/producto-4.jpg', descripcion: 'Plato preparado con ingredientes frescos y recetas tradicionales.', categoria: 'Conservas', badge: 'Artesanal', rating: 4.7, reviews: 29 },
  { id: 5, nombre: 'Especialidad de María de Pascua', precio: 11.00, imagen: '/products-maria/producto-5.jpg', descripcion: 'Creación especial de María, con ingredientes premium.', categoria: 'Postres', badge: 'Gourmet', rating: 4.8, reviews: 23 },
  { id: 6, nombre: 'Conserva Tradicional', precio: 9.50, imagen: '/products-maria/producto-6.jpg', descripcion: 'Conserva elaborada siguiendo métodos tradicionales.', categoria: 'Conservas', destacado: true, badge: 'Clásico', rating: 5.0, reviews: 89 },
  { id: 7, nombre: 'Pimientos agridulce Especial', precio: 10.00, imagen: '/products-maria/producto-7.jpg', descripcion: 'Dulce artesanal con textura suave y sabor incomparable.', categoria: 'Conservas', badge: 'Delicioso', rating: 4.6, reviews: 34 },
  { id: 8, nombre: 'Tortilla Creación Gourmet', precio: 15.00, imagen: '/products-maria/producto-8.jpg', descripcion: 'Plato gourmet de autor, preparado con los mejores ingredientes.', categoria: 'Platos Caseros', destacado: true, badge: 'Exclusivo', rating: 4.9, reviews: 52 },
  { id: 9, nombre: 'Mermelada de Duraznos', precio: 8.50, imagen: '/products-maria/mermelada-duraznos.jpg', descripcion: 'Dulce cremoso y aromático.', categoria: 'Mermeladas', badge: 'Natural', rating: 4.8, reviews: 67 },
  { id: 10, nombre: 'Mermelada de Pimientos', precio: 9.00, imagen: '/products-maria/mermelada-pimientos.jpg', descripcion: 'Receta clásica con un sabor diferente.', categoria: 'Mermeladas', badge: 'Único', rating: 4.9, reviews: 38 },
  { id: 11, nombre: 'Pasta de Aceitunas', precio: 10.50, imagen: '/products-maria/pasta-aceitunas.jpg', descripcion: 'Pasta cremosa de aceitunas seleccionadas.', categoria: 'Conservas', badge: 'Mediterráneo', rating: 4.7, reviews: 29 },
  { id: 12, nombre: 'Ajos Confitados en Aceto', precio: 11.00, imagen: '/products-maria/ajos-confitados.jpg', descripcion: 'Dientes de ajo confitados en aceto balsámico.', categoria: 'Conservas', badge: 'Gourmet', rating: 4.8, reviews: 23 },
  { id: 13, nombre: 'Dulce de Leche Tradicional', precio: 9.50, imagen: '/products-maria/dulce-leche.jpg?v=2024', descripcion: 'Elaborado a fuego lento con receta antigua.', categoria: 'Dulces', badge: 'Tradicional', rating: 5.0, reviews: 89 }
];

const productoDestacado = productos.find(p => p.id === 8) || productos[0];
const WHATSAPP_NUMBER = '34612345678';

const testimonios = [
  { nombre: 'Carmen López', texto: 'El dulce de leche es espectacular. ¡Ya es mi tercera compra!', rating: 5, producto: 'Dulce de Leche Tradicional' },
  { nombre: 'Roberto Fernández', texto: 'Las mermeladas son increíbles. Muy recomendable.', rating: 5, producto: 'Mermelada de Pimientos' },
  { nombre: 'Ana Martínez', texto: 'Productos artesanales de verdadera calidad. ¡Seguiré comprando!', rating: 5, producto: 'Pasta de Aceitunas' }
];

export default function Tienda() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [moneda, setMoneda] = useState('EUR');

  const tasasCambio = { EUR: 1, USD: 1.08, ARS: 1050 };
  const simbolos = { EUR: '€', USD: 'US$', ARS: 'AR$' };

  const formatearPrecio = (precioEUR) => {
    const valor = precioEUR * tasasCambio[moneda];
    if (moneda === 'ARS') {
      return simbolos[moneda] + Math.round(valor).toLocaleString('es-AR');
    }
    return simbolos[moneda] + valor.toFixed(2);
  };

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes('Buenos_Aires') || tz.includes('Argentina')) setMoneda('ARS');
      else if (tz.includes('New_York') || tz.includes('Los_Angeles') || tz.includes('Mexico_City')) setMoneda('USD');
      else setMoneda('EUR');
    } catch (e) {
      setMoneda('EUR');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];
  const productosFiltrados = categoriaActiva === 'Todos' ? productos : productos.filter(p => p.categoria === categoriaActiva);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item);
      }
      return [...prev, { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1, imagen: producto.imagen }];
    });
  };

  const quitarDelCarrito = (id) => setCarrito(prev => prev.filter(item => item.id !== id));

  const cambiarCantidad = (id, delta) => {
    setCarrito(prev => prev.map(item => {
      if (item.id === id) {
        const nuevaCantidad = item.cantidad + delta;
        return nuevaCantidad <= 0 ? item : {...item, cantidad: nuevaCantidad};
      }
      return item;
    }).filter(item => item.cantidad > 0));
  };

  const totalCarritoEUR = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  const enviarPedidoWhatsApp = () => {
    if (carrito.length === 0) return;
    const mensaje = carrito.map(item => `• ${item.cantidad}x ${item.nombre} - ${formatearPrecio(item.precio)}`).join('%0A');
    const texto = `🛒 *NUEVO PEDIDO - María Ve Ideas y Sabores*%0A%0A${mensaje}%0A%0A💰 *Total: ${formatearPrecio(totalCarritoEUR)}*%0A%0A¡Hola! Me gustaría realizar este pedido.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-serif">
      {/* HEADER GOURMET */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#inicio" className="flex items-center gap-3 group">
              <img src="/logo-maria.png" alt="Logo" className="h-12 w-12 lg:h-14 lg:w-14 rounded-full object-cover shadow-lg border-2 border-amber-500/50 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <h1 className={`text-lg lg:text-xl font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-amber-500' : 'text-white'}`}>María Ve</h1>
                <p className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-stone-400' : 'text-stone-300'}`}>Ideas y Sabores</p>
              </div>
            </a>
            
            <nav className="hidden lg:flex gap-10 items-center">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs uppercase tracking-widest font-medium transition-colors relative group ${scrolled ? 'text-stone-300 hover:text-amber-500' : 'text-stone-200 hover:text-white'}`}>
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <select value={moneda} onChange={(e) => setMoneda(e.target.value)} className={`bg-transparent border-b border-stone-600 px-2 py-1 text-xs uppercase tracking-widest cursor-pointer outline-none ${scrolled ? 'text-amber-500' : 'text-white'}`}>
                <option value="EUR" className="text-stone-800">EUR €</option>
                <option value="USD" className="text-stone-800">USD $</option>
                <option value="ARS" className="text-stone-800">ARS $</option>
              </select>
            </nav>

            <div className="flex items-center gap-4">
              <select value={moneda} onChange={(e) => setMoneda(e.target.value)} className={`lg:hidden bg-transparent border-b border-stone-600 px-1 text-xs uppercase cursor-pointer outline-none ${scrolled ? 'text-amber-500' : 'text-white'}`}>
                <option value="EUR" className="text-stone-800">EUR</option>
                <option value="USD" className="text-stone-800">USD</option>
                <option value="ARS" className="text-stone-800">ARS</option>
              </select>
              <button onClick={() => setMostrarCarrito(true)} className="relative bg-stone-900 text-amber-500 px-4 py-2 rounded-none border border-amber-500 font-medium text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-stone-900 transition-all flex items-center gap-2">
                <span>🛒</span>
                <span className="hidden sm:inline">Carrito</span>
                {totalItems > 0 && (<span className="absolute -top-2 -right-2 bg-amber-500 text-stone-900 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{totalItems}</span>)}
              </button>
              <button onClick={() => setMenuAbierto(!menuAbierto)} className="lg:hidden p-2 text-amber-500">
                <span className="text-2xl">{menuAbierto ? '✕' : '☰'}</span>
              </button>
            </div>
          </div>
          {menuAbierto && (
            <div className="lg:hidden bg-stone-900 border-t border-stone-800 py-4 px-4 absolute left-0 right-0">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (<a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuAbierto(false)} className="block py-3 px-4 text-stone-300 text-xs uppercase tracking-widest hover:text-amber-500 transition-colors">{item}</a>))}
            </div>
          )}
        </div>
      </header>

      {/* HERO GOURMET */}
      <section id="inicio" className="bg-stone-900 text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/products-maria/hero-texture.jpg')] opacity-5 bg-cover bg-center"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block text-amber-500 text-[10px] tracking-[0.3em] uppercase font-medium mb-6 border border-amber-500/50 px-4 py-1">Producto Destacado</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6 tracking-tight">
                {productoDestacado.nombre}
              </h1>
              <p className="text-stone-400 text-base lg:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-sans">
                {productoDestacado.descripcion}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <span className="text-4xl lg:text-5xl font-light text-amber-500">
                  {formatearPrecio(productoDestacado.precio)}
                </span>
                <div className="flex items-center gap-2 text-stone-400">
                  <span className="text-amber-500 tracking-widest text-sm">★★★★★</span>
                  <span className="text-xs font-sans">({productoDestacado.reviews} reseñas)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => agregarAlCarrito(productoDestacado)} className="group bg-amber-500 text-stone-900 px-8 py-4 font-medium text-sm uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center gap-3">
                  Añadir al Carrito
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me interesa el ${productoDestacado.nombre}`} target="_blank" rel="noopener noreferrer" className="bg-transparent text-white px-8 py-4 border border-stone-700 font-medium text-sm uppercase tracking-widest hover:border-amber-500 hover:text-amber-500 transition-all flex items-center justify-center gap-3">
                  Consultar
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative p-4">
                <div className="absolute inset-0 border border-amber-500/30 transform rotate-3"></div>
                <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-none overflow-hidden shadow-2xl border-8 border-stone-800 relative">
                  <img src={productoDestacado.imagen} alt={productoDestacado.nombre} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                {productoDestacado.badge && (
                  <div className="absolute -bottom-4 -right-4 bg-amber-500 text-stone-900 px-6 py-2 font-bold text-sm uppercase tracking-widest shadow-lg">
                    {productoDestacado.badge}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-stone-900 py-16 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[{icon: '🚚', titulo: 'Envío a Domicilio', texto: 'Entrega premium'}, {icon: '👩‍🍳', titulo: '100% Artesanal', texto: 'Hecho a mano'}, {icon: '⭐', titulo: 'Calidad Suprema', texto: '+200 clientes'}, {icon: '💎', titulo: 'Pago Seguro', texto: 'Múltiples métodos'}].map((b, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl mb-3 block">{b.icon}</span>
                <h3 className="font-sans text-xs uppercase tracking-widest text-amber-500 mb-1">{b.titulo}</h3>
                <p className="text-stone-500 text-[10px] uppercase tracking-wider">{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* PRODUCTOS - ESTILO GOURMET VISUAL */}
      <section id="productos" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-[10px] tracking-[0.3em] uppercase font-medium">Selección Exclusiva</span>
          <h2 className="text-3xl lg:text-4xl font-light text-stone-800 mt-2 tracking-tight">Nuestras Creaciones</h2>
          <div className="w-16 h-px bg-amber-500 mx-auto mt-4"></div>
        </div>

        {/* Filtros estilo minimalista */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-5 py-2 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 border-b-2 ${
                categoriaActiva === cat 
                ? 'border-amber-500 text-stone-900 font-medium' 
                : 'border-transparent text-stone-400 hover:text-stone-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Estilo Masonry (Pinterest) - Visual y Profesional */}
        {/* Nota: Usamos 'columns' en lugar de 'grid' para un diseño orgánico */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {productosFiltrados.map(producto => (
            <div 
              key={producto.id} 
              className="break-inside-avoid bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-stone-100"
            >
              {/* Contenedor de imagen flexible (no cuadrado fijo) */}
              <div className="relative overflow-hidden bg-stone-50">
                {producto.badge && (
                  <span className="absolute top-4 left-4 bg-stone-900/80 text-amber-400 px-3 py-1 text-[9px] uppercase tracking-widest z-10 backdrop-blur-sm">
                    {producto.badge}
                  </span>
                )}
                
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  // Si es el ID 13, mantenemos la proporción, si no, cubrimos
                  style={{ minHeight: '200px' }}
                />
                
                {/* Overlay elegante al pasar el ratón */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500 flex items-center justify-center">
                   <button 
                    onClick={() => agregarAlCarrito(producto)}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-stone-900 px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-amber-500 hover:text-white"
                   >
                     Añadir
                   </button>
                </div>
              </div>
              
              {/* Información del producto - Estilo Editorial */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-lg text-stone-800 leading-tight tracking-tight group-hover:text-amber-700 transition-colors">
                    {producto.nombre}
                  </h3>
                  <span className="text-amber-600 text-xl font-light ml-4">
                    {formatearPrecio(producto.precio)}
                  </span>
                </div>
                
                <p className="text-stone-400 text-xs mb-4 font-sans leading-relaxed line-clamp-2">
                  {producto.descripcion}
                </p>

                <div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 text-xs tracking-wider">★★★★★</span>
                    <span className="text-stone-300 text-[10px]">{producto.reviews}</span>
                  </div>
                  <span className="text-stone-300 text-[10px] uppercase tracking-wider">{producto.categoria}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-[10px] tracking-[0.3em] uppercase font-medium">Testimonios</span>
            <h2 className="text-3xl lg:text-4xl font-light text-stone-800 mt-2 tracking-tight">Lo Que Dicen Nuestros Clientes</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonios.map((t, i) => (
              <div key={i} className="bg-white p-8 border border-stone-200 hover:border-amber-500 transition-colors text-center">
                <div className="text-amber-500 mb-4 tracking-widest text-sm">{'★'.repeat(t.rating)}</div>
                <p className="text-stone-600 font-sans text-sm italic mb-6">"{t.texto}"</p>
                <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-amber-500 mx-auto mb-3">M</div>
                <div className="font-serif text-stone-800">{t.nombre}</div>
                <div className="text-stone-400 text-xs uppercase tracking-widest mt-1">{t.producto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-[10px] tracking-[0.3em] uppercase font-medium">Contacto</span>
            <h2 className="text-3xl lg:text-4xl font-light text-stone-800 mt-2 tracking-tight">Haga Su Reserva</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-stone-500 font-sans text-sm mb-8">¿Tienes alguna pregunta o quieres hacer un pedido especial? Estamos aquí para ayudarte.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría más información sobre sus productos.`} target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-amber-500 px-8 py-4 font-medium text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-stone-900 transition-all flex items-center justify-center gap-3">💬 WhatsApp Directo</a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {[
                {icon: '📞', texto: '+34 612 345 678'}, 
                {icon: '📍', texto: 'Toda la ciudad'}, 
                {icon: '🕐', texto: 'Lun-Sáb 9-20h'}, 
                {icon: '✉️', texto: 'Contacto'}
              ].map((c, i) => (
                <div key={i} className="p-4 border border-stone-200">
                  <span className="block text-2xl mb-2">{c.icon}</span>
                  <span className="text-stone-600 text-xs uppercase tracking-wider">{c.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CARRITO */}
      {mostrarCarrito && (
        <>
          <div onClick={() => setMostrarCarrito(false)} className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm" />
          <div className="fixed top-0 right-0 w-full sm:w-[420px] h-full bg-stone-900 shadow-2xl z-50 flex flex-col border-l border-stone-800">
            <div className="p-6 border-b border-stone-800 flex justify-between items-center">
              <h2 className="text-xl uppercase tracking-widest text-amber-500">Tu Pedido</h2>
              <button onClick={() => setMostrarCarrito(false)} className="text-stone-500 hover:text-white text-2xl">✕</button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {carrito.length === 0 ? (
                <div className="text-center py-12 text-stone-500">
                  <p className="text-5xl mb-4 opacity-20">🛒</p>
                  <p className="text-xs uppercase tracking-widest">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {carrito.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 border border-stone-800">
                      <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover border border-stone-700" />
                      <div className="flex-1">
                        <p className="font-sans text-sm text-white">{item.nombre}</p>
                        <p className="text-amber-500 text-xs mt-1">{formatearPrecio(item.precio)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button onClick={() => cambiarCantidad(item.id, -1)} className="w-6 h-6 border border-stone-700 text-stone-500 text-xs hover:text-white hover:border-white transition-colors">-</button>
                          <span className="text-white text-sm">{item.cantidad}</span>
                          <button onClick={() => cambiarCantidad(item.id, 1)} className="w-6 h-6 border border-stone-700 text-stone-500 text-xs hover:text-white hover:border-white transition-colors">+</button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-amber-500 font-sans text-sm">{formatearPrecio(item.precio * item.cantidad)}</p>
                        <button onClick={() => quitarDelCarrito(item.id)} className="mt-2 text-[10px] uppercase tracking-widest text-red-400 hover:text-red-300">Eliminar</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {carrito.length > 0 && (
              <div className="p-6 border-t border-stone-800 bg-stone-950">
                <div className="flex justify-between mb-2 text-stone-500 text-xs uppercase tracking-widest"><span>Subtotal:</span><span>{formatearPrecio(totalCarritoEUR)}</span></div>
                <div className="flex justify-between mb-6 text-white text-lg"><span>Total:</span><span className="text-amber-500">{formatearPrecio(totalCarritoEUR)}</span></div>
                <button onClick={enviarPedidoWhatsApp} className="w-full bg-amber-500 text-stone-900 py-4 uppercase tracking-widest text-sm font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"> Pedir por WhatsApp </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-500 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo-maria.png" alt="Logo" className="h-12 w-12 rounded-full border border-amber-500/30" />
                <div>
                  <span className="block text-white text-lg tracking-widest uppercase">María Ve</span>
                  <span className="block text-amber-500 text-[10px] tracking-widest uppercase">Ideas y Sabores</span>
                </div>
              </div>
              <p className="text-xs font-sans leading-relaxed">Mermeladas, dulces y conservas artesanales. Hechos con amor e ingredientes de primera calidad.</p>
            </div>
            <div>
              <h4 className="text-amber-500 text-[10px] uppercase tracking-widest mb-4 font-bold">Navegación</h4>
              <div className="space-y-2">{['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (<a key={item} href={`#${item.toLowerCase()}`} className="block text-xs font-sans hover:text-white transition-colors">{item}</a>))}</div>
            </div>
            <div>
              <h4 className="text-amber-500 text-[10px] uppercase tracking-widest mb-4 font-bold">Categorías</h4>
              <div className="space-y-2">{['Mermeladas', 'Dulces', 'Conservas'].map(item => (<span key={item} className="block text-xs font-sans">{item}</span>))}</div>
            </div>
            <div>
              <h4 className="text-amber-500 text-[10px] uppercase tracking-widest mb-4 font-bold">Contacto</h4>
              <div className="space-y-2 text-xs font-sans">
                <p>📞 +34 612 345 678</p>
                <p>📍 Envíos a toda la ciudad</p>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-[10px] uppercase tracking-widest">
            <p>© 2024 María Ve Ideas y Sabores. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
