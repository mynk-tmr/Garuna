const StatCard = ({ item, value, icon }) => {
  return (
    <article className="shadow-jb inline-flex px-6 py-3 items-center">
      <div className="w-10 p-2 bg-navy border text-white rounded-md">
        {icon}
      </div>
      <div className="ml-4 text-bloo">
        <data className="text-xl block font-bold">{value}</data>
        {value.includes("%") && (
          <progress
            max={100}
            value={value.slice(0, -1)}
            className="block h-2 [&::-webkit-progress-bar]:bg-ice border"
          />
        )}
        <strong className="text-sm opacity-85">{item}</strong>
      </div>
    </article>
  );
};

export default StatCard;
