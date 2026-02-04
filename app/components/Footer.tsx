import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-24 py-6 border-t border-[#ffffff]/10 mt-auto flex items-center justify-between">
            <ul className="flex space-x-4">
                <li className='font-jetbrains-mono text-[16px] font-light uppercase'>
                    <Link href="/">Home</Link>
                </li>
                <li className='font-jetbrains-mono text-[16px] font-light uppercase'>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className='font-jetbrains-mono text-[16px] font-light uppercase'>
                    <Link href="/uses">Uses</Link>
                </li>
                <li className='font-jetbrains-mono text-[16px] font-light uppercase'>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <p className="font-jetbrains-mono uppercase text-[16px] font-light text-white/70">&copy; {new Date().getFullYear()} Miftakhul Rizky. All rights reserved.</p>
        </footer>
    );
}
