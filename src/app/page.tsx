'use client';

import { useState, useEffect } from 'react';

// ============================================
// PRODUCTOS - MARÍA VE IDEAS Y SABORES
// ============================================
const productos = [
 // --- NUEVOS PRODUCTOS AÑADIDOS ---
  {
    id: 14,
    nombre: 'Tortilla de Patatas',
    precio: 10.00,
    imagen: '/products-maria/tortilla-buñuelos.jpg',
    descripcion: 'Tortilla española clásica, jugosa por dentro y dorada por fuera. Elaborada con huevos frescos y patatas de calidad.',
    categoria: 'Platos Caseros',
    destacado: true,
    badge: 'Clásico',
    rating: 4.9,
    reviews: 78
  },
   {
    id: 16,
    nombre: 'Mermelada de Fresa',
    precio: 8.50,
    imagen: '/products-maria/mermelada-fresa.jpg',
    descripcion: 'Mermelada natural elaborada con fresas frescas de temporada. Dulzura y sabor intensos sin aditivos.',
    categoria: 'Mermeladas',
    badge: 'Natural',
    rating: 4.9,
    reviews: 62
  },
  // --- PRODUCTOS ORIGINALES ---
  {
    id: 1,
    nombre: 'Garbanzos Caseros',
    precio: 8.50,
    imagen: '/products-maria/producto-1.jpg',
    descripcion: 'Mermelada artesanal de frutillas frescas. Sabor clásico y distinguido, elaborada con frutos seleccionados.',
    categoria: 'Platos Caseros',
    destacado: true,
    badge: 'Nuevo',
    rating: 4.9,
    reviews: 45
  },
  {
    id: 2,
    nombre: 'Alfajores Especial de la Casa',
    precio: 12.00,
    imagen: '/products-maria/producto-2.jpg',
    descripcion: 'Postre artesanal preparado con receta tradicional. Perfecto para ocasiones especiales.',
    categoria: 'Postres',
    destacado: true,
    badge: 'Favorito',
    rating: 4.8,
    reviews: 67
  },
  {
    id: 3,
    nombre: 'Mermelada Gourmet de Autor',
    precio: 9.00,
    imagen: '/products-maria/producto-3.jpg',
    descripcion: 'Creación única con combinación de sabores sorprendente. Elaborada artesanalmente.',
    categoria: 'Mermeladas',
    destacado: true,
    badge: 'Premium',
    rating: 4.9,
    reviews: 38
  },
  {
    id: 4,
    nombre: 'Cebollas Artesanales al Malbec',
    precio: 14.50,
    imagen: '/products-maria/producto-4.jpg',
    descripcion: 'Plato preparado con ingredientes frescos y recetas tradicionales. Como en casa.',
    categoria: 'Conservas',
    badge: 'Artesanal',
    rating: 4.7,
    reviews: 29
  },
  {
    id: 5,
    nombre: 'Especialidad de María de Pascua',
    precio: 11.00,
    imagen: '/products-maria/producto-5.jpg',
    descripcion: 'Creación especial de María, con ingredientes premium y mucho amor.',
    categoria: 'Postres',
    badge: 'Gourmet',
    rating: 4.8,
    reviews: 23
  },
  {
    id: 6,
    nombre: 'Conserva Tradicional',
    precio: 9.50,
    imagen: '/products-maria/producto-6.jpg',
    descripcion: 'Conserva elaborada siguiendo métodos tradicionales. Sabor que perdura.',
    categoria: 'Conservas',
    destacado: true,
    badge: 'Clásico',
    rating: 5.0,
    reviews: 89
  },
  {
    id: 7,
    nombre: 'Pimientos agridulce Especial de Autor',
    precio: 10.00,
    imagen: '/products-maria/producto-7.jpg',
    descripcion: 'Dulce artesanal con textura suave y sabor incomparable. Hecho a mano.',
    categoria: 'Conservas',
    badge: 'Delicioso',
    rating: 4.6,
    reviews: 34
  },
  {
    id: 8,
    nombre: 'Creación Gourmet Premium',
    precio: 15.00,
    imagen: '/products-maria/producto-8.jpg',
    descripcion: 'Plato gourmet de autor, preparado con los mejores ingredientes y presentación impecable.',
    categoria: 'Platos Caseros',
    destacado: true,
    badge: 'Exclusivo',
    rating: 4.9,
    reviews: 52
  },
  {
    id: 9,
    nombre: 'Mermelada de Duraznos',
    precio: 8.50,
    imagen: '/products-maria/mermelada-duraznos.jpg',
    descripcion: 'Dulce cremoso y aromático. Elaborado con duraznos seleccionados para un sabor único.',
    categoria: 'Mermeladas',
    badge: 'Natural',
    rating: 4.8,
    reviews: 67
  },
  {
    id: 10,
    nombre: 'Mermelada de Pimientos',
    precio: 9.00,
    imagen: '/products-maria/mermelada-pimientos.jpg',
    descripcion: 'Receta clásica con un sabor diferente. Perfecta para acompañar quesos y carnes.',
    categoria: 'Mermeladas',
    badge: 'Único',
    rating: 4.9,
    reviews: 38
  },
  {
    id: 11,
    nombre: 'Pasta de Aceitunas',
    precio: 10.50,
    imagen: '/products-maria/pasta-aceitunas.jpg',
    descripcion: 'Pasta cremosa de aceitunas seleccionadas. Ideal para untar o como acompañamiento.',
    categoria: 'Conservas',
    badge: 'Mediterráneo',
    rating: 4.7,
    reviews: 29
  },
  {
    id: 12,
    nombre: 'Ajos Confitados en Aceto',
    precio: 11.00,
    imagen: '/products-maria/ajos-confitados.jpg',
    descripcion: 'Dientes de ajo confitados en aceto balsámico. Un condimento gourmet para tus platos.',
    categoria: 'Conservas',
    badge: 'Gourmet',
    rating: 4.8,
    reviews: 23
  },
  {
    id: 13,
    nombre: 'Dulce de Leche Tradicional',
    precio: 9.50,
    imagen: '/products-maria/dulce-leche.jpg',
    descripcion: 'Elaborado a fuego lento con receta antigua. Textura cremosa y sabor auténtico.',
    categoria: 'Dulces',
    badge: 'Tradicional',
    rating: 5.0,
    reviews: 89
  }
];

