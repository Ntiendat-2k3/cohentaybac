// src/components/ScheduleSection.jsx
import SectionTitle from "./layout/SectionTitle";

const allDay = [
  "09:00 – 18:00: Check-in & tham quan khu vực sự kiện",
  "09:00 – 18:00: Khám phá Không gian Ẩm thực Tây Bắc",
  "10:30 – 17:00: Trò chơi dân gian: nhảy bao bố, kéo co, ném còn..."
];

const timeline = [
  "09:00 – 09:30: Khai mạc chương trình",
  "10:00 – 10:30: Workshop ẩm thực hun khói",
  "14:00 – 15:30: Talkshow “Người Tây Bắc kể chuyện nhà”",
  "15:30 – 16:00: Đồng diễn nhảy sạp",
  "16:00 – 17:30: Tham quan & mua sắm đặc sản",
  "17:30 – 18:00: Bế mạc chương trình"
];

export default function ScheduleSection() {
  return (
    <section className="section-shell" id="lich-trinh">
      <SectionTitle
        eyebrow="Lịch trình"
        title="Một ngày trọn vẹn trải nghiệm"
      />
      <div className="section-grid-2">
        <div className="glass-card">
          <h3 className="mb-3 text-sm font-semibold text-emerald-800">
            Hoạt động cả ngày
          </h3>
          <ul className="list-dot">
            {allDay.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card">
          <h3 className="mb-3 text-sm font-semibold text-emerald-800">
            Khung giờ nổi bật
          </h3>
          <ul className="list-dot">
            {timeline.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
