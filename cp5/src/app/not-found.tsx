import Image from 'next/image';
const NotFound = () => (
  <div className="flex gap-8 justify-center items-center text-lg h-30">
    <main className="flex flex-col justify-center items-center h-[80vh]">
    <h1>404 - Página Não Encontrada</h1>
    <Image src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png" className='erro'  alt="Ilustração de Erro" width={500} height={300} />
    </main>
  </div>
);
export default NotFound;
