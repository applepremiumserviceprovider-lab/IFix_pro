/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import {
  X,
  Menu,
  Home,
  Layers,
  ShieldCheck,
  Mail,
  ChevronRight,
  Wrench,
  MapPin
} from "lucide-react";
import whiteLogo from "../assets/white_hero_img.png";
import handwave from "../assets/wavingHand.svg";

const navLinks = [
  { label: "Home",     href: "#home",     icon: Home },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Why Us",   href: "#why-us",   icon: ShieldCheck },
  { label: "Contact",  href: "#contact",  icon: Mail },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("home");
  const observerRef               = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.substring(1));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // const currentLogo = useMemo(
  //   () => (active === "home" ? whiteLogo : blackLogo),
  //   [active]
  // );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-2 ${active === "home" ? "bg-transparent" : " backdrop-blur-md"}`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between">
          <a href="#home" className="shrink-0 flex items-center gap-2 group w-32">
            <img
              src={whiteLogo}
              alt="Logo"
              className="h-15 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav
            className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-zinc-900/70 backdrop-blur-md border border-white/10 shadow-lg"
                : "bg-transparent"
            }`}
          >
            {navLinks.map(({ label, href, icon: Icon }) => {
              const id       = href.substring(1);
              const isActive = active === id;
              return (
                <a
                  key={label}
                  href={href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* <:
             */}

          <div className="hidden md:flex items-center justify-end min-w-fit shrink-0">
             {active === "home" ?
                <a href="https://www.google.com/maps/place/Apple+service+center+iFix+Pro/@17.3523405,78.5467001,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99a655743bb9:0xde81b8dcb1dfe4b1!8m2!3d17.3523405!4d78.5467001!16s%2Fg%2F11z1fmyk_l!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"  
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-zinc-200 active:scale-95 shadow-lg ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                >
              <MapPin  size={14} strokeWidth={2.5} /> Navigate to Us
            </a>
            :active === "contact" ? <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-zinc-200 active:scale-95 shadow-lg ease-in-out">
              <motion.img
                src={handwave}
                alt="welcome to iFix_Pro"
                className="h-5 w-auto origin-bottom-right"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
                Fast. Reliable. Done Right.
            </span> :
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-zinc-200 active:scale-95 shadow-lg ease-in-out"
              >
                <Wrench size={14} strokeWidth={2.5} /> Book Repair
            </a>
            }
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-zinc-900/70 backdrop-blur-md border border-white/10 text-white"
                : "bg-transparent text-zinc-300"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-zinc-950 border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const id       = href.substring(1);
            const isActive = active === id;
            return (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white border border-white/10"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={16}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={isActive ? "text-white" : "text-zinc-500"}
                  />
                  {label}
                </div>
                <ChevronRight
                  size={14}
                  className={isActive ? "text-zinc-400" : "text-zinc-600"}
                />
              </a>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-black text-sm font-bold transition-transform active:scale-95"
          >
            <Wrench size={16} strokeWidth={2.5} />
            Book a Repair
          </a>
        </div>
      </aside>
    </>
  );
};

export default NavBar;
