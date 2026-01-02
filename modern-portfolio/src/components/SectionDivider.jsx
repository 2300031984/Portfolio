import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-24 bg-gradient-to-b from-transparent to-black/20"
            />
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
        </div>
    );
};

export default SectionDivider;
