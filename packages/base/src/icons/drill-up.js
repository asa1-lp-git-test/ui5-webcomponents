import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://drill-up";
const viewBox = "0 1 512 512";
const d = "M268 424q-5 5-11.5 5t-11.5-5l-126-97q-11-9-23.5-9.5T74 327q-10 9-10 22.5T74 372l160 131q9 10 22.5 10t22.5-10l160-129q9-9 9-22.5t-9-22.5q-10-10-22-9.5t-23 9.5zm-2-161q-4 4-9.5 4t-9.5-4l-106-82q-9-8-19.5-8t-18.5 8-8 19 8 19l134 110q8 8 19 8t19-8l135-109q8-8 8-18.5t-8-18.5q-17-17-38 0zm0-149q-9 9-17 0l-95-73q-8-7-17.5-7T120 41t-7 17 7 17l120 98q8 8 17.5 8t16.5-8l120-97q7-7 7-16.5T394 43q-15-15-33 0z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
