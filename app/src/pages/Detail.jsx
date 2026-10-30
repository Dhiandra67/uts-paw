import { useParams, useNavigate, Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, error, hapus } = useKoleksi()

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const item = items.find((i) => String(i.id) === id)

  if (!item) {
    return (
      <section>
        <p>Item tidak ditemukan.</p>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  function handleHapus() {
    if (!window.confirm(`Hapus "${item.judul}"?`)) return
    hapus(item.id)
    navigate('/koleksi')
  }

  return (
    <section>
      <h1>{item.judul}</h1>
      <dl>
        <div>
          <dt>Jumlah</dt>
          <dd>{item.jumlah}</dd>
        </div>
        <div>
          <dt>Kode Alat</dt>
          <dd>{item.kodeAlat}</dd>
        </div>
        <div>
          <dt>Kondisi</dt>
          <dd>{item.kondisi}</dd>
        </div>
      </dl>
      <button type="button" onClick={handleHapus}>Hapus</button>
      <Link to="/koleksi">Kembali ke koleksi</Link>
    </section>
  )
}