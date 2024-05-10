const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider)) {
    // Handle the case where either dividend or divider is not a number
    document.body.innerHTML = `<h1>Something went critically wrong. Please reload the page.</h1>`;
    console.error('Error: Invalid number');
  } else if (dividend === "" || divider === "") {
    // Handle the case where either dividend or divider is an empty string
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else if (divider == 0) {
    // Handle the case where divider is zero
    result.innerText = 'Division not performed. Invalid number provided. Try again';
    console.error('Error: Divider cannot be zero');
  } else {
    // Perform the division operation
    result.innerText = Math.floor(dividend / divider);
  }
});