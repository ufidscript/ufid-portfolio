function WorkshopCard({ title, role, dateTime, displayDate, description }) {
  return (
    <article className="workshop-card">
      <h3>{title}</h3>
      <p>{role}</p>
      <time dateTime={dateTime}>{displayDate}</time>
      <p>{description}</p>
    </article>
  );
}

export default WorkshopCard;
