import CommunityCard from "./CommunityCard.jsx";

const communities = [
  {
    id: "microsoft-campus-club",
    name: "Microsoft Campus Club FUTMinna",
    role: "Campus Club Lead",
    description:
      "I help students learn Microsoft technologies through workshops, shared resources, and community learning activities, with a focus on practical skills and certification preparation.",
    startDate: "October 2026",
    endDate: null,
  },

  {
    id: "microsoft-student-ambassador",
    name: "Microsoft Student Ambassadors",
    role: "Associate Student Ambassador",
    description:
      "I host workshops and share Microsoft learning resources and opportunities to help students build practical technology skills.",
    startDate: "April 2026",
    endDate: null,
  },
  {
    id: "Notion Campus Lead",
    name: "Notion Campus Lead FUTMinna",
    role: "Campus Lead",
    description:
      "I help students learn Notion for personal productivity, note-taking, and project management through workshops, shared resources, and community learning activities.",
    startDate: "August 2026",
    endDate: null,
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
      <div className="community-grid">
        {communities.map((community) => (
          <CommunityCard
            key={community.id}
            name={community.name}
            role={community.role}
            description={community.description}
            startDate={community.startDate}
            endDate={community.endDate}
          />
        ))}
      </div>
    </section>
  );
}

export default Community;
