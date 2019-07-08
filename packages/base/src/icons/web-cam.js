import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://web-cam";
const transform = "translate(112.5,35)";
const d = "M256 288q0 -27 -19 -45.5t-45 -18.5t-45 18.5t-19 45.5q0 26 19 45t45 19t45 -19t19 -45zM368 0q7 0 11.5 -5t4.5 -11q0 -16 -16 -16h-16h-320h-16q-16 0 -16 16q0 6 4.5 11t11.5 5h30q6 13 13.5 29t15.5 31.5t17 30t18 23.5q-49 23 -79.5 69.5t-30.5 104.5q0 40 15 75 t41 61t61 41t75 15t75 -15t61 -41t41 -61t15 -75q0 -58 -30.5 -104.5t-79.5 -69.5q8 -9 17 -23.5t17.5 -30t16 -31.5t13.5 -29h30zM32 288q0 -33 12.5 -62.5t34.5 -51t51 -34t62 -12.5t62 12.5t51 34t34.5 51t12.5 62.5t-12.5 62t-34.5 51t-51 34.5t-62 12.5t-62 -12.5 t-51 -34.5t-34.5 -51t-12.5 -62zM288 0q-9 27 -20 48q-9 18 -20.5 33t-23.5 15h-64q-12 0 -23.5 -15t-20.5 -33q-11 -21 -20 -48h192z";

registerIcon(name, transform, d);

export default {name, transform, d};