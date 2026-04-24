import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle, Youtube } from 'lucide-react';

const SocialSidebar = () => {
    const socials = [
        { 
            name: 'WhatsApp', 
            icon: MessageCircle, 
            link: 'https://wa.me/916369734738',
            color: 'hover:text-[#25D366]',
            bgColor: 'hover:bg-[#25D366]/10'
        },
        { 
            name: 'Instagram', 
            icon: Instagram, 
            link: 'https://www.instagram.com/milestonelanddeveloper/',
            color: 'hover:text-[#E4405F]',
            bgColor: 'hover:bg-[#E4405F]/10'
        },
        { 
            name: 'Facebook', 
            icon: Facebook, 
            link: 'https://www.facebook.com/share/1DhSzVj4Hq/',
            color: 'hover:text-[#1877F2]',
            bgColor: 'hover:bg-[#1877F2]/10'
        },
        { 
            name: 'Youtube', 
            icon: Youtube, 
            link: 'https://youtube.com/@milestoneland?si=67wmx_lLpOukuPPf',
            color: 'hover:text-[#FF0000]',
            bgColor: 'hover:bg-[#FF0000]/10'
        }
    ];

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col items-center gap-8 text-right">
            <div className="w-[1px] h-20 bg-gradient-to-t from-luxury-gold/50 to-transparent" />
            
            <div className="flex flex-col gap-6">
                {socials.map((social, i) => (
                    <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className={`w-12 h-12 rounded-full border border-gray-100 bg-white shadow-xl flex items-center justify-center text-luxury-black transition-all duration-500 group relative ${social.color} ${social.bgColor} hover:-translate-y-1 hover:border-transparent`}
                    >
                        <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                        
                        {/* Tooltip */}
                        <span className="absolute right-16 px-4 py-2 bg-luxury-black text-white text-[9px] font-outfit font-black tracking-widest uppercase rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-14 transition-all duration-300 whitespace-nowrap">
                            {social.name}
                        </span>
                    </motion.a>
                ))}
            </div>

            <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-gold/50 to-transparent" />
            
            <p className="text-[9px] font-outfit font-black tracking-[0.5em] text-luxury-gold uppercase [writing-mode:vertical-lr] mt-4 opacity-50">
                CONNECT WITH US
            </p>
        </div>
    );
};

export default SocialSidebar;
