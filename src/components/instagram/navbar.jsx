import { BsPlusSquare, BsSend } from "react-icons/bs"
import { GoHome } from "react-icons/go"
import { ImCompass2 } from "react-icons/im"

export const Navbar = () => {
  return (
    <div className="w-full h-[50px] border-t dark:border-neutral-600 flex flex-row items-center justify-between px-10 fixed bottom-0 dark:bg-black">
      <GoHome size={25} className="dark:text-white"/>
      <ImCompass2 size={25} className="dark:text-white" />
      <div>3</div>
      <BsPlusSquare size={25} className="dark:text-white"/>
      <BsSend size={25} className="dark:text-white" />
      <div>6</div>
    </div>
  )
}