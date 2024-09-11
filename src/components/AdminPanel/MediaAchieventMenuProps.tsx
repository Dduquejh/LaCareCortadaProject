interface MediaAchievementMenuProps {
  options: string[];
}

export const MediaAchievementMenu = ({
  options,
}: MediaAchievementMenuProps) => {
  return (
    <div className="bg-gray-100 rounded-lg p-2 shadow-lg">
      {options.map((option) => (
        <button key={option} className="w-full p-2 text-left hover:bg-gray-200">
          {option}
        </button>
      ))}
    </div>
  );
};
