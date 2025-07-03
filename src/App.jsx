import { useState, useEffect } from "react";
import MemberCard from "./components/MemberCard";
import MemberForm from "./components/MemberForm";
import { members as initialMembers } from "./members";

function App() {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem("members");
    return saved ? JSON.parse(saved) : initialMembers;
  });

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Annuaire de la promo
      </h1>

      <MemberForm onAddMember={addMember} />
      <div className="flex justify-center mb-6 mt-16">
        <input
          type="text"
          placeholder="Rechercher un membre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {members
          .filter((member) =>
            `${member.firstName} ${member.lastName} ${member.tech}`
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
      </div>
    </div>
  );
}

export default App;
