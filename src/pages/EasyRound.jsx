import paperIcon from "../assets/images/icon-paper.svg"
import rockIcon from "../assets/images/icon-rock.svg"
import scissorsIcon from "../assets/images/icon-scissors.svg"
import PlayerButton from "../components/playerButton"
import { useOutletContext } from "react-router-dom"

export default function EasyRound() {
    const { playGame } = useOutletContext()
    const players = [
        {
          name: "paper",
          img: paperIcon,
          customBorder: "from-paper-1 to-paper-2",
          customShadow: "paper-shadow",
          position: "-left-[35px] -top-[50px] absolute"
        },
        {
          name: "rock",
          img: rockIcon,
          customBorder: "from-rock-1 to-rock-2",
          customShadow: "rock-shadow",
          position: "right-[0px] left-[0px] mx-auto top-[320px] absolute"
        },
        {
          name: "scissors",
          img: scissorsIcon,
          customBorder: "from-scissors-1 to-scissors-2",
          customShadow: "scissors-shadow",
          position: "-right-[35px] -top-[50px] absolute"
        }
      ]
    return(
        <div className="flex max-sm:scale-75 max-[430px]:scale-[.65] w-[450px] h-[400px] bg-cover relative gap-3 bg-triangle bg-no-repeat">
          {players.map((item) => (
            <PlayerButton play={playGame} key={item.name} {...item} />
          ))}
        </div>
    )
}