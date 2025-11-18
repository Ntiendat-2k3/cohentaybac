// src/components/IntroSection.jsx
import SectionTitle from "./layout/SectionTitle";

export default function IntroSection() {
  return (
    <>
    <div className="mt-8"></div>
    <section className="section-shell" id="gioi-thieu">
      <SectionTitle
        eyebrow="Giới thiệu"
        title="Tây Bắc giữa lòng Hà Nội"
        subtitle="Một phiên chợ nhỏ, đủ hương núi gió ngàn."
      />
      <div className="section-grid-2">
        <p className="glass-card text-sm text-slate-700">
          “Có hẹn với Tây Bắc” nơi bạn được “chạm” vào tinh hoa vùng cao ngay giữa lòng Hà Nội. Âm nhạc dân tộc, ẩm thực truyền thống và những bộ trang phục thổ cẩm rực rỡ, tất cả hòa quyện tạo nên không gian đậm đà bản sắc, đưa bạn vào hành trình khám phá đầy xúc cảm.
        </p>
        <p className="glass-card text-sm text-slate-700">
          Người dân Thủ Đô được trải nghiệm phiên chợ Tây Bắc thu nhỏ, thưởng thức đặc sản vùng cao, giao lưu với những khách mời đặc biệt và lưu giữ những bức hình rực rỡ sắc màu. Sự kiện chính là không gian văn hóa đậm đà bản sắc núi rừng, nơi mỗi bước chân đều là một hành trình khám phá.
        </p>
      </div>
    </section>
    </>

  );
}
