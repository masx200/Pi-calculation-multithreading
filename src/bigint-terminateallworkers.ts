//@ts-ignore
import { myworker } from "./bigint-myworker";

export function terminateallworkers() {
    myworker.forEach(function (currentValue, index, arr) {
        currentValue?.terminate();
        // arr[index] = void 0;
    });
    myworker.length = 0;
}
