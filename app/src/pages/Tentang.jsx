import mahasiswa from '../../mahasiswa.json'

const REPO = 'https://github.com/Dhiandra67/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Tentang</h1>
      <dl>
        <dt>Rasya Dhiandra Bangsawan</dt>
        <dd>{nama}</dd>
        <dt>124140163</dt>
        <dd>{nim}</dd>
        <dt>RA</dt>
        <dd>{kelas}</dd>
        <dt>Inventaris Laboratorium</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}