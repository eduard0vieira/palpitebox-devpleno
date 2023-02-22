import React from "react";

const Footer = () => {
  return (
    <div className="pt-60">
      <div className="bg-gray-700 sticky top-0 p-5 position: sticky ">
        <div className="container mx-auto text-center font-bold text-white">
          Projeto desenvolvido por Eduardo Vieira /
          <a className="hover:underline" href="https://www.linkedin.com/in/eduardo-vieira-328418232/">
            Linkedin{" "}
          </a>{" "}
          /
          <a className="hover:underline" href="https://github.com/eduard0vieira">
            GitHub
          </a>{" "}
          <div className="mt-2">
            <img className="inline p-4" src="/logo_semana_fsm.png" alt="Logo Semana "></img>
            <img className="inline p-4" src="/logo_devpleno.png" alt="Logo DevPleno"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
