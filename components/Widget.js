import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

import Image from "next/image";

const contacts = [
  { name: "Robert Downey Jr.", src: "https://rb.gy/uqayrx" },
  { src: "https://rb.gy/v0okq6", name: "Jeff Bezos" },
  { src: "https://rb.gy/if3aba", name: "Bill Gates" },
  { src: "https://rb.gy/vvksk4", name: "Kevin Feige" },
  { src: "https://rb.gy/oojbjp ", name: "Alexandra Daddario" },
  { src: "https://rb.gy/it8dmq", name: "Elon Musk" },
  { src: "https://rb.gy/cyglmo", name: "Sundar Pichai" },
];

export default function Widget() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => {
        return (
          <div key={contact.name} className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-lg font-medium">
            <Image
              className="rounded-full"
              objectFit="cover"
              src={contact.src}
              width={50}
              height={50}
              layout="fixed"
            />

            <p>{contact.name}</p>

            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
          </div>
        );
      })}
    </div>
  );
}
