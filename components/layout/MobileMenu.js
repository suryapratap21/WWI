import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const MobileMenu = ({ handleRemove }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const [isSubActive, setSubIsActive] = useState({
    status: false,
    key: "",
  });

  const handleSubClick = (key) => {
    if (isSubActive.key === key) {
      setSubIsActive({
        status: false,
      });
    } else {
      setSubIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation clearfix">
        <li
          onClick={handleRemove}
          className={router.pathname === "/" ? "current" : ""}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          onClick={handleRemove}
          className={router.pathname === "/page-about" ? "current" : ""}
        >
          <Link href="/page-about">About Us</Link>
        </li>
        <li
          onClick={handleRemove}
          className={router.pathname === "/page-contact" ? "current" : ""}
        >
          <Link href="/page-contact">Contact</Link>
        </li>
        <li
          onClick={handleRemove}
          className={router.pathname === "/team" ? "current" : ""}
        >
          <Link href="/team">Team</Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
