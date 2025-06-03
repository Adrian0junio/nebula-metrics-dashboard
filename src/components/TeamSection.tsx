
import { Plus } from 'lucide-react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const teamMembers = [
    { name: 'Daniel Cromitch', email: 'dc@paddle.com', initials: 'DC' },
    { name: 'Melissa Lee', email: 'ml@paddle.com', initials: 'ML' },
    { name: 'Jackson Khan', email: 'JK@paddle.com', initials: 'JK' },
    { name: 'Isa Lopez', email: 'il@paddle.com', initials: 'IL' }
  ];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Membros da equipe</h3>
          <p className="text-sm text-gray-500">Convide membros da sua equipe para colaborar</p>
        </div>
        <button className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg border border-green-500/50 transition-colors">
          <Plus className="w-4 h-4 text-green-400" />
        </button>
      </div>

      {/* Team Members */}
      <div className="space-y-2">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            email={member.email}
            initials={member.initials}
          />
        ))}
      </div>

      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default TeamSection;
