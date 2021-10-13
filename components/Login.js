import { signIn } from "next-auth/client";
import Image from "next/image";

export default function Login({ providers }) {

  const { facebook, google, github } = providers;
  
  return (
    <div className="grid place-items-center">
      <Image
        src="https://rb.gy/lgowtt"
        width={400}
        height={400}
        objectFit="contain"
      />

      {facebook && google && (
        <>
          <button
            className="signInButton  lg:hover:bg-blue-500 lg:hover:text-white"
            onClick={() => signIn(facebook.id)}
          >
            <Image src={"https://rb.gy/vsyvzp"} width={30} height={30} />
            <p className="text-center w-full ">Login with Facebook</p>
          </button>
          <button
            className="signInButton lg:hover:bg-red-500 lg:hover:text-white"
            onClick={() => signIn(google.id)}
          >
            <Image src={"https://rb.gy/dgz5ha"} width={30} height={30} />
            <p className="text-center w-full">Login with Google</p>
          </button>
          <button
            className="signInButton lg:hover:bg-gray-500 lg:hover:text-white"
            onClick={() => signIn(github.id)}
          >
            <Image src={"https://rb.gy/a45yng"} width={30} height={30} />
            <p className="text-center w-full">Login with Github</p>
          </button>
        </>
      )}
    </div>
  );
}
