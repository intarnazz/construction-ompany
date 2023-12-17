function scrollTopEvent() {
  document.documentElement.scrollTop = 0;
}

async function handleResize() {
  setTimeout(() => {
    const imgBoxArr = document.querySelectorAll(".list-offers__info-wrapper");
    const imgArr = document.querySelectorAll(".list-offers__info-bg");
    let i = 0;
    imgBoxArr.forEach((imgBox) => {
      imgArr[i].style.height = `${imgBox.clientHeight}px`;
      console.log(imgArr[i].clientHeight);
      i++;
    });
  }, 600);
}
handleResize();
window.addEventListener("resize", handleResize);
