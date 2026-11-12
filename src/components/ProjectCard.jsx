function ProjectCard({ title, description, githubUrl }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          View Source on GitHub
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
