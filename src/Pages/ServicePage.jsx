/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smartphone,
  Headphones,
  Laptop,
  Watch,
  ShoppingBag,
  ArrowRight,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "iPhone Repair",
    tag: "Most Popular",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "bg-blue-500",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/10",
    items: [
      "All iPhone models",
      "Screen replacement",
      "Battery replacement",
      "Water damage repair",
    ],
  },
  {
    icon: Laptop,
    title: "MacBook Repair",
    tag: null,
    color: "from-zinc-500/20 to-zinc-600/5",
    accent: "bg-zinc-400",
    border: "border-zinc-500/20",
    glow: "shadow-zinc-500/10",
    items: ["Screen repair", "Keyboard repair", "Battery replacement"],
  },
  {
    icon: Watch,
    title: "Apple Watch",
    tag: null,
    color: "from-rose-500/20 to-rose-600/5",
    accent: "bg-rose-500",
    border: "border-rose-500/20",
    glow: "shadow-rose-500/10",
    items: ["Screen repair", "Battery replacement", "Band replacement"],
  },
  {
    icon: Headphones,
    title: "AirPods Repair",
    tag: null,
    color: "from-violet-500/20 to-violet-600/5",
    accent: "bg-violet-500",
    border: "border-violet-500/20",
    glow: "shadow-violet-500/10",
    items: [
      "Battery replacement",
      "Sound issues",
      "Connectivity problems",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Accessories",
    tag: null,
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "bg-emerald-500",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/10",
    items: ["Chargers", "Cases", "Screen protectors"],
  },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0 },
};

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;
  const isFeatured = index === 0;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.65, ease, delay: index * 0.08 }}
      className={`group relative flex flex-col rounded-3xl border ${service.border} bg-linear-to-br ${service.color} p-6 backdrop-blur-sm hover:shadow-2xl ${service.glow} transition-shadow duration-500 ${isFeatured ? "md:col-span-2 md:row-span-1" : ""}`}
    >
      {service.tag && (
        <span className="absolute top-5 right-5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-semibold text-white/70 tracking-wider uppercase">
          <Zap size={9} className="text-yellow-400" />
          {service.tag}
        </span>
      )}

      <div className={`w-11 h-11 rounded-2xl ${service.accent} flex items-center justify-center mb-5 shadow-lg`}>
        <Icon size={20} strokeWidth={2} className="text-white" />
      </div>

      <h3 className="text-white text-lg font-semibold mb-4 tracking-tight">
        {service.title}
      </h3>

      <ul className={`flex flex-col gap-2 flex-1 ${isFeatured ? "md:grid md:grid-cols-2 md:gap-x-6" : ""}`}>
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-200">
            <span className={`w-1 h-1 rounded-full ${service.accent} shrink-0`} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-5 border-t border-white/5">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors duration-200"
        >
          Book this repair
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </a>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="bg-zinc-950 relative overflow-hidden py-24 px-5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 bg-white/1.5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-100 h-75 bg-blue-500/5 rounded-full blur-3xl" />
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/8 text-zinc-500 text-xs font-medium tracking-widest uppercase mb-5">
            What We Do
          </span>
          <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-zinc-500 text-base max-w-md mx-auto leading-relaxed">
            Expert repairs for all your Apple devices using genuine parts, with a warranty on every fix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-600 text-sm mb-4">Don't see your device?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-colors duration-150 shadow-lg"
          >
            <Zap size={14} strokeWidth={2.5} />
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;