import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <p className="mt-6 text-center">
        O restaurante X sempre busca por atender melhor seus clientes.
        <br />
        Por isso,estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className="text-center my-12">
        <Link legacyBehavior href="/pesquisa">
          <a className="bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow">Dar opinião ou sugestão</a>
        </Link>
      </div>
      <p className="my-12 text-center">
        Mensagem do Desconto.
      </p>
    </div>
  );
};

export default index;
