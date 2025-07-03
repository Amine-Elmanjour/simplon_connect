import { useState } from 'react';

function MemberForm({ onAddMember }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tech, setTech] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !tech || !message) {
      alert('Merci de remplir tous les champs !');
      return;
    }

    onAddMember({ firstName, lastName, tech, message });

    setFirstName('');
    setLastName('');
    setTech('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Ajouter un membre</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Tech préférée"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Ajouter
        </button>
      </div>
    </form>
  );
}

export default MemberForm;
