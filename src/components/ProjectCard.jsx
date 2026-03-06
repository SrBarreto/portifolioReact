export default function ProjectCard({ title, description, image, demo, code }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-buttons">
          <a href={demo} target="_blank" className="primary-btn">
            Ver Projeto
          </a>

          <a href={code} target="_blank" className="secondary-btn">
            Ver Código
          </a>
        </div>
      </div>
    </div>
  );
}
