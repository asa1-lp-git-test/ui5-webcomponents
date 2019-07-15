import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://address-book";
const viewBox = "0 -31 512 512";
const d = "M512 354q0-14-9.5-23t-22.5-9v-32q13 0 22.5-9.5T512 258v-64q0-14-9.5-23t-22.5-9v-32q13 0 22.5-9.5T512 98V34q0-14-9.5-23T480 2q0-14-9.5-23T448-30H64q-14 0-23 9T32 2v64H0v32h32v32H0v32h32v128H0v32h32v32H0v32h32v64q0 13 9 22.5t23 9.5h384q13 0 22.5-9.5T480 450q13 0 22.5-9.5T512 418v-64zm-64 96H64v-64h32v-32H64v-32h32v-32H64V162h32v-32H64V98h32V66H64V2h384v448zM259 98q-29 0-53 10.5t-41.5 29-27 44T128 238q0 33 10 59t27.5 45 41.5 29 53 10q54 0 85.5-32.5T377 262q0-21-6.5-39.5T353 190t-26.5-22.5T292 159q-21 0-25 20-20-20-31-20-23 0-38.5 18.5T182 230q0 16 5 33t14 31 21.5 22.5T250 325q5 0 13.5-5t19.5-20l3 20h32l-21-120q-1-1-1-7 0-5 8-5 18 0 33.5 22.5T353 262q0 44-25.5 69.5T260 357q-23 0-42.5-8.5T184 324t-22.5-37.5T153 238q0-54 30-84.5t75-30.5q46 0 86 31h33q-18-24-48.5-40T259 98zm-18 85q4 0 9.5 7.5t10.5 20 8.5 28T273 271q0 27-18 27-9 0-16-7.5t-11.5-19-7-24.5-2.5-24q0-40 23-40z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
