

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = () => {
    const [showNav, setShowNav] = useState(false);
    const { pathname } = useRouter();

    function isCurrentPage(path) {
        if (pathname === path) return true;
        return false;
    }

    function generateLinkStyles(path) {
        return `font-neutral flex-initial text-center md:text-lg sm:text-sm active:underline ${isCurrentPage(path) ? 'underline' : ''}`
    }

    const Links = () => (
        <>
            <Link href="/">
                <p className={generateLinkStyles('/')}>Home</p>
            </Link>
            <Link href="/about">
                <p className={generateLinkStyles('/about')}>About</p>
            </Link>
            <Link href="/calendar">
                <p className={generateLinkStyles('/calendar')}>Calendar</p>
            </Link>
            <Link href="/media/gallery">
                <p className={generateLinkStyles('/media')}>Media</p>
            </Link>
            <Link href="/contact">
                <p className={generateLinkStyles('/contact')}>Contact</p>
            </Link>
        </>
    )

    return (
        <nav className=" bg-stone-200">
            <div className="container flex flex-wrap items-center justify-center mx-auto">
                <button onClick={() => setShowNav(!showNav)} className="md:hidden flex flex-col items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div className={`hidden container md:flex flex-col md:flex-row md:flex-x-4 flex-wrap items-center justify-evenly mx-auto p-2 underline-offset-8`}>
                    <Links />
                </div>
                {showNav && (
                    <div className={`md:hidden container flex-col space-y-6 flex-wrap items-center justify-evenly mx-auto p-2 underline-offset-4`}>
                        <Links />
                    </div>
                )}
            </div>
        </nav >

    )
}

export default Nav