const productoDestacado = productos[7]; // Creación Gourmet Premium
const WHATSAPP_NUMBER = '34612345678';

const testimonios = [
  {
    nombre: 'Carmen López',
    texto: 'El dulce de leche es espectacular, se nota que está hecho a fuego lento. ¡Ya es mi tercera compra!',
    rating: 5,
    producto: 'Dulce de Leche Tradicional'
  },
  {
    nombre: 'Roberto Fernández',
    texto: 'Las mermeladas son increíbles. La de pimientos es perfecta para acompañar quesos. Muy recomendable.',
    rating: 5,
    producto: 'Mermelada de Pimientos'
  },
  {
    nombre: 'Ana Martínez',
    texto: 'Productos artesanales de verdadera calidad. Se nota el amor con que los preparan. ¡Seguiré comprando!',
    rating: 5,
    producto: 'Pasta de Aceitunas'
  }
];

export default function Tienda() {
  const [carrito, setCarrito] = useState<{id: number; nombre: string; precio: number; cantidad: number; imagen: string}[]>([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];
  const productosFiltrados = categoriaActiva === 'Todos' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva);

  const agregarAlCarrito = (producto: typeof productos[0]) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => 
          item.id === producto.id 
            ? {...item, cantidad: item.cantidad + 1}
            : item
        );
      }
      return [...prev, {
        id: producto.id, 
        nombre: producto.nombre, 
        precio: producto.precio, 
        cantidad: 1,
        imagen: producto.imagen
      }];
    });
  };

  const quitarDelCarrito = (id: number) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const cambiarCantidad = (id: number, delta: number) => {
    setCarrito(prev => prev.map(item => {
      if (item.id === id) {
        const nuevaCantidad = item.cantidad + delta;
        return nuevaCantidad <= 0 ? item : {...item, cantidad: nuevaCantidad};
      }
      return item;
    }).filter(item => item.cantidad > 0));
  };

  const totalCarrito = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  const enviarPedidoWhatsApp = () => {
    if (carrito.length === 0) return;
    const mensaje = carrito.map(item => 
      `• ${item.cantidad}x ${item.nombre} - €${(item.precio * item.cantidad).toFixed(2)}`
    ).join('%0A');
    const texto = `🛒 *NUEVO PEDIDO - María Ve Ideas y Sabores*%0A%0A${mensaje}%0A%0A💰 *Total: €${totalCarrito.toFixed(2)}*%0A%0A¡Hola! Me gustaría realizar este pedido.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fef9f3]">
      {/* HEADER - RESPONSIVE */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/98 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo con Nombre y Slogan - CAMBIADO A IMAGEN */}
            <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/logo-maria.png" 
                alt="Logo María Ve Ideas y Sabores" 
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full object-cover shadow-lg"
              />
              <div className="flex flex-col">
                <h1 className={`text-base sm:text-lg lg:text-xl font-bold leading-tight transition-colors ${
                  scrolled ? 'text-rose-600' : 'text-white'
                }`}>
                  María Ve
                </h1>
                <p className={`text-[9px] sm:text-xs font-medium tracking-wide transition-colors ${
                  scrolled ? 'text-gray-500' : 'text-white/90'
                }`}>
                  Ideas y Sabores
                </p>
              </div>
            </a>
            
            {/* Navegación Desktop */}
            <nav className="hidden md:flex gap-6 lg:gap-8">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-rose-600' : 'text-white hover:text-rose-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Carrito y Menú Móvil */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setMostrarCarrito(true)}
                className="relative bg-gradient-to-r from-rose-500 to-orange-500 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base hover:from-rose-600 hover:to-orange-600 transition-all flex items-center gap-1 sm:gap-2"
              >
                <span>🛒</span>
                <span className="hidden sm:inline">Carrito</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Botón Menú Móvil */}
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="md:hidden p-2 rounded-lg"
              >
                <span className={`text-2xl ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                  {menuAbierto ? '✕' : '☰'}
                </span>
              </button>
            </div>
          </div>

          {/* Menú Móvil Desplegable */}
          {menuAbierto && (
            <div className="md:hidden bg-white rounded-b-2xl shadow-lg py-4 px-4 absolute left-0 right-0">
              {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMenuAbierto(false)}
                  className="block py-3 px-4 text-gray-700 font-medium hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO - RESPONSIVE */}
      <section id="inicio" className="bg-gradient-to-br from-rose-400 via-pink-500 to-orange-400 text-white min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-white/5 rounded-full transform translate-x-1/3 -rotate-12" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-full transform -translate-x-1/4 translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
                ✨ Producto Destacado
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {productoDestacado.nombre}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                {productoDestacado.descripcion}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl font-bold">
                  €{productoDestacado.precio.toFixed(2)}
                </span>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="text-sm">({productoDestacado.reviews} reseñas)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => agregarAlCarrito(productoDestacado)}
                  className="bg-white text-rose-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                >
                  🛒 Añadir al Carrito
                </button>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me interesa el ${productoDestacado.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white/30">
                  <img
                    src={productoDestacado.imagen}
                    alt={productoDestacado.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                {productoDestacado.badge && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-yellow-400 text-gray-800 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
                    {productoDestacado.badge}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS - RESPONSIVE */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {icon: '🚚', titulo: 'Envío a Domicilio', texto: 'Entregamos fresco a tu puerta'},
              {icon: '👩‍🍳', titulo: '100% Artesanal', texto: 'Hechos con ingredientes premium'},
              {icon: '⭐', titulo: 'Calidad Garantizada', texto: '+200 clientes satisfechos'},
              {icon: '💳', titulo: 'Pago Fácil', texto: 'Efectivo o transferencia'}
            ].map((b, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 sm:p-6 bg-rose-50 rounded-xl sm:rounded-2xl text-center sm:text-left">
                <span className="text-3xl sm:text-4xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-1">{b.titulo}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">{b.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS - RESPONSIVE */}
      <section id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Nuestros Productos
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Mermeladas, dulces y conservas artesanales de autor
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all ${
                categoriaActiva === cat 
                  ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-rose-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow relative group">
              {producto.badge && (
                <span className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  {producto.badge}
                </span>
              )}
              
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 sm:p-5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 leading-tight">
                    {producto.nombre}
                  </h3>
                  <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap">
                    {producto.categoria}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {producto.descripcion}
                </p>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="font-semibold text-gray-700 text-sm">{producto.rating}</span>
                  <span className="text-gray-400 text-xs">({producto.reviews})</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-rose-600">
                    €{producto.precio.toFixed(2)}
                  </span>
                  <button
                    onClick={() => agregarAlCarrito(producto)}
                    className="bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 sm:px-5 py-2 rounded-full font-semibold text-sm hover:from-rose-600 hover:to-orange-600 transition-all flex items-center gap-1"
                  >
                    🛒 <span className="hidden sm:inline">Añadir</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE NOSOTROS - RESPONSIVE */}
      <section id="nosotros" className="bg-white py-12 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
                {/* LOGO CAMBIADO A IMAGEN */}
                <img 
                  src="/logo-maria.png" 
                  alt="Logo María Ve Ideas y Sabores" 
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover shadow-lg"
                />
                <div>
                  <span className="text-rose-600 font-semibold text-sm block">Nuestra Historia</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    Sobre Nosotros
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                <strong>María Ve Ideas y Sabores</strong> nació de la pasión por la cocina artesanal. Cada producto es elaborado con dedicación, utilizando ingredientes frescos y de calidad, siguiendo recetas tradicionales transmitidas de generación en generación.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 hidden sm:block">
                Nuestras mermeladas, dulces y conservas se preparan en pequeñas tandas para garantizar la frescura y el sabor auténtico que nos caracteriza. Sin conservantes artificiales, solo el sabor natural de los mejores ingredientes.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Cada frasco lleva el amor y la dedicación de María, quien supervisa personalmente cada elaboración para asegurar la máxima calidad.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-10">
                {[
                  {numero: '200+', texto: 'Clientes'},
                  {numero: '15+', texto: 'Productos'},
                  {numero: '5', texto: 'Años'}
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-600">{stat.numero}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{stat.texto}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {['producto-1', 'producto-2', 'producto-3', 'producto-8'].map((img, i) => (
                <img 
                  key={i}
                  src={`/products-maria/${img}.jpg`} 
                  alt={img}
                  className={`w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg sm:rounded-xl shadow-lg ${i % 2 === 1 ? 'mt-4 sm:mt-8' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS - RESPONSIVE */}
      <section className="bg-rose-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Clientes satisfechos nos respaldan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonios.map((t, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm">
                <div className="text-yellow-400 mb-3 sm:mb-4 text-lg sm:text-xl">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                  "{t.texto}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-100 flex items-center justify-center text-lg sm:text-xl">
                    👤
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">{t.nombre}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{t.producto}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO - RESPONSIVE */}
      <section id="contacto" className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Contáctanos
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                ¿Tienes alguna pregunta o quieres hacer un pedido especial? Estamos aquí para ayudarte.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  {icon: '📞', titulo: 'Teléfono', texto: '+34 612 345 678', bg: 'bg-rose-100'},
                  {icon: '💬', titulo: 'WhatsApp', texto: 'Respuesta inmediata', bg: 'bg-green-100'},
                  {icon: '📍', titulo: 'Zona de Entrega', texto: 'Toda la ciudad', bg: 'bg-blue-100'},
                  {icon: '🕐', titulo: 'Horario', texto: 'Lun-Sáb: 9:00-20:00', bg: 'bg-pink-100'}
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${c.bg} rounded-full flex items-center justify-center text-lg sm:text-xl shrink-0`}>
                      {c.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">{c.titulo}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{c.texto}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría más información sobre sus productos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-600 transition-colors"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>

            <div className="bg-rose-50 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Te contactaremos pronto.'); }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-rose-400 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Teléfono</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-rose-400 outline-none transition-colors text-sm sm:text-base"
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-rose-400 outline-none transition-colors resize-none text-sm sm:text-base"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:from-rose-600 hover:to-orange-600 transition-all"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CARRITO LATERAL - RESPONSIVE */}
      {mostrarCarrito && (
        <>
          <div 
            onClick={() => setMostrarCarrito(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <div className="fixed top-0 right-0 w-full sm:w-[420px] h-full bg-white shadow-2xl z-50 flex flex-col">
            <div className="p-4 sm:p-6 border-b flex justify-between items-center bg-gradient-to-r from-rose-500 to-orange-500 text-white">
              <h2 className="text-xl sm:text-2xl font-bold">🛒 Tu Pedido</h2>
              <button 
                onClick={() => setMostrarCarrito(false)} 
                className="text-2xl hover:text-rose-200"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 sm:p-6">
              {carrito.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-5xl sm:text-6xl mb-4">🛒</p>
                  <p className="text-lg">Tu carrito está vacío</p>
                  <p className="text-sm mt-1">¡Añade productos deliciosos!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {carrito.map(item => (
                    <div key={item.id} className="flex gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <img 
                        src={item.imagen} 
                        alt={item.nombre}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-sm sm:text-base">{item.nombre}</p>
                        <p className="text-gray-500 text-xs sm:text-sm">€{item.precio.toFixed(2)} c/u</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button 
                            onClick={() => cambiarCantidad(item.id, -1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white font-bold text-sm sm:text-base hover:bg-gray-100"
                          >-</button>
                          <span className="font-semibold">{item.cantidad}</span>
                          <button 
                            onClick={() => cambiarCantidad(item.id, 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-white font-bold text-sm sm:text-base hover:bg-gray-100"
                          >+</button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-rose-600 text-sm sm:text-base">
                          €{(item.precio * item.cantidad).toFixed(2)}
                        </p>
                        <button 
                          onClick={() => quitarDelCarrito(item.id)} 
                          className="mt-2 text-red-500 text-xs sm:text-sm hover:text-red-700"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {carrito.length > 0 && (
              <div className="p-4 sm:p-6 border-t bg-gray-50">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span>€{totalCarrito.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 sm:mb-6">
                  <span className="text-lg sm:text-xl font-bold">Total:</span>
                  <span className="text-xl sm:text-2xl font-bold text-rose-600">€{totalCarrito.toFixed(2)}</span>
                </div>
                <button
                  onClick={enviarPedidoWhatsApp}
                  className="w-full bg-green-500 text-white py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  💬 Pedir por WhatsApp
                </button>
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
                  Entrega en 24-48 horas
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=¡Hola! Me gustaría hacer un pedido.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg sm:shadow-xl hover:bg-green-600 transition-colors z-40"
      >
        <span className="text-2xl sm:text-3xl">💬</span>
      </a>

      {/* FOOTER - RESPONSIVE */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                {/* LOGO CAMBIADO A IMAGEN */}
                <img 
                  src="/logo-maria.png" 
                  alt="Logo María Ve Ideas y Sabores" 
                  className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold">María Ve</span>
                  <span className="text-rose-400 text-xs sm:text-sm font-medium">Ideas y Sabores</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Mermeladas, dulces y conservas artesanales. Hechos con amor e ingredientes de primera calidad.
              </p>
              {/* Redes Sociales */}
              <div className="flex gap-3">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors text-lg">
                  💬
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors text-lg">
                  📷
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors text-lg">
                  📘
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
              <div className="space-y-2">
                {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-400 text-xs sm:text-sm hover:text-rose-400">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Categorías</h4>
              <div className="space-y-2">
                {['Mermeladas', 'Dulces', 'Conservas', 'Especiales'].map(item => (
                  <span key={item} className="block text-gray-400 text-xs sm:text-sm">{item}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <p>📞 +34 612 345 678</p>
                <p>📍 Envíos a toda la ciudad</p>
                <p>🕐 Lun-Sáb: 9:00-20:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {/* LOGO PEQUEÑO EN FOOTER CAMBIADO */}
              <img 
                src="/logo-maria.png" 
                alt="Logo" 
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-gray-300 font-semibold">María Ve Ideas y Sabores</span>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">© 2024 María Ve Ideas y Sabores. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
