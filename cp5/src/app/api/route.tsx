

export async function GET() {
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=R23wVPlEiWksGL1EsYMR84RxyVvQmC6zzXwZ8CT0&count=5`;
  
    try {
      const response = await fetch(nasaUrl);
      const data = await response.json();
  
   
      console.log("Resposta da API:", data);
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Erro ao buscar dados da NASA', details: data }), {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const imageUrls = Array.isArray(data)
        ? data.map(item => item.url)
        : [data.url]; 
  
      return new Response(JSON.stringify(imageUrls), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error("Erro de conexão:", error); 
      return new Response(JSON.stringify({ error: 'Erro de conexão ou API', details: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }