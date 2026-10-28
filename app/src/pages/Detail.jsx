import { useParams, Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const { items, loading, error } = useKoleksi()

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const item = items.find((x) => String(x.id) === id)

  if (!item) {
    return (
      <section>
        <p>Item tidak ditemukan.</p>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{item.judul}</h1>
      <p>Kategori: {item.kategori}</p>
      <Link to="/koleksi">Kembali ke koleksi</Link>
    </section>
  )
}