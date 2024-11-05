const NodeMediaServer = require('node-media-server');

const config = {
    rtmp:{
        port: 1935,
        chunk_size: 60000,
        ping: 30,
        ping_timeout: 60,
        gop_cache: true
    },
    http:{
        port: 8000,
        allow_origin: "*",

    }
};

const server = new NodeMediaServer(config);
server.run();