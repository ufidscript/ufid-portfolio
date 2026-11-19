function WorkshopCard({
  title,
  role,
  dateTime,
  displayDate,
  description,
  imageSrc,
  imageAlt,
}) {
  return (
    <article className="workshop-card">
      <img className="workshop-photo" src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{role}</p>
      <time dateTime={dateTime}>{displayDate}</time>
      <p>{description}</p>
    </article>
  );
}

export default WorkshopCard;
