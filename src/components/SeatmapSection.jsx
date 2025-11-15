import SectionTitle from "./layout/SectionTitle";

const zones = [
    {
        name: "Gia đình",
        type: "Ghế nệm",
        price: "199.000đ",
        seats: 6,
        note: "Khu trung tâm, sát sân khấu, phù hợp nhóm nhỏ muốn trải nghiệm trọn vẹn."
    },
    {
        name: "Bản làng",
        type: "Chiếu hoa (6 người/chiếu)",
        price: "179.000đ",
        seats: 24,
        note: "Mỗi bên 12 ghế – không khí quây quần như ngồi giữa bản."
    },
    {
        name: "Núi rừng",
        type: "Chiếu hoa (6 người/chiếu)",
        price: "169.000đ",
        seats: 24,
        note: "Mỗi bên 12 ghế – view bao quát sân khấu."
    },
    {
        name: "Suối nguồn",
        type: "Ghế tre",
        price: "149.000đ",
        seats: 48,
        note: "Mỗi bên 24 ghế – thoải mái, gần lối di chuyển."
    }, {
        name: "Mây ngàn",
        type: "Ghế tre",
        price: "139.000đ",
        seats: 48,
        note: "Mỗi bên 24 ghế – phù hợp bạn trẻ thích di chuyển, chụp ảnh."
    }
];

export default function SeatmapSection() {
    const total = zones.reduce((sum, z) => sum + z.seats, 0);

    return (<section className="mb-12 animate-fade-up [animation-delay:0.15s]">
        <SectionTitle eyebrow="Seatmap" title="Sơ đồ hạng vé"
            subtitle={
                `Tổng cộng ${total} ghế – chọn hạng vé phù hợp trải nghiệm của bạn`
            }/>
        <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
            <div className="rounded-3xl border border-white/50 bg-white/40 p-4 shadow-xl backdrop-blur-2xl">
                <img src="/assets/seetmap.png" alt="Sơ đồ hạng vé Có Hẹn Với Tây Bắc" className="w-full rounded-2xl shadow-lg"/>
            </div>
            <div className="grid gap-4"> {
                zones.map((zone) => (<article key={
                        zone.name
                    }
                    className="rounded-3xl border border-white/50 bg-white/40 p-4 text-xs text-slate-700 shadow-lg backdrop-blur-2xl sm:text-sm">
                    <div className="flex items-center justify-between gap-2">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900"> {
                                zone.name
                            } </h3>
                            <p className="mt-1 inline-flex rounded-full bg-emerald-100/80 px-2 py-0.5 text-[11px] font-medium text-emerald-900"> {
                                zone.type
                            } </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500">Giá từ</p>
                            <p className="text-base font-semibold text-rose-700"> {
                                zone.price
                            } </p>
                        </div>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">
                        Số ghế:
                        <span className="font-semibold"> {
                            zone.seats
                        }</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-600"> {
                        zone.note
                    }</p>
                </article>))
            } </div>
        </div>
    </section>);
}
