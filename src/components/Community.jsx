import CommunityCard from "./CommunityCard.jsx";

const communities = [
  {
    id: "microsoft-campus-club",
    name: "Microsoft Campus Club FUTMinna",
    role: "Campus Club Lead · Associate Student Ambassador",
    description:
      "I help students learn Microsoft technologies through workshops, shared resources, and community learning activities, with a focus on practical skills and certification preparation.",
  },
  {
    id: "Notion Campus Lead",
    name: "Notion Campus Lead FUTMinna",
    role: "Campus Lead",
    description:
      "I help students learn Notion for personal productivity, note-taking, and project management through workshops, shared resources, and community learning activities.",
  },
];

function Community() {
  return (
    <section id="community" className="community">
      <h2>Beyond the code</h2>
      <p>
        I contribute to student tech communities by organising activities,
        sharing resources, and helping others learn.
      </p>
      {communities.map((community) => (
        <CommunityCard
          key={community.id}
          name={community.name}
          role={community.role}
          description={community.description}
        />
      ))}
    </section>
  );
}

export default Community;
