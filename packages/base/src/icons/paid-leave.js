import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://paid-leave";
const transform = "translate(38.5,35)";
const d = "M311 242q15 -20 15 -45q0 -29 -19 -51q-20 -22 -52 -26v-35h-23v33q-30 4 -48 22q-20 20 -24 52l45 5q1 -7 3.5 -12.5t5.5 -10.5q10 -12 18 -14v70q-34 10 -49 29q-8 9 -12 21t-4 26q0 29 17 46q17 19 48 22v18h23v-18q28 -3 43 -18q17 -14 20 -41l-42 -6q-3 20 -21 27 v-66q20 -6 34 -12.5t22 -15.5zM232 337q-12 -4 -17 -11q-3 -5 -5 -9t-2 -9t2 -9l4 -8q6 -8 18 -12v58zM276 169l6 11l3 10q0 11 -8 21q-7 9 -22 12v-66q13 3 21 12zM242 44v-40q-50 0 -94 19t-77 52t-52 77t-19 94q0 51 19 95.5t52 77.5t77 52t94 19q51 0 95 -19t77 -52 t52 -77.5t19 -95.5h-40q0 42 -16 79t-43.5 64.5t-64.5 43.5t-79 16t-78.5 -16t-64 -43.5t-43.5 -64.5t-16 -79t16 -78.5t43.5 -64t64 -43.5t78.5 -16zM532 152l-151 -182l-93 91l32 37l56 -55l121 146z";

registerIcon(name, transform, d);

export default {name, transform, d};