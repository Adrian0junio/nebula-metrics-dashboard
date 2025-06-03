
interface TeamMemberProps {
  name: string;
  email: string;
  initials: string;
}

const TeamMember = ({ name, email, initials }: TeamMemberProps) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors duration-200">
      <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border border-gray-600/50">
        <span className="text-sm font-semibold text-gray-200">{initials}</span>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-200">{name}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
