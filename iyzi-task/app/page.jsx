import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-x-5">
        <Link className="flex justify-center items-center rounded-md bg-[#007FFF] px-10 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#007FFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FFF]" href={"/login"}>Giriş Yap</Link>
        <Link className="flex justify-center rounded-md bg-[#007FFF] px-10 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#007FFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FFF]" href={"/register"}>Kayıt Ol</Link>
      </div>
    </main>
  );
}
