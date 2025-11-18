import SectionTitle from "./layout/SectionTitle";

const allDay = [
  {
    time: "09:00 – 18:00",
    text: "Check-in & tham quan khu vực sự kiện."
  },
  {
    time: "09:00 – 18:00",
    text: "Khám phá Không gian Ẩm thực Tây Bắc."
  },
  {
    time: "10:30 – 17:00",
    text: "Tham gia trò chơi dân gian: nhảy bao bố, kéo co, ném còn..."
  }
];

const timeline = [
  {
    time: "09:00 – 09:30",
    title: "Khai mạc chương trình",
    desc: ""
  },
  {
    time: "09:30 – 10:00",
    title: "Hoạt động tự do",
    desc: "Chụp ảnh, tham quan gian hàng."
  },
  {
    time: "10:00 – 10:30",
    title: "Workshop ẩm thực hun khói",
    desc: "“Ẩm thực hun khói – Nét văn hóa đặc sắc của các dân tộc Tây Bắc”."
  },
  {
    time: "13:30 – 14:00",
    title: "Đón khách giao lưu",
    desc: ""
  },
  {
    time: "14:00 – 15:30",
    title: "Talkshow “Người Tây Bắc kể chuyện nhà”",
    desc: "Giao lưu cùng gia đình anh Hà – chị Thông."
  },
  {
    time: "15:30 – 16:00",
    title: "Đồng diễn nhảy sạp",
    desc: ""
  },
  {
    time: "16:00 – 17:30",
    title: "Hoạt động tự do",
    desc: "Check-in & mua sắm đặc sản vùng cao."
  },
  {
    time: "17:30 – 18:00",
    title: "Bế mạc chương trình",
    desc: "Tổng kết và chia tay."
  }
];

export default function ScheduleSection() {
  return (
    <section className="section-shell" id="lich-trinh">
      <SectionTitle
        eyebrow="Lịch trình"
        title="Một ngày trọn vẹn trải nghiệm"
        subtitle="Giữ cho mình cả ngày rảnh để không bỏ lỡ bất kỳ khoảnh khắc nào."
      />

      <div className="section-grid-2">
        {/* Cột trái: hoạt động cả ngày */}
        <div className="glass-card">
          <h3 className="mb-3 text-sm font-semibold text-emerald-800">
            Hoạt động diễn ra xuyên suốt
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            {allDay.map((item) => (
              <li key={item.time} className="flex gap-3">
                <span className="mt-[3px] min-w-[110px] text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {item.time}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột phải: timeline theo khung giờ */}
        <div className="glass-card">
          <h3 className="mb-3 text-sm font-semibold text-emerald-800">
            Khung giờ nổi bật trong ngày
          </h3>
          <ol className="relative border-l border-emerald-100 pl-4 text-sm text-slate-700">
            {timeline.map((item, idx) => (
              <li key={item.time} className="mb-4 last:mb-0">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-white bg-emerald-400 shadow" />
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {item.time}
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                {item.desc && (
                  <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
