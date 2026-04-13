/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Zap,
  Heart,
  ChevronLeft,
  ChevronRight,
  Microscope,
} from "lucide-react";

import labImage from "../assets/workSpacePics/img1.jpeg";
import labImage2 from "../assets/workSpacePics/img2.jpeg";
import entranceImage from "../assets/workSpacePics/img3.jpeg";
import labImage3 from "../assets/workSpacePics/img4.jpeg";
import labImage4 from "../assets/workSpacePics/img5.jpeg";

const LAB_IMAGES = [
  { src: labImage, caption: "Precision repair workstation" },
  { src: labImage2, caption: "Component-level diagnostics lab" },
  { src: labImage3, caption: "Board-level soldering station" },
  { src: labImage4, caption: "Quality assurance bench" },
  { src: entranceImage, caption: "Entrance to our facility" },
];

const reasons = [
  {
    icon: Award,
    title: "Expert Technicians",
    desc: "Certified professionals with years of Apple device experience.",
    accent: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/15",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Quality Parts",
    desc: "Only premium-grade components for lasting, reliable repairs.",
    accent: "from-sky-500 to-blue-500",
    glow: "shadow-sky-500/20",
    border: "border-sky-500/15",
  },
  {
    icon: Zap,
    title: "Fast Repairs",
    desc: "Most repairs completed within 30–60 minutes, same day.",
    accent: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/15",
  },
  {
    icon: Heart,
    title: "Trusted Service",
    desc: "Hundreds of satisfied customers trust iFix_Pro every month.",
    accent: "from-rose-500 to-pink-500",
    glow: "shadow-rose-500/20",
    border: "border-rose-500/15",
  },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const ReasonCard = ({ reason, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.6, ease, delay: index * 0.1 }}
      className={`group relative flex flex-col gap-4 p-6 rounded-3xl bg-white/[0.03] border ${reason.border} hover:bg-white/[0.06] hover:shadow-xl ${reason.glow} transition-all duration-300`}
    >
      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${reason.accent} flex items-center justify-center shadow-lg`}>
        <Icon size={19} strokeWidth={2} className="text-white" />
      </div>
      <div>
        <h3 className="text-white text-base font-semibold mb-1.5 tracking-tight">{reason.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{reason.desc}</p>
      </div>
    </motion.div>
  );
};

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const total = LAB_IMAGES.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 3800);
    return () => clearInterval(id);
  }, [isAutoPlaying, total]);

  const go = (dir) => {
    setIsAutoPlaying(false);
    setDirection(dir);
    setCurrent((c) => (c + dir + total) % total);
  };

  const variants = {
    enter:  (d) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0, scale: 0.96 }),
    center: { x: "0%", opacity: 1, scale: 1 },
    exit:   (d) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0, scale: 0.96 }),
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl aspect-video bg-zinc-900 border border-white/[0.06] shadow-2xl">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease }}
            className="absolute inset-0"
          >
            <img
              src={LAB_IMAGES[current].src}
              alt={LAB_IMAGES[current].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex items-center gap-2">
              <Microscope size={13} className="text-zinc-400" strokeWidth={1.8} />
              <span className="text-zinc-300 text-xs font-medium tracking-wide">
                {LAB_IMAGES[current].caption}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-150"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-150"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {LAB_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIsAutoPlaying(false); setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const WhyUsPage = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const carouselRef = useRef(null);
  const carouselInView = useInView(carouselRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-zinc-950 relative overflow-hidden py-24 px-5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "show" : "hidden"}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-500 text-xs font-medium tracking-widest uppercase mb-5">
            Why Us
          </span>
          <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            The iFix_Pro Difference
          </h2>
          <p className="text-zinc-500 text-base max-w-md mx-auto leading-relaxed">
            We combine certified expertise, genuine parts, and a customer-first approach that keeps your Apple device running at its best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>

        {/* <motion.div
          ref={carouselRef}
          variants={fadeUp}
          initial="hidden"
          animate={carouselInView ? "show" : "hidden"}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-500 text-xs font-medium tracking-widest uppercase mb-4">
              Inside Our Lab
            </span>
            <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
              Professional-Grade Equipment
            </h3>
          </div>
          <Carousel />
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyUsPage;