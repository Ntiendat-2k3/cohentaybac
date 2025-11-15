import SectionTitle from "./layout/SectionTitle";

export default function GuestSection() {
  return (
    <section className="mb-12">
      <SectionTitle
        eyebrow="Khách mời"
        title="Gia đình anh Hà – chị Thông"
        subtitle="Những người con “bình thường mà phi thường” của núi rừng Tây Bắc"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <p className="rounded-3xl border border-white/40 bg-white/40 p-5 text-sm text-slate-700 shadow-lg backdrop-blur-xl">
          Gia đình anh Hà – chị Thông là những người đã đóng góp rất
          nhiều cho sự phát triển của mô hình du lịch PineHomestay tại
          Bản Liền – Lào Cai. Từ một ngôi nhà nhỏ bên sườn núi, anh chị
          đã cùng người dân nơi đây xây dựng nên điểm đến được nhiều du
          khách yêu mến.
        </p>
        <p className="rounded-3xl border border-white/40 bg-white/40 p-5 text-sm text-slate-700 shadow-lg backdrop-blur-xl">
          Tại lễ hội, anh chị sẽ mang đến những câu chuyện đời giản dị
          nhưng đầy nghị lực về hành trình giữ gìn bản sắc dân tộc, tình
          yêu đất, yêu nghề và niềm tự hào được sống cùng núi rừng.
          Những câu chuyện “nhà” nhưng chạm đến trái tim của bất cứ ai
          từng yêu Tây Bắc.
        </p>
      </div>
    </section>
  );
}
