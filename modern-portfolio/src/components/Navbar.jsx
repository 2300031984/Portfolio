import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { LINKS } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tighter text-primary cursor-pointer">
                    SV.
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {LINKS.map((link) => (
                        <Link
                            key={link.ref}
                            to={link.ref}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-slate-300 hover:text-primary font-medium cursor-pointer transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 animate-in slide-in-from-top-5 duration-300">
                    {LINKS.map((link) => (
                        <Link
                            key={link.ref}
                            to={link.ref}
                            smooth={true}
                            offset={-70} // adjust for header height
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-600 text-lg font-medium hover:text-blue-600 cursor-pointer"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
