import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Painel de Controle React",
    description:
      "Dashboard de usuários com React, consumo de API e autenticação.",
    image: "/public/img/crud.png",
    demo: "https://dashboard-usuarios.netlify.app/",
    code: "https://github.com/SrBarreto/dashboard-usuarios",
  },
  {
    title: "Previsão do Tempo",
    description:
      "App de previsão do tempo usando API de clima, com design responsivo.",
    image: "/public/img/previsao.png",
    demo: "https://previsao-clima.netlify.app",
    code: "https://github.com/SrBarreto/previsao-clima",
  },

  {
    title: "Projeto LP DNC",
    description:
      "Projeto de landing page para o curso DNC, com design responsivo.",
    image: "/public/img/dnc.jpeg",
    demo: "https://lp-dnc.netlify.app",
    code: "https://github.com/SrBarreto/lp-dnc",
  },

  {
    title: "Ache o Endereço",
    description:
      "App de busca de endereços usando API de geolocalização, com design responsivo.",
    image: "/public/img/ache o endereço.png",
    demo: "https://ache-o-endereco.netlify.app",
    code: "https://github.com/SrBarreto/ache-o-endereco",
  },

  {
    title: "RChat",
    description:
      "App de chat em tempo real usando WebSocket, com design responsivo.",
    image: "/public/img/Gemini_Generated_Image_gzd70ggzd70ggzd7.jpeg",
    demo: "https://rchat.netlify.app",
    code: "https://github.com/SrBarreto/rchat",
  },
  {
    title: "Em Breve: Projeto de Portfólio",
    description:
      "Novos projetos estão a caminho. Fique atento para mais atualizações em breve!",
    image: "/public/img/em breve.jpeg",
    demo: "#",
    code: "#",
  },
];

