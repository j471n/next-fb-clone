import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
    const [session] = useSession();

    return (
        <div className="sticky top-0 z-50 bg-white flex item-center p-2 lg:px-5 shadow-md">
            {/* HeaderLeft */}
            <div className="flex items-center">
                <Image
                    src="https://rb.gy/qlqk8j"
                    width={40}
                    height={40}
                    layout="fixed"
                />

                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input
                        className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>

            {/* Header Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Header Right */}

            <div className="flex items-center smd:space-x-2 justify-end">
                {/* profilePic */}

                <Image
                    src={session.user.image}
                    onClick={() => signOut()}
                    className="rounded-full cursor-pointer"
                    width={40}
                    height={40}
                    layout="fixed"
                />

                <p className="whitespace-nowrap font-semibold p-3 ">
                    {session.user.name}
                </p>

                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    );
};

export default Header;
