import Image from "next/image";
import { signIn } from "next-auth/client";

export default function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://rb.gy/lgowtt"
                width={400}
                height={400}
                objectFit="contain"
            />
            <button className="px-7 py-2 bg-blue-500 text-white rounded-md" onClick={signIn}>Login with Facebook</button>
        </div>
    );
}
