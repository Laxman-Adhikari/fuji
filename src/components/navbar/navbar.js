
import Link from "next/link";
import "@/css/navbar/navbar.css";
import Image from "next/image";

export default function Navbar() {






  return (



    <>
      <nav>
        <Image
        className={"logo"}
        src="/logo.svg"
        alt=""
        width={50}
        height={50}
        priority
        />
        <ul>
          <li>
            <Image
            className={"icon"}
            src="/img/buttons/home.svg"
            alt=""
            width={30}
            height={20}
            priority
            / >
            <Link href="/">Home</Link>
          </li>
          <li>
          <Image
            className={"icon"}
            src="/img/buttons/more.svg"
            alt=""
            width={30}
            height={20}
            priority
            / >
            <Link href="/more"> About </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
