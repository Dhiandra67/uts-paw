import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'
import Koleksi from './pages/Koleksi.jsx'

const DATA = [
  { id: '1', judul: 'Laptop Asus', kategori: 'Komputer', kodeAlat: 'KMP-01', jumlah: 5, kondisi: 'baik' },
  { id: '2', judul: 'Router Cisco', kategori: 'Jaringan', kodeAlat: 'JRG-01', jumlah: 2, kondisi: 'perlu servis' },
]

function renderDi(rute) {
  render(
    <MemoryRouter initialEntries={[rute]}>
      <App />
    </MemoryRouter>
  )
}

beforeEach(() => {
  localStorage.setItem('uts-paw-koleksi', JSON.stringify(DATA))
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('koleksi menampilkan semua item', () => {
  renderDi('/koleksi')
  expect(screen.getByText('Laptop Asus')).toBeInTheDocument()
  expect(screen.getByText('Router Cisco')).toBeInTheDocument()
})

test('pencarian menyaring daftar', async () => {
  const user = userEvent.setup()
  renderDi('/koleksi')

  await user.type(screen.getByLabelText('Cari judul'), 'router')

  expect(screen.queryByText('Laptop Asus')).not.toBeInTheDocument()
  expect(screen.getByText('Router Cisco')).toBeInTheDocument()
})
test('detail menampilkan field tema beserta labelnya', () => { renderDi ('/koleksi/1') 
    expect(screen.getByText('Jumlah')).toBeInTheDocument()
    expect(screen.getByText('Kode Alat')).toBeInTheDocument()
    expect(screen.getByText('KMP-01')).toBeInTheDocument()
    expect(screen.getByText('Kondisi')).toBeInTheDocument()
})

test('detail dengan id yang tidak ada menampilkan "tidak ditemukan"',()=> { renderDi('/koleksi/999')
    expect(screen.getByText(/tidak ditemukan/i)).toBeInTheDocument()
    expect(screen.queryByText(/404/)).not.toBeInTheDocument()
})
test ('Hapus menghapus item lalu kembali ke koleksi', async () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true)
    const user = userEvent.setup()
    renderDi('/koleksi/1')
    await user.click(screen.getByRole('button', {name : 'Hapus'}))

    expect(screen.getByRole('heading', {name: 'Koleksi'})).toBeInTheDocument()
    expect(screen.queryByText('Laptop Asus')).not.toBeInTheDocument()
})