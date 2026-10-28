// pages/Beranda.jsx, Koleksi.jsx, Detail.jsx, Statistik.jsx
import useKoleksi from "../hooks/useKoleksi";

const { items } = useKoleksi();

export default function Koleksi() {
  return (
    <main>
      <h1>Koleksi</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>{item.nama}</h2>
            <p>{item.deskripsi}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}