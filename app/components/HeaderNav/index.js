import Image from "next/image";
import styles from "./headerNav.module.css"
import Link from "next/link";
export default function HeaderNav({ usuario }) {
  return (
    <header>
        <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/contacto"}>Contacto</Link></li>
        </ul>
        
    </header>
  );
}
