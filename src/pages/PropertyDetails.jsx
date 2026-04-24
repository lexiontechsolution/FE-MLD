import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowLeft, Send, Sparkles, BedDouble, Bath, Square, Shield, CheckCircle } from 'lucide-react';
import axios from 'axios';

const PropertyDetails = ({ onOpenEnquiry }) => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/properties`);
                const found = res.data.find(p => p._id === id);
                setProperty(found);
            } catch (err) {
                console.error("Estate registry access failure.");
            } finally {
                setLoading(false);
            }
        };
        fetchProperty();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center font-serif italic text-3xl text-gray-200">Decrypting Estate Dossier...</div>;
    if (!property) return <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-serif font-black mb-6 text-luxury-black">Asset Not Found</h2>
        <Link to="/properties" className="btn-luxury px-10 py-5">RETURN TO REGISTRY</Link>
    </div>;

    const specs = [
        { icon: BedDouble, label: 'Bedrooms', val: property.bedrooms || '—' },
        { icon: Bath, label: 'Bathrooms', val: property.bathrooms || '—' },
        { icon: Square, label: 'Territory', val: `${property.sqft?.toLocaleString()} Sq.Ft.` || '—' },
    ];

    return (
        <div className="bg-white min-h-screen text-luxury-black selection:bg-luxury-gold selection:text-black">
            {/* Navigation */}
            <div className="fixed top-24 left-10 z-[60]">
                <Link to="/properties" className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-gray-100 flex items-center justify-center text-luxury-black hover:bg-luxury-gold hover:text-black transition-all shadow-xl group">
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* HERO GALLERY */}
            <section className="relative h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={property.images?.[0] || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920'} 
                        className="w-full h-full object-cover" 
                        alt={property.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-20 left-10 right-10 container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-left"
                    >
                         <div className="flex items-center gap-4 mb-8">
                            <Sparkles className="text-luxury-gold" size={24} />
                            <span className="text-luxury-gold text-xs font-outfit font-black tracking-[0.5em] uppercase">{property.type} Protocol — Registry #{property._id?.slice(-6).toUpperCase()}</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-black text-luxury-black mb-6 tracking-tighter leading-none italic">
                            {property.title}
                        </h1>
                        <div className="flex items-center gap-6 text-gray-400 font-outfit font-black tracking-widest text-sm uppercase">
                            <MapPin className="text-luxury-gold" size={18} /> {property.location?.toUpperCase()}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SPECS STRIP */}
            <section className="border-b border-gray-100 py-20 bg-gray-50/50">
                 <div className="container mx-auto px-6 md:px-12">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
                         <div className="text-left">
                             <p className="text-[10px] font-outfit font-black text-gray-400 uppercase tracking-widest mb-2">Acquisition Price</p>
                             <p className="text-5xl font-serif font-black text-luxury-black italic tracking-tighter">{property.price}</p>
                         </div>
                         {specs.map((spec, i) => (
                             <div key={i} className="flex items-center gap-6 border-l border-gray-100 pl-12 h-16">
                                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-luxury-gold shadow-sm">
                                      <spec.icon size={20} />
                                 </div>
                                 <div className="text-left">
                                      <p className="text-[9px] font-black tracking-widest text-gray-400 uppercase font-outfit">{spec.label}</p>
                                      <p className="text-xl font-serif font-bold italic text-luxury-black">{spec.val}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-32 container mx-auto px-6 md:px-12">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
                     {/* Description */}
                     <div className="lg:col-span-8 space-y-16 text-left">
                         <div className="space-y-8">
                            <h2 className="text-[10px] font-outfit font-black tracking-[0.6em] text-gray-300 uppercase">Estate Dossier</h2>
                            <p className="text-2xl font-outfit text-gray-600 leading-relaxed">
                                {property.description || "This premier architectural asset represents a unique opportunity for strategic acquisition within South India's high-fidelity real estate market. Specifically curated for elite portfolios."}
                            </p>
                         </div>

                         {/* Amenities / Features */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {[
                                 'Ironclad Title Documentation',
                                 'Strategic Geographical Access',
                                 'Precision Boundary Engineering',
                                 'Landscape Architecture Readiness',
                                 '24/7 Security Integration',
                                 'High-Speed Connectivity Node'
                             ].map((feat, i) => (
                                 <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                     <CheckCircle className="text-luxury-gold" size={18} />
                                     <span className="text-xs font-outfit font-bold tracking-widest uppercase text-gray-500">{feat}</span>
                                 </div>
                             ))}
                         </div>
                     </div>

                     {/* Sidebar CTA */}
                     <div className="lg:col-span-4">
                          <div className="glass-card p-12 bg-white sticky top-32 border-luxury-gold/10">
                              <Shield className="text-luxury-gold mb-8" size={32} />
                              <h3 className="text-3xl font-serif font-black italic mb-6">Secure this Asset.</h3>
                              <p className="text-gray-400 text-sm font-outfit mb-10 leading-relaxed uppercase tracking-widest">
                                  Our acquisition advisors are ready to process your dossier for this unique territory.
                              </p>
                              <div className="space-y-4">
                                  <button 
                                      onClick={onOpenEnquiry}
                                      className="btn-luxury w-full py-6 flex items-center justify-center gap-4 text-xs tracking-widest"
                                  >
                                      REQUEST VIEWING <Send size={16} />
                                  </button>
                                  <button className="w-full py-6 border border-gray-100 rounded-full text-[9px] font-black tracking-widest uppercase hover:bg-gray-50 transition-all">
                                      DOWNLOAD TECHNICAL PDF
                                  </button>
                              </div>
                          </div>
                     </div>
                 </div>
            </section>

            {/* GALLERY */}
            {property.images?.length > 1 && (
                <section className="py-32 bg-luxury-black overflow-hidden">
                    <div className="container mx-auto px-6 md:px-12 text-left">
                        <h2 className="text-4xl font-serif font-black mb-20 italic text-white">Visual Artifacts<span className="text-luxury-gold">.</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {property.images.map((img, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="aspect-[4/3] rounded-[2rem] overflow-hidden"
                                >
                                    <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default PropertyDetails;
