process.on("message", m => console.log(m));
process.send("2");