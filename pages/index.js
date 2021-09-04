import Head from "next/head"
import Image from "next/image"
import Avatar from "../components/Avatar"
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"
import { SearchIcon } from "@heroicons/react/outline"

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

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
    </div>
  )
}
