
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const UserAvatar = () => {
  return (
    <Avatar className="w-16 h-16 bg-[#080796]">
      <AvatarImage src="/assets/images/adeola-removebg.png" alt="adeola" />
      <AvatarFallback>Adeola</AvatarFallback>
    </Avatar>
  )
}