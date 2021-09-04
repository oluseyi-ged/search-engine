import Head from "next/head"
import Avatar from "../components/Avatar"
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google search engine clone build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg" />
        </div>
      </header>

      {/* Body */}

      {/* Footer */}
    </div>
  )
}
