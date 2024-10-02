"use client"
import { useEffect, useState } from 'react';

export default function VelikovskyIdea2() {
    const [firstItem, setFirstItem] = useState<NasaApod | null>(null);  // Especifica o tipo

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=R23wVPlEiWksGL1EsYMR84RxyVvQmC6zzXwZ8CT0&count=5');
                const data: NasaApod[] = await response.json();  // Define o tipo da resposta

                // Verifica se o retorno é um array e se há itens nele
                if (Array.isArray(data) && data.length > 0) {
                    setFirstItem(data[2]);  // Define o primeiro item no estado
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
    }, []);

    if (!firstItem) {
        return <div>Carregando...</div>;  // Enquanto os dados não são carregados
    }

    return (
        <div className="flex gap-8 justify-center items-center text-lg h-30">
            <h1>{firstItem.title}</h1>
            <img src={firstItem.url} alt={firstItem.title} />
            <p>{firstItem.explanation}</p>
        </div>
    );
}