export const config = {
    runtime: 'edge',
};

const WEBHOOK_URL = 'https://n8n-n8n.1qsfn3.easypanel.host/webhook/e7fd61a8-7bdc-47b3-b4c8-bd4973ee64f2';

export default async function handler(req: Request) {
    // Only allow POST requests from the frontend
    if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    try {
        // Get the form data from the request
        const formData = await req.json();

        // Build query string for GET request to n8n
        const params = new URLSearchParams({
            nombre: formData.nombre || '',
            empresa: formData.empresa || '',
            email: formData.email || '',
            telefono: formData.telefono || '',
            mensaje: formData.mensaje || ''
        });

        // Make GET request to n8n webhook with query parameters
        const webhookUrlWithParams = `${WEBHOOK_URL}?${params.toString()}`;

        const response = await fetch(webhookUrlWithParams, {
            method: 'GET',
        });

        // Check if the webhook responded successfully
        if (!response.ok) {
            throw new Error(`Webhook responded with status: ${response.status}`);
        }

        const responseData = await response.text();

        // Return success response with CORS headers
        return new Response(JSON.stringify({ success: true, data: responseData }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    } catch (error) {
        console.error('Error forwarding to webhook:', error);

        return new Response(
            JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : 'Failed to send message'
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    }
}
