import paperIcon from "../assets/images/icon-paper.svg"
import rockIcon from "../assets/images/icon-rock.svg"
import scissorsIcon from "../assets/images/icon-scissors.svg"
import lizardIcon from "../assets/images/icon-lizard.svg"
import spockIcon from "../assets/images/icon-spock.svg"
import PlayerButton from "../components/playerButton"
import { useOutletContext } from "react-router-dom"

export default function HardRound() {
    const { playGame } = useOutletContext()
    const players = [
        {
          name: "paper",
          img: paperIcon,
          customBorder: "from-paper-1 to-paper-2",
          customShadow: "paper-shadow",
          position: "-right-[50px] top-[90px] absolute"
        },
        {
          name: "rock",
          img: rockIcon,
          customBorder: "from-rock-1 to-rock-2",
          customShadow: "rock-shadow",
          position: "right-[10px] top-[320px] absolute"
        },
        {
          name: "scissors",
          img: scissorsIcon,
          customBorder: "from-scissors-1 to-scissors-2",
          customShadow: "scissors-shadow",
          position: "-top-[60px] mx-auto left-0 right-0 absolute"
        },
        {
          name: "spock",
          img: spockIcon,
          customBorder: "from-cyan-1 to-cyan-2",
          customShadow: "spock-shadow",
          position: "-left-[50px] top-[90px] absolute"
        },
        {
          name: "lizard",
          img: lizardIcon,
          customBorder: "from-lizard-1 to-lizard-2",
          customShadow: "lizard-shadow",
          position: "left-[10px] top-[320px] absolute"
        },
      ]
    return(
        <div className="flex max-sm:scale-75 max-[430px]:scale-[.65] w-[420px] h-[400px] bg-cover relative gap-3 bg-pentagon bg-no-repeat">
          {players.map((item) => (
            <PlayerButton play={playGame} key={item.name} {...item} />
          ))}
        </div>
    )
}
  