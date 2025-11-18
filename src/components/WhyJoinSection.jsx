import SectionTitle from "./layout/SectionTitle";

// Mỗi lý do có: title + text + 1-2 ảnh
const reasons = [
  {
    title: "Thưởng thức ẩm thực vùng cao",
    text:
      "Từ cơm lam, thịt trâu gác bếp đến những món ăn giản dị mà chan chứa tình người bản địa.",
    images: ["/assets/wjs1-1.png", "/assets/wjs1-2.png"]
  },
  {
    title: "Đắm mình trong âm nhạc & vũ điệu",
    text:
      "Âm thanh núi rừng hòa cùng tiếng hát mộc mạc, kể những câu chuyện về đất, về người.",
    images: ["/assets/wjs2-1.png"]
  },
  {
    title: "Check-in chợ phiên thu nhỏ",
    text:
      "Sắc màu thổ cẩm, váy áo và nụ cười vùng cao – mỗi góc ảnh là một bức tranh sống động về văn hoá Việt.",
    images: ["/assets/wjs3-1.png"]
  },
  {
    title: "Mua sắm đặc sản & quà tặng",
    text:
      "Những sản phẩm vùng cao được làm bằng bàn tay và trái tim của người con Tây Bắc, mộc mạc mà chân thành.",
    images: ["/assets/wjs4-1.png"]
  },
  {
    title: "Quà Tây Bắc & minigame",
    text:
      "Nhận quà Tây Bắc xinh xắn khi đăng ký trước hoặc tham gia minigame trong ngày sự kiện.",
    images: ["/assets/wjs5-1.png", "/assets/wjs5-2.png"]
  }
];

export default function WhyJoinSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Vì sao nên tham gia?"
        title="Một ngày trọn vẹn hương núi gió ngàn"
        subtitle="Mỗi góc nhỏ của sự kiện đều có một trải nghiệm đáng nhớ."
      />

      {/* Desktop: 2 cột; Mobile: 1 cột, card thấp hơn */}
      <div className="section-grid-2">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="glass-card text-xs text-slate-700 sm:text-sm"
          >
            <div className="flex gap-3 sm:flex-col">
              {/* ẢNH – MOBILE: thumbnail nhỏ bên trái */}
              <div className="sm:hidden">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={reason.images[0]}
                    alt={reason.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* ẢNH – DESKTOP/TABLET: ảnh lớn / grid 2 ảnh */}
              <div className="hidden sm:block">
                {reason.images.length === 1 ? (
                  <div className="relative h-[200px] w-full overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={reason.images[0]}
                      alt={reason.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="grid h-[200px] grid-cols-2 gap-2">
                    {reason.images.slice(0, 2).map((src) => (
                      <div
                        key={src}
                        className="relative h-full w-full overflow-hidden rounded-2xl shadow-md"
                      >
                        <img
                          src={src}
                          alt={reason.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* NỘI DUNG CHỮ */}
              <div className="flex-1">
                <h3 className="mb-1 text-[13px] font-semibold text-slate-900 sm:text-sm">
                  {reason.title}
                </h3>
                <p className="leading-snug sm:leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
