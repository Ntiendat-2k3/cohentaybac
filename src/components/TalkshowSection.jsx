// src/components/TalkshowSection.jsx
import SectionTitle from "./layout/SectionTitle";

const benefits = [
  "Gặp gỡ gia đình anh Hà – chị Thông, những con người “bình thường mà phi thường” của Tây Bắc.",
  "Nghe chuyện nhà, chuyện làm du lịch và cách họ giữ bản sắc giữa đời sống hiện đại.",
  "Cảm nhận không gian gần gũi, nơi mỗi lời nói đều mang hương núi, vị sương.",
  "Nhận quà nhỏ xinh và trải nghiệm đặc sản dành riêng cho khách tham gia."
];

export default function TalkshowSection() {
  return (
    <section className="section-shell" id="talkshow">
      <SectionTitle
        eyebrow="Talkshow"
        title='“Người Tây Bắc kể chuyện nhà”'
      />

      {/* items-start để card không bị kéo bằng nhau */}
      <div className="section-grid-2 md:items-start">
        {/* Bên trái: nội dung */}
        <div className="glass-card">
          <p className="mb-4 text-sm text-slate-700">
            Talkshow là khoảng lặng giữa nhịp sống phố thị để nghe những
            câu chuyện rất đời của người vùng cao: ở lại hay rời đi,
            làm du lịch hay làm nông, giữ hay bỏ những điều thuộc về
            núi rừng.
          </p>
          <ul className="list-dot">
            {benefits.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bên phải: ảnh talkshow (cao vừa phải) */}
        <div className="glass-card-tight flex items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-72">
            <img
              src="/assets/talkshow.png"
              alt="Không khí Talkshow Người Tây Bắc kể chuyện nhà"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90">
              <p className="font-medium">
                Khoảnh khắc ngồi nghe chuyện “nhà” ngay giữa lòng Hà Nội.
              </p>
              <p className="text-[11px] text-white/80">
                Ấm cúng, gần gũi như đang ngồi bên hiên nhà vùng cao.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
