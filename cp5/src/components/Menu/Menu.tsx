import Link from "next/link";

export default function Menu() {
    return (
      <div>
        <h1>Worlds in Collision - Immanuel Velikovsky</h1>
        <p>Worlds in Collision é um livro escrito por Immanuel Velikovsky que 
            discute catástrofes cósmicas envolvendo colisões de planetas no nosso sistema solar.
        </p>
        <nav>
          <ul>
            <li><Link href="/velikovsky-idea1.tsx">Velikovsky Ideia 1</Link></li>
            <li><Link href="/velikovsky-idea2.tsx">Velikovsky Ideia 2</Link></li>
            <li><Link href="/velikovsky-idea3.tsx">Velikovsky Ideia 3</Link></li>
            <li><Link href="/calculation.tsx">Cálculo de Velikovsky</Link></li>
          </ul>
        </nav>
      </div>
    );
  }