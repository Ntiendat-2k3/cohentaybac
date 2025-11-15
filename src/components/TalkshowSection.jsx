import SectionTitle from "./layout/SectionTitle";

const benefits = [
  "Gặp gỡ, trò chuyện trực tiếp với gia đình anh Hà – chị Thông.",
  "Nghe những câu chuyện đời, chuyện nghề và hành trình giữ gìn bản sắc.",
  "Hiểu hơn về văn hoá, con người Tây Bắc từ góc nhìn của chính người trong cuộc.",
  "Nhận quà tặng nhỏ xinh mang hương vị núi rừng dành riêng cho khách tham gia."
];

export default function TalkshowSection() {
  return (
    <section className="mb-12">
      <SectionTitle
        eyebrow="Talkshow"
        title='“Người Tây Bắc kể chuyện nhà”'
      />
      <div className="grid gap-6 md:grid-cols-[1.5fr,1fr]">
        <div className="rounded-3xl border border-white/40 bg-white/40 p-5 shadow-lg backdrop-blur-xl">
          <p className="mb-4 text-sm text-slate-700">
            Talkshow là dịp để bạn chậm lại giữa nhịp sống phố thị,
            lắng nghe những câu chuyện chân thật, mộc mạc nhưng đầy cảm
            hứng. Không phải những bài diễn thuyết hoa mỹ, mà là lời kể
            của người đang ngày ngày sống cùng núi rừng.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            {benefits.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-amber-200/60 bg-amber-50/70 p-5 text-sm font-medium text-amber-900 shadow-lg backdrop-blur-xl">
          <p>
            Đừng bỏ lỡ cơ hội “Có hẹn với Tây Bắc” ngay tại Hà Nội –
            nơi mỗi câu chuyện được kể bằng tiếng nói của núi rừng, mỗi
            nụ cười đều mang hương nắng, vị sương vùng cao.
          </p>
        </div>
      </div>
    </section>
  );
}
