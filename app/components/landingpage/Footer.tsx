import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-300 py-12 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <img src="/logo2.png" alt="" width={50} className="inline" />
                    <h3 className="text-xl font-bold text-white">YourCompany</h3>
                    <p className="mt-2 text-sm text-zinc-400">
                        Simplifying event management with seamless planning and execution.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <Link href="/about" className="hover:text-white transition">About Us</Link>
                        </li>
                        <li>
                            <Link href="/features" className="hover:text-white transition">Features</Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Connect with us</h3>
                    <div className="flex gap-4 mt-2">
                        <Link href="https://github.com/ganeshkondaka" target="_blank" className="hover:text-white transition">
                            <FaGithub size={24} />
                        </Link>
                        <Link href="https://twitter.com/ganesh_kondaka" target="_blank" className="hover:text-white transition">
                            <FaTwitter size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/kondaka-ganesh-b402bb252/" target="_blank" className="hover:text-white transition">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link href="mailto:your.ganeshjo306@gmail.com" className="hover:text-white transition">
                            <FaEnvelope size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-zinc-700 mt-8 pt-4 text-center text-sm text-zinc-400">
                &copy; {new Date().getFullYear()}  EventHive. All rights reserved.
            </div>
            <p className="text-center text-sm text-zinc-400 pt-5">made by Ganesh</p>
        </footer>
    );
}
