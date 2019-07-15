import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://forward";
const viewBox = "0 -1 512 512";
const d = "M471.5 341q9-10 9-23t-9-22l-128-128q-10-10-23-10t-23 10q-9 9-9 22.5t9 22.5l74 73h-84q-40 0-75-15t-61-41-41-61-15-75V62q0-13-9-22.5t-23-9.5q-13 0-22.5 9.5T31.5 62v32q0 53 20.5 99.5t55 81.5 81 55 99.5 20h84l-74 74q-10 10-10 23t10 22q9 10 22 10t23-10z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
