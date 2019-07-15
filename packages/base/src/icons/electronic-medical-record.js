import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://electronic-medical-record";
const viewBox = "0 -32 512 512";
const d = "M512 416v-64h-64v-64h-64v64h-64v64h64v64h64v-64h64zM239 118l19 34q3 5 9 7h8q7 0 10-6l31-40 20 13q4 3 10 3 7 0 10-4l24-22q4-6 4-9 0-13-16-13-7 0-12 4l-13 14-22-15q-5-3-12-3-6 1-11 6l-23 33-12-19q-6-7-12-7l-25-3-18-52q-4-7-15-7-10 1-11.5 11.5T180 62l-3 9-12 94-24-76q-3-8-10-9l-6-1q-7 0-12 4l-10 12-12-12q-4-4-12-4-6 0-10.5 3.5T64 91q0 6 4 10l23 21q5 5 12 5t10-5l5-3 42 159q3 10 15 10 14 0 17-12l14-162q1 1 6 1zm177 106h32V0q0-13-9.5-22.5T416-32H32q-14 0-23 9.5T0 0v320q0 14 9 23t23 9h224v-32H32V0h384v224z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
