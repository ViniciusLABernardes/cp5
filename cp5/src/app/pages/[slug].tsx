import { useRouter } from 'next/router';

const PaginaDinamica = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Página {slug}</h1>;
};

export default PaginaDinamica;
