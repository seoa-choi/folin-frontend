export default function LinkerTab({
  occupationList,
  activeOccupation,
  handleOccupationChange,
}: {
  occupationList: { roles: string; bg: string }[];
  activeOccupation: string;
  handleOccupationChange: (role: string, color: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-[4px] max-w-[386px] mx-auto">
      {occupationList.map(({ roles, bg }) => (
        <button
          key={roles}
          type="button"
          className={`h-[48px] rounded-[6px] px-[16px] text-[18px] leading-[48px] font-bold font-[Noto-sans] ${
            activeOccupation === roles ? bg : 'bg-white'
          }`}
          onClick={() => handleOccupationChange(roles, bg)}
        >
          {roles}
        </button>
      ))}
    </div>
  );
}
