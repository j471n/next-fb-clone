const stories = [
    {
        name: "Scarlett Johansson",
        src: "https://rb.gy/ub6fsd",
        profile: "https://rb.gy/ymdnip",
    },

    {
        name: "Tom Holland",
        src: "https://rb.gy/zrcseb",
        profile: "https://rb.gy/p3nj9g",
    },
    {
        name: "Chris Hemsworth",
        src: "https://rb.gy/rpj8un",
        profile: "https://rb.gy/orjjbn",
    },
    {
        name: "Robert Downey Jr.",
        src: "https://rb.gy/niovfi",
        profile: "https://rb.gy/uqayrx",
    },
    {
        profile: "https://rb.gy/lhaqr5",
        name: "Chris Evans",
        src: "https://rb.gy/xcam7q",
    },
];

import Image from "next/image";
export default function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => {
                return (
                    <div
                        key={story.src}
                        className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-56 cursor-pointer overflow-x p-3 transition-transform lg:hover:scale-105"
                    >
                        <Image
                            className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 lg:border-2 lg:border-blue-500"
                            src={story.src}
                            width={40}
                            height={40}
                            layout="fixed"
                            objectFit="cover"
                        />
                        <Image
                            className="object-cover filter brightness-75 m-2 border-solid border-4 border-blue-500 rounded-full lg:rounded-xl"
                            src={story.src}
                            layout="fill"
                        />

                        <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
                            {story.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
