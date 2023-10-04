import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLinks = ({ extraClassName }) => {
  const router = useRouter();
  return (
    <ul className={`navigation ${extraClassName}`}>
      <li className={router.pathname === "/" ? "current" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={router.pathname === "/page-about" ? "current" : ""}>
        <Link href="/page-about">About</Link>
      </li>
      <li className={router.pathname === "/page-contact" ? "current" : ""}>
        <Link href="/page-contact">Contact</Link>
      </li>
      <li className={router.pathname === "/team" ? "current" : ""}>
        <Link href="/team">Team</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
