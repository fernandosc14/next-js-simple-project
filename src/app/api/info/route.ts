export async function GET(){
    return Response.json({
        name: "API de Teste",
        version: "1.0.0",
        description: "Esta é uma API de teste criada para demonstração."
    });
}