import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const imageModules = import.meta.glob('../assets/image/*.{jpeg,jpg,png}', { eager: true });
const staticImages = Object.values(imageModules).map((mod) => mod.default);

const Blog = () => {

    return (
        <div className="bg-white min-h-screen text-luxury-black selection:bg-luxury-gold selection:text-black">
            {/* HERO SECTION */}
            <section className="pt-40 pb-20 bg-luxury-black-deep text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000" 
                        className="w-full h-full object-cover"
                        alt="Background" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-luxury-black-deep via-transparent to-luxury-black-deep" />
                </div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-luxury-gold" />
                            <span className="text-luxury-gold text-[10px] font-outfit font-black tracking-[0.5em] uppercase italic">Gallery</span>
                            <span className="w-12 h-[1px] bg-luxury-gold" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-black italic tracking-tighter mb-8 leading-none">
                            Our <span className="text-gold-gradient not-italic">Gallery.</span>
                        </h1>
                        <p className="text-white/60 font-outfit max-w-2xl mx-auto text-lg leading-relaxed">
                            A visual journey through our real estate projects, community welfare, and the 
                            future of Milestone Land Developers across South India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    {staticImages.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {staticImages.map((imageSrc, i) => (
                                <motion.article 
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (i % 6) * 0.1 }}
                                    className="group"
                                >
                                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-gray-200 cursor-pointer">
                                        <img 
                                            src={imageSrc} 
                                            alt={`Gallery Image ${i + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center text-gray-300 font-serif italic text-2xl">No images available in the gallery.</div>
                    )}
                    
                    <div className="mt-20 text-center">
                        <button className="bg-luxury-black text-white px-12 py-5 rounded-full text-[11px] font-outfit font-black tracking-widest hover:bg-luxury-gold hover:text-black transition-all shadow-xl">
                            LOAD MORE IMAGES
                        </button>
                    </div>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="bg-luxury-black-deep rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/10 blur-[100px] rounded-full" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <Tag className="text-luxury-gold mx-auto mb-8" size={32} />
                            <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic tracking-tighter mb-8">
                                Stay <span className="text-gold-gradient not-italic">Updated.</span>
                            </h2>
                            <p className="text-white/40 font-outfit mb-12">
                                Join our inner circle to receive exclusive property listings, 
                                market reports, and welfare updates directly in your inbox.
                            </p>
                            
                            <form className="flex flex-col md:flex-row gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="flex-grow bg-white/5 border border-white/10 rounded-full px-10 py-5 text-white font-outfit focus:outline-none focus:border-luxury-gold"
                                />
                                <button className="bg-luxury-gold text-black px-12 py-5 rounded-full font-outfit font-black text-[11px] tracking-widest hover:bg-white transition-all uppercase">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
