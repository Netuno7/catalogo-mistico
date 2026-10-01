import React, { useState, useMemo } from "react";
import "./App.css";
import {
  CONFIG_SISTEMA,
  CATEGORIAS_SERVICOS,
  SERVICOS,
  DEPOIMENTOS,
  PERGUNTAS_FREQUENTES
} from "./data/servicos";

// Componente do Banner de Destaque / Promoção
const DestaqueInicial = () => (
  <section className="destaque-container">
    {CONFIG_SISTEMA.IMAGEM_DESTAQUE && (
      <div className="destaque-banner-wrapper">
        <div className="promo-badge">
          <span>✦ OFERTA ESPECIAL ✦</span>
        </div>
        <div className="destaque-banner">
          <img 
            src={CONFIG_SISTEMA.IMAGEM_DESTAQUE} 
            alt="Destaque Sacerdotisa Vênus" 
            className="destaque-img" 
          />
          <div className="destaque-overlay-glow"></div>
        </div>
        <div className="destaque-decor-line">
          <span className="decor-diamond">◆</span>
        </div>
      </div>
    )}
  </section>
);

// Ícones SVG para as Redes Sociais
const IconInstagram = () => (
  <svg className="social-icon" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconYoutube = () => (
  <svg className="social-icon" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const IconTiktok = () => (
  <svg className="social-icon" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.52-1.35 2.52-.03 1.05.47 2.1 1.34 2.66.97.64 2.26.68 3.24.13.88-.48 1.43-1.42 1.47-2.42.04-4.8.02-9.61.03-14.42z"/>
  </svg>
);

const IconFacebook = () => (
  <svg className="social-icon" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
  </svg>
);

const getSocialIcon = (nome) => {
  switch (nome.toLowerCase()) {
    case "instagram": return <IconInstagram />;
    case "youtube": return <IconYoutube />;
    case "tiktok": return <IconTiktok />;
    case "facebook": return <IconFacebook />;
    default: return null;
  }
};

// Topo
const HeroHeader = () => (
  <header className="hero-header">
    <div 
      className="hero-bg-image" 
      style={{ backgroundImage: `url('/padilha.jpg')` }}
    ></div>
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <div className="badge-gold">{CONFIG_SISTEMA.NOME_SACERDOTISA}</div>
      <h1 className="hero-title">Alta Magia & Consultoria Espiritual</h1>
      <p className="hero-subtitle">{CONFIG_SISTEMA.SUBTITULO}</p>
    </div>
  </header>
);

// Barra de Confiança
const TrustBar = () => (
  <div className="trust-bar">
    <div className="trust-item">
      <span>100% Sigilo Absoluto</span>
    </div>
    <div className="trust-item">
      <span>Alta Força Espiritual</span>
    </div>
    <div className="trust-item">
      <span>Atendimento Personalizado</span>
    </div>
  </div>
);

// Redes Sociais
const RedesSociaisSection = () => (
  <section className="social-media-section">
    <h3 className="social-title">Redes Sociais Oficiais</h3>
    <div className="social-grid">
      {CONFIG_SISTEMA.REDES_SOCIAIS?.map((rede, idx) => (
        <a
          key={idx}
          href={rede.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-card ${rede.classe}`}
        >
          {getSocialIcon(rede.nome)}
          <span>{rede.nome} ({rede.handle})</span>
        </a>
      ))}
    </div>
  </section>
);

// Barra de Pesquisa
const BarraBusca = ({ termoBusca, setTermoBusca }) => (
  <section className="filter-section">
    <div className="search-box-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="O que você precisa hoje? Digite aqui..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      {termoBusca && (
        <button className="clear-search" onClick={() => setTermoBusca("")}>
          ✕
        </button>
      )}
    </div>
  </section>
);

// Card de Serviço
const ServiceCard = ({ servico, varianteSelecionada, onSelectVariante, onSolicitar }) => {
  const isVariante = servico.temVariantes;
  const idxAtual = varianteSelecionada || 0;
  const precoExibido = isVariante
    ? servico.variantes[idxAtual]?.preco
    : servico.preco;

  return (
    <div className={`card-item ${servico.destaque ? "card-highlight" : ""}`}>
      {servico.tag && <div className="card-tag">{servico.tag}</div>}

      {servico.imagem && (
        <div className="card-media">
          <img src={servico.imagem} alt={servico.nome} className="card-img" />
          <div className="card-media-overlay"></div>
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{servico.nome}</h3>
        <p className="card-description">{servico.descricao}</p>

        {isVariante && servico.variantes && (
          <div className="variant-box">
            <label className="variant-label">Escolha a opção / perguntas:</label>
            <select
              className="variant-select"
              value={idxAtual}
              onChange={(e) => onSelectVariante(servico.id, Number(e.target.value))}
            >
              {servico.variantes.map((v, i) => (
                <option key={v.idVar || i} value={i}>
                  {v.label} — {CONFIG_SISTEMA.MOEDA} {v.preco}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="card-footer">
        <div className="price-container">
          <span className="price-symbol">{CONFIG_SISTEMA.MOEDA}</span>
          <span className="price-amount">{precoExibido}</span>
        </div>
        <button
          className="btn-whatsapp"
          onClick={() => onSolicitar(servico, idxAtual)}
        >
          <span>Solicitar Atendimento</span>
        </button>
      </div>
    </div>
  );
};

// Depoimentos
const DepoimentosSection = () => (
  <section className="depoimentos-section">
    <h2 className="section-title">Depoimentos & Relatos</h2>
    <p className="section-subtitle">Confira o retorno e os resultados de quem já realizou uma consulta ou ritual</p>
    <div className="depoimentos-grid">
      {DEPOIMENTOS?.map((dep) => (
        <div key={dep.id} className="depoimento-card">
          <img src={dep.imagem} alt={dep.alt || "Depoimento"} className="depoimento-img" loading="lazy" />
        </div>
      ))}
    </div>
  </section>
);

// Dúvidas Frequentes
const FAQSection = () => {
  const [aberta, setAberta] = useState(null);

  if (!PERGUNTAS_FREQUENTES || PERGUNTAS_FREQUENTES.length === 0) return null;

  return (
    <section className="faq-section">
      <h2 className="section-title">Dúvidas Frequentes</h2>
      <p className="section-subtitle">Tudo o que você precisa saber antes de solicitar o seu atendimento</p>
      <div className="faq-container">
        {PERGUNTAS_FREQUENTES.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${aberta === index ? "faq-open" : ""}`}
            onClick={() => setAberta(aberta === index ? null : index)}
          >
            <div className="faq-question">
              <h4>{faq.pergunta}</h4>
              <span className="faq-icon">{aberta === index ? "−" : "+"}</span>
            </div>
            {aberta === index && <div className="faq-answer"><p>{faq.resposta}</p></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

// Modal WhatsApp
const ModalAtendimento = ({ modalItem, onClose, onConfirm }) => {
  if (!modalItem) return null;

  const { servico, idx } = modalItem;
  const isVar = servico.temVariantes;
  const opc = isVar && servico.variantes ? servico.variantes[idx] : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3 className="modal-title">Confirmar Solicitação</h3>
        <p className="modal-desc">Você será redirecionado(a) para o WhatsApp para agendar:</p>
        <div className="modal-summary">
          <strong>{servico.nome}</strong>
          {isVar && opc && <p>Opção: {opc.label}</p>}
          <span className="modal-price">Valor: {CONFIG_SISTEMA.MOEDA} {isVar && opc ? opc.preco : servico.preco}</span>
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button className="btn-confirm" onClick={() => onConfirm(servico, idx)}>Ir para o WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("servicos");
  const [termoBusca, setTermoBusca] = useState("");
  const [variantesState, setVariantesState] = useState({});
  const [modalItem, setModalItem] = useState(null);

  const handleSelectVariante = (servicoId, index) => {
    setVariantesState((prev) => ({ ...prev, [servicoId]: index }));
  };

  const listaServicos = SERVICOS || [];

  const servicosFiltrados = useMemo(() => {
    return listaServicos.filter((servico) =>
      servico.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      servico.descricao.toLowerCase().includes(termoBusca.toLowerCase())
    );
  }, [termoBusca, listaServicos]);

  const dispararWhatsApp = (servico, indexVar) => {
    let detalhe = servico.nome;
    if (servico.temVariantes && servico.variantes) {
      const v = servico.variantes[indexVar || 0];
      detalhe = `${servico.nome} — [${v?.label}] (Valor: ${CONFIG_SISTEMA.MOEDA} ${v?.preco})`;
    } else {
      detalhe = `${servico.nome} (Valor: ${CONFIG_SISTEMA.MOEDA} ${servico.preco})`;
    }

    const mensagem = encodeURIComponent(
      `Olá, ${CONFIG_SISTEMA.NOME_SACERDOTISA}! Gostaria de agendar/solicitar informações sobre: ${detalhe}.`
    );

    window.open(`https://wa.me/${CONFIG_SISTEMA.WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
    setModalItem(null);
  };

  return (
    <div className="app-wrapper">
      <HeroHeader />
      <TrustBar />

      {/* Banner de Destaque Místico Decorado */}
      <DestaqueInicial />

      {/* Navegação de Abas */}
      <nav className="nav-tabs-container">
        <button
          className={`nav-tab ${abaAtiva === "servicos" ? "active" : ""}`}
          onClick={() => setAbaAtiva("servicos")}
        >
          Serviços
        </button>
        <button
          className={`nav-tab ${abaAtiva === "depoimentos" ? "active" : ""}`}
          onClick={() => setAbaAtiva("depoimentos")}
        >
          Depoimentos
        </button>
      </nav>

      <main className="main-content">
        {abaAtiva === "servicos" && (
          <>
            <BarraBusca termoBusca={termoBusca} setTermoBusca={setTermoBusca} />

            <section className="grid-section">
              {servicosFiltrados.length === 0 ? (
                <div className="empty-results">
                  <h3>Nenhum atendimento encontrado</h3>
                  <p>Tente buscar por outro termo.</p>
                  <button className="btn-reset" onClick={() => setTermoBusca("")}>
                    Limpar Busca
                  </button>
                </div>
              ) : (
                <div className="services-grid">
                  {servicosFiltrados.map((servico) => (
                    <ServiceCard
                      key={servico.id}
                      servico={servico}
                      varianteSelecionada={variantesState[servico.id]}
                      onSelectVariante={handleSelectVariante}
                      onSolicitar={(s, idx) => setModalItem({ servico: s, idx })}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {abaAtiva === "depoimentos" && (
          <DepoimentosSection />
        )}

        <RedesSociaisSection />
        <FAQSection />
      </main>

      <footer className="footer-site">
        <div className="footer-content">
          <h3>{CONFIG_SISTEMA.NOME_SACERDOTISA}</h3>
          <p>{CONFIG_SISTEMA.TEXTO_RODAPE}</p>
          <p className="copyright">© {new Date().getFullYear()} {CONFIG_SISTEMA.NOME_SACERDOTISA}. Todos os direitos reservados.</p>
        </div>
      </footer>

      <ModalAtendimento
        modalItem={modalItem}
        onClose={() => setModalItem(null)}
        onConfirm={dispararWhatsApp}
      />
    </div>
  );
}
