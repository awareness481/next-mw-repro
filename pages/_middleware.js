let i = 0;
export function middleware (event) {
  console.log(++i)
  event.respondWith(new Response('Hello world'))
}