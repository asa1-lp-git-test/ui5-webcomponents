import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://customer-and-supplier";
const transform = "translate(48.5,35)";
const d = "M352 288q0 -40 -28 -68t-68 -28t-68 28t-28 68t28 68t68 28t68 -28t28 -68zM256 224q26 0 45 19t19 45t-19 45t-45 19q-27 0 -45.5 -19t-18.5 -45t18.5 -45t45.5 -19zM160 96h192v-128h-192v128zM64 48q0 20 14 34t34 14h16v-96h-16q-20 0 -34 14t-14 34zM400 96 q20 0 34 -14t14 -34t-14 -34t-34 -14h-16v96h16zM288 192q43 0 64.5 -16.5t27.5 -47.5h-34q-6 14 -19 23t-39 9h-64q-26 0 -39.5 -9t-19.5 -23h-34q8 29 29.5 46.5t63.5 17.5h32h32zM256 480q53 0 99.5 -20t81.5 -54.5t55 -81.5t20 -100q0 -38 -11 -73.5t-31 -65.5 q-8 16 -21 26q14 25 22.5 53.5t8.5 59.5q0 46 -17.5 87t-48 71.5t-71.5 48t-87 17.5q-47 0 -87.5 -17.5t-71 -48t-48 -71.5t-17.5 -87q0 -62 31 -113q-15 -11 -22 -26q-20 30 -30.5 65.5t-10.5 73.5q0 53 20 100t54.5 81.5t81.5 54.5t100 20z";

registerIcon(name, transform, d);

export default {name, transform, d};