import { useEffect, useState } from "react";
import Container from "./layout/Container";

const links = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#lich-trinh", label: "Lịch trình" },
  { href: "#talkshow", label: "Talkshow" },
  { href: "#hang-ve", label: "Hạng vé" },
  { href: "#dang-ky", label: "Đăng ký" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? "bg-white/70 shadow-md backdrop-blur-xl"
          : "bg-gradient-to-b from-white/60 via-white/30 to-transparent backdrop-blur-lg"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-2.5">
          {/* Logo / brand */}
          <button
            type="button"
            onClick={() => handleNavClick("#top")}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 p-1 items-center justify-center rounded-2xl bg-white text-xs font-bold text-slate-800 shadow">
              <img src="/assets/logo_navbar.png" alt="" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Có Hẹn
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Với Tây Bắc
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-4 text-xs font-medium text-slate-700 md:flex">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="rounded-full px-3 py-1 hover:bg-white/70 hover:text-slate-900"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/60 text-slate-700 shadow-sm backdrop-blur md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Mở menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
              <span className="block h-[2px] w-4 rounded-full bg-slate-700" />
            </div>
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {open && (
          <nav className="pb-3 md:hidden">
            <div className="glass-card-tight mt-1 text-xs text-slate-700">
              {links.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full rounded-full px-3 py-2 text-left hover:bg-white/70"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
