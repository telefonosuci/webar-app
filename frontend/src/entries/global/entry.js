import "@babel/polyfill";
import { accordion } from "@/components/accordion/accordion";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading global module!");
  accordion.init();
});
