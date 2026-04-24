import { motion } from 'framer-motion';

const BankPartners = () => {
    const banks = [
        { name: 'ICICI Bank', logo: 'https://logo.clearbit.com/icicibank.com' },
        { name: 'HDFC Bank', logo: 'https://logo.clearbit.com/hdfcbank.com' },
        { name: 'Axis Bank', logo: 'https://logo.clearbit.com/axisbank.com' },
        { name: 'State Bank of India', logo: 'https://logo.clearbit.com/sbi.co.in' },
        { name: 'Indian Bank', logo: 'https://logo.clearbit.com/indianbank.in' },
        { name: 'Sundaram Home', logo: 'https://logo.clearbit.com/sundaramhome.in' }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-luxury-black tracking-widest uppercase italic">
                        Bank <span className="text-luxury-gold">Partners.</span>
                    </h2>
                    <div className="w-20 h-1 bg-luxury-gold mx-auto mt-6" />
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-700">
                    {banks.map((bank, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <img 
                                src={bank.logo} 
                                alt={bank.name} 
                                className="h-8 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BankPartners;
