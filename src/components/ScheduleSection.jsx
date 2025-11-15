import SectionTitle from "./layout/SectionTitle";

const allDay = [
  "09:00 – 18:00: Check-in & tham quan khu vực sự kiện",
  "09:00 – 18:00: Khám phá Không gian Ẩm thực Tây Bắc",
  "10:30 – 17:00: Trò chơi dân gian: nhảy bao bố, kéo co, ném còn..."
];

const timeline = [
  "09:00 – 09:30: Khai mạc chương trình",
  "09:30 – 10:00: Hoạt động tự do – Chụp ảnh, tham quan gian hàng",
  "10:00 – 10:30: Workshop “Ẩm thực hun khói – Nét văn hóa đặc sắc của các dân tộc Tây Bắc”",
  "13:30 – 14:00: Đón khách giao lưu",
  "14:00 – 15:30: Talkshow “Người Tây Bắc kể chuyện nhà” – Giao lưu khách mời",
  "15:30 – 16:00: Đồng diễn nhảy sạp",
  "16:00 – 17:30: Hoạt động tự do – Check-in & mua sắm đặc sản vùng cao",
  "17:30 – 18:00: Bế mạc chương trình – Tổng kết và chia tay"
];

export default function ScheduleSection() {
  return (
    <section className="mb-12" id="schedule">
      <SectionTitle
        eyebrow="Lịch trình"
        title="Một ngày ngập tràn trải nghiệm"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/40 bg-white/40 p-5 shadow-lg backdrop-blur-xl">
          <h3 className="mb-3 text-sm font-semibold text-emerald-800">
            Hoạt động diễn ra cả ngày
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {allDay.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/40 bg-white/40 p-5 shadow-lg backdrop-blur-xl">
          <h3 className="mb-3 text-sm font-semibold text-emerald-800">
            Khung giờ nổi bật
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {timeline.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
