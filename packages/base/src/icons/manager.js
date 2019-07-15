import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://manager";
const viewBox = "0 -32 512 512";
const d = "M384 192H96v32q0 31 6 49.5t18 29 30 14 42 3.5h96q24 0 42-4t30-14.5 18-29.5 6-48v-32zm-32 64q0 11-10 18t-22 10q-14 4-32 4h-96q-18 0-32-4-12-3-22.5-10t-9.5-18v-32h224v32zM465 55q47-21 47-87H0q0 64 48 86-7 8-11.5 19T32 96q0 26 19 45t45 19q27 0 45.5-19T160 96q0-25-15-41 20-9 32-26 10 15 31 25-7 8-11.5 19T192 96q0 26 19 45t45 19q27 0 45.5-19T320 96q0-25-15-41 20-9 32-26 10 15 31 25-7 8-11.5 19T352 96q0 26 19 45t45 19q27 0 45.5-19T480 96q0-25-15-41zM64 96q0-14 9.5-23T96 64q14 0 23 9t9 23q0 13-9 22.5T96 128q-13 0-22.5-9.5T64 96zm96-96q0 24-19.5 28T96 32q-24 0-44-4.5T32 0h128zm64 96q0-14 9.5-23t22.5-9q14 0 23 9t9 23q0 13-9 22.5t-23 9.5q-13 0-22.5-9.5T224 96zm96-96q0 24-19.5 28T256 32q-24 0-44-4.5T192 0h128zm64 96q0-14 9.5-23t22.5-9q14 0 23 9t9 23q0 13-9 22.5t-23 9.5q-13 0-22.5-9.5T384 96zm96-96q0 24-19.5 28T416 32q-24 0-44-4.5T352 0h128zM320 400q0-33-23-56.5T240 320q-33 0-56.5 23.5T160 400t23.5 56.5T240 480q34 0 57-23.5t23-56.5zm-80-48q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
