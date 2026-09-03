import "./Contato.css";

export default function Contato() {
  return (
    <>
      <section className="page-header">
        <div className="page-header__sky" aria-hidden="true">
          <div className="stars stars--small"></div>
          <div className="stars stars--medium"></div>
        </div>
        <div className="page-header__inner">
          <p className="breadcrumb"><a href="/">Início</a> · Contato</p>
          <h1 className="page-header__title">Contato</h1>
          <p className="page-header__lede">Combine sua visita ou fale com a gente.</p>
        </div>
      </section>

      <section className="visitar">
        <div className="visitar__inner reveal">
          <div className="visitar__grid">
            <div className="visitar__card">
              <h3>Endereço</h3>
              <p>Rua das Estrelas, 123 — Centro<br />Bueno Brandão — MG, 37547-000</p>
              <h3>Contato</h3>
              <p>(35) 9 9999-0000<br />@mireasestrelas.cafe</p>
            </div>

            <div className="visitar__card">
              <h3>Horário</h3>
              <table className="hours">
                <tbody>
                  <tr><td>Terça a sexta</td><td>8h30 — 19h</td></tr>
                  <tr><td>Sábado e domingo</td><td>8h — 20h</td></tr>
                  <tr><td>Segunda</td><td>Fechado</td></tr>
                </tbody>
              </table>
              <p className="visitar__note">Em noites de céu limpo, a varanda fica aberta até mais tarde.</p>
            </div>

            <div className="visitar__map">
              <iframe
                title="Mapa até Bueno Brandão, MG"
                src="https://www.google.com/maps?q=Bueno+Brand%C3%A3o,+MG&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}