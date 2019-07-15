import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://screen-split-two";
const viewBox = "0 0 512 512";
const d = "M448 480q13 0 22.5-9.5T480 448V64q0-14-9.5-23T448 32H64q-14 0-23 9t-9 23v384q0 13 9 22.5t23 9.5h384zm-208-32H64V64h176v384zm208 0H272V64h176v384z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
