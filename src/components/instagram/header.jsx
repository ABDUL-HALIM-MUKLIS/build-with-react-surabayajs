import { BsHeart } from "react-icons/bs"

export const Header = () => {
  return (
    <div className="w-full h-[60px] border-b dark:border-neutral-600 border-gray-300 flex flex-row items-center justify-between px-4">
      <div className="text-white">Instagram</div>
      <div>
        <label className="flex items-center gap-2 input-sm input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>
      <div>
        <BsHeart size={30} className="text-white" />
      </div>
    </div>
  )
}