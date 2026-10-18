import { useState } from 'react';
import { ShieldCheck, Truck, CheckCircle2, Sparkles, Clock3, ChevronDown, Menu, X, ArrowRight, Star, Zap, Droplets, Home, Brush, BadgeCheck } from 'lucide-react';

const PRICE = '149.900';
const OLD_PRICE = '299.800';
const ORDER_URL = ''; // Pega aquí la URL del formulario COD de Shopify/Releasit o MasterShop.

const benefits = [
  { icon: Droplets, title: 'Limpieza con vapor', text: 'Ayuda a aflojar la suciedad adherida en distintas superficies compatibles.' },
  { icon: Brush, title: 'Accesorios para diferentes tareas', text: 'Incluye accesorios para adaptar la limpieza a las necesidades del hogar.' },
  { icon: Home, title: 'Un solo equipo, varios espacios', text: 'Úsalo siguiendo las indicaciones del fabricante en las superficies adecuadas.' },
];

const faqs = [
  { q: '¿En qué superficies puedo usarlo?', a: 'Depende del material y de las indicaciones del fabricante. Antes de usarlo, verifica que la superficie tolere vapor y prueba primero en un área pequeña y poco visible.' },
  { q: '¿Qué incluye el producto?', a: 'La oferta se presenta como un limpiador a vapor multiusos con 9 accesorios. Confirma el contenido exacto del paquete con el proveedor antes de publicar la página.' },
  { q: '¿Cómo funciona el pago contra entrega?', a: 'Si tu pedido se envía con pago contra entrega, pagas al recibirlo según la cobertura y las condiciones confirmadas durante el pedido.' },
  { q: '¿Cuánto tarda el envío?', a: 'El tiempo depende de tu ciudad y de la transportadora. Te confirmaremos la disponibilidad y el plazo estimado al gestionar tu pedido.' },
];

