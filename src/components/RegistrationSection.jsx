// src/components/RegistrationSection.jsx
import SectionTitle from "./layout/SectionTitle";

export default function RegistrationSection() {
  return (
    <section className="section-shell" id="dang-ky">
      <SectionTitle
        eyebrow="Đăng ký"
        title="Giữ chỗ & nhận mã tham dự"
      />
      <div className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
        <p className="glass-card text-sm text-slate-700">
          Ghế có hạn nên ban tổ chức sẽ ưu tiên khách đăng ký trước.
          Chỉ mất vài phút để điền form, bạn đã có chỗ ngồi ưng ý và
          không lo “hết ghế” vào phút chót.
        </p>
        <div className="glass-card bg-emerald-50/80">
          <a
            href="https://example.com/form-dang-ky"
            target="_blank"
            rel="noreferrer"
            className="pill-primary w-full text-center"
          >
            Mở form đăng ký
          </a>
          <p className="mt-3 text-xs text-emerald-900">
            Sau khi đăng ký, hãy kiểm tra email để nhận mã tham dự và
            hướng dẫn chi tiết. Bạn chỉ cần mang theo mã khi đến sự kiện
            để check-in nhanh chóng.
          </p>
        </div>
      </div>
    </section>
  );
}
