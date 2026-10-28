// pages/Beranda.jsx, Koleksi.jsx, Detail.jsx, Statistik.jsx
import useKoleksi from "../hooks/useKoleksi";

const { items } = useKoleksi();
// Buat tujuh berkas ini di src/pages/ dengan isi sementara seperti ini.
// Isinya diganti satu per satu saat mengikuti panduan setiap halaman.
export default function Beranda() {
  return (
    <main>
      <h1>Beranda</h1>
      <p>Selamat datang di Inventaris Laboratorium!</p>
    </main>
  )
}