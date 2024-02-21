let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @returns {number}
*/
export function getAnswer() {
    const ret = wasm.getAnswer();
    return ret;
}

