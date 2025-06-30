function MemberCard({ firstName, lastName, tech, message }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {firstName} {lastName}
      </h2>
      <p className="text-sm text-blue-600 font-medium mb-2">{tech}</p>
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
}

export default MemberCard;
