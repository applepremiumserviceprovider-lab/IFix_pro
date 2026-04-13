/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, X } from "lucide-react";

const PopUp = ({ isOpen, onClose, text }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-zinc-900 border border-white/[0.09] shadow-2xl backdrop-blur-md"
        >
          <span className="w-7 h-7 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <ClipboardCheck size={14} strokeWidth={2} className="text-emerald-400" />
          </span>
          <p className="text-zinc-300 text-sm font-medium pr-2 whitespace-nowrap">{text}</p>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.08] transition-all duration-150"
          >
            <X size={13} strokeWidth={2.5} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;