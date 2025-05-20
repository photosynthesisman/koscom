let popupWindow = null;

function openPopup() {
  const width = 400;
  const height = 300;
  const left = window.screenX + (window.innerWidth - width) / 2;
  const top = window.screenY + (window.innerHeight - height) / 2;

  popupWindow = window.open("popup.html", "popupWindow", `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
}

// 팝업으로부터 메시지를 받을 함수
window.addEventListener("message", (event) => {
  if (event.data === "popupClosed") {
    document.getElementById("popupStatus").textContent = "팝업이 닫혔습니다!";
  }
});

function notifyAndClose() {
  // 부모 창이 존재하면 메시지 보냄
  if (window.opener) {
    window.opener.postMessage("popupClosed", "*");
  }
  window.close();
}
