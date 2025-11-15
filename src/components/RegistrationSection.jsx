import SectionTitle from "./layout/SectionTitle";

export default function RegistrationSection() {
  return (
    <section className="mb-12" id="register">
      <SectionTitle
        eyebrow="Đăng ký"
        title="Giữ chỗ & nhận mã tham dự"
      />
      <div className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
        <p className="rounded-3xl border border-white/40 bg-white/40 p-5 text-sm text-slate-700 shadow-lg backdrop-blur-xl">
          Số lượng ghế có hạn, ưu tiên khách đăng ký trước. Hãy để lại
          thông tin để ban tổ chức giữ chỗ và gửi mã tham dự qua email /
          tin nhắn. Bạn có thể đăng ký theo nhóm để ngồi cùng khu vực
          mong muốn.
        </p>
        <div className="rounded-3xl border border-emerald-200/60 bg-emerald-50/80 p-5 shadow-lg backdrop-blur-xl">
          <a
            href="https://example.com/form-dang-ky"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/40 transition hover:bg-rose-700"
          >
            Mở form đăng ký
          </a>
          <p className="mt-3 text-xs text-emerald-900">
            Sau khi hoàn tất form, hãy kiểm tra email để nhận mã tham dự
            và hướng dẫn chi tiết. Vui lòng mang theo mã khi đến sự kiện
            để check-in nhanh hơn.
          </p>
        </div>
      </div>
    </section>
  );
}
