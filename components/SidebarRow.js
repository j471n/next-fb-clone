import Image from "next/image";

export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center justify-center p-2 md:w-full text-sm md:px-4 py-2 md:justify-start cursor-pointer hover:bg-gray-300 rounded-md">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}

      {Icon && <Icon className="h-8 w-8 text-blue-500" />}

      <p className="hidden md:inline-flex px-2 item-center font-medium capitalize">
        {title}
      </p>
    </div>
  );
}
