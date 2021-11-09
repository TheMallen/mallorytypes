import Image from "next/image";
import { useRouter } from "next/router";
import Metadata from "./components/Metadata";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <>
      <Metadata title="Page not found" />
      <div className="flex flex-col items-center mx-auto mt-20">
        <span className="self-center p-2 mr-2 bg-purple-600 rounded-2xl">
          <Image
            width="107"
            height="100"
            src="/images/Mallory_Key_White.png"
            alt="A stylized keyboard key with an M on it"
          />
        </span>

        <h1 className="my-5 text-6xl">Whoops!</h1>

        <h2 className="mb-5 text-4xl text-gray-400">
          This page does not exist
        </h2>

        <button
          className="px-5 py-2 text-lg text-white bg-purple-600 rounded hover:bg-purple-800"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}
