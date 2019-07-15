import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://reset";
const viewBox = "0 -32 512 512";
const d = "M162 128l65 65-65 63 32 32 65-64 63 64 32-32-65-63 65-65-32-32-63 65-65-65zm-96 32q6-35 23-64t41.5-50.5T187 12t68-12q40 0 74.5 15T390 56t41 61 15 75-15 75-41 61-60.5 41-74.5 15H113l40-37q5-5 5-11.5t-5-11.5-11-5-11 5l-57 54q-9 10-9 23t9 23l58 51q11 11 22 0 5-5 5-11.5t-5-11.5l-41-36q42-1 75-1h76q45-2 84-20t68-48 45.5-70 16.5-85q0-47-17.5-87.5t-48-71-71-48T255-32q-43 0-80.5 15t-67 40.5T59 84t-25 76h32z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
