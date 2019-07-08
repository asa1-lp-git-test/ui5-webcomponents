import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://subway-train";
const transform = "translate(48.5,35)";
const d = "M416 128q0 -14 -9 -23.5t-23 -9.5h-256q-13 0 -22.5 9.5t-9.5 23.5v127q0 27 10 50t27.5 40.5t41 27.5t49.5 10h64q26 0 49.5 -10t41 -27.5t27.5 -40.5t10 -50v-127zM128 128h256v127q0 40 -28 68t-68 28h-64q-40 0 -68 -28t-28 -68v-127zM192 206q14 0 23 -9.5t9 -22.5 q0 -14 -9 -23t-23 -9t-23 9t-9 23q0 13 9 22.5t23 9.5zM320 206q14 0 23 -9.5t9 -22.5q0 -14 -9 -23t-23 -9t-23 9t-9 23q0 13 9 22.5t23 9.5zM288 319q26 0 45 -18.5t19 -45.5v-32h-192v32q0 27 19 45.5t45 18.5h64zM171 64h169l22 -33h-212zM383 -1l22 -32h-298l21 32h255 zM384 63q14 0 28 7l68 -103h-37l-62 96h3zM133 63l-64 -96h-37l70 102q12 -6 26 -6h5zM58 62q-27 33 -42.5 74t-15.5 87q0 53 20 100t55 82t81.5 55t99.5 20t99.5 -20t81.5 -55t55 -82t20 -100q0 -45 -15 -86t-42 -74l-18 28q20 28 31.5 61.5t11.5 70.5q0 46 -17.5 87 t-48 71.5t-71.5 48t-87 17.5t-87 -17.5t-71.5 -48t-48 -71.5t-17.5 -87q0 -38 12 -71.5t33 -61.5z";

registerIcon(name, transform, d);

export default {name, transform, d};