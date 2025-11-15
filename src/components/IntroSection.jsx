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
          “Có hẹn với Tây Bắc” mang không khí bản làng, chợ phiên và
          sắc màu thổ cẩm về giữa Hà Nội. Bạn có thể ăn món ngon vùng
          cao, nghe nhạc dân tộc và chụp những bức ảnh rực rỡ màu váy
          áo.
        </p>
        <p className="glass-card text-sm text-slate-700">
          Không cần đi xa, bạn vẫn được chạm vào câu chuyện của người
          Tây Bắc, hiểu hơn về cách họ sống, làm du lịch và giữ gìn
          bản sắc. Một ngày nhẹ nhàng nhưng đầy trải nghiệm.
        </p>
      </div>
    </section>
    </>

  );
}
