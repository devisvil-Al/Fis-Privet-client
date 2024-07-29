export function enableValidation(inputSelector, submitSelector) {
    console.log(inputSelector, submitSelector);
    const inputs = document.querySelectorAll(inputSelector)
    const submit = document.querySelector(submitSelector)
    inputs.forEach(input => input.addEventListener('input', () => validation(input, submit, inputs)))
}


function validation(input, submit, inputs) {
    submit.disabled = ![...inputs].every(inp => inp.validity.valid)
}