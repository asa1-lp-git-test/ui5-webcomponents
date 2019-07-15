import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://thumb-up";
const viewBox = "0 -32 512 512";
const d = "M1.053 288h64V0h-64v288zm469 0q19 0 32-18t7-46q-8-33-20-77.5t-28-84-35-67-41-27.5h-160q-20 1-37.5 7.5T157.053-9t-20.5 19.5-7.5 21.5v256q5 10 14 19t18.5 17 18 15 13.5 13q4 5 9.5 20.5t10.5 32.5q6 19 12 43 12 18 27 25.5t37 6.5q25-1 28.5-19t3.5-45V288h149zm-85-288q14 0 25.5 18.5t21.5 45.5h-47v32h57q5 17 9 33t7 31h-73v32h79q2 12 3 20.5t1 11.5q0 9-6.5 20.5t-31.5 11.5h-141v178.5l-1 13.5h-2q-11 0-18-3t-13-11q-8-29-18-59.5t-18-41.5q-5-8-13-14t-17-14q-7-6-15-12.5t-13-13.5V32q2-6 19-18t45-14h160z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
