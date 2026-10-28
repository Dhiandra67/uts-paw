import useKoleksi from "../hooks/useKoleksi";

const { items } = useKoleksi();

export default function Statistik() {
  return (
    <main>
      <h1>Statistik</h1>
      <p>Total item: {items.length}</p>
    </main>
  )
}