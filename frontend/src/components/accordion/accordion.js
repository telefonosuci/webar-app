class Accordion {
  constructor() {
    this.accCtrlList = null;
    this.accCtrlClass = ".js-netar-accordion-control";
    this.accOpenClass = "accordion-opened";
    this.accCloseClass = "accordion-closed";
  }

  init() {
    this.accCtrlList = document.querySelectorAll(this.accCtrlClass);

    [...this.accCtrlList].forEach((el) => {
      el.addEventListener("click", () => {
        const nextSibiling = el.nextElementSibling;

        if (el.classList.contains(this.accCloseClass)) {
          nextSibiling.style.display = "block";
          el.classList.replace(this.accCloseClass, this.accOpenClass);
        } else if (el.classList.contains(this.accOpenClass)) {
          nextSibiling.style.display = "none";
          el.classList.replace(this.accOpenClass, this.accCloseClass);
        }
      });
    });
  }
}

export const accordion = new Accordion();
export default {};
