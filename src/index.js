import { bigintworkersetup } from "./bigintworkersetup.js";
import { decimalworkersetup } from "./decimalworkersetup.js";
import { terminateallworkers as terminateallworkers1 } from "./mypidashujisuan-bigint.js";
import { terminateallworkers as terminateallworkers2 } from "./mypidashujisuan.js";
export function bigintcleanup() {
    terminateallworkers1();
}

export function decimalcleanup() {
    terminateallworkers2();
}
export { decimalworkersetup };
export { bigintworkersetup };
export { bigintCalculatePi } from "./bigintCalculatePi.js";
export{decimalCalculatePi}from'./decimalCalculatePi.js'