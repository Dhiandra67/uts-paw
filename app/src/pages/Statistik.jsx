import useKoleksi from '../hooks/useKoleksi.js'
import RingkasanKategori from '../components/RingkasanKategori.jsx'
import './Statistik.css'

export default function Statistik() {
  const { items } = useKoleksi()

  return (
    <section>
      <h1>Statistik</h1>
      <div className="tabel-gulir">
        <table className="tabel-data">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <RingkasanKategori items={items} />
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td>{items.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}