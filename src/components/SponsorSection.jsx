import SectionTitle from "./layout/SectionTitle";

export default function SponsorSection() {
  return (
    <footer
      className="mt-10 border-t border-white/50 pb-10 pt-8"
      id="lien-he"
    >
      <SectionTitle
        eyebrow="Đơn vị tổ chức & Liên hệ"
        title="Có Hẹn Với Tây Bắc"
        subtitle="Nếu bạn cần thêm thông tin về vé, hạng ghế hoặc nội dung chương trình, hãy liên hệ trực tiếp với ban tổ chức."
      />

      <div className="section-grid-2">
        {/* Bên trái: giới thiệu ngắn */}
        <div className="glass-card text-sm text-slate-700">
          <p>
            “Có Hẹn Với Tây Bắc” là một sự kiện nhỏ nhưng đủ đầy hương vị
            núi rừng, được thực hiện bởi những người yêu văn hóa vùng cao
            và mong muốn mang Tây Bắc đến gần hơn với bạn trẻ thành phố.
          </p>
          <p className="mt-3 text-xs text-slate-600">
            Chúng mình rất trân trọng mỗi lượt đăng ký, mỗi câu hỏi và
            góp ý của bạn. Đừng ngại liên hệ nếu bạn cần hỗ trợ trước
            ngày diễn ra chương trình.
          </p>
        </div>

        {/* Bên phải: thông tin liên hệ */}
        <div className="glass-card text-sm text-slate-700">
          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            Thông tin liên hệ ban tổ chức
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Có Hẹn Với Tây Bắc</span>
            </li>
            <li>
              📞 Tel:{" "}
              <span className="font-medium">
                0839 050 012
              </span>{" "}
              <span className="text-xs text-slate-600">(Ms Tiên)</span>
            </li>
            <li>
              📞 Tel:{" "}
              <span className="font-medium">
                0378 375 964
              </span>{" "}
              <span className="text-xs text-slate-600">(Ms Thảo)</span>
            </li>
            <li>
              📧 Email:{" "}
              <a
                href="mailto:cohenvoitaybac@gmail.com"
                className="font-medium text-tbx-rose hover:underline"
              >
                cohenvoitaybac@gmail.com
              </a>
            </li>
            <li>
              📷 Instagram:{" "}
              <span className="font-medium">@cohenvoitaybac</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Có Hẹn Với Tây Bắc. All rights reserved.
      </p>
    </footer>
  );
}
