import Image from 'next/image';
const NotFound = () => (
  <div>
    <h1>404 - Página Não Encontrada</h1>
    <Image src="/./../public/img/cp5/public/img/page-not-found-404.png" alt="Ilustração de Erro" width={500} height={300} />
  </div>
);
export default NotFound;
