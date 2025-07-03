import { useState } from 'react';
import Badge from './badge';

function MemberCard({ firstName, lastName, tech, message }) {
  const [isInverted, setIsInverted] = useState(false);

  const handleClick = () => {
    setIsInverted(!isInverted);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="text-xl font-bold mb-1">
        {firstName} {lastName}
      </h3>
      <Badge isInverted={isInverted}>{tech}</Badge>
      <p className="mt-2 text-gray-600">{message}</p>
    </div>
  );
}

export default MemberCard;
