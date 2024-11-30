import { BsBookmark, BsChat, BsHeart, BsSend, BsThreeDots } from "react-icons/bs"
import { Avatar } from "./avatar"

export const Post = () => {
  return (
    <div className="w-full px-3 border-b h-fit dark:border-neutral-600">
      <div className="flex flex-row items-center justify-between w-full pb-2">
        <div className="flex flex-row items-center w-full gap-3">
          <Avatar size="50px" />
          <p>Username</p>
          <div>. 1h</div>
        </div>
        <div><BsThreeDots size={20} /></div>
      </div>
      <div className="w-full bg-slate-400 h-[600px] rounded-md"></div>
      <div className="flex flex-row items-center justify-between w-full p-2">
        <div className="flex flex-row items-center w-full gap-5">
          <BsHeart size={25} className="text-white" />
          <BsChat size={25} className="text-white" />
          <BsSend size={25} className="text-white" />
        </div>
        <BsBookmark size={25} className="text-white" />
      </div>
      <div className="flex flex-col gap-1 mb-5">
        <p className="text-sm dark:text-white">Like by {"Username"} and other</p>
        <p className="text-sm dark:text-white line-clamp-1">{"Username"} Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore veniam quae in provident itaque quisquam necessitatibus! Veritatis quas numquam quaerat, minus vitae ratione provident inventore officia enim aspernatur quam.</p>
        <p className="text-xs dark:text-white">Seet translation</p>
        <p className="text-sm dark:text-gray-400">View all 43 comments</p>
        <p className="text-sm dark:text-gray-400">Add a comment...</p>
      </div>
    </div>
  )
}