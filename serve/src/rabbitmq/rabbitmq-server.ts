import { Channel, connect, Connection } from "amqplib";

export default class RabbitMQServer {
  private static conn: Connection;
  private static channel: Channel;

  public async start(uri: string): Promise<void> {
    if (!RabbitMQServer.conn) {
      RabbitMQServer.conn = await connect(uri);
    }
    if (!RabbitMQServer.channel) {
      RabbitMQServer.channel = await RabbitMQServer.conn.createChannel();
    }
  }

  async publishInExchange(exchange: string, payload: string): Promise<boolean> {
    const e = await RabbitMQServer.channel.assertExchange(exchange, "topic", {
      durable: true,
    });

    return RabbitMQServer.channel.publish(
      e.exchange,
      "",
      Buffer.from(JSON.stringify(payload))
    );
  }
}
