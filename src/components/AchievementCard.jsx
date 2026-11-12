function AchievementCard({
  title,
  issuer,
  issuedDate,
  credentialUrl,
  imageUrl,
  dateTime,
}) {
  return (
    <article className="achievement-card">
      <img src={imageUrl} alt="" width="80" height="80" />

      <h3>{title}</h3>
      <p>{issuer}</p>
      <p>
        Issued <time dateTime={dateTime}>{issuedDate}</time>
      </p>

      <a href={credentialUrl}>Verify badge on Credly</a>
    </article>
  );
}

export default AchievementCard;
