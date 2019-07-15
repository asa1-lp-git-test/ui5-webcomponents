import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://zoom-out";
const viewBox = "0 0 512 512";
const d = "M305 320v-32H112v32h193zM470 86q10-9 10-22.5T470 41q-9-9-22-9t-23 9L308 159q-45-31-100-31-36 0-68 13.5T84 179t-38 56-14 69q0 36 14 68t38 56 56 38 68 14 68-14 56-38 38-56 14-68q0-28-8.5-53T353 204zm-262 74q30 0 56 11t45.5 30.5 31 46T352 304t-11.5 56-31 45.5-45.5 31-56 11.5-56.5-11.5-46-31T75 360t-11-56 11-56.5 30.5-46 46-30.5 56.5-11z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
