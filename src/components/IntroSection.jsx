import SectionTitle from "./layout/SectionTitle";

export default function IntroSection() {
    return (<section className="mb-12 animate-fade-up">
        <SectionTitle eyebrow="Giới thiệu" title="Không gian Tây Bắc thu nhỏ giữa lòng Hà Nội"/>
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
            <p className="rounded-3xl border border-white/40 bg-white/40 p-5 text-sm text-slate-700 shadow-lg backdrop-blur-xl">
                “Có hẹn với Tây Bắc” là nơi bạn được “chạm” vào tinh hoa vùng
                          cao ngay giữa Thủ đô. Âm nhạc dân tộc, ẩm thực truyền thống và
                          những bộ trang phục thổ cẩm rực rỡ hòa quyện tạo nên không gian
                          đậm đà bản sắc, đưa bạn vào hành trình khám phá đầy xúc cảm.
            </p>
            <p className="rounded-3xl border border-white/40 bg-white/40 p-5 text-sm text-slate-700 shadow-lg backdrop-blur-xl">
                Người dân Thủ đô được trải nghiệm phiên chợ Tây Bắc thu nhỏ,
                          thưởng thức đặc sản vùng cao, giao lưu với khách mời đặc biệt
                          và lưu giữ những bức hình rực rỡ sắc màu. Mỗi bước chân tại sự
                          kiện là một hành trình khám phá núi rừng, con người và văn hoá
                          Tây Bắc.
            </p>
        </div>
    </section>);
}
