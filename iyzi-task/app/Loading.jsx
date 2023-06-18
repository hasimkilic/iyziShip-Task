import Image from "next/image";
import Spinner from "@/public/spinner.gif"
export default function Loading() {
  return (
    <div className="h-screen bg-white"><div className="flex justify-center items-center h-full "><Image src={Spinner} alt="loading" width={50}  height={50}/></div></div>
  )
}