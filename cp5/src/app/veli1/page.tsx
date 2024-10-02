"use client"
import { useEffect, useState } from 'react';



export default function VelikovskyIdea1() {
    const [firstItem, setFirstItem] = useState<NasaApod | null>(null); 

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=R23wVPlEiWksGL1EsYMR84RxyVvQmC6zzXwZ8CT0&count=5');
                const data: NasaApod[] = await response.json();  

              
                if (Array.isArray(data) && data.length > 0) {
                    setFirstItem(data[0]); 
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchData();
    }, []);

    if (!firstItem) {
        return <div>Carregando...</div>;  
    }

    return (
        <div className="flex gap-8 justify-center items-center text-lg h-30">
            <main className="flex flex-col justify-center items-center h-[80vh]">
            <h1>{firstItem.title}</h1>
            <img src={firstItem.url} alt={firstItem.title} />
            <p>{firstItem.explanation}</p>
            </main>
        </div>
    );
}