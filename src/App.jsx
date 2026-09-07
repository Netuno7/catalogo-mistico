import React, { useState } from "react";
import "./App.css";
import { CONFIG_SERVICOS, CATEGORIAS_SERVICOS, LISTA_SERVICOS } from "./data/servicos";

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  // Número para onde a mensagem de solicitação será enviada
  const TELEFONE_WHATSAPP = "5522998028841";

  const servicosFiltrados = categoriaAtiva === "Todas" 
    ? LISTA_SERVICOS 
    : LISTA_SERVICOS?.filter(s => s.categoria === categoriaAtiva);

  const handleSolicitar = (nomeServico) => {
    const mensagem = encodeURIComponent(`Olá, Sacerdotisa Vênus. Gostaria de informações sobre o atendimento: ${nomeServico}.`);
    window.open(`https://wa.me/${TELEFONE_WHATSAPP}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-badge">Alta Magia & Consultoria Espiritual</div>
        <h1>🌹 Sacerdotisa Vênus 🌹</h1>
        <div className="subtitle">✦ Laroyê Maria Padilha ✦</div>
        <p>Atendimentos com sigilo absoluto, respeito e direcionamento de alta força espiritual.</p>
      </header>

      {/* Categorias */}
      <div className="categories">
        <button 
          className={`category-btn ${categoriaAtiva === "Todas" ? "active" : ""}`}
          onClick={() => setCategoriaAtiva("Todas")}
        >
          Todas
        </button>
        {CATEGORIAS_SERVICOS?.map((cat, index) => (
          <button
            key={index}
            className={`category-btn ${categoriaAtiva === cat ? "active" : ""}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards de Serviços */}
      <div className="services-grid">
        {servicosFiltrados?.map((servico) => (
          <div className="card" key={servico.id}>
            <div className="card-image-wrapper">
              <img src={servico.imagem} alt={servico.nome} className="card-image" />
            </div>
            <div className="card-content">
              <h3>{servico.nome}</h3>
              <p>{servico.descricao}</p>
            </div>
            <div className="card-footer">
              <span className="price">
                {CONFIG_SERVICOS?.MOEDA || "R$"} {servico.preco}
              </span>
              <button 
                className="btn-solicitar"
                onClick={() => handleSolicitar(servico.nome)}
              >
                Solicitar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}