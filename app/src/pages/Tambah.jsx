import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
// ...setelah simpan:
navigate("/koleksi");
export default function Tambah() {
  return (
    <main>
      <h1>Tambah Item</h1>
      <form>
        <label>
          Nama:
          <input type="text" name="nama" />
        </label>
        <label>
          Deskripsi:
          <textarea name="deskripsi" />
        </label>
        <button type="submit">Simpan</button>
      </form>
    </main>
  )
}