export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <img
          src="/public/minha-foto.jpg"
          alt="Roger Barreto"
          className="profile-img"
        />
        <h1 className="neon-text">Roger Barreto</h1>
        <p className="rgb-text">
          Front-end Developer//React//JavaScript//HTML/CSS//Git
        </p>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="projects-section">
        <h2>Projetos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="tech-section">
        <h2>Tecnologias</h2>

        <div className="tech-grid">
          <div className="tech-item">
            <svg width="100" height="100" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="11" fill="#61DAFB" />
              <g fill="none" stroke="#61DAFB" strokeWidth="6">
                <ellipse rx="56" ry="22" cx="64" cy="64" />
                <ellipse
                  rx="56"
                  ry="22"
                  cx="64"
                  cy="64"
                  transform="rotate(60 64 64)"
                />
                <ellipse
                  rx="56"
                  ry="22"
                  cx="64"
                  cy="64"
                  transform="rotate(120 64 64)"
                />
              </g>
            </svg>
            <span>React</span>
          </div>

          <div className="tech-item">
            <svg width="100" height="100" viewBox="0 0 128 128">
              <rect width="128" height="128" fill="#F7DF1E" />
              <path d="M89 97c2 3 5 5 10 5 4 0 7-2 7-5 0-3-2-4-6-6l-3-1c-6-3-10-6-10-13 0-7 5-12 13-12 6 0 10 2 13 7l-7 4c-2-3-4-4-6-4-3 0-5 2-5 4 0 3 2 4 6 6l3 1c7 3 11 6 11 14 0 8-6 13-14 13-8 0-13-4-16-9zM55 98c2 4 4 6 8 6 3 0 5-1 5-6V65h9v33c0 10-6 14-14 14-7 0-11-4-13-9z" />
            </svg>
            <span>JavaScript</span>
          </div>

          <div className="tech-item">
            <svg width="100" height="100" viewBox="0 0 128 128">
              <path fill="#E44D26" d="M19 3l9 101 36 10 36-10 9-101z" />
              <path fill="#F16529" d="M64 112l29-8 8-90H64z" />
              <path
                fill="#EBEBEB"
                d="M64 52H45l-1-12h20V28H32l3 36h29zM64 76l-1 11-13 4-13-4-1-15h12l1 7 1 1 12-3 1-8H32l2 27 30 9z"
              />
              <path fill="#fff" d="M64 52v12h17l-2 20-15 4v12l30-9 4-48z" />
            </svg>
            <span>HTML</span>
          </div>

          <div className="tech-item">
            <svg width="100" height="100" viewBox="0 0 128 128">
              <path fill="#1572B6" d="M19 3l9 101 36 10 36-10 9-101z" />
              <path fill="#33A9DC" d="M64 112l29-8 8-90H64z" />
              <path
                fill="#fff"
                d="M64 52H45l-1-12h20V28H32l3 36h29zM64 76l-1 11-13 4-13-4-1-15h12l1 7 1 1 12-3 1-8H32l2 27 30 9z"
              />
            </svg>
            <span>CSS</span>
          </div>

          <div className="tech-item">
            <svg width="100" height="100" viewBox="0 0 128 128">
              <path
                fill="#F34F29"
                d="M124 58L70 4c-3-3-9-3-12 0l-11 11 14 14c3-1 7 0 9 3 2 2 3 6 2 9l13 13c3-1 7 0 9 3 3 3 3 9 0 12-3 3-9 3-12 0-3-3-4-6-3-9L64 58v33c1 1 2 1 3 2 3 3 3 9 0 12-3 3-9 3-12 0-3-3-3-9 0-12 1-1 2-1 3-2V58c-1-1-2-1-3-2-2-2-3-6-2-9L37 33 4 66c-3 3-3 9 0 12l54 54c3 3 9 3 12 0l54-54c3-3 3-9 0-12z"
              />
            </svg>
            <span>Git</span>
          </div>
        </div>
      </section>
      <section className="social-section">
        <h2>Redes</h2>

        <div className="social-links">
          <a href="https://github.com/SrBarreto" target="_blank">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.03c-3.2.7-3.87-1.38-3.87-1.38-.52-1.3-1.27-1.65-1.27-1.65-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.2 1.76 1.2 1.02 1.75 2.67 1.24 3.32.95.1-.75.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.28 1.19-3.09-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.17 1.18a11.02 11.02 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.64.23 2.86.11 3.16.74.81 1.19 1.83 1.19 3.09 0 4.45-2.7 5.42-5.27 5.7.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A10.99 10.99 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
            {/* GitHub */}
          </a>

          <a
            href="https://www.linkedin.com/in/roger-barreto-99242b312/"
            target="_blank"
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
              <path d="M4.98 3.5C4.98 5 3.9 6.08 2.4 6.08 1 6.08 0 5 0 3.5 0 2 1 1 2.4 1c1.5 0 2.58 1 2.58 2.5zM.2 8.5h4.4V24H.2V8.5zm7.8 0h4.2v2.1h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.1V24h-4.4v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.7H8V8.5z" />
            </svg>
            {/* LinkedIn */}
          </a>
        </div>
      </section>
      <a
        href="https://wa.me/5511948813906"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M19.11 17.47c-.27-.14-1.58-.78-1.82-.87-.24-.09-.41-.14-.58.14-.17.27-.67.87-.82 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.15-.27-.02-.42.12-.56.13-.13.27-.34.41-.51.14-.17.18-.29.27-.49.09-.2.04-.38-.02-.52-.07-.14-.58-1.39-.79-1.9-.2-.48-.41-.42-.58-.43h-.5c-.17 0-.45.07-.69.34-.24.27-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.18 1.83 2.8 4.43 3.92.62.27 1.11.43 1.49.55.63.2 1.21.17 1.67.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.28-.07-.11-.24-.18-.51-.32z" />
          <path d="M16.04 2.67c-7.37 0-13.35 5.98-13.35 13.35 0 2.35.62 4.65 1.8 6.67L2.67 29.33l6.77-1.78c1.95 1.06 4.16 1.62 6.4 1.62 7.37 0 13.35-5.98 13.35-13.35S23.41 2.67 16.04 2.67z" />
        </svg>
      </a>
    </div>
  );
}
