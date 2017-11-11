const server = require('server');

server(ctx => 'Hello world').then(ctx => {
  console.log(`
    Your website is running at http://localhost:${ctx.options.port}
    Press ctrl+C to terminate.
  `);
});
