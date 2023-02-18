import React from "react";
import Link from "next/link";

const contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <div>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
        <Link legacyBehavior href="/sobre">
          <a>Sobre</a>
        </Link>
        <Link legacyBehavior href="/pesquisa">
          <a>Pesquisa</a>
        </Link>
      </div>
    </div>
  );
};

export default contato;
