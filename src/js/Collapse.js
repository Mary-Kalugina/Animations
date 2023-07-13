export default class Collapse {
  open() {
    let container = document.querySelector(".text_container");
    if (container.classList.contains("text_container_animated")) {
      container.classList.remove("text_container_animated");
      container.classList.add("shown");
      window.setTimeout(() => {
        container.classList.remove("shown");
      }, 2000);
    } else {
      container.classList.add("text_container_animated");
    }
  }
}
