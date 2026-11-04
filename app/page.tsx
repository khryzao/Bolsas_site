"use client";
import { useState } from "react";
const categories = [
  { title: "Bolsas", detail: "O detalhe que transforma", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85" },
  { title: "Vestidos", detail: "Leveza para todos os momentos", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85" },
  { title: "Acessórios", detail: "Seu estilo em cada detalhe", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85" }
];
export default function Home() {
  const [menu, setMenu] = useState(false);
  const whatsapp = "https://wa.me/5516992863119?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20novidades%20da%20Confiante%20e%20Graciosa!";
  return <main>
    <div className="announcement">ELEGÂNCIA QUE ACOMPANHA VOCÊ</div>
    <header className="site-header">
      <a className="brand" href="#"><span className="brand-name">CONFIANTE <i>&</i> GRACIOSA</span><span className="brand-sub">MODA · ACESSÓRIOS · VOCÊ</span></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Abrir menu">☰</button>
      <nav className={menu ? "nav nav-open" : "nav"}><a href="#colecoes" onClick={() => setMenu(false)}>Coleções</a><a href="#sobre" onClick={() => setMenu(false)}>Nossa essência</a><a href="#contato" onClick={() => setMenu(false)}>Contato</a></nav>
      <a className="header-link" href={whatsapp} target="_blank" rel="noreferrer">Fale conosco ↗</a>
    </header>
    <section className="hero"><div className="hero-overlay"/><div className="hero-copy"><p className="eyebrow">SEU ESTILO, SUA PRESENÇA</p><h1>Vista a sua<br/><em>melhor versão.</em></h1><p>Peças escolhidas para valorizar quem você é. Descubra uma seleção feita com carinho, personalidade e elegância.</p><a className="gold-button" href="#colecoes">Descubra nossas escolhas <span>→</span></a></div><div className="hero-note">ELEGÂNCIA EM CADA DETALHE</div></section>
    <section className="intro" id="sobre"><p className="eyebrow">CONFIANTE E GRACIOSA</p><h2>Beleza é se sentir bem<br/><em>com quem você é.</em></h2><p>A moda vai muito além de vestir. É expressão, confiança e aquele toque especial que faz você se reconhecer no espelho.</p></section>
    <section className="collections" id="colecoes"><div className="section-head"><div><p className="eyebrow">ESCOLHAS COM PERSONALIDADE</p><h2>Encontre o seu <em>estilo.</em></h2></div><p>Inspire-se e encontre detalhes que fazem toda a diferença.</p></div><div className="category-grid">{categories.map((item, index) => <a className="category" href={whatsapp} target="_blank" rel="noreferrer" key={item.title}><div className="category-image" style={{backgroundImage: "url(" + item.image + ")"}}><span>0{index + 1}</span><b>↗</b></div><h3>{item.title}</h3><p>{item.detail}</p></a>)}</div></section>
    <section className="quote"><h2>Não é apenas sobre o que você veste.<br/><em>É sobre como você se sente.</em></h2><span>CONFIANTE E GRACIOSA</span></section>
    <section className="contact" id="contato"><div><p className="eyebrow">VAMOS CONVERSAR?</p><h2>Seu próximo favorito<br/>está te esperando.</h2><p>Fale com a Carla e conheça as novidades ou encontre aquela peça especial.</p></div><a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp ↗</a></section>
    <footer><span className="brand-name">CONFIANTE <i>&</i> GRACIOSA</span><p>Atendimento com carinho · Carla Graziela</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp +55 16 99286-3119</a><small>© {new Date().getFullYear()} Confiante e Graciosa. Todos os direitos reservados.</small></footer>
  </main>;
}