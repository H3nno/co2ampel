const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('listening on port 8000');

//var ws281x = require('rpi-ws281x-native'); // RASPIIIIIIII

const wsServer = new webSocketServer({
    httpServer: server
});


const clients = {};

const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
}

wsServer.on('request', function (request) {
    var userID = getUniqueID();
    console.log((new Date()) + 'Received an new connection from origin ' + request.origin + '.');


    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));
});

/* 
class Example {// RASPIIIIIIII

    constructor() {
        this.config = {};

        // Number of leds in my strip
        this.config.leds = 3;

        // Use DMA 10 (default 10)
        this.config.dma = 10;

        // Set full brightness, a value from 0 to 255 (default 255)
        this.config.brightness = 255;

        // Set the GPIO number to communicate with the Neopixel strip (default 18)
        this.config.gpio = 18;

        // The RGB sequence may vary on some strips. Valid values
        // are "rgb", "rbg", "grb", "gbr", "bgr", "brg".
        // Default is "rgb".
        // RGBW strips are not currently supported.
        this.config.stripType = 'grb';

        // Configure ws281x
        ws281x.configure(this.config);
    }

    run() {
        // Create a pixel array matching the number of leds.
        // This must be an instance of Uint32Array.
        var pixels = new Uint32Array(this.config.leds);

        // Create a fill color with red/green/blue.
        var red = 255, green = 255, blue = 255;
        var color = (red << 16) | (green << 8) | blue;

        for (var i = 0; i < this.config.leds; i++)
            pixels[i] = color;

        // Render to strip
        ws281x.render(pixels);
    }
} 
*/