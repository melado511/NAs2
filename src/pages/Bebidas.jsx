import "./Bebidas.css";

const grupos = [
  {
    titulo: "Cafés especiais",
    itens: [
      { nome: "Grão da Serra", desc: "espresso simples", preco: "7" },
      { nome: "Espresso duplo", desc: "dose dupla, mais encorpado", preco: "9" },
      { nome: "Mire as Estrelas", desc: "blend da casa, notas de frutas vermelhas", preco: "14" },
      { nome: "Coado na hora", desc: "método V60", preco: "10" },
      { nome: "Prensa francesa", desc: "extração lenta, corpo encorpado", preco: "11" },
      { nome: "Cortado", desc: "espresso com um toque de leite", preco: "9" },
    ],
  },
  {
    titulo: "Cafés com leite",
    itens: [
      { nome: "Cappuccino da Serra", desc: "leite vaporizado e canela", preco: "12" },
      { nome: "Latte de outono", desc: "leite vaporizado, café e canela", preco: "13" },
      { nome: "Mocha da montanha", desc: "espresso, chocolate meio amargo e leite", preco: "15" },
      { nome: "Macchiato", desc: "espresso com espuma de leite", preco: "10" },
      { nome: "Latte de baunilha", desc: "leite vaporizado com xarope de baunilha", preco: "14" },
      { nome: "Capuccino de doce de leite", desc: null, preco: "14" },
    ],
  },
  {
    titulo: "Bebidas geladas",
    itens: [
      { nome: "Café gelado", desc: "extração a frio, 12h", preco: "12" },
      { nome: "Frappé da serra", desc: "café gelado batido com leite e gelo", preco: "16" },
      { nome: "Latte gelado", desc: "espresso, leite e gelo", preco: "13" },
      { nome: "Chá gelado de frutas vermelhas", desc: "servido com folhas de hortelã", preco: "11" },
      { nome: "Limonada da roça", desc: "limão siciliano e xarope caseiro", preco: "10" },
    ],
  },
  {
    titulo: "Chás e infusões",
    itens: [
      { nome: "Chá da montanha", desc: "ervas locais", preco: "9" },
      { nome: "Chá de camomila", desc: "para relaxar depois do jantar", preco: "8" },
      { nome: "Chá verde", desc: "com folhas de hortelã fresca", preco: "9" },
      { nome: "Chá de frutas vermelhas", desc: "quente, com canela", preco: "9" },
      { nome: "Erva-doce com gengibre", desc: "receita da casa", preco: "8" },
    ],
  },
  {
    titulo: "Para esquentar",
    itens: [
      { nome: "Chocolate quente", desc: "com flor de sal", preco: "13" },
      { nome: "Vinho quente", desc: "canela, cravo e laranja", preco: "16" },
      { nome: "Leite com café", desc: "bem quente, do jeito da roça", preco: "8" },
      { nome: "Quentão sem álcool", desc: "gengibre, canela e cravo", preco: "10" },
      { nome: "Chocolate belga", desc: "mais encorpado, com raspas de cacau", preco: "16" },
    ],
  },
  {
    titulo: "Especiais da casa",
    itens: [
      { nome: "Café da Serra com licor de café", desc: "dose adulta, sob consulta", preco: "18" },
      { nome: "Affogato", desc: "sorvete de creme com espresso quente por cima", preco: "17" },
      { nome: "Cappuccino de outono", desc: "com calda de maçã e canela", preco: "15" },
      { nome: "Café aromatizado do mês", desc: "pergunte ao barista sobre a receita da estação", preco: "14" },
    ],
    nota: "Preços sujeitos a alteração sem aviso prévio. Consulte disponibilidade sazonal.",
  },
];

export default function Bebidas() {
  return (
    <>
      <section className="page-header">
        <div className="page-header__sky" aria-hidden="true">
          <div className="stars stars--small"></div>
          <div className="stars stars--medium"></div>
        </div>
        <div className="page-header__inner">
          <p className="breadcrumb"><a href="/">Início</a> · Bebidas</p>
          <h1 className="page-header__title">Bebidas</h1>
          <p className="page-header__lede">
            Café coado devagar, opções geladas e coisas quentes pra esquentar as noites frias da serra.
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