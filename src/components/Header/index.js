import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <Link legacyBehavior href="/">
            <a>
              <img
                className="mx-auto"
                src="/logo_palpitebox.png"
                alt="Logo Palpite Box"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.nav}>
        <Link legacyBehavior href="/sobre">
          <a className="px-2 hover:underline">Sobres</a>
        </Link>
        <Link legacyBehavior href="/contato">
          <a className="px-2 hover:underline">Contato</a>
        </Link>
        <Link legacyBehavior href="/pesquisa">
          <a className="px-2 hover:underline">Pesquisa</a>
        </Link>
      </div>
    </>
  );
};

export default Header;
