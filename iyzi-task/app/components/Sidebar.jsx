"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logout from "@/public/logout.svg";
import Location from "@/public/location.svg";
import Logo from "@/public/logo.svg";
import Adress from "@/public/adress.svg";
import LeftArrow from "@/public/leftArrow.svg";
import User from "@/public/user.jpg";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigation = [
        {
            name: "Yeni Adres Oluştur",
            href: "/task/adress",
            icon: Location,
            current: false,
        },
        {
            name: "Adresleri Listele",
            href: "/task/adresslist",
            icon: Adress,
            current: false,
        },
    ];
    return (
        <div>
            <Transition.Root show={sidebarOpen} as="div">
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as="div"
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as="div"
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as="div"
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <span className="h-3 w-3 mt-3 bg-[#F3F6F9] rounded-full cursor-pointer">
                                            <Link href={"/"}>
                                                <Image src={LeftArrow} alt="icon" />
                                            </Link>
                                        </span>
                                        <Link href={"/task"}>
                                            <Image className="h-8 w-[75px]" src={Logo} alt="iyziShip" />
                                        </Link>
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? "bg-gray-50 text-[#107BE6]"
                                                                        : "text-gray-700 hover:text-[#107BE6] hover:bg-gray-50",
                                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                                )}
                                                            >
                                                                <Image
                                                                    src={item.icon}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? "text-[#107BE6]"
                                                                            : "text-gray-400 group-hover:text-[#107BE6]",
                                                                        "h-6 w-6 shrink-0"
                                                                    )}
                                                                    aria-hidden="true"
                                                                    alt="icon"
                                                                />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                    <div className="flex h-16 shrink-0 items-center justify-center mt-7 gap-x-11">
                        <span className="h-8 w-8 mt-3 bg-[#F3F6F9] rounded-full cursor-pointer">
                            <Link href={"/"}>
                                <Image src={LeftArrow} alt="icon" />
                            </Link>
                        </span>
                        <Link href={"/task"}>
                            <Image className="h-16 w-[151px]" src={Logo} alt="iyziShip" />
                        </Link>
                    </div>
                    <nav className="flex flex-1 flex-col mt-16">
                        <ul className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name} onClick={() => item.current == !item.current}>
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? " text-[#107BE6]"
                                                        : "text-gray-700 hover:text-[#107BE6] ",
                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                )}
                                            >
                                                <Image
                                                    src={item.icon}
                                                    className={classNames(
                                                        item.current
                                                            ? "fill-[#107BE6]"
                                                            : "fill-gray-400 group-hover:stroke-[#107BE6]",
                                                        "h-6 w-6 shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                    alt='icon'
                                                />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="-mx-6 mt-auto">
                                <Link
                                    href="/"
                                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                >
                                    <Image src={Logout} alt="logout" />
                                    <span className="sr-only">Your profile</span>
                                    <span aria-hidden="true">Çıkış Yap</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
                    Dashboard
                </div>
                <Link href="/">
                    <span className="sr-only">Your profile</span>
                    <Image
                        className="rounded-full bg-gray-50"
                        src={User}
                        alt="image-user"
                        width={32}
                        height={32}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;