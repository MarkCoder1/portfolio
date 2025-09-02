import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumeButton() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10"
        >
            <a
                href="/resume.pdf"
                download="Mark-Alber-Resume.pdf"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
                <span className="flex items-center gap-2">
                    Download Resume
                    <Download size={20} />
                </span>
            </a>
        </motion.div>
    );
}
