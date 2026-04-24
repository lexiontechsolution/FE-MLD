import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ onOpenEnquiry }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Properties', path: '/properties' },
        { 
            name: 'About Us', 
            path: '/about',
            dropdown: [
                { name: 'Our Story', path: '/about' },
                { name: 'Our History', path: '/history' },
                { name: 'Latest Blog', path: '/blog' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={`fixed right-4 md:right-10 z-[101] transition-all duration-1000 pointer-events-none ${
            isScrolled ? 'top-[48px]' : 'top-[58px]'
        }`}>
            <div className={`h-12 md:h-14 rounded-full border backdrop-blur-2xl transition-all duration-700 flex items-center gap-2 md:gap-8 px-4 md:px-8 pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${
                isScrolled 
                ? 'bg-white/95 border-gray-200/50' 
                : 'bg-black/20 border-white/10'
            }`}>
                {/* Navigation Links - Desktop Only */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name} 
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => link.dropdown && setIsAboutDropdownOpen(true)}
                            onMouseLeave={() => link.dropdown && setIsAboutDropdownOpen(false)}
                        >
                            {link.dropdown ? (
                                <div className="flex flex-col h-full justify-center">
                                    <button 
                                        className={`text-[9px] font-outfit font-black tracking-[0.25em] uppercase transition-all flex items-center gap-1 ${
                                            isScrolled ? (isActive(link.path) ? 'text-luxury-gold' : 'text-luxury-black') : (isActive(link.path) ? 'text-luxury-gold' : 'text-white/80 hover:text-white')
                                        }`}
                                    >
                                        {link.name}
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isAboutDropdownOpen && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 pointer-events-auto`}
                                            >
                                                <div className={`rounded-3xl border p-4 shadow-2xl backdrop-blur-3xl flex flex-col gap-4 ${
                                                    isScrolled ? 'bg-white border-gray-100' : 'bg-luxury-black-deep/90 border-white/10'
                                                }`}>
                                                    {link.dropdown.map((sub) => (
                                                        <Link 
                                                            key={sub.name} 
                                                            to={sub.path}
                                                            className={`text-[8px] font-outfit font-black tracking-[0.2em] uppercase transition-all hover:text-luxury-gold ${
                                                                isActive(sub.path) ? 'text-luxury-gold' : (isScrolled ? 'text-luxury-black' : 'text-white/60')
                                                            }`}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link 
                                    to={link.path}
                                    className={`text-[9px] font-outfit font-black tracking-[0.25em] uppercase transition-all relative group-hover:text-luxury-gold ${
                                        isScrolled ? (isActive(link.path) ? 'text-luxury-gold' : 'text-luxury-black') : (isActive(link.path) ? 'text-luxury-gold' : 'text-white/80 hover:text-white')
                                    }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-luxury-gold transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className={`hidden lg:block h-4 w-[1px] ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

                {/* Actions */}
                <div className="flex items-center gap-4 md:gap-6">
                    <Link to="/admin/login" className={`hidden md:block transition-all hover:scale-110 ${isScrolled ? 'text-gray-400 hover:text-luxury-gold' : 'text-white/40 hover:text-luxury-gold'}`}>
                        <User size={16} />
                    </Link>
                    <button 
                        onClick={onOpenEnquiry}
                        className={`hidden xs:block px-6 md:px-8 py-2.5 rounded-full text-[8px] font-outfit font-black tracking-[0.2em] uppercase transition-all duration-500 shadow-xl ${
                            isScrolled 
                            ? 'bg-luxury-black text-white hover:bg-luxury-gold' 
                            : 'bg-white text-luxury-black hover:bg-luxury-gold hover:text-white shadow-white/5'
                        }`}
                    >
                        INQUIRE
                    </button>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className={`lg:hidden w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isScrolled 
                            ? 'text-luxury-black hover:bg-gray-100' 
                            : 'text-white hover:bg-white/10'
                        }`}
                    >
                        <Menu size={18} />
                    </button>
                </div>
            </div>
        </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 w-full h-screen bg-luxury-black-deep/95 backdrop-blur-2xl z-[100] p-10 flex flex-col items-center justify-center pointer-events-auto"
                    >
                         <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-10 right-6 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white"
                         >
                            <X size={24} />
                         </button>
 
                         <div className="flex flex-col items-center gap-6 text-center">
                            {navLinks.map((link, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    {link.dropdown ? (
                                        <>
                                            <span className="text-xs font-outfit font-black uppercase tracking-[0.4em] text-luxury-gold mb-1">{link.name}</span>
                                            <div className="flex flex-col gap-2">
                                                {link.dropdown.map((sub) => (
                                                    <Link 
                                                        key={sub.name}
                                                        to={sub.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-3xl font-serif font-black text-white hover:text-luxury-gold transition-colors italic tracking-tighter"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link 
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-serif font-black text-white hover:text-luxury-gold transition-colors italic tracking-tighter"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <button 
                                onClick={() => { setIsMobileMenuOpen(false); onOpenEnquiry(); }}
                                className="btn-luxury px-12 py-5 text-[10px] mt-6"
                            >
                                START CONSULTATION
                            </button>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
