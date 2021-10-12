import Image from "next/image";

export default function SidebarRow({ src, Icon, title }) {
    return (
        <div className="flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-gray-300 rounded-md">
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

            <p className="hidden sm:inline-flex item-center font-medium capitalize">
                {title}
            </p>
        </div>
    );
}
