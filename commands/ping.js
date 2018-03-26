exports.run = (client, message, args) => {
    //message.channel.send("pong!").catch(console.error);
    const pingInfo = message.channel.send("Ping?");
    pingInfo.edit(`Pong! Latency is ${pingInfo.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}