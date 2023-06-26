import type { APIRoute } from "astro";

export const wrapApi = (handler: APIRoute): APIRoute => async (ctx) => {
    try {
        return await handler(ctx);
    } catch (err) {
        return new Response('Unexpected Server Error', {
            status: 500
        });
    }
}