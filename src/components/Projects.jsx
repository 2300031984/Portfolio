import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { ExternalLink, Github } from "lucide-react";

import SectionDivider from "./SectionDivider";

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative bg-gradient-to-b from-fuchsia-950 to-rose-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my technical skills.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:bg-white/10 transition-all group"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Code">
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default Projects;
