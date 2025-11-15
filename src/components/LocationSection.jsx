import SectionTitle from "./layout/SectionTitle";

export default function LocationSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Địa điểm"
        title="Làm sao để đến với “Có hẹn với Tây Bắc”?"
      />
      <div className="section-grid-2">
        <div className="glass-card text-sm text-slate-700">
          <p className="mb-2">
            📍 <b>An Hội An Cà Phê</b> – C3107, Đường Lê Trọng Tấn, Hà
            Đông, Hà Nội
          </p>
          <p className="mb-4">⏰ 09:00 – 18:00, ngày 07/12/2025</p>
          <a
            href="https://maps.app.goo.gl/cwQXsCFGDeGkXDLV9?g_st=ipc"
            target="_blank"
            rel="noreferrer"
            className="pill-outline"
          >
            Mở bản đồ trên Google Maps
          </a>
        </div>
        <div className="flex items-stretch hidden lg:block">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.369442291282!2d105.7597073!3d20.977822900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134536006da824b%3A0x4308892004cfa46b!2zQW4gSOG7mWkgQW4gQ8OgIFBow6ogY8ahIHPhu58gRMawxqFuZyBO4buZaQ!5e0!3m2!1svi!2s!4v1763213744433!5m2!1svi!2s" className="glass-card w-full" style={{ border: 0, minHeight: '350px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bản đồ Google Maps đến An Hội An Cà Phê"></iframe>
        </div>
      </div>
    </section>
  );
}
