import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://customer";
const viewBox = "0 -32 512 512";
const d = "M352 256q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm-96-64q27 0 45.5 19t18.5 45-18.5 45-45.5 19q-26 0-45-19t-19-45 19-45 45-19zm0 288q53 0 100-20t81.5-55 54.5-81.5 20-99.5-20-99.5T437.5 43 356-12 256-32t-99.5 20T75 43t-55 81.5T0 224t20 99.5T75 405t81.5 55 99.5 20zm0-480q36 0 68 10.5T383 39q-5 39-31.5 64T288 128h-64q-36 0-62.5-25T130 40q27-19 59-29.5T256 0zm156 63q32 31 50 72t18 89q0 46-17.5 87t-48 71.5-71.5 48-87 17.5-87-17.5-71.5-48-48-71.5T32 224q0-48 18.5-89T101 63q11 42 44.5 69.5T224 160h64q45 0 79-27.5T412 63z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
