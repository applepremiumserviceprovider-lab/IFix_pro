/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, MessageCircle, Clock, Mail } from "lucide-react";
import PopUp from "../components/PopUp";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

const PHONE = "+919000959812";
const WHATSAPP_MSG = "Hi! I'd like to book a repair for my Apple device.";
const MAPS_URL = "https://www.google.com/maps/place/Apple+service+center+iFix+Pro/@17.3523405,78.5467001,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99a655743bb9:0xde81b8dcb1dfe4b1!8m2!3d17.3523405!4d78.5467001!16s%2Fg%2F11z1fmyk_l!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

const actions = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
    bg: "bg-emerald-500 hover:bg-emerald-400",
    text: "text-white",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/25",
    external: true,
  },
  {
    label: "Call Now",
    icon: Phone,
    href: `tel:${PHONE}`,
    bg: "bg-white hover:bg-zinc-100",
    text: "text-zinc-900",
    border: "border-white/20",
    glow: "shadow-white/10",
    external: false,
  },
  {
    label: "Get Directions",
    icon: MapPin,
    href: MAPS_URL,
    bg: "bg-white/[0.06] hover:bg-white/[0.10]",
    text: "text-white",
    border: "border-white/[0.10]",
    glow: "shadow-zinc-800/40",
    external: true,
  },
];

const infoItems = [
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 10:00 AM - 10:00 PM",
    value2: "Sun: 11:00 AM - 8:00 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Apple service center iFix Pro",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Applepremiumserviceprovider@gmail.com",
    copyable: true,
  },
];

const ContactPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("Applepremiumserviceprovider@gmail.com");
    setIsPopUpOpen(true);
    setTimeout(() => setIsPopUpOpen(false), 2000);
  };

  return (
    <section className="bg-zinc-950 relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-5 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-125 h-125 bg-emerald-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-75 bg-blue-500/4 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_50%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      <div className="relative max-w-2xl w-full mx-auto text-center" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.65, ease }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/8 text-zinc-500 text-xs font-medium tracking-widest uppercase mb-5">
            Contact
          </span>
          <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-sm mx-auto leading-relaxed mb-10">
            Ready to get your device fixed? Reach out — we respond fast and repair faster.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.65, ease, delay: 0.12 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          {actions.map(({ label, icon: Icon, href, bg, text, border, glow, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl border ${bg} ${text} ${border} shadow-lg ${glow} text-sm font-semibold transition-colors duration-150 w-full sm:w-auto justify-center`}
            >
              {label === "WhatsApp" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              ) : (
                <Icon size={16} strokeWidth={2.2} />
              )}
              {label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ duration: 0.65, ease, delay: 0.22 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {infoItems.map(({ icon: Icon, label, value, value2, copyable }) => (
            <div
              key={label}
              onClick={copyable ? handleEmailClick : undefined}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/3 border border-white/[0.07] transition-colors duration-200 ${
                copyable ? "cursor-pointer hover:bg-white/[0.07] hover:border-white/12" : "hover:bg-white/6"
              }`}
            >
              <span className="w-8 h-8 rounded-xl bg-white/[0.07] flex items-center justify-center">
                <Icon size={14} strokeWidth={1.8} className="text-zinc-400" />
              </span>
              <p className="text-zinc-500 text-[10px] font-medium tracking-widest uppercase">{label}</p>
              <p className={`text-zinc-300 ${label==="Email"?"text-[11px]":"text-xs"} text-center leading-relaxed `}>{value}</p>
              {value2 && <p className="text-zinc-300 text-xs text-center leading-relaxed -mt-1">{value2}</p>}
              {copyable && (
                <p className="text-zinc-600 text-[10px] tracking-wide">tap to copy</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <PopUp
        isOpen={isPopUpOpen}
        onClose={() => setIsPopUpOpen(false)}
        text="Email copied to clipboard"
      />
    </section>
  );
};

export default ContactPage;
