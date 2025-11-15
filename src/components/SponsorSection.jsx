import SectionTitle from "./layout/SectionTitle";

export default function SponsorSection() {
  return (
    <footer className="mt-4 border-t border-white/50 pb-10 pt-8">
      <SectionTitle
        eyebrow="Đơn vị tổ chức"
        title="Thông tin đối tác & nhà tài trợ"
      />
      <div className="section-grid-2">
        <div className="glass-card text-sm text-slate-700">
          <p>
            Thông tin về CLB / Đơn vị tổ chức và các nhà tài trợ đồng
            hành.
          </p>
        </div>
        <div className="glass-card">
          <div className="flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="glass-chip">Logo 1</span>
            <span className="glass-chip">Logo 2</span>
            <span className="glass-chip">Logo 3</span>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Có Hẹn Với Tây Bắc
      </p>
    </footer>
  );
}
