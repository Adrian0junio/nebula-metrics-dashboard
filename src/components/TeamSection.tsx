
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
    <div className="premium-card rounded-xl p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide">Membros da equipe</h3>
          <p className="text-sm text-gray-500 mt-1">Convide membros da sua equipe para colaborar</p>
        </div>
        <button className="p-2.5 bg-gradient-to-br from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 rounded-lg border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg glow-effect">
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Team Members */}
      <div className="space-y-1 relative z-10">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            email={member.email}
            initials={member.initials}
          />
        ))}
      </div>

      {/* Subtle corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/8 via-white/4 to-transparent rounded-bl-3xl"></div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
};

export default TeamSection;
