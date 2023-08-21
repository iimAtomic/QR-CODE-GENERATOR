const container = document.getElementById('container');
const image = document.getElementById('image');
const input = document.getElementById('text');
const generateButton = container.querySelector('button:nth-of-type(1)');
const downloadButton = container.querySelector('button:nth-of-type(2)');
const scanbutton = document.getElementById('button3');

generateButton.addEventListener('click', () => {
  const url = input.value ;
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=
  ${encodeURIComponent(url)}`;
  fetch(apiUrl)
    .then(response => response.blob())
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob);
      image.src = imageUrl;
    });
    
});

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = input.value+'_Meet_QR.png';
  link.href = image.src;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


scanbutton.addEventListener('click', () => {
  document.getElementById('video').style.display = 'block';

  const codeReader = new ZXing.BrowserQRCodeReader();

  codeReader.getVideoInputDevices()
    .then(videoInputDevices => {
      // Chercher le périphérique de la caméra arrière
      let rearCameraDevice = null;
      for (const device of videoInputDevices) {
        if (device.label.toLowerCase().includes('arrière') || device.label.toLowerCase().includes('rear')) {
          rearCameraDevice = device;
          break;
        }
      }

      if (rearCameraDevice) {
        codeReader.decodeFromVideoDevice(rearCameraDevice.deviceId, 'video', (result, error) => {
          // ...
        });
      } else {
        // Utiliser la première caméra disponible
        if (videoInputDevices.length > 0) {
          codeReader.decodeFromVideoDevice(videoInputDevices[0].deviceId, 'video', (result, error) => {
            // ...
          });
        } else {
          console.error('Aucune caméra disponible.');
          document.getElementById('result').textContent = 'Aucune caméra disponible.';
        }
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById('result').textContent = 'Erreur lors de l\'obtention des périphériques vidéo.';
    });
});
