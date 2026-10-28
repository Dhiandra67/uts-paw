import { useParams, useNavigate, Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

// Ganti key dan label ini dengan tiga field tema sesuai NIM-mu.
const FIELD = [
  { key: 'judul', label: 'Judul' },
  { key: 'kategori', label: 'Kategori' },
  { key: 'jumlah', label: 'Jumlah' },
  { key: 'kodeAlat', label: 'Kode Alat' },
  { key: 'kondisi', label: 'Kondisi' }
]

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, error, hapus } = useKoleksi()

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

  function hapusItem() {
    hapus(item.id)
    navigate('/koleksi')
  }

  return (
    <section>
      <h1>{item.judul}</h1>
      <dl>
        {FIELD.map(({ key, label }) => (
          <div key={key}>
            <dt>{label}</dt>
            <dd>{item[key]}</dd>
          </div>
        ))}
      </dl>
      <button type="button" onClick={hapusItem}>Hapus</button>
      <Link to="/koleksi">Kembali ke koleksi</Link>
    </section>
  )
}