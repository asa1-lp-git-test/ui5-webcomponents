import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://expense-report";
const viewBox = "0 -32 512 512";
const d = "M494 179q11-14 11-33 0-23-12.5-37T450 90V69h-18v20q-46 6-54 53l32 4q2-10 6-15.5t16-12.5v52q-29 8-39 22.5T383 225q0 20 12.5 34t36.5 16v13h18v-13q24-2 35.5-13.5T500 232l-31-4q-3 13-19 20v-48q35-11 44-21zm-62 69q-12-4-15.5-10t-3.5-11q0-7 3-11.5t16-10.5v43zm37-123q6 7 6 16 0 8-4 13.5T450 165v-49q15 3 19 9zm-46-93h32V0q0-14-9-23t-23-9H135q-14 0-23 9t-9 23v288l97 96h223q13 0 22.5-9t9.5-23v-32h-32v32H232v-64q0-14-9.5-23t-23.5-9h-64V0h288v32zM39 64H7v384q0 14 9.5 23t22.5 9h288v-32H39V64zm271 96q16 0 16-16 0-6-4.5-11t-11.5-5H183q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h127zm0-64q16 0 16-16 0-6-4.5-11T310 64H183q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h127z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
