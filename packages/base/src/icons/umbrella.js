import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://umbrella";
const transform = "translate(48.5,35)";
const d = "M257 425q52 0 98.5 -17t81.5 -47t55 -70t20 -85l-1 -20q-5 17 -30.5 28t-59.5 11q-27 0 -49 -7.5t-34 -18.5q-11 11 -33 18.5t-48 7.5q-28 0 -50 -7.5t-33 -18.5q-11 11 -33 18.5t-50 7.5q-34 0 -59.5 -11t-30.5 -28q-1 2 -1 10v10q0 45 20 85t55 70t82 47t100 17z M421 257q15 0 28.5 -2t24.5 -5q-9 30 -29 56.5t-48.5 45.5t-64 30t-75.5 11q-39 0 -75 -11t-64.5 -30t-49 -45t-29.5 -57q12 3 25 5t27 2q48 0 83 -19q36 19 83 19t82 -19q35 19 82 19zM256 480q12 -1 18.5 -6t9.5 -11q4 -7 4 -15h-64q1 9 5 16q3 6 9.5 11t17.5 5zM310 63 q9 0 12.5 -5.5t1.5 -25.5q-3 -32 -14.5 -48t-36.5 -16q-17 0 -33 14t-16 49v33v128h32v-128v-33q2 -11 5.5 -19.5t16.5 -9.5q9 -1 11.5 8.5t3.5 21t3.5 21.5t13.5 10z";

registerIcon(name, transform, d);

export default {name, transform, d};