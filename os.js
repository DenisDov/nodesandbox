const os = require("os");

function readableBytes(bytes) {
  var i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
}

const specs = {
  os: os.platform(),
  arch: os.arch(),
  cpuName: os.cpus()[0].model,
  cpusCount: os.cpus().length,
  totalMem: readableBytes(os.totalmem()),
  availableMem: readableBytes(os.freemem()),
  uptime: new Date(os.uptime() * 1000)
    .toUTCString()
    .match(/(\d\d:\d\d:\d\d)/)[0]
};

console.log(specs);
