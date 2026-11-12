function CommunityCard({ name, role, description, startDate, endDate }) {
  return (
    <article className="community-card">
      <h3>{name}</h3>
      <p>{role}</p>

      {startDate && (
        <p>
          {startDate} – {endDate ?? "Present"}
        </p>
      )}

      <p>{description}</p>
    </article>
  );
}

export default CommunityCard;
