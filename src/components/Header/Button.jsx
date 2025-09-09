import checkmark from "../../assets/images/icon-checkmark.svg";

console.log("checkmark import:", checkmark);
export default function Button({ text, isActive ,onClick}) {
  return (
    <div>
      <button 
      onClick={onClick && onClick}
      className={`relative flex justify-between items-center-safe hover:bg-neutral-600 px-3 py-2 rounded-[7px] w-[190px] text-sm ${isActive ? 'bg-neutral-600': ''} cursor-pointer`}>
        <span>{text}</span>
        <img src={checkmark} alt="" className={`w-[15px] h-[15px] ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90 '} transition-all duration-300 ease-in-out`} />
      </button>
    </div>
  );
}
