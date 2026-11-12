import AchievementCard from "./AchievementCard.jsx";

const achievements = [
  {
    id: "microsoft-student-ambassador-2026",
    title: "2026 Microsoft Student Ambassador",
    issuer: "Microsoft Student Ambassadors",
    issuedDate: "April 12, 2026",
    dateTime: "2026-04-12",
    credentialUrl:
      "https://www.credly.com/badges/73d46973-c26c-41bc-a0e9-6cc0e9f963e1/public_url",
    imageUrl:
      "https://images.credly.com/size/80x80/images/dd0f5b7b-6346-4e0f-b9d9-9f8c9abe914c/blob",
  },
  {
    id: "html-css-javascript",
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "Coursera",
    issuedDate: "October 15, 2026",
    dateTime: "2026-10-15",
    credentialUrl:
      "https://www.credly.com/badges/ecfef5b5-7eec-4d1e-a849-eff19c1bb305/public_url",
    imageUrl:
      "https://images.credly.com/size/80x80/images/09490195-093b-4c9f-9f31-bdc434e66a23/Coursera_20Introduction_20to_20HTML_20CSS_20and_20JavaScript.png",
  },
];

function HallOfFame() {
  return (
    <section id="hall-of-fame" className="hall-of-fame">
      <h2>Hall of Fame</h2>
      <p>
        Milestones, certificates, and badges from my learning and community
        journey.
      </p>

      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          title={achievement.title}
          issuer={achievement.issuer}
          issuedDate={achievement.issuedDate}
          dateTime={achievement.dateTime}
          credentialUrl={achievement.credentialUrl}
          imageUrl={achievement.imageUrl}
        />
      ))}
    </section>
  );
}

export default HallOfFame;
