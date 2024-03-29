import Fogo from "./Fogo";

export default function Footer() {
  return (
    <footer className={`z-10 bg-roxo bg-gradient-to-r from-indigo-500/20 via-transparent to-indigo-500/20 py-1 px-4 text-white`}>
      <div className="w-full max-w-[1440px] mx-auto">
        <ul className="flex items-center justify-between text-center text-[11px]">
          <li>© 2023 Equipe de Desenvolvimento de Sistemas</li>
          <li>
            <a
              rel="noreferrer"
              href="http://devs.mesquita.rj.gov.br/"
              target="_blank"
            >
              <Fogo
                className="inline"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              />
            </a>{" "}
            Subsecretaria de Tecnologia da Informação — Prefeitura Municipal de
            Mesquita
          </li>
          <li>
            Rua Arthur de Oliveira Vecchi, 120 - Centro - Mesquita - RJ - CEP:
            26553-080
          </li>
          <li>
            <a
              rel="noreferrer"
              href="https://lgpd.mesquita.rj.gov.br/?page_id=43"
              target="_blank"
            >
              Política de Privacidade
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
