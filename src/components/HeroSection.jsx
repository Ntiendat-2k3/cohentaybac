import Container from "./layout/Container";

export default function HeroSection() {
    return (<section className="relative flex min-h-[70vh] items-center overflow-hidden pb-16 pt-20"> {/* blob màu parallax */}
        <div className="pointer-events-none absolute -left-10 -top-24 h-64 w-64 rounded-full bg-tbx-sky/60 blur-3xl animate-float"/>
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-[999px] bg-tbx-amber/70 blur-3xl animate-float [animation-delay:2s]"/>
        <div className="pointer-events-none absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-[999px] bg-tbx-green/60 blur-3xl animate-float [animation-delay:4s]"/>

        <Container>
            <div className="relative mx-auto max-w-3xl glass p-8 shadow-[0_20px_70px_rgba(15,23,42,0.35)] animate-fade-up-slow">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800">
                    Sự kiện văn hoá Tây Bắc
                </p>

                <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 drop-shadow-sm md:text-5xl">
                    Có Hẹn Với Tây Bắc
                </h1>
                <p className="mt-2 text-lg font-medium text-rose-700">
                    Đến để thương, về để nhớ
                </p>

                <ul className="mt-6 space-y-1 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="mt-[2px]">⏰</span>
                        <span>09:00 – 18:00, ngày 07/12/2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-[2px]">📍</span>
                        <span>
                            An Hội An Cà Phê – C3107, Đường Lê Trọng Tấn, Hà Đông, Hà Nội
                        </span>
                    </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#register" className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-500/40 transition hover:bg-rose-700">
                        Đăng ký tham gia
                    </a>
                    <a href="#schedule" className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/40 px-5 py-2 text-sm font-semibold text-rose-700 backdrop-blur-md transition hover:bg-white/70">
                        Xem lịch trình
                    </a>
                </div>
            </div>
        </Container>
    </section>);
}
