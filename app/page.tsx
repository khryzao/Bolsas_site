"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";

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

const bags = [
  "Bolsa 01.jpeg",
  "Bolsa 02.jpeg",
  "Bolsa 03.jpeg",
  "Bolsa 04.jpeg",
  "Bolsa 05.jpeg",
  "Bolsa 07.jpeg",
  "Bolsa 08.jpeg",
  "Bolsa 09.jpeg",
  "Bolsa 10.jpeg",
  "Bolsa 11.jpeg",
  "Bolsa 12.jpeg",\n  " Bolsa 09.jpeg"
];\n\nconst categories = [
  { title: "Bolsas", detail: "O detalhe que transforma", image: "/Bolsa%2001.jpeg", href: "#bolsas" },
  { title: "Roupas", detail: "Peças para expressar seu estilo", image: "/Roupa%2003.jpeg", href: "#roupas" },
  { title: "Acessórios", detail: "Seu estilo em cada detalhe", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85", href: "#contato" }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

export default function Home() {
  const [menu, setMenu] = useState(false);
  const reduceMotion = useReducedMotion();
  const whatsapp = "https://wa.me/5516992863119?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20novidades%20da%20Confiante%20e%20Graciosa!";
  const bagWhatsapp = (number: number, name: string) => "https://wa.me/5516992863119?text=" + encodeURIComponent("Olá, Carla! Tenho interesse na bolsa " + name + ". Ela ainda está disponível?");\n  const clothingWhatsapp = (number: number) => "https://wa.me/5516992863119?text=" + encodeURIComponent("Olá, Carla! Tenho interesse na peça de roupa " + String(number).padStart(2, "0") + " do site. Ela ainda está disponível?");
  const reveal = reduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.18 }, variants: fadeUp };
  return <motion.main initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
    <div className="announcement">ELEGÂNCIA QUE ACOMPANHA VOCÊ</div>
    <header className="site-header">
      <a className="brand" href="#"><span className="brand-name">CONFIANTE <i>&</i> GRACIOSA</span><span className="brand-sub">MODA · ACESSÓRIOS · VOCÊ</span></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <X size={22} strokeWidth={1.6}/> : <Menu size={22} strokeWidth={1.6}/>}</button>
      <AnimatePresence>
        <motion.nav className={menu ? "nav nav-open" : "nav"} initial={false} animate={{ opacity: menu ? 1 : 1, y: 0 }}><a href="#colecoes" onClick={() => setMenu(false)}>Coleções</a><a href="#bolsas" onClick={() => setMenu(false)}>Bolsas</a><a href="#sobre" onClick={() => setMenu(false)}>Nossa essência</a><a href="#contato" onClick={() => setMenu(false)}>Contato</a></motion.nav>
      </AnimatePresence>
      <a className="header-link" href={whatsapp} target="_blank" rel="noreferrer">Fale conosco <ArrowUpRight size={14}/></a>
    </header>
    <section className="hero"><div className="hero-overlay"/><motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.15 }}><p className="eyebrow">SEU ESTILO, SUA PRESENÇA</p><h1>Vista a sua<br/><em>melhor versão.</em></h1><p>Peças escolhidas para valorizar quem você é. Descubra uma seleção feita com carinho, personalidade e elegância.</p><a className="gold-button" href="#colecoes">Descubra nossas escolhas <ArrowRight size={16}/></a></motion.div><div className="hero-note">ELEGÂNCIA EM CADA DETALHE</div></section>
    <motion.section className="intro" id="sobre" {...reveal}><p className="eyebrow">CONFIANTE E GRACIOSA</p><h2>Beleza é se sentir bem<br/><em>com quem você é.</em></h2><p>A moda vai muito além de vestir. É expressão, confiança e aquele toque especial que faz você se reconhecer no espelho.</p></motion.section>
    <section className="collections" id="colecoes">
      <motion.div className="section-head" {...reveal}><div><p className="eyebrow">ESCOLHAS COM PERSONALIDADE</p><h2>Encontre o seu <em>estilo.</em></h2></div><p>Inspire-se e encontre detalhes que fazem toda a diferença.</p></motion.div>
      <div className="category-grid">{categories.map((item, index) => <motion.a className="category" href={item.href} key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.12 }} whileHover={reduceMotion ? undefined : { y: -7 }}><div className="category-image" style={{backgroundImage: "url(" + item.image + ")"}}><span>0{index + 1}</span><b><ArrowUpRight size={18} strokeWidth={1.5}/></b></div><h3>{item.title}</h3><p>{item.detail}</p></motion.a>)}</div>
    </section>
    <section className="bags-section" id="bolsas">
      <motion.div className="section-head" {...reveal}><div><p className="eyebrow">ACESSÓRIOS QUE ENCANTAM</p><h2>Bolsas para cada <em>momento.</em></h2></div><p>Escolha seu modelo favorito e consulte disponibilidade diretamente com a Carla.</p></motion.div>
      <div className="bags-grid">{bags.map((photo, index) => <motion.article className="bag-card" key={photo} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 4) * 0.07 }} whileHover={reduceMotion ? undefined : { y: -5 }}>
        <a className="bag-photo" href={"/" + encodeURIComponent(photo)} target="_blank" rel="noreferrer" aria-label={"Ampliar foto da bolsa " + (index + 1)}><img src={"/" + encodeURIComponent(photo)} alt={"Bolsa modelo " + String(index + 1).padStart(2, "0") + " da Confiante e Graciosa"} loading={index < 4 ? "eager" : "lazy"}/></a>
        <div className="clothing-info"><div><h3>Bolsa {String(index + 1).padStart(2, "0")}</h3><p>Consulte disponibilidade</p></div><a href={bagWhatsapp(index + 1, "Bolsa " + String(index + 1).padStart(2, "0"))} target="_blank" rel="noreferrer" aria-label={"Consultar bolsa " + (index + 1)} title="Consultar no WhatsApp"><ArrowUpRight size={18} strokeWidth={1.5}/></a></div>
      </motion.article>)}</div>
    </section>
    <section className="clothing-section" id="roupas">
      <motion.div className="section-head" {...reveal}><div><p className="eyebrow">NOVIDADES DA LOJA</p><h2>Roupas que combinam<br/><em>com você.</em></h2></div><p>Confira as peças disponíveis e fale com a Carla para consultar tamanhos e valores.</p></motion.div>
      <div className="clothing-grid">{clothes.map((photo, index) => <motion.article className="clothing-card" key={photo} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 4) * 0.07 }} whileHover={reduceMotion ? undefined : { y: -5 }}>
        <a className="clothing-photo" href={"/" + photo.split(" ").join("%20")} target="_blank" rel="noreferrer" aria-label={"Ampliar foto da peça " + (index + 1)}><img src={"/" + photo.split(" ").join("%20")} alt={"Roupa " + String(index + 1).padStart(2, "0") + " da Confiante e Graciosa"} loading={index < 6 ? "eager" : "lazy"}/></a>
        <div className="clothing-info"><div><h3>Peça {String(index + 1).padStart(2, "0")}</h3><p>Consulte disponibilidade</p></div><a href={clothingWhatsapp(index + 1)} target="_blank" rel="noreferrer" aria-label={"Consultar peça " + (index + 1)} title="Consultar no WhatsApp"><ArrowUpRight size={18} strokeWidth={1.5}/></a></div>
      </motion.article>)}</div>
    </section>
    <motion.section className="quote" {...reveal}><h2>Não é apenas sobre o que você veste.<br/><em>É sobre como você se sente.</em></h2><span>CONFIANTE E GRACIOSA</span></motion.section>
    <motion.section className="contact" id="contato" {...reveal}><div><p className="eyebrow">VAMOS CONVERSAR?</p><h2>Seu próximo favorito<br/>está te esperando.</h2><p>Fale com a Carla e conheça as novidades ou encontre aquela peça especial.</p></div><a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp <MessageCircle size={16}/></a></motion.section>
    <footer><span className="brand-name">CONFIANTE <i>&</i> GRACIOSA</span><p>Atendimento com carinho · Carla Graziela</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp +55 16 99286-3119 <ArrowUpRight size={13}/></a><small>© {2026} Confiante e Graciosa. Todos os direitos reservados.</small></footer>
  </motion.main>;
}
