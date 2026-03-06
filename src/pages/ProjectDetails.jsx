import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h2>Projeto não encontrado</h2>;

  return (
    <div className="container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target="_blank">
        Acessar Projeto
      </a>
    </div>
  );
}

export default ProjectDetails;
