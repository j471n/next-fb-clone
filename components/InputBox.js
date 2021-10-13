import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/solid";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import firebase from "firebase";
import { db, storage } from "../services/firebase";

export default function InputBox() {
  const [session] = useSession();

  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);

  function sendPost(e) {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(doc => {
        if (imageToPost) {
            // upload the image coming from the user

            // encoding the image to data_url and uploading as data-url
            const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')

            setImageToPost(null)

            uploadTask.on("state_change", null, err => console.error(err), () => {

                // when the upload complete
                storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                    db.collection('posts').doc(doc.id).set({
                        postImage : url
                    }, {merge : true})
                })
                
            })
        }
    })

    inputRef.current.value = "";
  }

  function addImageToPost(e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => setImageToPost(readerEvent.target.result);
  }

  return (
    <div className="bg-white p-1 m-3 mt-5 rounded-2xl shadow-md text-gray-500 font-medium">
      {/* Top */}

      <div className="flex space-x-2 p-2 items-center ">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />

        {/* Input Form  */}
        <form className="flex flex-1">
          <input
            className="rounded-full h-10 text-xs md:text-medium md:h-12 bg-gray-100 flex-grow px-4 focus:outline-none"
            placeholder={`What's on your mind, ${session.user.name}`}
            ref={inputRef}
          />

          <button type="submit" onClick={sendPost}></button>
        </form>

        {imageToPost && (
          <div onClick={() => setImageToPost(null)} className="flex flex-col filter scale-75 hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img className="h-10 object-contain" src={imageToPost} />

            <p className="text-xs text-center text-red-500">Remove</p>
          </div>
        )}
      </div>
      {/* bottom button */}

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon ">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs capitalize sm:text-sm xl:text-base">
            live video
          </p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs capitalize sm:text-sm xl:text-base">
            photo/video
          </p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="hidden sm:inputIcon ">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs capitalize sm:text-sm xl:text-base">
            feeling/activity
          </p>
        </div>
      </div>
    </div>
  );
}
