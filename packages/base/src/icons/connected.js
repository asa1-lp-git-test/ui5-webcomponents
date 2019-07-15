import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://connected";
const viewBox = "0 0 512 512";
const d = "M480 52l-18-20-127 126 2 2-19-18q-27-25-57-25-32 0-56 25l-26 26-46 44q-26 26-26 59.5t26 58.5l12 13L32 458l21 22 113-115 13 13q11 13 26 19t31 6q33 0 60-25l45-48v-1l26-26q25-23 25-56.5T367 190l-12-12zM139 272q0-21 16-37l23-23 118 118-24 26q-15 15-36 15t-33-14l-47-50q-17-14-17-35zm206-59q15 13 15 33t-14 34l-28 27-116-117 25-25h1l1-1q13-15 32-15 18 0 34 16z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
