/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/homePageBG.jpeg";
import { Wrench, ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const bgZoom = {
  hidden: { scale: 1.1, opacity: 0.55 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.8, ease },
  },
};

const overlayFade = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const Stat = ({ icon: Icon, label, value }) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.6, ease }}
    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/6 border border-white/9 backdrop-blur-md hover:bg-white/10 hover:border-white/[0.14] transition-all duration-200"
  >
    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/8 shrink-0">
      <Icon size={15} strokeWidth={2} className="text-zinc-300" />
    </span>
    <div className="text-left">
      <p className="text-white text-sm font-semibold leading-none">{value}</p>
      <p className="text-zinc-500 text-[11px] mt-1 leading-none">{label}</p>
    </div>
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        variants={bgZoom}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        variants={overlayFade}
        initial="hidden"
        animate="show"
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      </motion.div>

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center flex-1 px-5 pt-28 pb-10 text-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
          className="text-white font-bold leading-[1.06] tracking-tight text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[5.2rem] max-w-4xl"
        >
          Your Device,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-br from-zinc-100 to-zinc-400">
            Fixed Right.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.65, ease }}
          className="mt-5 max-w-md mx-auto text-zinc-400 text-sm md:text-base leading-relaxed"
        >
          Professional repairs for iPhones, MacBooks, iPads &amp; more.
          Fast turnaround, genuine parts, and a warranty on every fix.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.65, ease }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white text-zinc-900 text-sm font-semibold tracking-[0.01em] shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_8px_28px_rgba(0,0,0,0.45)] hover:bg-zinc-100 transition-colors duration-150"
          >
            <Wrench size={15} strokeWidth={2.5} />
            Book a Repair
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.07] border border-white/11 text-zinc-300 text-sm font-medium backdrop-blur-md hover:bg-white/12 hover:text-white transition-all duration-150"
          >
            View Services
            <ArrowRight size={14} strokeWidth={2} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={stagger}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Stat icon={ShieldCheck} value="2-Year Warranty"  label="On every repair" />
          <Stat icon={Clock}       value="Same-Day Service" label="Most repairs in hours" />
          <Stat icon={Star}        value="4.9 / 5 Stars"    label="500+ happy customers" />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default HomePage;