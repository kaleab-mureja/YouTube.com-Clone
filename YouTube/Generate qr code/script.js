document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const generateBtn = document.querySelector("#generate");
  const downloadBtn = document.querySelector("#download");

  let qrWindow = null;

  generateBtn.addEventListener("click", () => {
    const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
    qrWindow = window.open(qrCode, "QR Code", "width=250,height=250");
  });

  downloadBtn.addEventListener("click", async () => {
    if (qrWindow !== null) {
      qrWindow.close();
      qrWindow = null;
    }
  });
});
