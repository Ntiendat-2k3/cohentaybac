import SectionTitle from "./layout/SectionTitle";

export default function SeatmapSection() {
  return (
    <section className="section-shell" id="hang-ve">
      <SectionTitle
        eyebrow="Seatmap"
        title="Sơ đồ hạng vé"
      />

      <div className="glass-card-tight mx-auto max-w-3xl">
        <img
          src="/assets/seatmap.png"
          alt="Sơ đồ hạng vé Có Hẹn Với Tây Bắc"
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
