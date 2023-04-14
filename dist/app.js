function getVal() {
    const input = document.getElementById("length");
    const inputValLength = input.value.length;
    const lengthOut = document.getElementById("lengthOutput");
    if (lengthOut) {
        lengthOut.innerText = inputValLength.toString();
    }
}
