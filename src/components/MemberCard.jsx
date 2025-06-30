function MemberCard({ firstName, lastName, tech, message }) {
  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>Tech préférée : {tech}</p>
      <p>{message}</p>
    </div>
  );
}

export default MemberCard;
