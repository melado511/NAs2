import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Home from "./pages/Home.jsx";
import Bebidas from "./pages/Bebidas.jsx";
import Cardapio from "./pages/Cardapio.jsx";
import Blog from "./pages/Blog.jsx";
import Contato from "./pages/Contato.jsx";

function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  const linkClass = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <header className="nav" id="topo">
      <div className="nav__inner">
        <Link to="/" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">✦</span>
          Mire as Estrelas
        </Link>
        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <Link to="/" className={linkClass("/")}>Início</Link>
          <Link to="/bebidas" className={linkClass("/bebidas")}>Bebidas</Link>
          <Link to="/cardapio" className={linkClass("/cardapio")}>Cardápio</Link>
          <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
          <Link to="/contato" className={linkClass("/contato")}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand"><span aria-hidden="true">✦</span> Mire as Estrelas</p>
        <p className="footer__tag">Bueno Brandão, MG — café de montanha, feito devagar.</p>
        <p className="footer__copy">© 2026 Mire as Estrelas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const location = useLocation();

  // Scroll suave em toda a página (resolve o efeito "tijolo")
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Revela elementos ".reveal" ao entrar na viewport
  useEffect(() => {
    window.scrollTo(0, 0);
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      reveals.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }
  }, [location]);

  return (
    <>
      <div className="grain"></div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}