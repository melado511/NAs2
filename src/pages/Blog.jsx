import "./Blog.css";

const posts = [
  {
    titulo: "Por que o céu de Bueno Brandão é tão limpo",
    data: "12 de julho de 2026",
    resumo:
      "A altitude e a distância das luzes da cidade grande fazem da nossa varanda um dos melhores pontos da região pra observar estrelas. Contamos o porquê.",
  },
  {
    titulo: "Da torra à xícara: como cuidamos do nosso café",
    data: "28 de junho de 2026",
    resumo:
      "Torramos toda semana, em lotes pequenos, pra garantir que o café chegue fresco na sua mesa. Veja como é o processo, do grão ao coado.",
  },
  {
    titulo: "Receitas de inverno: o vinho quente da casa",
    data: "10 de junho de 2026",
    resumo:
      "Canela, cravo, laranja e um pouco de paciência. A receita que mais pedem nas noites mais frias do ano por aqui.",
  },
];

export default function Blog() {
  return (
    <>
      <section className="page-header">
        <div className="page-header__sky" aria-hidden="true">
          <div className="stars stars--small"></div>
          <div className="stars stars--medium"></div>
        </div>
        <div className="page-header__inner">
          <p className="breadcrumb"><a href="/">Início</a> · Blog</p>
          <h1 className="page-header__title">Blog</h1>
          <p className="page-header__lede">
            Histórias sobre café, montanha e céu limpo, direto da nossa varanda.
          </p>
        </div>
      </section>

      <section className="blog">
        <div className="blog__inner reveal">
          {posts.map((post) => (
            <article className="blog__card" key={post.titulo}>
              <p className="blog__date">{post.data}</p>
              <h2 className="blog__title">{post.titulo}</h2>
              <p className="blog__excerpt">{post.resumo}</p>
              <span className="blog__link">Ler mais →</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}