function getVal() {
    const input = document.getElementById("length") as HTMLInputElement;
    const inputValLength: number = input.value.length;
    const lengthOut = document.getElementById("lengthOutput") as HTMLElement;
    if (lengthOut) {
        lengthOut.innerText = inputValLength.toString();
    }
}