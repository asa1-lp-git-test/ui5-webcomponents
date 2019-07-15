import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://syntax";
const viewBox = "0 0 512 512";
const d = "M55 475q4 2 8.5 3t9.5 2h23v-32H64q0-21-4-33.5T51 395t-10.5-9-8.5-2q3 0 8.5-2.5t10.5-9 9-19 4-33.5h32v-32H73q-5 1-9.5 2t-8.5 3q-7 4-12.5 10.5T37 324q0 27-11.5 31.5T0 360v47q7 0 13.5.5t12 4 8.5 11 3 21.5 5.5 20.5T55 475zm419-287q0-14 3.5-21.5t8.5-11 12-4 14-.5v-47q-14 0-26-4.5T474 68q0-14-5.5-20.5T456 37q-4-2-8.5-3t-9.5-2h-22v32h32q0 21 4 33.5t9 19 10.5 9 8.5 2.5q-3 0-8.5 2t-10.5 9-9 19.5-4 33.5h-32v32h22q5-1 9.5-2t8.5-3q7-4 12.5-10.5T474 188zM367 384q16 0 16-16 0-6-4.5-11t-11.5-5H143q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h224zm0-96q16 0 16-16 0-6-4.5-11t-11.5-5H143q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h224zm0-96q16 0 16-16 0-6-4.5-11t-11.5-5H143q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h224z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
