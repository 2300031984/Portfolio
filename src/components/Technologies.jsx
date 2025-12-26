import { motion } from "framer-motion";
import { SKILLS } from "../constants";

import SectionDivider from "./SectionDivider";

const Technologies = () => {
    return (
        <section id="about" className="py-24 relative bg-gradient-to-b from-blue-950 to-indigo-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Technical Proficiency</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My toolkit for building robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                        >
                            <div className="p-4 bg-slate-800/50 rounded-full shadow-sm mb-4 text-blue-400">
                                <skill.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-medium text-slate-200">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default Technologies;
