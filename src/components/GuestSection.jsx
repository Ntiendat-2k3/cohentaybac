// src/components/GuestSection.jsx
import SectionTitle from "./layout/SectionTitle";

export default function GuestSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Khách mời đặc biệt"
        title="Gia đình anh Hà – chị Thông"
        subtitle="Những người làm du lịch từ chính mái nhà vùng cao."
      />
      <div className="section-grid-2">
        <p className="glass-card text-sm text-slate-700">
          Gia đình anh Hà chị Thông, Những con người “ bình thường mà phi thường” của núi rừng Tây Bắc. Gia đình anh chị đã có nhiều đóng góp cho sự phát triển của mô hình du lịch PineHomestay tại Bản Liền- Lào Cai. Với sự duyên dáng và chân chất anh chị đã ghi dấu ấn khó quên với khán giả trong chương trình thực tế Gia đình HaHa.
        </p>
        <p className="glass-card text-sm text-slate-700">
          Anh, chị sẽ mang đến lễ hội những câu chuyện đời giản dị nhưng đầy nghị lực  về hành trình giữ gìn bản sắc dân tộc, về tình yêu đất, yêu nghề, và niềm tự hào được sống cùng núi rừng.
        </p>
      </div>
    </section>
  );
}
