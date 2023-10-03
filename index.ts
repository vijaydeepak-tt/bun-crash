const server = Bun.serve({
  // port: process.env.PORT || 8000,
  port: Bun.env.PORT || 8000,
  fetch(req) {
    console.log(req.url);
    const url = new URL(req.url);
    if (url.pathname === '/') return new Response('Bun Homepage!');
    if (url.pathname === '/blog') return new Response('Bun Blogs!');
    return new Response('404 - No Buns!');
  },
});

console.log(`Serving in Bun Port - ${server.port}`);
