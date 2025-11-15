import SectionTitle from "./layout/SectionTitle";

export default function SponsorSection() {
  return (
    <footer className="mb-10 border-t border-white/50 pt-8">
      <SectionTitle
        eyebrow="Đơn vị tổ chức"
        title="Thông tin đối tác & nhà tài trợ"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/40 bg-white/40 p-5 text-sm text-slate-700 shadow-lg backdrop-blur-xl">
          <p>
            Thông tin về CLB / Đơn vị tổ chức, đồng hành cùng chương
            trình sẽ được đặt tại đây. Bạn có thể thêm logo, mô tả ngắn
            gọn và link fanpage nếu cần.
          </p>
        </div>
        <div className="rounded-3xl border border-white/40 bg-white/40 p-5 shadow-lg backdrop-blur-xl">
          <div className="flex flex-wrap gap-3 text-xs text-slate-600">
            <div className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
              Logo 1
            </div>
            <div className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
              Logo 2
            </div>
            <div className="rounded-full bg-white/70 px-3 py-1 shadow-sm">
              Logo 3
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Có Hẹn Với Tây Bắc
      </p>
    </footer>
  );
}
