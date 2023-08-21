const result = document.getElementById("result");
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    result.textContent = inputText.value;
    inputText.value = null;
});
