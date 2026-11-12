import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="work" className="projects">
      <h2>Selected work</h2>
      <p>Projects I’m building and learning from.</p>
      <ProjectCard
        title="ObaordX"
        description="A local community memory and handover app for saving decisions, lessons, and unfinished work."
      />
      <ProjectCard
        title="Brief2Done"
        description="A local AI tool that turns assignment briefs into a clearer task, requirements, and checklist."
      />
    </section>
  );
}

export default Projects;
