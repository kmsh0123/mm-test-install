const myName = "Su Hnin Aye";

export function showMyName() {
    return myName;
}
export function showMyNameUI(selector) {
    document.querySelector(selector).innerHTML = myName;
}