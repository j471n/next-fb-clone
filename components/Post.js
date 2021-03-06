import Image from "next/image";

import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

export default function Post({
  name,
  message,
  email,
  timestamp,
  image,
  postImage,
}) {
  return (
    <div className="flex flex-col m-3 bg-white md:mt-5 rounded-2xl shadow-sm">
      <div className="p-5">
        {/* top info */}
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            height={40}
            width={40}
            alt=""
          />

          <div>
            <p className="font-medium">{name}</p>

            { timestamp ?

              <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
              : <p className="text-xs text-gray-400">loading</p>
            }
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      {/* Footer Of the post */}

      <div className="flex justify-between items-center rounded-b-2xl shadow-md text-gray-400 bg-white border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl p-3">
          <ThumbUpIcon  className="h-4"/>
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none p-3">
          <ChatAltIcon  className="h-4"/>
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl p-3">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>

      </div>
    </div>
  );
}
