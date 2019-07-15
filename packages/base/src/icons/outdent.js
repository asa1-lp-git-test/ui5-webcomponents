import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://outdent";
const viewBox = "0 0 512 512";
const d = "M325 258q-7-7 0-10l53-60q11-12 0-23-12-10-23 0l-58 65q-9 9-9 22t9 23l61 65q11 11 22 0 13-13 0-22zm139 190q16 0 16-16t-16-16H48q-16 0-16 16t16 16h416zM48 320q-16 0-16 16t16 16h160q16 0 16-16t-16-16H48zm0-96q-16 0-16 16t16 16h160q16 0 16-16t-16-16H48zm0-96q-16 0-16 16t16 16h160q16 0 16-16t-16-16H48zm416-64q16 0 16-16t-16-16H48q-16 0-16 16t16 16h416z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
