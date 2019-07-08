import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://company-view";
const transform = "translate(48.5,35)";
const d = "M256 224q0 -40 -28 -68t-68 -28t-68 28t-28 68t28 68t68 28t68 -28t28 -68zM160 160q26 0 45 19t19 45t-19 45t-45 19q-27 0 -45.5 -19t-18.5 -45t18.5 -45t45.5 -19zM448 272q0 -33 -23.5 -56.5t-56.5 -23.5q-34 0 -57 23.5t-23 56.5t23 56.5t57 23.5q33 0 56.5 -23.5 t23.5 -56.5zM368 224q20 0 34 14t14 34t-14 34t-34 14t-34 -14t-14 -34t14 -34t34 -14zM480 448q13 0 22.5 -9t9.5 -23v-257q-8 9 -15.5 17t-16.5 15v225h-320v-64h-32v64q0 14 9 23t23 9h320zM384 192q26 0 49.5 -10t41 -27.5t27.5 -40.5t10 -50v-32h-160v32h128 q0 20 -7.5 37.5t-21 30.5t-31 20.5t-36.5 7.5h-32q-42 0 -69 -29q-7 5 -13.5 9t-14.5 7q17 20 42.5 32.5t54.5 12.5h16h16zM192 128q26 0 49.5 -10t41 -27.5t27.5 -40.5t10 -50v-32h-320v32q0 27 10 50t27.5 40.5t40.5 27.5t50 10h32h32zM288 0q0 20 -7.5 37.5t-21 30.5 t-31 20.5t-36.5 7.5h-64q-40 0 -68 -28t-28 -68h256z";

registerIcon(name, transform, d);

export default {name, transform, d};