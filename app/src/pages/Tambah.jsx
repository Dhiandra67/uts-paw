import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const KATEGORI = ['Komputer', 'Jaringan', 'Periferal', 'Peralatan Laboratorium', 'Perangkat Output', 'Peralatan Jaringan','Perangkat Pendukung']
const KONDISI = ['Baik', 'Perlu servis', 'Rusak']

const AWAL = {
  judul: '',
  kategori: KATEGORI[0],
  kodeAlat: '',
  jumlah: 1,
  kondisi: KONDISI[0],
}

export default function Tambah() {
  const navigate = useNavigate()
  const { tambah, loading } = useKoleksi()
  const [form, setForm] = useState(AWAL)
  const [errorJudul, setErrorJudul] = useState('')

  function handleUbah(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (name === 'judul') setErrorJudul('')
  }

  function handleSimpan(e) {
    e.preventDefault()

    if (!form.judul.trim()) {
      setErrorJudul('Judul wajib diisi')
      return
    }

    tambah({
      ...form,
      judul: form.judul.trim(),
      jumlah: Number(form.jumlah),
    })
    navigate('/koleksi')
  }

  return (
    <section>
      <h1>Tambah Alat</h1>
      <form className="formulir" onSubmit={handleSimpan} noValidate>
        <label htmlFor="judul">Judul</label>
        <input id="judul" name="judul" type="text" value={form.judul} onChange={handleUbah} />
        {errorJudul && <p role="alert">{errorJudul}</p>}

        <label htmlFor="kategori">Kategori</label>
        <select id="kategori" name="kategori" value={form.kategori} onChange={handleUbah}>
          {KATEGORI.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>

        <label htmlFor="kodeAlat">Kode Alat</label>
        <input id="kodeAlat" name="kodeAlat" type="text" value={form.kodeAlat} onChange={handleUbah} />

        <label htmlFor="jumlah">Jumlah</label>
        <input id="jumlah" name="jumlah" type="number" min="0" value={form.jumlah} onChange={handleUbah} />

        <label htmlFor="kondisi">Kondisi</label>
        <select id="kondisi" name="kondisi" value={form.kondisi} onChange={handleUbah}>
          {KONDISI.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>

        <button type="submit" disabled={loading}>Simpan</button>
      </form>
    </section>
  )
}