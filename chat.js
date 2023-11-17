function scrollToBottom(element) {
  if (element instanceof HTMLElement) {
    element.scrollTop = element.scrollHeight;
  }
}

function animatePanel(panel, xValue) {
  gsap.set(panel, { display: "block", x: xValue });
  gsap.to(panel, 0.5, { x: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  const open = document.querySelector("#open");
  const close = document.querySelector(".close");
  const panel = document.querySelector(".contact-detail");

  if (open && close && panel) {
    open.addEventListener("click", function () {
      animatePanel(panel, 300);
      scrollToBottom(panel);
    });

    close.addEventListener("click", function () {
      gsap.to(panel, 0.5, { x: 320 });
    });
  }

  const openList = document.querySelector(".open-message");
  const closeList = document.querySelector(".close-list");
  const list = document.querySelector(".message-list");

  if (openList && closeList && list) {
    openList.addEventListener("click", function () {
      gsap.set(list, { display: "block", x: -300 });
      gsap.to(list, 0.5, { x: 0 });
    });

    closeList.addEventListener("click", function () {
      gsap.to(list, 0.5, { x: -400 });
      gsap.to(list, 0, { display: "none", delay: 1 });
    });
  }
});
