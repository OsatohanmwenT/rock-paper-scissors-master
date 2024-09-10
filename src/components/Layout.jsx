import { Dialog } from './Dialog';
import { checker } from "../checker";
import { Options } from "./Options";
import { useState } from "react"
import { Outlet, Link, useNavigate } from "react-router-dom";
import bonusRules from "../assets/images/image-rules-bonus.svg"
import Rules from "../assets/images/image-rules.svg"
import closeIcon from "../assets/images/icon-close.svg"

export default function Layout() {
  const [level, setLevel] = useState("easy")
  const [showLevel, setShowLevel] = useState(false)
  const [score, setScore] = useState(0)
  const [showRules, setShowRules] = useState(false)
  const navigate = useNavigate()
  
  const Extra = ["rock", "paper", "scissors", "lizard", "spock"]
  const basic = ["rock", "paper", "scissors"]

  const set = level === "easy" ? basic : Extra
  const rules = level === "easy" ? Rules : bonusRules

  const playGame = (roll) => {
    const opponent = (level === "easy" ? basic : Extra)[Math.floor(Math.random() * (level === "easy" ? basic.length : Extra.length))];

    const result = checker(roll, opponent);
    if (result === "win") {
      setScore((prev) => prev + 1);
    }

    navigate("result", { state: { player: roll, bot: opponent, outcome: result } });
  }
    return(
        <>
      <div className="flex flex-col max-sm:gap-[5vh] gap-[10vh] items-center justify-items-center">
        <header className="border-[3px] mt-5 slide-in mx-5 w-[80vw] md:w-[60vw] flex items-center justify-between rounded-xl border-slate-400 px-6 py-4">
          <ul>
            {set.map((item) => (
            <Options key={item} item={item}  />
            ))}
          </ul>
          <div className="bg-white flex flex-col items-center w-[100px] px-4 py-2 rounded">
            <span className="text-Score-text font-medium leading-none">SCORE</span>
            <h1 className="font-bold text-center text-5xl text-Dark-text">{score}</h1>
          </div>
        </header>
        <Dialog showRules={showRules} setShowRules={setShowRules} closeIcon={closeIcon} rules={rules}  />
        <Outlet context={{ playGame }} />
      </div>
      <div className={`bg-white left-[20px] rounded-lg bottom-[80px] transition-all duration-300 ${showLevel ? "-translate-x-[50vw] opacity-0" : "translate-x-0 opacity-1"} absolute`}>
        <Link to="/">
          <button onClick={() =>setLevel("easy")} className='text-Dark-text hover:bg-Dark-text transition-all rounded-s-md hover:text-white p-2 sm:p-4 font-semibold text-md sm:text-xl '>EASY</button>
        </Link>
        <Link to="hard">
          <button onClick={() =>setLevel("hard")} className='text-Dark-text hover:bg-Dark-text transition-all rounded-e-md hover:text-white p-2 sm:p-4 font-semibold text-md sm:text-xl'>HARD</button>
        </Link>
      </div>
      <button type="button" onClick={() => setShowLevel(prev => !prev)} className="active:translate-y-2 absolute bottom-6 left-6 transition-all duration-200 text-white font-medium text-xl border-[1px] border-white p-6 py-2 rounded-md">LEVEL</button>
      <button type="button" onClick={() => setShowRules(true)}  className="active:translate-y-2 absolute bottom-6 right-6 transition-all duration-200 text-white font-medium text-xl border-[1px] border-white p-6 py-2 rounded-md">RULES</button>
    </>
    )
}