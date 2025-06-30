import './App.css';
import MemberCard from './components/MemberCard';
import { members } from './members';

function App() {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700 drop-shadow-md">
        Annuaire de la promo
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            tech={member.tech}
            message={member.message}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
