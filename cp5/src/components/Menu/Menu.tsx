import Link from "next/link";

export default function Menu() {
    return (
      <div >
        <h1 className="text-blue-800 text-center text-4xl mt-12">Worlds in Collision - Immanuel Velikovsky</h1>
        <p className="text-gray-800 text-center text-lg leading-relaxed max-w-2xl mx-auto my-4">Worlds in Collision é um livro escrito por Immanuel Velikovsky que 
            discute catástrofes cósmicas envolvendo colisões de planetas no nosso sistema solar.
        </p>
        <nav>
          <ul className="flex gap-8 justify-center items-center text-lg h-[30vh]">
            <li><Link href="/veli1">Velikovsky Ideia 1</Link></li>
            <li><Link href="/veli2">Velikovsky Ideia 2</Link></li>
            <li><Link href="/veli3">Velikovsky Ideia 3</Link></li>
            <li><Link href="/calculo">Cálculo de Velikovsky</Link></li>
          </ul>
        </nav>
      </div>
    );
  }