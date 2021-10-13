import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";
import ConfirmLogout from "./Portals/ConfirmLogout";

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
import { useState } from "react";

const Header = () => {
  const [session] = useSession();

  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="sticky justify-evenly top-0 z-40 bg-white flex item-center p-2 lg:px-5 shadow-md">
        {/* HeaderLeft */}
        <div className="flex items-center">
          <Image
            src="https://rb.gy/qlqk8j"
            width={40}
            height={40}
            layout="fixed"
          />

          <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-4 sm:h-6 text-gray-600" />
            <input
              className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        {/* Header Center */}
        <div className="flex items-center justify-center sm:px-2 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>

        {/* Header Right */}

        <div className="flex items-center smd:space-x-2 justify-end">
          {/* profilePic */}

          <Image
            src={session.user.image}
            onClick={() => setModal(true)}
            className="rounded-full cursor-pointer"
            width={40}
            height={40}
            layout="fixed"
          />

          <p className="hidden md:block whitespace-nowrap font-semi-bold p-3 ">
            {session.user.name}
          </p>

          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>

      {/* Trying to make teh modal */}
      {modal && <ConfirmLogout setModal={setModal} logout={signOut} />}
    </>
  );
};

export default Header;
