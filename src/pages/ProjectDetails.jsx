import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowLeft, Send, Sparkles, Building2, LayoutGrid, Calendar } from 'lucide-react';
import axios from 'axios';

const ProjectDetails = ({ onOpenEnquiry }) => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/projects`);
                const found = res.data.find(p => p._id === id);
                setProject(found);
            } catch (err) {
                console.error("Artifact decryption failed.");
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center font-serif italic text-3xl text-gray-200">Synchronizing Archive...</div>;
    if (!project) return <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-serif font-black mb-6 text-luxury-black">Artifact Not Found</h2>
        <Link to="/projects" className="btn-luxury px-10 py-5">RETURN TO REPOSITORY</Link>
    </div>;

    return (
        <div className="bg-white min-h-screen text-luxury-black selection:bg-luxury-gold selection:text-black">
            {/* Header / Back */}
            <div className="fixed top-24 left-4 md:left-10 z-[60]">
                <Link to="/projects" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/40 backdrop-blur-md border border-gray-100 flex items-center justify-center text-luxury-black hover:bg-luxury-gold hover:text-black transition-all shadow-xl group">
                    <ArrowLeft size={20} className="md:size-24 group-hover:-translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* HERO SECTION */}
            <section className="relative h-[80vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={project.images?.[0] || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920'} 
                        className="w-full h-full object-cover" 
                        alt={project.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-20 left-10 right-10 container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                         <div className="flex items-center gap-4 mb-8">
                            <Sparkles className="text-luxury-gold" size={24} />
                            <span className="text-luxury-gold text-xs font-outfit font-black tracking-[0.5em] uppercase">Archive Entry — {project.status}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif font-black text-luxury-black mb-6 tracking-tighter leading-none italic">
                            {project.title}
                        </h1>
                        <div className="flex items-center gap-6 text-gray-400 font-outfit font-black tracking-widest text-sm uppercase">
                            <MapPin className="text-luxury-gold" size={18} /> {project.city?.toUpperCase()}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-32 container mx-auto px-6 md:px-12">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                     {/* Left: Description & Details */}
                     <div className="lg:col-span-12 space-y-16">
                         <div className="max-w-4xl space-y-8 text-left">
                            <h2 className="text-[10px] font-outfit font-black tracking-[0.6em] text-gray-300 uppercase">Architectural Dossier</h2>
                            <p className="text-2xl md:text-4xl font-outfit text-gray-600 leading-[1.3] text-left">
                                {project.description}
                            </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-y border-gray-100">
                             <div className="space-y-3 text-left">
                                 <Building2 className="text-luxury-gold" size={24} />
                                 <p className="text-[10px] font-outfit font-black text-gray-400 uppercase tracking-widest">Type Protocol</p>
                                 <p className="text-2xl font-serif font-black italic">Land Development</p>
                             </div>
                             <div className="space-y-3 text-left">
                                 <Calendar className="text-luxury-gold" size={24} />
                                 <p className="text-[10px] font-outfit font-black text-gray-400 uppercase tracking-widest">Creation Era</p>
                                 <p className="text-2xl font-serif font-black italic">{project.status}</p>
                             </div>
                             <div className="space-y-3 text-left">
                                 <LayoutGrid className="text-luxury-gold" size={24} />
                                 <p className="text-[10px] font-outfit font-black text-gray-400 uppercase tracking-widest">Asset Integrity</p>
                                 <p className="text-2xl font-serif font-black italic">Verified Legacy</p>
                             </div>
                         </div>
                     </div>
                 </div>
            </section>

            {/* IMAGE GALLERY */}
            {project.images?.length > 1 && (
                <section className="py-32 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 text-left">
                        <h2 className="text-4xl font-serif font-black mb-20 italic">Visual Channels.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {project.images.slice(1).map((img, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="rounded-[3rem] overflow-hidden shadow-2xl"
                                >
                                    <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* EXTERNAL LINKS & CTA */}
            <section className="py-40 container mx-auto px-6 md:px-12 text-center">
                 <div className="max-w-3xl mx-auto space-y-12">
                     <h2 className="text-5xl font-serif font-black italic">Establish your Foundation.</h2>
                     <p className="text-gray-500 font-outfit text-lg">
                         Contact our architectural advisors to receive the full private dossier 
                         and technical specifications for this artifact.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-6 justify-center">
                         <button 
                            onClick={onOpenEnquiry}
                            className="btn-luxury px-12 py-6 flex items-center justify-center gap-4 text-xs tracking-widest"
                        >
                             INQUIRE PRIVATELY <Send size={16} />
                         </button>
                         {project.socialLink && (
                             <a 
                                href={project.socialLink} 
                                target="_blank" 
                                className="px-12 py-6 border border-gray-100 rounded-full flex items-center justify-center gap-4 text-xs font-black tracking-widest uppercase hover:bg-gray-50 transition-all"
                             >
                                 VIEW CHANNEL <Globe size={16} />
                             </a>
                         )}
                     </div>
                 </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
