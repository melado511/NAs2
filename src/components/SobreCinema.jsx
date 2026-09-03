import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./SobreCinema.css";

export default function SobreCinema() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.12], [30, 0]);

  const p1Opacity = useTransform(scrollYProgress, [0.08, 0.25], [0, 1]);
  const p1Y = useTransform(scrollYProgress, [0.08, 0.25], [40, 0]);

  const p2Opacity = useTransform(scrollYProgress, [0.32, 0.5], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.32, 0.5], [40, 0]);

  const mark1Opacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const mark1X = useTransform(scrollYProgress, [0.55, 0.7], [-50, 0]);
  const mark2Opacity = useTransform(scrollYProgress, [0.62, 0.78], [0, 1]);
  const mark2X = useTransform(scrollYProgress, [0.62, 0.78], [-50, 0]);
  const mark3Opacity = useTransform(scrollYProgress, [0.7, 0.86], [0, 1]);
  const mark3X = useTransform(scrollYProgress, [0.7, 0.86], [-50, 0]);

  const cupScale = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);
  const steamOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section className="cinema" id="sobre" ref={containerRef}>
      <div className="cinema__sticky">
        <div className="cinema__bg" aria-hidden="true"></div>

        <motion.svg
          className="cinema__cup"
          style={{ scale: cupScale }}
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path className="cinema__cup-body" d="M40 70 h100 v60 a50 40 0 0 1 -100 0 z" />
          <path className="cinema__cup-handle" d="M140 85 q30 0 30 25 t-30 25" />
          <ellipse className="cinema__cup-top" cx="90" cy="70" rx="50" ry="10" />
        </motion.svg>

        <motion.div className="cinema__steam" style={{ opacity: steamOpacity }} aria-hidden="true">
          <span></span><span></span><span></span>
        </motion.div>

        <div className="cinema__content">
          <motion.p className="eyebrow eyebrow--dark" style={{ opacity: titleOpacity, y: titleY }}>
            Nossa história
          </motion.p>
          <motion.h2 className="section-title" style={{ opacity: titleOpacity, y: titleY }}>
            Um café pensado para o frio da serra
          </motion.h2>

          <motion.p className="cinema__text" style={{ opacity: p1Opacity, y: p1Y }}>
            Bueno Brandão fica alto o bastante para esfriar as noites e limpar o céu. Foi olhando
            essa vista, numa madrugada de inverno com a xícara esquentando as mãos, que a Mire as
            Estrelas nasceu — um lugar pequeno, de tábuas de madeira e luz baixa, para ficar bem
            devagar.
          </motion.p>

          <motion.p className="cinema__text" style={{ opacity: p2Opacity, y: p2Y }}>
            Torramos em pequenos lotes, coamos um a um e servimos tudo em louça grossa, do tipo
            que não deixa o café esfriar rápido. Sem pressa: aqui o relógio anda mais devagar do
            que na cidade grande.
          </motion.p>

          <ul className="cinema__marks">
            <motion.li style={{ opacity: mark1Opacity, x: mark1X }}>
              <span className="sobre__num">01</span>Grãos de pequenos produtores da Mantiqueira
            </motion.li>
            <motion.li style={{ opacity: mark2Opacity, x: mark2X }}>
              <span className="sobre__num">02</span>Torra semanal, em lotes pequenos
            </motion.li>
            <motion.li style={{ opacity: mark3Opacity, x: mark3X }}>
              <span className="sobre__num">03</span>Varanda aquecida, aberta até a última estrela
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}