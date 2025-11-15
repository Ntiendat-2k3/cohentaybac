import { useState } from "react";
import SectionTitle from "./layout/SectionTitle";

const ZONES = [
  {
    id: "gia-dinh",
    name: "Gia đình",
    note: "Ghế nệm trung tâm, 6 ghế."
  },
  {
    id: "ban-lang",
    name: "Bản làng",
    note: "Chiếu hoa, mỗi bên 12 ghế."
  },
  {
    id: "nui-rung",
    name: "Núi rừng",
    note: "Chiếu hoa, mỗi bên 12 ghế."
  },
  {
    id: "suoi-nguon",
    name: "Suối nguồn",
    note: "Ghế tre, mỗi bên 24 ghế."
  },
  {
    id: "may-ngan",
    name: "Mây ngàn",
    note: "Ghế tre, mỗi bên 24 ghế."
  }
];

// thay YOUR_FORM_ID bằng id form thật
const GOOGLE_FORM_EMBED_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSczQ5YEygDnzGunAG5BrpJyzntVKdJVvrxKhHg2v8j5dGREPQ/viewform?embedded=true";

export default function BookingSection() {
  const [selectedZone, setSelectedZone] = useState(ZONES[0].id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const selectedInfo = ZONES.find((z) => z.id === selectedZone);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="section-shell" id="dang-ky">
      <div id="hang-ve" className="sr-only" aria-hidden="true" />

      <SectionTitle
        eyebrow="Seatmap & Đăng ký"
        title="Chọn hạng ghế & giữ chỗ tham dự"
        subtitle="Xem sơ đồ, chọn khu ngồi rồi mở form đăng ký để để lại thông tin."
      />

      <div className="section-grid-2 lg:grid-cols-[1.05fr,1.2fr] lg:items-start">
        {/* BÊN TRÁI: ẢNH SƠ ĐỒ */}
        <div className="glass-card-tight">
          <div className="relative w-full md:h-[340px] lg:h-[620px]">
            <img
              src="/assets/seatmap.png"
              alt="Sơ đồ hạng vé Có Hẹn Với Tây Bắc"
              className="h-full w-full rounded-2xl object-contain shadow-lg"
            />
          </div>
          <p className="mt-2 text-[11px] text-slate-600">
            * Giá từng hạng ghế đã được thể hiện trực tiếp trên sơ đồ.
          </p>
        </div>

        {/* BÊN PHẢI: CHỌN HẠNG + NÚT MỞ FORM GOOGLE */}
        <div className="glass-card flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Chọn khu ngồi & mở form đăng ký
          </h3>

          {/* Chọn hạng ghế */}
          <div className="space-y-2 text-xs">
            <p className="font-medium text-slate-700">
              Bạn muốn ngồi ở khu nào?
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {ZONES.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSelectedZone(zone.id)}
                  className={[
                    "flex flex-col rounded-2xl px-3 py-2 text-left text-[11px] sm:text-xs shadow-sm backdrop-blur",
                    selectedZone === zone.id
                      ? "bg-tbx-rose text-white shadow-tbx-rose/50"
                      : "bg-white/70 text-slate-700 border border-white/70"
                  ].join(" ")}
                >
                  <span className="font-semibold">{zone.name}</span>
                  <span className="mt-0.5 text-[11px] leading-snug">
                    {zone.note}
                  </span>
                </button>
              ))}
            </div>

            {/* Thông tin khu đã chọn */}
            <div className="mt-2 rounded-2xl bg-white/75 px-3 py-2 text-[11px] text-slate-800 shadow-inner">
              <p className="font-semibold">
                Đang chọn: {selectedInfo?.name || "Chưa chọn"}
              </p>
              <p className="text-[11px] text-slate-600">
                {selectedInfo?.note}
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                Khi mở form, bạn hãy chọn đúng khu ngồi tương ứng trong danh sách
                của form nhé.
              </p>
            </div>
          </div>

          {/* CTA mở form Google */}
          <button
            type="button"
            onClick={handleOpenForm}
            className="pill-primary w-full text-center"
          >
            Mở form đăng ký
          </button>

          <p className="text-[11px] leading-relaxed text-slate-500">
            Thông tin của bạn sẽ được ghi nhận trực tiếp trên Google Form.
            Ban tổ chức sẽ dùng dữ liệu đó để giữ chỗ và liên hệ xác nhận.
          </p>
        </div>
      </div>

      {/* MODAL GOOGLE FORM */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4">
          <div className="glass-card-tight relative max-h-[90vh] w-full max-w-3xl overflow-hidden">
            {/* Header modal */}
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-slate-800">
                Biểu mẫu đăng ký “Có Hẹn Với Tây Bắc”
              </p>
              <button
                type="button"
                onClick={handleCloseForm}
                className="pill-outline px-3 py-1 text-[11px]"
              >
                Đóng
              </button>
            </div>

            {/* iFrame form */}
            <div className="h-[70vh] w-full overflow-hidden rounded-2xl bg-white">
              <iframe
                src={GOOGLE_FORM_EMBED_SRC}
                title="Google Form Đăng ký Có Hẹn Với Tây Bắc"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
