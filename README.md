# QR-CODE-GENERATOR

It is simply a qr code generator combined with a QR code reader. The front is in html css and the backend in Javascript with instacan libraries

#IMPORTANT

```JS
  downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = input.value+'_Meet_QR.png';
  link.href = image.src;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
```
Regarding the link.download values, the "_Meet_QR.png" prefix is ​​incidental. you can change it according to your work situation or your event

<img width="956" alt="qr-code-atomic" src="https://github.com/iimAtomic/QR-CODE-GENERATOR/assets/71674056/fcc8ebe3-bec0-47bc-8191-ab2d670148fb">
