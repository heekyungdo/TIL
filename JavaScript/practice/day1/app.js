const title = document.querySelector("#title");

const superEventHandler = {
  // 마우스가 title 위로 올라가면 텍스트가 변경된다
  titleEnter: function () {
    title.innerHTML = "The mouse is here :)";
    title.style.color = "blue";
  },

  // 마우스가 title을 벗어나면 텍스트가 변경된다
  titleLeave: function () {
    title.innerHTML = "The mouse is gone :)";
    title.style.color = "red";
  },

  // 브라우저 창 사이즈 변하면 title 텍스트가 변경된다
  windowResize: function () {
    title.innerHTML = "I just resized :)";
    title.style.color = "green";
  },

  windowRightClick: function () {
    title.innerHTML = "I just clicked right button :)";
    title.style.color = "yellow";
  },
};

title.addEventListener("mouseenter", superEventHandler.titleEnter);
title.addEventListener("mouseleave", superEventHandler.titleLeave);
// title.removeEventListener("mouseleave", titleLeave);

// title.onmouseenter = titleEnter; //이 방법보다 addEventListener를 사용하는 것이 더 낫다. 왜냐하면 removeEventListener를 사용해 바로 삭제할 수 있기 때문
// title.onmouseleave = titleLeave;

window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.windowRightClick);
