import { useState } from "react";
import { Mail, MapPin, Phone,CodeXml,Code } from "lucide-react";

import PopUp from "./PopUp";

const PHONE = "+919000959812";
const WHATSAPP_MSG = "Hi! I'd like to book a repair for my Apple device.";
const MAPS_URL =
  "https://www.google.com/maps/place/Apple+Service+Center+Nagole/@17.3523435,78.5466994,17z/data=!4m6!3m5!1s0x3bcba34e32205803:0x71952fa1ddb00de2!8m2!3d17.3523435!4d78.5466994!16s%2Fg%2F11ysj8px3l!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Contact",  href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <footer className="bg-zinc-950 snap-start snap-always">
      <div className="border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

            <div className="flex flex-col items-start gap-4 max-w-xs">

              <div className="flex flex-col gap-1">
                <p className="text-white text-sm font-semibold tracking-tight">
                  Fix It Once. Fix It Right.
                </p>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Same-day Apple device repairs with genuine parts and warranty.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </a>
                <a
                  href={`tel:${PHONE}`}
                  aria-label="Call"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-150"
                >
                  <Phone size={15} strokeWidth={2} />
                </a>
                <a

                  aria-label="Email"
                  className="w-8 h-8 rounded-lg bg-white/5 border
                   border-white/8 flex items-center justify-center
                    text-zinc-400 hover:text-white hover:bg-white/10 
                    transition-all duration-150"
                    onClick={()=>{
                        navigator.clipboard.writeText(" Applepremiumserviceprovider@gmail.com")
                        setIsPopUpOpen(true);
                        setInterval(() => {
                          setIsPopUpOpen(false);
                        }, 2000);
                      }}
                >
                  <Mail size={13} strokeWidth={2} />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-zinc-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Explore
                </p>
                <ul className="flex flex-col gap-3">
                  {navLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-zinc-500 text-sm hover:text-white transition-colors duration-150"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-zinc-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Find Us
                </p>
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2.5 text-zinc-500 text-xs leading-relaxed hover:text-white transition-colors duration-150 max-w-50"
                    >
                      <MapPin size={13} strokeWidth={1.8} className="shrink-0 mt-0.5" />
                      Sri Sai Tarun Enclave, L. B. Nagar,<br />Hyderabad, Telangana 500074
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${PHONE}`}
                      className="flex items-center gap-2.5 text-zinc-500 text-xs hover:text-white transition-colors duration-150"
                    >
                      <Phone size={13} strokeWidth={1.8} className="shrink-0" />
                      {PHONE}
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-2.5 text-zinc-500 text-xs hover:text-white transition-colors duration-150"
                      onClick={()=>{
                        navigator.clipboard.writeText(" Applepremiumserviceprovider@gmail.com")
                        setIsPopUpOpen(true);
                        setInterval(() => {
                          setIsPopUpOpen(false);
                        }, 2000);
                      }}
                      >
                      <Mail size={13} strokeWidth={1.8} className="shrink-0" />
                      Applepremiumserviceprovider@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-zinc-600 text-[11px] tracking-widest uppercase">
              © {year} iFix_Pro. All rights reserved.
            </p>
            <a 
            href="https://priyanshu-portfolio-v2.vercel.app"
            className="text-zinc-700 text-[14px] flex justify-center items-center gap-[0.2rem] hover:text-violet-500 transition-colors duration-250 ease-in-out group">
              {/* <Code size={13} strokeWidth={1.8} className="group-hover:text-violet-500"/> */}
              Built by <span className="font-semibold">Priyanshu Kumar</span>
              <CodeXml size={13} strokeWidth={1.8} className="group-hover:text-violet-500 transition-colors duration-150 ease-in-out group"/>
            </a>
          </div>
        </div>
      </div>
      <PopUp isOpen={isPopUpOpen} onClose={() => {
        setIsPopUpOpen(false);
      }} text="Mail Copied to Clipboard" />
    </footer>
  );
};

export default Footer;