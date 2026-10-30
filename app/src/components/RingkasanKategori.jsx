export default function RingkasanKategori({ items }) {
  const perKategori = items.reduce(
    (hitung, { kategori }) => ({ ...hitung, [kategori]: (hitung[kategori] ?? 0) + 1 }),
    {},
  )

  return (
    <>
      {Object.entries(perKategori).map(([kategori, jumlah]) => (
        <tr key={kategori}>
          <td>{kategori}</td>
          <td>{jumlah}</td>
        </tr>
      ))}
    </>
  )
}