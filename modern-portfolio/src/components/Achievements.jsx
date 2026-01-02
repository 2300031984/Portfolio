import { motion } from "framer-motion";
import { EXPERIENCES, CERTIFICATIONS, CODING_PLATFORMS } from "../constants";
import { FileText, Award, ExternalLink } from "lucide-react";

import SectionDivider from "./SectionDivider";

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 relative bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950">
            <div className="container mx-auto px-6">

                {/* Main Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Certificates & Achievements</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A showcase of my professional journey, technical certifications, and coding milestones.
                    </p>
                </motion.div>

                {/* Subsection: Professional Experience */}
                <div className="mb-24 max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-white mb-12 flex items-center gap-3"
                    >
                        <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                        Experience
                    </motion.h3>

                    <div className="relative border-l border-slate-800 ml-4 md:ml-0 space-y-12">
                        {EXPERIENCES.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-slate-900 md:left-1/2 md:-translate-x-1.5" />

                                <div className={`md:flex items-start justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    <div className="md:w-5/12 mb-2 md:mb-0">
                                        <span className="text-sm font-semibold text-blue-400 bg-blue-900/20 border border-blue-900/50 px-3 py-1 rounded-full inline-block mb-2">
                                            {exp.year}
                                        </span>
                                    </div>
                                    <div className="md:w-5/12 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors shadow-lg group">
                                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                                        <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>
                                        {exp.docLink && (
                                            <a
                                                href={exp.docLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                                            >
                                                <FileText size={16} />
                                                View Certificate
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Subsection: Certifications */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-white mb-12 flex items-center justify-center gap-3"
                    >
                        <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                        Certifications
                        <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {CERTIFICATIONS.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col h-full group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                                        <Award size={24} />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-400 border border-slate-700 px-2 py-1 rounded">
                                        {cert.validity}
                                    </span>
                                </div>
                                <h4 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">{cert.title}</h4>
                                <p className="text-purple-300 text-sm font-medium mb-2">{cert.issuer}</p>
                                <p className="text-slate-400 text-sm flex-grow mb-4">
                                    {cert.description}
                                </p>
                                {cert.docLink && (
                                    <a
                                        href={cert.docLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 mt-auto rounded-lg bg-purple-500/10 text-purple-300 text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-colors w-fit"
                                    >
                                        <FileText size={16} />
                                        View Certificate
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Subsection: Coding Platforms */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Coding Platforms</h3>
                        <p className="text-slate-400">Find me on these coding platforms</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {CODING_PLATFORMS.map((platform, index) => (
                            <motion.a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-lg shadow-sm hover:shadow-lg hover:bg-white/10 border border-white/10 transition-all group"
                            >
                                <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{platform.name}</span>
                                <span className="text-sm text-slate-400">@{platform.handle}</span>
                                <ExternalLink size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </div>

            </div>
            <SectionDivider />
        </section>
    );
};

export default Achievements;
