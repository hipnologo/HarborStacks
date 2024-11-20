// src/lib/portainer.ts
export async function deployToPortainer(stackData: {
    name: string;
    compose: string;
  }) {
    const response = await fetch(`${process.env.PORTAINER_URL}/api/stacks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.PORTAINER_API_KEY!
      },
      body: JSON.stringify({
        name: stackData.name,
        stackFileContent: stackData.compose,
        env: []
      })
    });
  
    if (!response.ok) {
      throw new Error('Failed to deploy to Portainer');
    }
  
    return await response.json();
  }