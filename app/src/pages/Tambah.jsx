import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

const KATEGORI = ['Komputer', 'Jaringan', 'Elektronika', 'Alat Ukur']
const KONDISI = ['baik', 'perlu servis', 'rusak']

export default function Tambah() {
  const navigate = useNavigate()
  const { tambah, loading } = useKoleksi()
  const [form, setForm] = useState({
    judul: '',
    kategori: KATEGORI[0],
    kodeAlat: '',
    jumlah: 1,
    kondisi: KONDISI[0],
  })
  const [errorJudul, setErrorJudul] = useState('')

  function ubah(e) {
    const { name, value } = e.target
    setForm((lama) => ({ ...lama, [name]: value }))
    if (name === 'judul' && errorJudul) setErrorJudul('')
  }

  function simpan(e) {
    e.preventDefault()
    const judul = form.judul.trim()
    if (!judul) {
      setErrorJudul('Judul alat tidak boleh kosong.')
      return
    }
    tambah({
      ...form,
      judul,
      kodeAlat: form.kodeAlat.trim(),
      jumlah: Math.max(0, Number(form.jumlah) || 0),
    })
    navigate('/koleksi')
  }

  return (
    <section>
      <h1>Tambah Alat</h1>
      <form onSubmit={simpan} noValidate>
        <div>
          <label htmlFor="judul">Judul alat</label>
          <input
            id="judul"
            name="judul"
            type="text"
            value={form.judul}
            onChange={ubah}
            aria-invalid={errorJudul ? 'true' : 'false'}
            aria-describedby={errorJudul ? 'error-judul' : undefined}
          />
          {errorJudul && (
            <p id="error-judul" role="alert">
              {errorJudul}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="kategori">Kategori</label>
          <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
            {KATEGORI.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="kodeAlat">Kode Alat</label>
          <input id="kodeAlat" name="kodeAlat" type="text" value={form.kodeAlat} onChange={ubah} />
        </div>
        <div>
          <label htmlFor="jumlah">Jumlah</label>
          <input id="jumlah" name="jumlah" type="number" min="0" value={form.jumlah} onChange={ubah} />
        </div>
        <div>
          <label htmlFor="kondisi">Kondisi</label>
          <select id="kondisi" name="kondisi" value={form.kondisi} onChange={ubah}>
            {KONDISI.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={loading}>Simpan</button>
      </form>
    </section>
  )
}