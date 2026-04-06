export default function MatchCard({ team1, team2, viewers, time, status }) {
  return (
    <div className="bg-[#301C41] p-4 rounded-2xl shadow-lg">
      
      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500 text-white text-xs font-bold shadow-lg">
        <span className = "w-2 h-2 bg-white rounded-full animate-pulse"></span>
        {status}
      </span>

      <h2 className="text-lg font-semibold mt-2">
        {team1} vs {team2}
      </h2>

      <p className="text-sm text-gray-400 mt-1">
        {time} • {viewers} espectadores
      </p>

      <button className="cursor-pointer mt-3 bg-[#6F95FF] px-3 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
        Ver partido
      </button>

    </div>
  );
}