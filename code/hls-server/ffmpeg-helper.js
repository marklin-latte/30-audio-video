var ffmpeg = require('fluent-ffmpeg')

module.exports = {
    convertToHls: async (file) => {
        return new Promise((resolve) => {
            ffmpeg(file, { timeout: 432000 }).addOptions([
                '-profile:v baseline', // baseline profile (level 3.0) for H264 video codec
                '-level 3.0',
                '-s 640x360',          // 640px width, 360px height output video dimensions
                '-start_number 0',     // start the first .ts segment at index 0
                '-hls_time 10',        // 10 second segment duration
                '-hls_list_size 0',    // Maxmimum number of playlist entries (0 means all entries/infinite)
                '-f hls'               // HLS format
            ]).output(`./source-m3u8/test.m3u8`).on('end', resolve).run()
        });
    }
}

// var ffmpeg = require('fluent-ffmpeg')

// function callback() {} // do something when encoding is done }

// // Below is FFMPEG converting MP4 to HLS with reasonable options.
// // https://www.ffmpeg.org/ffmpeg-formats.html#hls-2
// ffmpeg('./source-mp4/big_buck_bunny.mp4', { timeout: 432000 }).addOptions([
//     '-profile:v baseline', // baseline profile (level 3.0) for H264 video codec
//     '-level 3.0', 
//     '-s 640x360',          // 640px width, 360px height output video dimensions
//     '-start_number 0',     // start the first .ts segment at index 0
//     '-hls_time 10',        // 10 second segment duration
//     '-hls_list_size 0',    // Maxmimum number of playlist entries (0 means all entries/infinite)
//     '-f hls'               // HLS format
//   ]).output('public/videos/output.m3u8').on('end', callback).run()
