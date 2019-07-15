import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://locked";
const viewBox = "0 -31 512 512";
const d = "M416 248q14-8 23-22.5t9-32.5V34q0-27-19-45.5T384-30H128q-27 0-45.5 18.5T64 34v159q0 18 8.5 32.5T95 248v25l.5 28.5.5 24V338q0 30 12.5 56t34 45.5 51 31T256 482t62-11.5 51-31 34.5-45.5 12.5-56v-90zm-256 90v-10.5l-.5-20.5-.5-25.5V257h193v81q0 33-28 56.5T256 418t-68-23.5-28-56.5zm256-145q0 14-9.5 23.5T384 226H128q-14 0-23-9.5T96 193V34q0-14 9-23.5T128 1h256q13 0 22.5 9.5T416 34v159zm-111-49q0-15-8-27t-21-18l44-65H192l43 65q-13 6-21 18t-8 27q0 20 14.5 34.5T256 193q20 0 34.5-14.5T305 144z";

registerIcon(name, viewBox, d);

export default { name, viewBox, d };
