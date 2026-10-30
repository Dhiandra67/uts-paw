import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="beranda">
      <h1>Inventaris Laboratorium</h1>
      <p className="beranda-tema">Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p className="beranda-ringkasan">
          Ada {items.length} item dalam {jumlahKategori} kategori.
        </p>
      )}
      <Link className="beranda-tombol" to="/koleksi">
        Lihat semua item
      </Link>
    </section>
  )
}