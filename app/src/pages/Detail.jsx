import { useParams } from "react-router-dom";
const { id } = useParams();
import useKoleksi from "../hooks/useKoleksi";

const { items } = useKoleksi();
export default Koleksi;