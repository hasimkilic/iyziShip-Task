import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Giriş Yap",
    description: "Generated by create next app",
};

export default function TaskLayout({ children }) {
    return (
        <body className={`${inter.className} h-screen w-full bg-[#F3F6F9]`}>
            {children}
        </body>
    );
}
