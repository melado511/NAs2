import "./Cardapio.css";

const grupos = [
  {
    titulo: "Salgados",
    itens: [
      { nome: "Pão de queijo", desc: "receita da vó", preco: "8" },
      { nome: "Pão caseiro com manteiga da roça", desc: null, preco: "9" },
      { nome: "Coxinha de frango caipira", desc: null, preco: "11" },
      { nome: "Torta salgada da serra", desc: "recheio de frango com milho", preco: "13" },
      { nome: "Empadão de queijo e ervas", desc: null, preco: "12" },
      { nome: "Sanduíche de queijo quente", desc: "pão caseiro e queijo minas", preco: "14" },
    ],
  },
  {
    titulo: "Bolos e tortas",
    itens: [
      { nome: "Bolo de fubá", desc: "com café raspado", preco: "12" },
      { nome: "Torta de maçã da serra", desc: null, preco: "14" },
      { nome: "Bolo de cenoura com chocolate", desc: null, preco: "12" },
      { nome: "Torta de limão", desc: "cobertura de merengue", preco: "13" },
      { nome: "Bolo de fubá com goiabada", desc: null, preco: "13" },
    ],
  },
  {
    titulo: "Doces",
    itens: [
      { nome: "Broa de milho", desc: "quentinha", preco: "7" },
      { nome: "Rocambole de goiabada", desc: null, preco: "10" },
      { nome: "Brigadeiro da roça", desc: "feito com leite fresco", preco: "5" },
      { nome: "Cookie de café e chocolate", desc: null, preco: "8" },
      { nome: "Pudim de leite", desc: "receita da vó", preco: "11" },
      { nome: "Doce de leite com nozes", desc: null, preco: "9" },
    ],
  },
  {
    titulo: "Combos",
    itens: [
      { nome: "Combo Manhã na Serra", desc: "café coado + pão de queijo", preco: "16" },
      { nome: "Combo Tarde Quente", desc: "cappuccino + fatia de bolo", preco: "20" },
      { nome: "Combo Noite Estrelada", desc: "vinho quente + torta salgada", preco: "26" },
    ],
    nota: "Combos disponíveis somente para consumo no local.",
  },
  {
    titulo: "Para levar",
    itens: [
      { nome: "Café em grãos", desc: "torra da casa, 250g", preco: "32" },
      { nome: "Café moído", desc: "torra da casa, 250g", preco: "32" },
      { nome: "Geleia de frutas da serra", desc: "vidro 200g", preco: "22" },
      { nome: "Mel da Mantiqueira", desc: "vidro 300g", preco: "24" },
      { nome: "Broa de milho embalada", desc: "cx com 4 unidades", preco: "20" },
    ],
    nota: "Preços sujeitos a alteração sem aviso prévio. Consulte disponibilidade sazonal.",
  },
];

export default function Cardapio() {
  return (
    <>
      <section className="page-header">
        <div className="page-header__sky" aria-hidden="true">
          <div className="stars stars--small"></div>
          <div className="stars stars--medium"></div>
        </div>
        <div className="page-header__inner">
          <p className="breadcrumb"><a href="/">Início</a> · Cardápio</p>
          <h1 className="page-header__title">Cardápio</h1>
          <p className="page-header__lede">
            Salgados, doces de forno feitos em casa e opções pra levar um pouco da serra com você.
          </p>
        </div>
      </section>

      <section className="menu-page">
        <div className="menu-page__inner">
          <div className="menu-page__groups-grid">
            {grupos.map((grupo) => (
              <div className="menu-page__group reveal" key={grupo.titulo}>
                <h2 className="menu-page__group-title">{grupo.titulo}</h2>
                <ul className="menu-list">
                  {grupo.itens.map((item) => (
                    <li key={item.nome}>
                      <span>
                        {item.nome}
                        {item.desc && <em>— {item.desc}</em>}
                      </span>
                      <span className="menu-dots"></span>
                      <span className="menu-price">R$ {item.preco}</span>
                    </li>
                  ))}
                </ul>
                {grupo.nota && <p className="menu-note">{grupo.nota}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}