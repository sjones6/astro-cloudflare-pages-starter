import { wrapApi } from '$/lib/http';
import type { APIRoute } from 'astro';

export const prerender = false;

export const get: APIRoute = wrapApi(async () => {
  return new Response(
    JSON.stringify({
      message: 'Hello, from Cloudflare Worker function!',
      ts: Date.now()
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
});
