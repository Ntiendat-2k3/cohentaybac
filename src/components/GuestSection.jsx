// src/components/GuestSection.jsx
import SectionTitle from "./layout/SectionTitle";

export default function GuestSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Khách mời"
        title="Gia đình anh Hà – chị Thông"
        subtitle="Những người làm du lịch từ chính mái nhà vùng cao."
      />
      <div className="section-grid-2">
        <p className="glass-card text-sm text-slate-700">
          Từ một ngôi nhà nhỏ ở Bản Liền (Lào Cai), anh Hà – chị Thông
          cùng bà con xây dựng nên PineHomestay được nhiều du khách
          yêu mến. Họ làm du lịch theo cách rất mộc: chân thành, giản
          dị và tôn trọng đất rừng.
        </p>
        <p className="glass-card text-sm text-slate-700">
          Đến với chương trình, gia đình sẽ kể những câu chuyện “nhà”:
          vì sao chọn ở lại với núi, giữ nghề, giữ bản sắc và đón khách
          gần xa. Ít lời hoa mỹ, nhưng nhiều cảm hứng sống chậm và sống
          thật.
        </p>
      </div>
    </section>
  );
}
