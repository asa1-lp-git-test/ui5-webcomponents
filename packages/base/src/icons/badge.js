import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://badge";
const transform = "translate(67,35)";
const d = "M460 237q5 -17 9 -33.5t4 -32.5q0 -43 -14.5 -71.5t-37 -46.5t-49 -28t-50.5 -17t-42 -13t-23 -15l-1 -8l-13 -4h-10l-14 4l-1 8q-32 14 -69.5 26t-70 31t-54.5 49.5t-22 80.5q0 6 5 28t11 48t11 49.5t5 31.5q0 31 -23 83l76 73q29 -20 49.5 -31t44.5 -11q23 0 48 17l8 7 l9 -7q12 -13 25.5 -15t25.5 -2q20 0 41 12l50 30l77 -73q-17 -31 -20.5 -48.5t-3.5 -34.5q0 -23 5.5 -45t13.5 -42zM438 169q0 12 -6 29l-22 76l-6 48q0 35 17 77l-39 34q-59 -32 -88 -32q-28 0 -56 12q-30 -12 -57 -12q-18 0 -90 33l-35 -35q7 -20 10.5 -39t3.5 -40 q1 -13 -4 -33.5t-12 -50.5l-15 -67q0 -47 21 -71t52 -37.5t65 -22t61 -25.5q17 13 38.5 20t43.5 13t42.5 13t37 20.5t27 34.5t11.5 55zM283 273l99 -14l-72 -72l18 -99l-90 47l-90 -47l17 99l-72 72l99 14l46 90z";

registerIcon(name, transform, d);

export default {name, transform, d};