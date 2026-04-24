import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Building2, Trees, Ruler, Phone, Search, ChevronRight, Globe, Shield, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SocialSidebar from '../components/SocialSidebar';
import PromotionModal from '../components/PromotionModal';
import LeadForm from '../components/LeadForm';
import SocialResponsibility from '../components/SocialResponsibility';
import BrandMetrics from '../components/BrandMetrics';
import logo from '../assets/logo.png';

const Home = ({ onOpenEnquiry }) => {
    const [currentHero, setCurrentHero] = useState(0);
    const [residentialProjects, setResidentialProjects] = useState([]);
    const heroImages = [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=90&w=2400",
        "https://images.unsplash.com/photo-1600607687940-4e2303092811?auto=format&fit=crop&q=90&w=2400",
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=90&w=2400",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2400",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=2400"
    ];

    useEffect(() => {
        const fetchSignature = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/projects');
                setResidentialProjects(res.data.slice(0, 3));
            } catch (err) {
                console.error("Signature registry offline.");
            }
        };
        fetchSignature();

        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white min-h-screen text-luxury-black selection:bg-luxury-gold selection:text-black">
            <SocialSidebar />
            <PromotionModal />
            {/* HERO SECTION - PANORAMIC LENS */}
            <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-luxury-black-deep">
                {/* Immersive Background Slideshow */}
                <div className="absolute inset-0 z-0">
                    {heroImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: currentHero === idx ? 0.4 : 0 }}
                            transition={{ duration: 2 }}
                            className="absolute inset-0"
                        >
                            <img 
                                src={img} 
                                alt={`Background ${idx}`}
                                className="w-full h-full object-cover grayscale-[0.2] scale-110"
                            />
                        </motion.div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-luxury-black-deep via-transparent to-luxury-black-deep/90" />
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <img 
                            src={logo} 
                            alt="Milestone Logo" 
                            className="h-[22vh] md:h-[32vh] object-contain drop-shadow-[0_0_40px_rgba(246,196,83,0.25)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-luxury-gold" />
                            <span className="text-luxury-gold text-[10px] font-outfit font-black tracking-[0.8em] uppercase italic">Real Estate in Tamil Nadu & Kerala</span>
                            <span className="w-12 h-[1px] bg-luxury-gold" />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-12 leading-tight tracking-tighter">
                            Redefining <span className="text-gold-gradient italic">Luxury Living.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-12">
                            <Link to="/projects" className="btn-luxury px-12 md:px-20 py-6 md:py-8 text-[11px] md:text-[12px] shadow-3xl shadow-luxury-gold/30 hover:scale-105 transition-transform duration-500">
                                VIEW PROJECTS
                            </Link>
                            <button 
                                onClick={onOpenEnquiry}
                                className="text-[11px] font-outfit font-black tracking-[0.5em] text-white hover:text-luxury-gold transition-all uppercase flex items-center gap-3 group border-b border-white/20 pb-2 overflow-hidden relative"
                            >
                                <span className="relative z-10">Free Consultation</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10" />
                                <div className="absolute bottom-0 left-0 w-0 h-full bg-white/5 group-hover:w-full transition-all duration-700" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Aesthetic Rulers - Refined for Centered Design */}
                <div className="absolute left-1/2 -ml-[1px] top-0 bottom-0 w-[1px] bg-white/[0.05]" />
                <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-white/[0.02]" />
                <div className="absolute right-[30%] top-0 bottom-0 w-[1px] bg-white/[0.02]" />

                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes subtle-zoom {
                        0% { transform: scale(1.1); }
                        100% { transform: scale(1); }
                    }
                    .animate-subtle-zoom {
                        animation: subtle-zoom 10s ease-out forwards;
                    }
                `}} />
            </section>

            <BrandMetrics />

            {/* FEATURED ARTIFACTS SECTION */}
            <section className="py-24 md:py-40 bg-white relative z-10">
                <div className="container mx-auto px-6 md:px-12">
                     <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Sparkles className="text-luxury-gold" size={18} />
                                <span className="text-luxury-gold text-[10px] font-outfit font-black tracking-[0.5em] uppercase">Premium Selection</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-black text-luxury-black tracking-tighter italic">
                                Featured <span className="text-gold-gradient not-italic">Projects.</span>
                            </h2>
                        </div>
                        <Link to="/projects" className="text-[10px] font-outfit font-black tracking-widest text-luxury-black bg-gray-50 px-10 py-5 rounded-full border border-gray-100 hover:bg-luxury-gold hover:text-black transition-all">
                             VIEW ALL PROJECTS
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {residentialProjects.map((project, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <Link to={`/projects/${project._id}`}>
                                    <div className="aspect-square overflow-hidden rounded-[2.5rem] shadow-xl shadow-gray-200/40 mb-6 relative bg-gray-50 flex items-center justify-center">
                                        <img 
                                            src={project.images?.[0] || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700" />
                                        
                                        <div className="absolute bottom-10 left-10 right-10">
                                            <div className="flex items-center gap-3 text-luxury-gold font-outfit font-black text-[10px] tracking-[0.4em] mb-4">
                                                <MapPin size={14} /> {project.city?.toUpperCase()}
                                            </div>
                                            <h3 className="text-2xl font-serif font-black text-white leading-tight mb-6 text-left">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center justify-between border-t border-white/20 pt-6">
                                                <span className="text-white/60 text-[10px] font-outfit font-bold tracking-widest uppercase">{project.status}</span>
                                                <span className="text-luxury-gold text-lg font-serif font-black italic">VERIFIED</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST & METRICS SECTION - REDESIGNED */}
            <section className="py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        
                        {/* Right: Narrative Content */}
                        <div className="lg:col-span-6 space-y-16">
                             <div>
                                 <div className="flex items-center gap-4 mb-8">
                                    <Shield className="text-luxury-gold" size={18} />
                                    <span className="text-luxury-gold text-[10px] font-outfit font-black tracking-[0.5em] uppercase italic">Real Estate in Tamil Nadu & Kerala</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif font-black mb-10 tracking-tighter leading-[0.9] italic text-luxury-black">
                                    Building <span className="text-gold-gradient not-italic">Trust.</span>
                                </h2>
                                <p className="text-gray-400 text-lg font-outfit leading-relaxed max-w-xl">
                                    For over 15 years, Milestone Group has been the standard of excellence across Tamil Nadu and Kerala. 
                                    We don't just sell plots; we build foundations for a secure and prosperous future.
                                </p>
                             </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {[
                                    { icon: Zap, title: 'Speed of Delivery', desc: 'Secure registry in just 7 days.' },
                                    { icon: Trees, title: 'Green Living', desc: 'Lush botanical parks in every layout.' },
                                    { icon: Ruler, title: 'Precision Layouts', desc: 'Engineering that maximizes every inch.' },
                                    { icon: Shield, title: 'Clear Documentation', desc: 'Ironclad papers and 100% legal clarity.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                         <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all">
                                            <item.icon size={20} />
                                         </div>
                                         <div className="space-y-1">
                                             <h4 className="font-serif font-black text-lg text-luxury-black">{item.title}</h4>
                                             <p className="text-[11px] text-gray-400 font-outfit font-medium leading-relaxed">{item.desc}</p>
                                         </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Left: Prestigious Visual */}
                        <div className="lg:col-span-6 relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2 }}
                                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-luxury-black-deep"
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200" 
                                    alt="Luxury Home"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black-deep via-transparent to-transparent " />
                                
                                <div className="absolute bottom-16 left-0 right-0 px-12 text-center">
                                     <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full mb-6">
                                         <div className="text-5xl font-serif font-black text-white italic">15</div>
                                         <div className="text-[8px] font-outfit font-black tracking-[0.3em] text-luxury-gold uppercase mt-1">Years of Excellence</div>
                                     </div>
                                </div>
                            </motion.div>
                            
                            {/* Floating decorative element */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-luxury-gold/10 blur-[60px] rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-luxury-gold/5 blur-[60px] rounded-full" />
                        </div>

                    </div>
                </div>
            </section>



            {/* TESTIMONIALS SECTION - HAPPY FAMILIES */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                         <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-luxury-gold" />
                            <span className="text-luxury-gold text-[10px] font-outfit font-black tracking-[0.5em] uppercase italic">Customer Stories</span>
                            <span className="w-12 h-[1px] bg-luxury-gold" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-black text-luxury-black mb-8 italic tracking-tighter">
                            Trusted by Thousands of <span className="text-gold-gradient not-italic">Happy Families.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { name: 'Sathish Kumar', loc: 'Coimbatore', review: 'Buying a plot with Milestone was the best decision. The documentation was clear and the process was very fast. Highly recommended!' },
                            { name: 'Meena Raghavan', loc: 'Kochi', review: 'The gated community amenities like CCTV and solar lights are excellent. My family feels safe and happy here.' },
                            { name: 'Arun Varma', loc: 'Chennai', review: 'Professional team and great support. They helped me find the perfect investment plot in a prime location.' },
                            { name: 'Priya Dharshini', loc: 'Madurai', review: 'Transparent pricing and no hidden costs. The speed of registry was amazing—just 7 days as promised.' },
                            { name: 'Rajesh Nair', loc: 'Trivandrum', review: 'Beautifully planned layouts with lots of green space. It is the perfect place for my retirement home.' },
                            { name: 'Lakshmi Menon', loc: 'Salem', review: 'The quality of the blacktop roads and infrastructure is top-notch. Milestone really delivers on their promises.' },
                        ].map((testi, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-10 bg-gray-50 border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Zap key={s} size={12} className="text-luxury-gold fill-luxury-gold" />
                                    ))}
                                </div>
                                <p className="text-gray-500 font-outfit leading-relaxed mb-8 italic">
                                    "{testi.review}"
                                </p>
                                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                                    <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-black font-outfit text-xs">
                                        {testi.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-black text-luxury-black">{testi.name}</h4>
                                        <p className="text-[10px] text-gray-400 font-outfit font-black tracking-widest uppercase">{testi.loc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <SocialResponsibility />

            {/* EXPERIENCE MILESTONE - AUTO-SCROLLING MEDIA */}
            <section className="pb-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <h4 className="text-3xl md:text-5xl font-serif font-black italic text-luxury-black mb-4">Experience Milestone Excellence</h4>
                         <div className="flex items-center justify-center gap-4">
                            <span className="w-8 h-[1px] bg-luxury-gold" />
                            <p className="text-[10px] font-outfit font-black text-gray-400 tracking-[0.4em] uppercase">Official Project Showcase & Brand Film</p>
                            <span className="w-8 h-[1px] bg-luxury-gold" />
                         </div>
                    </div>

                    <div className="relative group">
                        <motion.div 
                            animate={{ 
                                x: [0, -2000],
                            }}
                            transition={{ 
                                duration: 40, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                            className="flex gap-8 hover:[animation-play-state:paused]"
                        >
                            {[
                                { type: 'video', id: 'Ut-_T6pBtaA' },
                                { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200' },
                                { type: 'video', id: '9l1vdrp98kA' },
                                { type: 'image', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200' },
                                { type: 'video', id: 'hmYV3wr6PR4' },
                                { type: 'image', url: 'https://images.unsplash.com/photo-1600607687940-4e2303092811?auto=format&fit=crop&q=90&w=1200' },
                            ].map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="flex-shrink-0 w-[80vw] md:w-[600px] aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-gray-50 border border-gray-100"
                                >
                                    {item.type === 'video' ? (
                                        <iframe 
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${item.id}`}
                                            title={`Brand Film ${idx}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <img 
                                            src={item.url} 
                                            alt={`Showcase ${idx}`} 
                                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                        />
                                    )}
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[
                                { type: 'video', id: 'Ut-_T6pBtaA' },
                                { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=1200' },
                            ].map((item, idx) => (
                                <div 
                                    key={`dup-${idx}`} 
                                    className="flex-shrink-0 w-[80vw] md:w-[600px] aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-gray-50 border border-gray-100"
                                >
                                    {/* Content same as above */}
                                    {item.type === 'video' ? (
                                        <iframe 
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${item.id}`}
                                            title={`Brand Film Dup ${idx}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <img 
                                            src={item.url} 
                                            alt={`Showcase Dup ${idx}`} 
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <LeadForm />
        </div>
    );
};

export default Home;
