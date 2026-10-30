import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {MemoryRouter} from 'react-router-dom'
import {beforeEach, expect, test} from 'vitest'
import App from './App.jsx'

const DATA = [
  {id: '1', judul: 'Laptop Asus', kategori: 'Komputer', kodeAlat: 'KMP-01', jumlah: 5, kondisi: 'baik'},
  {id: '2', judul: 'Router Cisco', kategori: 'Jaringan', kodeAlat: 'JRG-01', jumlah: 2, kondisi: 'perlu servis'},
]

function renderDi(rute) {
  return render(
    <MemoryRouter initialEntries={[rute]}>
      <App />
    </MemoryRouter>,
  )
}

beforeEach(() => {
  localStorage.setItem('uts-paw-koleksi', JSON.stringify(DATA))
})

test('halaman koleksi menampilkan semua item tersimpan', () => {
  renderDi('/koleksi')
  expect(screen.getByText('Laptop Asus')).toBeInTheDocument()
  expect(screen.getByText('Router Cisco')).toBeInTheDocument()
})

test('pencarian menyaring daftar koleksi', async () => {
  const user = userEvent.setup()
  renderDi('/koleksi')
  await user.type(screen.getByLabelText('Cari judul'), 'router')
  expect(screen.queryByText('Laptop Asus')).not.toBeInTheDocument()
  expect(screen.getByText('Router Cisco')).toBeInTheDocument()
})
