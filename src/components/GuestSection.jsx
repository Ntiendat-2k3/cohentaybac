// src/components/GuestSection.jsx
import SectionTitle from "./layout/SectionTitle";

export default function GuestSection() {
  return (
    <section className="section-shell" id="khach-moi">
      <SectionTitle
        eyebrow="Khách mời đặc biệt"
        title="Gia đình anh Hà – chị Thông"
        subtitle="Những người làm du lịch từ chính mái nhà vùng cao."
      />

      {/* items-stretch để 2 cột cao bằng nhau từ md trở lên */}
      <div className="section-grid-2 md:items-stretch">
        {/* BÊN TRÁI: TEXT */}
        <div className="glass-card h-full text-sm text-slate-700 space-y-3">
          <p>
            Gia đình anh Hà – chị Thông, những con người “bình thường mà phi
            thường” của núi rừng Tây Bắc. Gia đình anh chị đã có nhiều đóng góp
            cho sự phát triển của mô hình du lịch Pine Homestay tại Bản Liền,
            Lào Cai. Với sự duyên dáng và chân chất, anh chị đã ghi dấu ấn khó
            quên với khán giả trong chương trình thực tế Gia đình HaHa.
          </p>
          <p>
            Anh chị sẽ mang đến lễ hội những câu chuyện đời giản dị nhưng đầy
            nghị lực về hành trình giữ gìn bản sắc dân tộc, về tình yêu đất,
            yêu nghề và niềm tự hào được sống cùng núi rừng.
          </p>
        </div>

        {/* BÊN PHẢI: ẢNH KHÁCH MỜI */}
        <div className="glass-card-tight h-full">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-md md:h-full">
            <img
              src="/assets/guest.png" 
              alt="Gia đình anh Hà – chị Thông tại Pine Homestay"
              className="h-full w-full object-cover"
            />

            {/* overlay nhẹ */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/90">
              <p className="font-semibold">
                Gia đình anh Hà – chị Thông tại Pine Homestay, Bản Liền (Lào Cai).
              </p>
              <p className="text-[10px] text-white/80">
                Những người giữ hồn bản sắc vùng cao và mang câu chuyện Tây Bắc
                đến với người trẻ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
