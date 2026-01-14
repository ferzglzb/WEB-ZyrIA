export const config = {
    runtime: 'edge',
};

const WEBHOOK_URL = 'https://n8n-n8n.1qsfn3.easypanel.host/webhook/e7fd61a8-7bdc-47b3-b4c8-bd4973ee64f2';

export default async function handler(req: Request) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    try {
        // Get the form data from the request
        const formData = await req.json();

        // Forward the request to the n8n webhook
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Check if the webhook responded successfully
        if (!response.ok) {
            throw new Error(`Webhook responded with status: ${response.status}`);
        }

        // Return success response with CORS headers
        return new Response(JSON.stringify({ success: true }), {
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
                error: 'Failed to send message'
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
