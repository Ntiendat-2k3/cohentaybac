import SectionTitle from "./layout/SectionTitle";

export default function LocationSection() {
  return (
    <section className="mb-12">
      <SectionTitle
        eyebrow="Địa điểm"
        title="Làm sao để đến với “Có hẹn với Tây Bắc”?"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/40 bg-white/40 p-5 text-sm text-slate-700 shadow-lg backdrop-blur-xl">
          <p className="mb-2">
            📍 <b>An Hội An Cà Phê</b> – C3107, Đường Lê Trọng Tấn, Hà
            Đông, Hà Nội
          </p>
          <p className="mb-4">⏰ 09:00 – 18:00, ngày 07/12/2025</p>
          <a
            href="https://maps.app.goo.gl/cwQXsCFGDeGkXDLV9?g_st=ipc"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-rose-500/70 bg-white/50 px-4 py-2 text-xs font-semibold text-rose-700 backdrop-blur-md transition hover:bg-rose-50/90"
          >
            Mở bản đồ trên Google Maps
          </a>
        </div>
        <div className="flex items-stretch">
          <div className="flex w-full items-center justify-center rounded-3xl border border-white/40 bg-white/30 p-5 text-xs text-slate-500 shadow-lg backdrop-blur-xl">
            {/* bạn có thể thay block này bằng iframe map thực */}
            Bản đồ Google Maps sẽ được nhúng tại đây.
          </div>
        </div>
      </div>
    </section>
  );
}
