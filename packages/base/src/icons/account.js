import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://account";
const viewBox = "0 0 512 512";
const d = "M288 321q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm-96-64q26 0 45 19t19 45q0 27-19 45.5T192 385q-27 0-45.5-18.5T128 321q0-26 18.5-45t45.5-19zm32-33q26 0 49.5-10t41-27 27.5-40 10-50V32H32v65q0 27 10 50t27.5 40 40.5 27 50 10h64zm96-127q0 40-28 68t-68 28h-64q-40 0-68-28T64 97V65h256v32zm144 255q16 0 16-16 0-6-4.5-11t-11.5-5H336q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h128zm0 64q16 0 16-16 0-6-4.5-11t-11.5-5H336q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h128zm0 64q16 0 16-16 0-6-4.5-11t-11.5-5H336q-6 0-11 5t-5 11q0 7 5 11.5t11 4.5h128z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
