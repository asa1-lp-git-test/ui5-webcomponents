import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://master-task-triangle-2";
const viewBox = "0 0 512 512";
const d = "M488.143 141q9-19 7.5-38.5t-11-35-26.5-25.5-38-10h-297q-21 0-37.5 10t-26.5 25.5-11 35 8 38.5l50 101q5-1 10.5-1.5t11.5-.5q33 0 62 12.5t51 34.5 34.5 51 12.5 62q0 22-6 42t-16 37q21 2 41.5-8t31.5-32zm-360 147q-23 0-43.5 9t-35.5 24-24 35.5-9 43.5 9 43.5 24 35.5 35.5 24 43.5 9 43.5-9 35.5-24 24-35.5 9-43.5-9-43.5-24-35.5-35.5-24-43.5-9z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
