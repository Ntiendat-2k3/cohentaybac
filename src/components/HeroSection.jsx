import Container from "./layout/Container";

export default function HeroSection() {
  return (
    <section
      className="
        relative flex min-h-[78vh] items-center overflow-hidden pb-16 pt-24
      "
    >
      {/* LỚP ẢNH NỀN MỜ ĐẰNG SAU */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-20
          bg-fixed bg-cover bg-center opacity-20
          blur-[2px]
        "
        style={{
          backgroundImage: "url('/assets/background.jpg')" // đổi path nếu khác
        }}
      />

      {/* LỚP GRADIENT MỀM CHE LÊN ẢNH CHO DỄ ĐỌC CHỮ */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_0%_0%,rgba(201,242,255,0.9),transparent_60%),radial-gradient(circle_at_100%_0%,rgba(255,230,181,0.9),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(205,233,201,0.95),transparent_60%)]
          mix-blend-soft-light
        "
      />

      {/* blob màu tạo cảm giác parallax + chiều sâu */}
      <div className="pointer-events-none absolute -left-16 -top-28 h-64 w-64 rounded-full bg-tbx-sky/60 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-[999px] bg-tbx-amber/80 blur-3xl animate-float [animation-delay:2s]" />
      <div className="pointer-events-none absolute bottom-[-5rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-[999px] bg-tbx-green/70 blur-3xl animate-float [animation-delay:4s]" />

      <Container>
        <div className="relative mx-auto max-w-3xl glass-card p-8 md:p-10 animate-fade-up-slow">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800">
            Sự kiện văn hoá Tây Bắc
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 drop-shadow-sm md:text-5xl">
            Có Hẹn Với Tây Bắc
          </h1>

          <p className="mt-2 text-lg font-medium text-tbx-rose">
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
            <a href="#dang-ky" className="pill-primary">
              Đăng ký tham gia
            </a>
            <a href="#lich-trinh" className="pill-outline">
              Xem lịch trình
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
