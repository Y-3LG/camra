document.getElementById('toggleCameraButton').addEventListener('click', async () => {
    const video = document.getElementById('video');
    const devices = await navigator.mediaDevices.enumerateDevices();

    let deviceId;

    devices.forEach(device => {
        if (device.kind === 'videoinput' && device.label.toLowerCase().includes('back')) {
            deviceId = device.deviceId;
        } else if (device.kind === 'videoinput' && device.label.toLowerCase().includes('front')) {
            deviceId = device.deviceId;
        }
    });

    const constraints = {
        video: { deviceId: { exact: deviceId } }
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        video.play();
    } catch (error) {
        console.error('Error al cambiar de cámara: ', error);
    }
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        let video = document.getElementById('video');
        video.srcObject = stream;
        video.onloadedmetadata = (ev) => video.play();
    })
    .catch(error => console.error('Error al acceder a la cámara: ', error));