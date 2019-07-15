import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://process";
const viewBox = "0 31 512 512";
const d = "M424 275q11 12 0 23l-98 126q-10 9-10 22.5t10 22.5q9 10 22.5 10t22.5-10l132-160q9-9 9-22.5t-9-22.5L373 104q-9-10-22-10t-23 10q-9 9-9 22.5t9 22.5zm-157 0q11 12 0 23l-98 126q-9 9-9 22.5t9 22.5q10 10 23 10t23-10l131-160q10-9 10-22.5T346 264L217 104q-10-10-23-10t-23 10q-9 9-9 22.5t9 22.5zm-160 0q5 5 5 11.5t-5 11.5L9 424q-9 9-9 22.5T9 469q10 10 23 10t23-10l131-160q10-9 10-22.5T186 264L57 104Q47 94 34 94t-23 10q-9 9-9 22.5t9 22.5z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
