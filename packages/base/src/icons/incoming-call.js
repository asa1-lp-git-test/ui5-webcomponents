import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://incoming-call";
const viewBox = "0 0 512 512";
const d = "M368 214q17-16 33-32l32-32q15-15 14.5-33T433 84q-6-5-11.5-10.5T411 62q-15-17-33.5-23.5T339 32h-8l-9 1q-36 4-68 18.5T192 86q-54 37-96 83.5T25 275q-10 20-16 40.5T1 358q-2 24 3.5 45.5T30 442q6 5 11.5 11T53 465q15 15 33 15 15 0 30-13l34-34 34-35q14-14 13-31t-15-31q-9-10-18-19l-19-19q49-72 121-121 19 18 37 37 17 15 33 15 18 0 32-15zm42-107q10 10 0 20-16 17-32 33l-32 32q-2 2-4.5 3.5T336 197q-6 0-10-6l-26-26-11-11-19-19-22 15q-38 28-70.5 60T118 280l-15 22 19 19 12 12q7 6 13 12.5t13 12.5q9 10 1 18-17 19-33.5 35.5T94 444q-6 4-8 4-6 0-10-6-2-2-4-3.5t-4-3.5q-8-9-17-17-11-11-15.5-24.5T33 360q3-32 21-71 51-105 156-176 32-22 60-33.5T326 64h13q29 0 48 19 4 5 7.5 9t8.5 8zm-52 400q5 5 11 5t11-5 5-11.5-5-11.5l-75-68h191q16 0 16-16t-16-16H305l75-69q5-5 5-11.5t-5-11.5-11-5-11 5l-92 86q-9 10-9 23t9 23z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