function ProductIllustration() {
  return <div className="product-art" aria-label="Ilustración decorativa de un limpiador a vapor">
    <div className="steam steam-one" /><div className="steam steam-two" /><div className="steam steam-three" />
    <div className="machine">
      <div className="machine-handle" /><div className="machine-top" />
      <div className="machine-body"><div className="machine-brand">VAPOR<span>+</span></div><div className="machine-light" /><div className="machine-grip" /></div>
      <div className="machine-neck" /><div className="machine-base"><div /></div>
      <div className="machine-cord" />
    </div>
    <div className="art-bubble bubble-one"><Sparkles size={18}/><span>Multiusos</span></div>
    <div className="art-bubble bubble-two"><BadgeCheck size={18}/><span>9 accesorios*</span></div>
    <div className="art-caption">Limpieza práctica para el hogar</div>
  </div>;
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nombre: '', telefono: '', departamento: '', ciudad: '', direccion: '' });
  const [notice, setNotice] = useState('');

  const goToOrder = () => {
    if (ORDER_URL) { window.location.href = ORDER_URL; return; }
    document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ORDER_URL) { window.location.href = ORDER_URL; return; }
    setNotice('La página visual está lista, pero falta conectar el formulario real de pedidos. Configura ORDER_URL en src/App.jsx con tu enlace de checkout COD antes de publicar.');
  };

  return <div className="site-shell">
    <div className="announcement"><Sparkles size={14}/> SOLUCIÓN PRÁCTICA PARA LA LIMPIEZA DEL HOGAR <span className="announcement-dot">•</span> PAGO CONTRA ENTREGA SEGÚN COBERTURA</div>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Inicio"><span className="brand-mark"><Droplets size={23}/></span><span>HOGAR<span className="brand-accent">VIVO</span><small>Limpieza inteligente</small></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#beneficios" onClick={() => setMenuOpen(false)}>Beneficios</a><a href="#incluye" onClick={() => setMenuOpen(false)}>¿Qué incluye?</a><a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas frecuentes</a><button className="nav-cta" onClick={goToOrder}>Pedir ahora <ArrowRight size={16}/></button>
      </nav>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> LIMPIADOR A VAPOR MULTIUSOS</div>
          <h1>Tu hogar limpio.<br/><em>Menos complicaciones.</em></h1>
          <p className="hero-lede">Una forma práctica de afrontar la suciedad del día a día con vapor y accesorios diseñados para distintas tareas del hogar.</p>
          <div className="hero-points"><span><CheckCircle2 size={17}/> Diseño multiusos</span><span><CheckCircle2 size={17}/> 9 accesorios*</span><span><CheckCircle2 size={17}/> Fácil de guardar</span></div>
          <div className="price-row"><div><span className="price-label">PRECIO ESPECIAL</span><div className="price"><span>$</span>{PRICE}<small> COP</small></div><div className="old-price">Precio de referencia: <s>$ {OLD_PRICE} COP</s></div></div><div className="offer-tag"><Sparkles size={15}/> Oferta especial</div></div>
          <button className="primary-btn hero-btn" onClick={goToOrder}>QUIERO EL MÍO <ArrowRight size={19}/></button>
          <div className="trust-row"><span><ShieldCheck size={17}/> Compra acompañada</span><span><Truck size={17}/> Envíos según cobertura</span></div>
          <p className="microcopy">*Verifica el contenido exacto de los accesorios con el proveedor.</p>
        </div>
        <div className="hero-visual"><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><div className="visual-label"><span className="label-star"><Star size={14} fill="currentColor"/></span> LIMPIEZA VERSÁTIL</div><ProductIllustration/><div className="visual-note"><Zap size={16}/> Vapor para tareas cotidianas</div></div>
      </section>

      <div className="benefit-strip"><div><ShieldCheck/><span><b>Compra con información clara</b><small>Detalles del producto antes de confirmar</small></span></div><div><Truck/><span><b>Entrega según cobertura</b><small>Consulta disponibilidad en tu ciudad</small></span></div><div><Clock3/><span><b>Pedido sencillo</b><small>Déjanos tus datos para coordinar</small></span></div></div>

      <section className="section benefits-section" id="beneficios">
        <div className="section-heading"><span className="section-kicker">LIMPIEZA SIN TANTAS VUELTAS</span><h2>Un aliado práctico para<br/><em>tu rutina en casa.</em></h2><p>Resuelve diferentes tareas con un equipo versátil. Revisa siempre las recomendaciones de uso para cada material.</p></div>
        <div className="benefit-cards">{benefits.map((b, i) => <article className="benefit-card" key={b.title}><div className="benefit-icon"><b.icon size={25}/></div><span className="card-number">0{i + 1}</span><h3>{b.title}</h3><p>{b.text}</p></article>)}</div>
      </section>

      <section className="feature-band" id="incluye"><div className="feature-visual"><ProductIllustration/></div><div className="feature-copy"><span className="section-kicker light-kicker">VERSATILIDAD EN UN SOLO EQUIPO</span><h2>Un accesorio para cada<br/><em>tipo de tarea.</em></h2><p>El kit se anuncia con 9 accesorios para adaptar el uso del limpiador a diferentes rincones y superficies compatibles.</p><ul><li><CheckCircle2/> Accesorios para tareas variadas</li><li><CheckCircle2/> Formato pensado para el hogar</li><li><CheckCircle2/> Consulta las instrucciones de uso</li></ul><button className="primary-btn light-btn" onClick={goToOrder}>PEDIR CON OFERTA <ArrowRight size={18}/></button><p className="feature-disclaimer">El contenido final del paquete puede variar según la versión del proveedor.</p></div></section>

      <section className="order-section" id="pedido"><div className="order-intro"><span className="section-kicker">HAZ TU PEDIDO</span><h2>Da el siguiente paso<br/><em>hacia una limpieza práctica.</em></h2><p>Completa tus datos para continuar. El pedido solo quedará confirmado cuando se conecte y complete el proceso real de checkout.</p><div className="order-summary"><ProductIllustration/><div><b>Limpiador a Vapor Multiusos</b><span>Kit anunciado con 9 accesorios</span><div className="summary-price">$ {PRICE} COP</div></div></div></div>
      <form className="order-form" onSubmit={handleSubmit}><div className="form-heading"><span>01</span><div><h3>Datos de entrega</h3><p>Ingresa la información para coordinar tu pedido.</p></div></div>
        <label>Nombre completo<input required value={form.nombre} onChange={e => setForm({...form, nombre:e.target.value})} placeholder="Ej. María Rodríguez" autoComplete="name"/></label>
        <label>Teléfono / WhatsApp<input required type="tel" value={form.telefono} onChange={e => setForm({...form, telefono:e.target.value})} placeholder="Ej. 300 123 4567" autoComplete="tel"/></label>
        <div className="form-grid"><label>Departamento<input required value={form.departamento} onChange={e => setForm({...form, departamento:e.target.value})} placeholder="Tu departamento" autoComplete="address-level1"/></label><label>Ciudad o municipio<input required value={form.ciudad} onChange={e => setForm({...form, ciudad:e.target.value})} placeholder="Tu ciudad" autoComplete="address-level2"/></label></div>
        <label>Dirección de entrega<input required value={form.direccion} onChange={e => setForm({...form, direccion:e.target.value})} placeholder="Calle, carrera, número y barrio" autoComplete="street-address"/></label>
        <div className="form-total"><span>Total anunciado</span><b>$ {PRICE} COP</b></div>
        <button className="primary-btn submit-btn" type="submit">CONTINUAR CON MI PEDIDO <ArrowRight size={18}/></button>
        <div className="form-trust"><ShieldCheck size={17}/><span>Revisa el precio, la cobertura y las condiciones antes de confirmar.</span></div>
        {notice && <p className="form-notice" role="status">{notice}</p>}
        <p className="privacy-note">Tus datos deben utilizarse únicamente para gestionar la solicitud y coordinar la entrega.</p>
      </form></section>

      <section className="faq-section" id="preguntas"><div className="section-heading"><span className="section-kicker">¿TIENES DUDAS?</span><h2>Preguntas <em>frecuentes.</em></h2><p>Información útil antes de realizar tu pedido.</p></div><div className="faq-list">{faqs.map((f, i) => <div className={openFaq === i ? 'faq-item faq-active' : 'faq-item'} key={f.q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{f.q}</span><ChevronDown size={19}/></button>{openFaq === i && <p>{f.a}</p>}</div>)}</div></section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Droplets size={22}/></span><span>HOGAR<span className="brand-accent">VIVO</span><small>Limpieza inteligente</small></span></a><p>Una compra informada empieza con información clara.</p><div className="footer-links"><a href="#preguntas">Preguntas frecuentes</a><a href="#pedido">Realizar pedido</a></div><small className="footer-legal">Reemplaza el nombre de marca, verifica las especificaciones y configura las condiciones reales de envío, pago, garantía y devoluciones antes de publicar.</small><span className="copyright">© {new Date().getFullYear()} HogarVivo. Todos los derechos reservados.</span></footer>
    <button className="floating-cta" onClick={goToOrder}>Pedir ahora · $ {PRICE} COP <ArrowRight size={17}/></button>
  </div>;
}

export default App;