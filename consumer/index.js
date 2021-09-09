const amqp = require("amqplib/callback_api");
const dataController = require("./controller/data.controller");

const args = process.argv.slice(2);

if (args.length !== 2) {
  throw new Error("Argumentos invalido");
}

amqp.connect("amqp://localhost", (err0, conn) => {
  if (err0) {
    throw err0;
  }
  conn.createChannel((err1, channel) => {
    if (err1) {
      throw err1;
    }

    const id = args[1];
    const exchange = args[0];
    const topic = args[0].split("_")[1];

    channel.assertExchange(exchange, "topic", {
      durable: true,
    });

    channel.assertQueue(
      id,
      {
        durable: true,
      },
      (err2, q) => {
        if (err2) {
          throw err2;
        }
        // channel.purgeQueue(q.queue);

        console.log("[*] Esperando comandos da fila %s", q.queue);
        channel.bindQueue(q.queue, exchange, "");

        channel.consume(
          q.queue,
          (msg) => {
            if (msg.content) {
              console.log("[*] %s", msg.content.toString());
              const response = JSON.parse(JSON.parse(msg.content.toString()));
              dataController.handle(response.method, topic);
            }
          },
          {
            noAck: true,
          }
        );
      }
    );
  });
});
