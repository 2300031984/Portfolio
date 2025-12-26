import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

import SectionDivider from "./SectionDivider";

const Education = () => {
    return (
        <section id="education" className="py-20 relative bg-gradient-to-b from-purple-950 to-fuchsia-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My academic foundation in Computer Science.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-xl hover:bg-white/10 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <div className="text-6xl font-bold text-slate-300 transform rotate-12">
                                    {index === 0 ? "🎓" : "🏫"}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                            <p className="text-primary font-medium mb-1">{edu.degree}</p>
                            <p className="text-slate-500 text-sm mb-4">{edu.duration}</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default Education;
