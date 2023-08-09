import logo from "./assets/logo.png";

export default function Navbar() {

  return (
    <header
      className={`z-10 flex bg-dourado bg-gradient-to-br from-red-500/5 via-transparent to-indigo-500/5 px-6 text-2xl font-bold text-white shadow shadow-black/30`}
    >
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div className="w-1/2 md:w-1/3">
          <a rel="noreferrer" target="_blank" href="https://tecnologia360.mesquita.rj.gov.br/portal/">
            <img
              src={logo}
              width={212}
              height={70}
              alt="Mesquita SGP"
              className="py-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
            />
          </a>
        </div>
        <div className="w-1/2 md:w-1/3 text-center">
          <a rel="noreferrer" target="_blank" href="https://tecnologia360.mesquita.rj.gov.br/portal/">MESQUITA</a>
        </div>
        <div className="md:w-1/3"></div>
      </div>
    </header>
  );
}
