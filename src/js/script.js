async function handleResize() {
  setTimeout(() => {
    const imgBoxArr = document.querySelectorAll(".list-offers__info-wrapper");
    const imgArr = document.querySelectorAll(".list-offers__info-bg");
    let i = 0;
    imgBoxArr.forEach((imgBox) => {
      imgArr[i].style.height = `${imgBox.clientHeight}px`;
      i++;
    });
  }, 501);
}
handleResize();
window.addEventListener("resize", handleResize);
