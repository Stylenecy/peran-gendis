/**
 * Latar halaman.
 *
 * Sebelumnya komponen ini memutar video autoplay dari CloudFront pihak ketiga
 * di SETIAP halaman. Itu berarti unduhan berukuran megabyte, dekode video terus
 * menerus (boros baterai & CPU di HP kelas menengah), ketergantungan ke host
 * luar, dan gerak yang tidak bisa dimatikan pengguna.
 *
 * Diganti gradien + tekstur kertas murni CSS: nol permintaan jaringan,
 * nol beban dekode, dan diam total saat pengguna minta kurangi gerak.
 */
export default function PageBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 pg-grain" aria-hidden="true">
      {/* Sapuan hangat dari sudut — meniru cahaya yang jatuh di kertas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 0%, #fdf4e6 0%, transparent 55%), radial-gradient(100% 80% at 100% 10%, #fbe9f2 0%, transparent 50%), linear-gradient(180deg, #faf6ef 0%, #f6efe4 100%)",
        }}
      />
    </div>
  );
}
