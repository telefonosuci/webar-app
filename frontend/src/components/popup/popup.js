//accordion.js
class Accordion {
  constructor() {
    this.accOpenCtrl = null;
    this.accCloseCtrl = null;
    this.accOpenCtrlClass = ".js-netar-accordion-control-open";
    this.accCloseCtrlClass = ".js-netar-accordion-control-close";
  }

  init() {
    this.accOpenCtrl = document.querySelectorAll(this.accOpenCtrlClass);
    this.accCloseCtrl = document.querySelectorAll(this.accCloseCtrlClass);
    console.log("Initializing accordion controls: ", this.accOpenCtrl);

    [...this.accOpenCtrl].forEach((el) => {
      const accordionIdentifier = el.dataset.popupId;

      el.addEventListener("click", () => {
        console.log("open accordion");
        const targetPopup = document.querySelectorAll(
          `[data-popup-id='${accordionIdentifier}']`
        );
        targetPopup.style.display = "block";
      });
    });
  }
}

export const accordion = new Accordion();
export default {};
