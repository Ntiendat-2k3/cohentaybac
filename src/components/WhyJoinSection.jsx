import SectionTitle from "./layout/SectionTitle";

const reasons = [
  "Thưởng thức ẩm thực đặc sản vùng cao: cơm lam, thịt trâu gác bếp… chan chứa tình người bản địa.",
  "Đắm mình trong âm nhạc và vũ điệu Tây Bắc – âm thanh núi rừng và tiếng hát mộc mạc.",
  "Check-in tại khu “Chợ phiên thu nhỏ” rực rỡ sắc màu, mỗi góc là một bức tranh sống động.",
  "Mua sắm đặc sản và quà tặng được làm bằng bàn tay & trái tim của người con Tây Bắc.",
  "Nhận quà Tây Bắc hấp dẫn khi đăng ký trước hoặc tham gia minigame tại sự kiện."
];

export default function WhyJoinSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Vì sao nên tham gia?"
        title="Một ngày trọn vẹn hương núi gió ngàn"
      />
      <div className="section-grid-3">
        {reasons.map((item) => (
          <article key={item} className="glass-card text-sm text-slate-700">
            <div className="mb-2 h-1 w-10 rounded-full bg-emerald-300/80" />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
