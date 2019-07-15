import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://add-employee";
const viewBox = "0 -32 512 512";
const d = "M192 160q26 0 49.5-10t41-27.5T310 82t10-50v-64H0v64q0 27 10 50t27.5 40.5 41 27.5 49.5 10h64zm96-128q0 40-28 68t-68 28h-64q-40 0-68-28T32 32V0h256v32zm-32 224q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm-96-64q26 0 45 19t19 45q0 27-19 45.5T160 320t-45-18.5T96 256q0-26 19-45t45-19zm352 192v-32h-96v-96h-32v96h-96v32h96v96h32v-96h96z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
