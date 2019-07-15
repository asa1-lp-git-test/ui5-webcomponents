import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://filter";
const viewBox = "0 0 512 512";
const d = "M447.897 480q20 0 28.5-17t-2.5-33q-12-12-23-26-11-12-23-27t-26-30q-32-36-73-82-9-9-9-23V128l-101-91q-4-5-11-5-6 0-11 4t-5 12v194q0 13-10 23l-72 82q-14 15-27 30t-23 26.5-16 19l-6 7.5q-11 16-2.5 33t28.5 17h384zm-142-193q40 45 71 80 13 15 25.5 29.5t22.5 26 16.5 18.5l6.5 7h-384l6-7.5 16-18.5 22.5-25.5 26.5-29.5q31-35 71-80 18-20 18-45V84l64 58v100q0 27 18 45z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
