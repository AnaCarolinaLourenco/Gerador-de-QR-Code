var qrcode = new
QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Por que você me examinou")
function generateQR() {
  qrcode.makeCode(document.querySelector("input").value);
}