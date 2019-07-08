import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://touch";
const transform = "translate(80.5,35)";
const d = "M374 224q13 -5 26.5 -10t24 -12.5t17 -17.5t6.5 -24v-66q-1 -18 -16.5 -39t-35.5 -39.5t-39.5 -31.5t-28.5 -15l-4 -1h-4h-128q-2 0 -5 -0.5t-5 -0.5q-29 0 -48 22l-118 135q-17 20 -15 46.5t22 43.5q17 16 42 16q29 0 48 -22l15 -18v161q0 27 19 45.5t45 18.5t45 -18.5 t19 -45.5v-94l7 -1q7 -2 25.5 -7.5t37.5 -10.5q22 -7 48 -14zM416 160q0 14 -18.5 21t-45.5 17v-38h-32l-1 47q-17 5 -32.5 9.5t-30.5 7.5v-48h-32v175q0 14 -9 23t-23 9q-13 0 -22.5 -9t-9.5 -23v-175v-16v-16q0 -11 -5 -14.5t-11 -1.5q-8 2 -15 14h-1q-5 5 -11.5 12 t-12.5 15q-7 9 -15 18q-9 11 -24 11q-11 0 -21 -8q-9 -7 -11 -22q-1 -12 8 -23l117 -135q9 -11 24 -11h70q30 0 68 1q3 0 18.5 10t32.5 24.5t30.5 31t14.5 30.5v64zM96 287q-26 0 -45 19t-19 45v64q0 26 19 45t45 19h192q26 0 45 -19t19 -45v-64q0 -26 -19 -45t-45 -19v32 q14 0 23 9.5t9 22.5v64q0 14 -9 23t-23 9h-192q-13 0 -22.5 -9t-9.5 -23v-64q0 -13 9.5 -22.5t22.5 -9.5v-32z";

registerIcon(name, transform, d);

export default {name, transform, d};