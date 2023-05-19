//your code here
function countLetters() {
    const input = document.getElementById("evaluatedText").value;
    const letterCount = input.length;
    document.getElementById("letterCount").textContent = letterCount;
}