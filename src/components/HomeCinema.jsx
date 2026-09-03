import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import "./HomeCinema.css";

export default function HomeCinema() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.49, 0.53, 0.98, 1],
    ["#F4E7CF", "#F4E7CF", "#1A130E", "#1A130E", "#100B08"]
  );

  const cupScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.8, 1.05, 1.15]);
  const cupX = useTransform(scrollYProgress, [0, 0.18, 0.4], ["0%", "26%", "26%"]);
  const cupOpacity = useTransform(scrollYProgress, [0, 0.05, 0.78, 0.83], [1, 1, 1, 0]);
  const cupRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  const steamOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.35, 0.78, 0.83],
    [0.15, 0.35, 1, 1, 0]
  );
  const steamHeight = useTransform(scrollYProgress, [0, 0.4], [40, 90]);

  const s1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.11, 0.15], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.05, 0.11, 0.15], [30, 0, 0, -30]);

  const s2Opacity = useTransform(scrollYProgress, [0.17, 0.22, 0.28, 0.32], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.17, 0.22, 0.28, 0.32], [40, 0, 0, -40]);

  const s3Opacity = useTransform(scrollYProgress, [0.34, 0.39, 0.45, 0.49], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.34, 0.39, 0.45, 0.49], [40, 0, 0, -40]);

  const s4Opacity = useTransform(scrollYProgress, [0.51, 0.57, 0.72, 0.76], [0, 1, 1, 0]);
  const constellationDraw = useTransform(scrollYProgress, [0.59, 0.72], [300, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.8, 0.92], [0.7, 1]);
  const ctaPointer = useTransform(scrollYProgress, (v) => (v > 0.82 ? "auto" : "none"));

  return (
    <motion.section className="cinema-home" style={{ backgroundColor: bgColor }} ref={containerRef}>
      <div className="cinema-home__sticky">
        <motion.div
          className="cinema-home__stars"
          style={{ opacity: useTransform(scrollYProgress, [0.47, 0.55], [0, 1]) }}
          aria-hidden="true"
        >
          <div className="stars stars--small"></div>
          <div className="stars stars--medium"></div>
          <div className="stars stars--large"></div>
        </motion.div>

        <motion.div
          className="cinema-home__cup-wrap"
          style={{ x: cupX, opacity: cupOpacity }}
        >
          <motion.div
            className="cinema-home__steam"
            style={{ opacity: steamOpacity }}
            aria-hidden="true"
          >
            <motion.span style={{ height: steamHeight }}></motion.span>
            <motion.span style={{ height: steamHeight }}></motion.span>
            <motion.span style={{ height: steamHeight }}></motion.span>
          </motion.div>

          <motion.svg
            className="cinema-home__cup"
            style={{ scale: cupScale, rotate: cupRotate }}
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path className="cinema-home__cup-body" d="M40 70 h100 v60 a50 40 0 0 1 -100 0 z" />
            <path className="cinema-home__cup-handle" d="M140 85 q30 0 30 25 t-30 25" />
            <ellipse className="cinema-home__cup-top" cx="90" cy="70" rx="50" ry="10" />
          </motion.svg>
        </motion.div>

        {/* CENA 1 — título */}
        <motion.div className="cinema-home__scene cinema-home__scene--1" style={{ opacity: s1Opacity, y: s1Y }}>
          <div className="cinema-home__scene-inner">
            <p className="eyebrow">Bueno Brandão · Serra da Mantiqueira · MG</p>
            <h1 className="cinema-home__title">Mire as<br />Estrelas</h1>
            <p className="cinema-home__lede">Role a página. A história é melhor devagar.</p>
          </div>
        </motion.div>

        {/* CENA 2 — sobre nós */}
        <motion.div className="cinema-home__scene cinema-home__scene--2" style={{ opacity: s2Opacity, y: s2Y }}>
          <div className="cinema-home__scene-inner">
            <p className="eyebrow eyebrow--dark">Nossa história</p>
            <h2 className="section-title">Um café pensado para o frio da serra</h2>
            <p className="cinema-home__text">
              Bueno Brandão fica alto o bastante para esfriar as noites e limpar o céu. Foi
              olhando essa vista, numa madrugada de inverno com a xícara esquentando as mãos, que
              a Mire as Estrelas nasceu.
            </p>
          </div>
        </motion.div>

        {/* CENA 3 — características */}
        <motion.div className="cinema-home__scene cinema-home__scene--3" style={{ opacity: s3Opacity, y: s3Y }}>
          <div className="cinema-home__scene-inner">
            <p className="eyebrow eyebrow--dark">Do jeito que a gente faz</p>
            <ul className="cinema-home__marks">
              <li><span className="sobre__num">01</span>Grãos de pequenos produtores da Mantiqueira</li>
              <li><span className="sobre__num">02</span>Torra semanal, em lotes pequenos</li>
              <li><span className="sobre__num">03</span>Varanda aquecida, aberta até a última estrela</li>
            </ul>
          </div>
        </motion.div>

        {/* CENA 4 — noites estreladas */}
        <motion.div className="cinema-home__scene cinema-home__scene--4" style={{ opacity: s4Opacity }}>
          <div className="cinema-home__scene-inner">
            <p className="eyebrow">Nosso nome, explicado</p>
            <h2 className="section-title section-title--light">Noites Estreladas</h2>
            <p className="cinema-home__text cinema-home__text--light">
              Longe das luzes da cidade, o céu de Bueno Brandão abre inteiro. É esse gesto — mirar
              as estrelas — que dá nome à casa.
            </p>
            <svg className="constellation" viewBox="0 0 360 200" role="img" aria-label="Constelação em forma de xícara de café">
              <motion.polyline
                className="constellation__line"
                points="70,50 110,20 210,20 260,55 250,140 100,140 70,50"
                style={{ strokeDashoffset: constellationDraw }}
                strokeDasharray="300"
              />
              <g className="constellation__stars">
                <circle cx="70" cy="50" r="3.4" /><circle cx="110" cy="20" r="2.6" />
                <circle cx="210" cy="20" r="2.6" /><circle cx="260" cy="55" r="3.4" />
                <circle cx="250" cy="140" r="2.6" /><circle cx="100" cy="140" r="2.6" />
              </g>
            </svg>
          </div>
        </motion.div>

        {/* CENA FINAL — caixa clicável */}
        <motion.div
          className="cinema-home__cta"
          style={{ opacity: ctaOpacity, scale: ctaScale, pointerEvents: ctaPointer }}
        >
          <Link to="/cardapio" className="cinema-home__cta-box">
            <span className="cinema-home__cta-eyebrow">Pronto pra ver mais?</span>
            <span className="cinema-home__cta-title">Ver Cardápio</span>
            <span className="cinema-home__cta-arrow">→</span>
          </Link>
        </motion.div>

        <div className="cinema-home__scroll-hint" aria-hidden="true">
          <span></span>
        </div>
      </div>
    </motion.section>
  );
}