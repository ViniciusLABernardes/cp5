import Image from 'next/image';
const NotFound = () => (
  <div>
    <main>
    <h1>404 - Página Não Encontrada</h1>
    <Image src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png" alt="Ilustração de Erro" width={500} height={300} />
    </main>
  </div>
);
export default NotFound;
