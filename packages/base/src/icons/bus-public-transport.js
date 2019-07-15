import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://bus-public-transport";
const viewBox = "0 32 512 512";
const d = "M384 480q26 0 49.5-10t41-27.5T502 402t10-50V192q0-13-9.5-22.5T480 160h-34q-5-27-27-45.5T368 96t-51 18.5-28 45.5h-67q-5-27-27-45.5T144 96t-51 18.5T65 160H0l26 263q2 25 20.5 41T89 480h295zM256 320h96v128h-96V320zm-128 0h96v128h-96V320zm-78 0h46v128h-7q-12 0-21-9.5T58 416zm94-192q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm224 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm112 160H47l-11-96h29q6 28 28 46t51 18 51-18 27-46h67q6 28 28 46t51 18 51-18 27-46h34v96zm0 64q0 40-28 68t-68 28V320h96v32z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
