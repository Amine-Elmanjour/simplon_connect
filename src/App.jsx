import './App.css';
import MemberCard from './components/MemberCard';
import { members } from './members';

function App() {
  return (
    <div>
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
  );
}

export default App;
