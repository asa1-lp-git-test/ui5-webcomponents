import { registerIcon } from "../SVGIconRegistry";

const name = "sap-icon://travel-expense";
const transform = "translate(48.5,35)";
const d = "M303 342l56 -167l-56 -56l-74 148l-71 -53v-75l-27 -26l-51 80l-80 51l26 26h75l54 72l-149 74l56 55l167 -55l37 37q11 11 30 19t37 8q17 0 26 -9q7 -8 8 -20.5t-2.5 -26t-10.5 -26t-14 -19.5zM278 333l-5 16l11 11l38 37q6 6 10 14.5t6.5 16.5t3 15t-1.5 10h-2 q-1 0 -2 0.5t-3 0.5q-13 0 -27 -6t-22 -14l-37 -37l-11 -11l-15 5l-152 50l-19 -18l116 -58l29 -14l-19 -25l-54 -71l-8 -11h-13h-52l46 -29l4 -3l4 -5l28 -45v52v13l11 7l71 54l25 19l14 -28l58 -116l19 19zM499 97q13 -14 13 -38q0 -27 -16 -44q-15 -17 -48 -22v-25h-22 v24q-29 4 -43 19q-15 14 -20 44l38 4q1 -12 8 -20q4 -6 17 -12v60q-33 9 -44 25q-13 16 -13 39t15 40q13 16 42 19l1 30h22l-1 -30q27 -5 40 -16q14 -14 18 -35l-37 -4q-3 16 -21 23v-57q40 -11 51 -24zM426 178q-12 -4 -16 -10q-5 -7 -5 -15t4 -14q6 -6 17 -11v50zM470 35 q6 7 6 19q0 8 -5 16q-5 6 -23 11v-56q16 3 22 10z";

registerIcon(name, transform, d);

export default {name, transform, d};