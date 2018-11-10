

const constraints = { audio: true, video: true }

try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints) 
} catch (error) {
    // 錯誤處理
}



navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
    // stream 就是咱們的聲音與影像
})
.catch((err) => {
    // 錯誤處理
})