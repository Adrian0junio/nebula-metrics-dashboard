
interface TeamMemberProps {
  name: string;
  email: string;
  initials: string;
}

const TeamMember = ({ name, email, initials }: TeamMemberProps) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center border border-blue-700/50 shadow-lg">
        <span className="text-sm font-semibold text-gray-200">{initials}</span>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{name}</p>
        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
