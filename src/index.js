import { terminateallworkers as terminateallworkers1 } from "./mypidashujisuan-bigint.js";
import { terminateallworkers as terminateallworkers2 } from "./mypidashujisuan.js";
export function bigintcleanup() {
    terminateallworkers1();
}
export { bigintchildwork } from "./bigintchildwork.js";
export { decimalchildwork } from "./decimalchildwork.js";
export function decimalcleanup() {
    terminateallworkers2();
}
