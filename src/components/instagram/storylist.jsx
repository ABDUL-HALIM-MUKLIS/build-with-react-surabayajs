import { Avatar } from "./avatar"

export const StoryList = () => {

  const person = [
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
    "https://i.pravatar.cc/200",
  ]
  return (
    <div className="flex flex-row gap-5 overflow-auto">
      {person.map((item, index) => <Avatar key={index} />)}
    </div>
  )
}