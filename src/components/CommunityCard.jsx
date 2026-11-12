function CommunityCard({ name, role, description }) {
  return (
    <article className="community-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{description}</p>
    </article>
  );
}

export default CommunityCard;
