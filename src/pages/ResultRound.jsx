import PlayerButton from "../components/playerButton";
import { useLocation, useNavigate } from "react-router-dom";
import paperIcon from "../assets/images/icon-paper.svg"
import rockIcon from "../assets/images/icon-rock.svg";
import scissorsIcon from "../assets/images/icon-scissors.svg";
import spockIcon from "../assets/images/icon-spock.svg";
import lizardIcon from "../assets/images/icon-lizard.svg";

export default function ResultRound() {
    const location = useLocation();
    const navigate = useNavigate()
    const { player, bot, outcome } = location.state || {}

    const players = [
        {
          name: "paper",
          img: paperIcon,
          customBorder: "from-paper-1 to-paper-2",
          customShadow: "paper-shadow",
        },
        {
          name: "rock",
          img: rockIcon,
          customBorder: "from-rock-1 to-rock-2",
          customShadow: "rock-shadow",
        },
        {
          name: "scissors",
          img: scissorsIcon,
          customBorder: "from-scissors-1 to-scissors-2",
          customShadow: "scissors-shadow",
        },
        {
          name: "spock",
          img: spockIcon,
          customBorder: "from-cyan-1 to-cyan-2",
          customShadow: "spock-shadow",
        },
        {
          name: "lizard",
          img: lizardIcon,
          customBorder: "from-lizard-1 to-lizard-2",
          customShadow: "lizard-shadow",
        },
      ];

      const getPlayerByName = (name) => players.find(player => player.name === name);
    
      const playerData = getPlayerByName(player);
      const botData = getPlayerByName(bot);

    return(
        <>
        <div className="flex items-center justify-between gap-10 scale-125 max-sm:scale-90 max-[430px]:scale-75">
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-white font-semibold text-lg sm:text-xl">YOU PICKED</p>
                <PlayerButton {...playerData} disabled />
            </div>
            <div className="flex max-sm:hidden flex-col items-center">
                <span className="text-3xl mb-2 uppercase text-white font-semibold">YOU {outcome}</span>
                <button onClick={() => navigate(-1)} className="text-Score-text bg-white py-2 px-6 rounded-md">PLAY AGAIN</button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-white font-semibold text-lg sm:text-xl">THE HOUSE PICKED</p>
                <PlayerButton {...botData} disabled />
            </div>
        </div>
        <div className="flex sm:hidden flex-col items-center">
            <span className="text-4xl mb-2 uppercase text-white font-semibold">YOU {outcome}</span>
            <button onClick={() => navigate(-1)} aria-label="play again" className="text-Score-text font-semibold bg-white py-2 px-8 rounded-md">PLAY AGAIN</button>
        </div>
        </>
    )
}