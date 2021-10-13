import { useSession } from "next-auth/client"
import SidebarRow from "./SidebarRow"
import {

    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon,
    UsersIcon

} from "@heroicons/react/solid"
  
export default function Sidebar() {
    const [session , loading] = useSession()
    return (
        <div className="flex p-0 mt-2 items-center justify-evenly md:flex-col  md:justify-start  md:items-left md:w-min md:mt-5">
            <SidebarRow Icon={UserIcon} title="friends"/>
            <SidebarRow Icon={UserGroupIcon} title="groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="marketplace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="watch"/>
            <SidebarRow Icon={CalendarIcon} title="events"/>
            <SidebarRow Icon={ClockIcon} title="memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="see more"/>
            
        </div>
    )
}
