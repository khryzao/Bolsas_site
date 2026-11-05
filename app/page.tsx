"use client";
import { useState } from "react";

const clothes = [
  "Roupa 03.jpeg",
  "Roupa 04.jpeg",
  "Roupa 05.jpeg",
  "Roupa 06.jpeg",
  "Roupa 07.jpeg",
  "Roupa 08.jpeg",
  "Roupa 09.jpeg",
  "Roupa 10.jpeg",
  "Roupa 11.jpeg",
  "Roupa 12.jpeg",
  "Roupa 13.jpeg",
  "Roupa 14.jpeg",
  "Roupa 16.jpeg",
  "Roupa 17.jpeg",
  "Roupa 18.jpeg",
  "Roupa 19.jpeg",
  "Roupa 20.jpeg",
  "Roupa 21.jpeg",
  "Roupa 22.jpeg",
  "Roupa 23.jpeg",
  "Roupa 24.jpeg",
  "Roupa 25.jpeg",
  "Roupa 26.jpeg",
  "Roupa 27.jpeg",
  "Roupa01.jpeg",
  "Roupa02.jpeg",
  "WhatsApp Image 2026-11-04 at 19.50.57.jpeg",
  "WhatsApp Image 2026-11-04 at 19.53.54.jpeg"
];

const categories = [
  { title: "Bolsas", detail: "O detalhe que transforma", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85", href: "#contato" },
  { title: "Roupas", detail: "Peças para expressar seu estilo", image: "/Roupa%2003.jpeg", href: "#roupas" },
  { title: "Acessórios", detail: "Seu estilo em cada detalhe", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85", href: "#contato" }
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const whatsapp = "https://wa.me/5516992863119?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20novidades%20da%20Confiante%20e%20Graciosa!";
  const clothingWhatsapp = (number: number) => "https://wa.me/5516992863119?text=" + encodeURIComponent("Olá, Carla! Tenho interesse na peça de roupa " + String(number).padStart(2, "0") + " do site. Ela ainda está disponível?");
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
    <section className="collections" id="colecoes">
      <div className="section-head"><div><p className="eyebrow">ESCOLHAS COM PERSONALIDADE</p><h2>Encontre o seu <em>estilo.</em></h2></div><p>Inspire-se e encontre detalhes que fazem toda a diferença.</p></div>
      <div className="category-grid">{categories.map((item, index) => <a className="category" href={item.href} target={item.href === "#contato" ? "_self" : undefined} key={item.title}><div className="category-image" style={{backgroundImage: "url(" + item.image + ")"}}><span>0{index + 1}</span><b>↗</b></div><h3>{item.title}</h3><p>{item.detail}</p></a>)}</div>
    </section>
    <section className="clothing-section" id="roupas">
      <div className="section-head"><div><p className="eyebrow">NOVIDADES DA LOJA</p><h2>Roupas que combinam<br/><em>com você.</em></h2></div><p>Confira as peças disponíveis e fale com a Carla para consultar tamanhos e valores.</p></div>
      <div className="clothing-grid">{clothes.map((photo, index) => <article className="clothing-card" key={photo}>
        <a className="clothing-photo" href={photo.split(" ").map((part) => part).join("%20")} target="_blank" rel="noreferrer" aria-label={"Ampliar foto da peça " + (index + 1)}><img src={"/" + photo.split(" ").join("%20")} alt={"Roupa " + String(index + 1).padStart(2, "0") + " da Confiante e Graciosa"} loading={index < 6 ? "eager" : "lazy"}/></a>
        <div className="clothing-info"><div><h3>Peça {String(index + 1).padStart(2, "0")}</h3><p>Consulte disponibilidade</p></div><a href={clothingWhatsapp(index + 1)} target="_blank" rel="noreferrer" aria-label={"Consultar peça " + (index + 1)} title="Consultar no WhatsApp">↗</a></div>
      </article>)}</div>
    </section>
    <section className="quote"><h2>Não é apenas sobre o que você veste.<br/><em>É sobre como você se sente.</em></h2><span>CONFIANTE E GRACIOSA</span></section>
    <section className="contact" id="contato"><div><p className="eyebrow">VAMOS CONVERSAR?</p><h2>Seu próximo favorito<br/>está te esperando.</h2><p>Fale com a Carla e conheça as novidades ou encontre aquela peça especial.</p></div><a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp ↗</a></section>
    <footer><span className="brand-name">CONFIANTE <i>&</i> GRACIOSA</span><p>Atendimento com carinho · Carla Graziela</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp +55 16 99286-3119</a><small>© {2026} Confiante e Graciosa. Todos os direitos reservados.</small></footer>
  </main>;
}
