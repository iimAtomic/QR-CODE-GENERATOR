const container = document.getElementById('container');
const image = document.getElementById('image');
const input = document.getElementById('text');
const generateButton = container.querySelector('button:nth-of-type(1)');
const downloadButton = container.querySelector('button:nth-of-type(2)');

generateButton.addEventListener('click', () => {
  const url = input.value;
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
  link.download = 'Atomic-QR.png';
  link.href = image.src;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
