import { motion } from "framer-motion";
import { HERO_CONTENT, SOCIAL_LINKS } from "../constants";
import SectionDivider from "./SectionDivider";

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden relative bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950">
            {/* Background Decor */}
            <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto grid md:grid-cols-1 items-center gap-12 text-center max-w-4xl z-10 mb-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center"
                >
                    <motion.span
                        variants={childVariants}
                        className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20"
                    >
                        {HERO_CONTENT.greeting}
                    </motion.span>

                    <motion.h1
                        variants={childVariants}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
                    >
                        Sai Varun
                        <span className="block text-2xl md:text-3xl font-normal text-slate-400 mt-2">
                            {HERO_CONTENT.title}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={childVariants}
                        className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
                    >
                        {HERO_CONTENT.description}
                    </motion.p>

                    <motion.div variants={childVariants} className="flex gap-4 mb-12">
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5"
                        >
                            Get in Touch
                        </a>
                        <a
                            href={HERO_CONTENT.resumeLink}
                            download
                            className="px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all shadow-sm hover:shadow"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex gap-6">
                        {SOCIAL_LINKS.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-slate-400 hover:text-blue-600 transition-colors"
                            >
                                <social.icon size={26} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <SectionDivider />
        </section>
    );
};

export default Hero;
