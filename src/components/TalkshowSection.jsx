// src/components/TalkshowSection.jsx
import SectionTitle from "./layout/SectionTitle";

const benefits = [
  "Gặp gỡ Gia đình anh Hà chị Thông, những con người “bình thường mà phi thường” của núi rừng Tây Bắc",
  "Nghe kể những câu chuyện đời, chuyện nghề, chuyện giữ hồn bản sắc giữa thời hiện đại.",
  "Trải nghiệm không gian văn hóa gần gũi  nơi mỗi lời nói, mỗi nụ cười đều mang hương núi, vị sương.",
  "Nhận quà tặng đặc biệt từ ban tổ chức dành riêng cho khách tham gia talkshow.."
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
            Đừng để mình lạc giữa phố thị mà bỏ lỡ cơ hội chạm vào hơi thở núi rừng Tây Bắc. Đăng ký tham gia chương trình Talkshow “Người Tây Bắc kể chuyện nhà” để lắng nghe và thấu cảm những câu chuyện chân thật, bình dị mà sâu lắng từ chính người con của vùng cao.
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
