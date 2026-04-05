import { Link } from "react-router";
import MatchCard from "../components/MatchCard";


export default function Home() {
    return (
        <div className="min-h-screen bg-[#1C0B2B] text-white p-4">
            <div className="flex justify-between items-center">
            
                <div>
                    <h1 className="text-center text-3xl font-bold">Vialy Play</h1>
                    <p className="mt-2 text-gray-300">Streaming de partidos</p>
                    <p className="text-lg font-semibold text-gray-300">Liga Amateur Curacaví</p>
                </div>        
                <Link
                    to="/login"
                    className="bg-[#6F95FF] px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
                    Iniciar sesión
                </Link>
            </div>

            <MatchCard
                status="EN VIVO"
                team1="Equipo A"
                team2="Equipo B"
                time="20:00"
                viewers="150"
            /><br />
            <MatchCard 
                status="PRÓXIMO"
                team1="Real Santiago" 
                team2="Deportivo Sur" 
                time="18:00"
                viewers="0"
            /><br />

            <MatchCard 
                status="FINALIZADO"
                team1="Atlético Norte" 
                team2= "Aguilas del 28"
                time="90:00"
                viewers="300"
            />
        </div>
    );
}

