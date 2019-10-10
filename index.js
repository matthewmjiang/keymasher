document.getElementById('date').innerHTML = new Date().toDateString();

// use querySelector to set user_input equal to the text input element
let user_input = document.querySelector("#user_input");
// assign display as the textarea element
let display = document.getElementById("display");


// - Attach an event handler to the text input element.
// - Given an event "change", function saveWord will take care of it.
// - When the event occurs, an event object is passed to the function as a parameter, so be careful with that.
// - The change event is really onchange, but in DOM syntax I guess.
// - Change event occurs when the user changes the content of an input field.
user_input.addEventListener("change", saveWord);

function saveWord()
{
    // Add the current entered text into the textarea element
    display.textContent += user_input.value + " ";

    // Clear the input element.
    user_input.value = "";
}
