const fs = require('fs');
const ffmpegHelper = require('./ffmpeg-helper');
const sourceFolder = './source-mp4';

// require('hls-server')(8000)
const HLSServer = require('hls-server')
const http = require('http')

const server = http.createServer()
const hls = new HLSServer(server, {
  path: '/streams',     // Base URI to output HLS streams
  dir: 'public/videos'  // Directory that input files are stored
})
server.listen(8000)

// (async () => {
//     await ffmpegHelper.convertToHls('./source-mp4/big_buck_bunny.mp4');
// })();

