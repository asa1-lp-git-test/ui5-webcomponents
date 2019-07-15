import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://collapse-group";
const viewBox = "0 -1 512 512";
const d = "M267.5 391q-12 11-23 0l-159-157q-10-10-23-10t-22 10q-10 9-10 22t10 23l193 191q9 9 22.5 9t22.5-9l192-192q10-10 10-23t-10-23q-9-9-22.5-9t-22.5 9zm0-193q-12 11-23 0L85.5 41q-10-10-23-10t-22 10q-10 9-10 22t10 23l193 191q9 9 22.5 9t22.5-9l192-192q10-10 10-23t-10-23q-9-9-22.5-9t-22.5 9z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
