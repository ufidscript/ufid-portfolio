import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    id: "onboardx",
    title: "ObaordX",
    description:
      "A local community memory and handover app for saving decisions, lessons, and unfinished work.",
    githubUrl: "https://github.com/ufidscript/onboardx",
  },
  {
    id: "brief2done",
    title: "Brief2Done",
    description:
      "A local AI tool that turns assignment briefs into a clearer task, requirements, and checklist.",
    // githubUrl: "https://github.com/ufidscript/brief2done",
  },
];

function Projects() {
  return (
    <section id="work" className="projects">
      <h2>Selected work</h2>
      <p>Projects I’m building and learning from.</p>
      {projects.map((projects) => (
        <ProjectCard
          key={projects.id}
          title={projects.title}
          description={projects.description}
          githubUrl={projects.githubUrl}
        />
      ))}
    </section>
  );
}

export default Projects;
