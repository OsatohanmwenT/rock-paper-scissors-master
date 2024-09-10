export default function PlayerButton({ disabled, play, ...item }) {
    return(
        <div className={`p-4 anim ${item.position} active:translate-y-1 rounded-full hover:scale-105 h-[158px] active:shadow-none transition-all ease-in-out duration-300 w-[158px] bg-gradient-to-b ${item.customShadow} ${item.customBorder}`}>
            <button disabled={disabled} onClick={() => play(item.name)} aria-label={`${item.name} button`} type="button" className="p-6 flex shadow-[inset_0_6px_3px_1px_rgba(152,152,152,0.6)] bg-white rounded-full border-5 ">
            <img className="h-[78px] w-[78px]" src={item.img} alt={item.name} />
            </button>
        </div>
    )
}