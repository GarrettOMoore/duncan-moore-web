import { useRouter } from "next/router";
import Link from "next/link";

const MediaNav = () => {
    const { pathname } = useRouter();

    function isCurrentPage(path) {
        if (pathname === path) return true;
        return false;
    }

    function generateLinkStyles(path) {
        return `font-neutral flex-initial text-center md:text-lg sm:text-sm active:underline ${isCurrentPage(path) ? 'underline' : ''}`
    }

    return (

        <nav>
            <div className={`container flex flex-row md:flex-x-4 flex-wrap items-center justify-evenly mx-auto p-2 underline-offset-8`}>
                <Link href="/media/gallery">
                    <p className={generateLinkStyles('/media/gallery')}>Gallery</p>
                </Link>
                <Link href="/media/video">
                    <p className={generateLinkStyles('/media/video')}>Video</p>
                </Link>
                <Link href="/media/audio">
                    <p className={generateLinkStyles('/media/audio')}>Audio</p>
                </Link>
            </div>
        </nav>
    )
}

export default MediaNav;