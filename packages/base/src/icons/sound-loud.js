import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://sound-loud";
const transform = "translate(48.5,35)";
const d = "M225 415q12 0 22 -9t10 -23v-318q0 -14 -10 -23t-22 -9t-20 7l-99 80q-11 7 -20 7h-53q-13 0 -19 5t-9 11q-4 7 -4 16v130q0 9 4 16q3 6 9 11t19 5h53q9 0 20 7l99 80q10 7 20 7zM225 383l-99 -80q-19 -14 -40 -14h-53v-130h53q21 0 40 -14l99 -80v318zM344 359 q33 -22 53 -57t20 -77q0 -44 -21.5 -80t-56.5 -57l-18 22v5q29 17 46.5 46t17.5 64t-17.5 64t-46.5 46zM413 428q46 -35 73 -87.5t27 -115.5q0 -67 -31 -122.5t-83 -89.5l-20 25q46 30 74 79t28 108q0 56 -24.5 102.5t-66.5 77.5z";

registerIcon(name, transform, d);

export default {name, transform, d};