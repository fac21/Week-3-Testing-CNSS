const addBtn = document.querySelector(".new-task__button"); // step 1
const userInput = document.getElementById("new-task__input").value; // step 1
const inputText = document.createTextNode(userInput); // step 2, create a text node

// Append elements
function newElement() {
  const li = document.createElement("li");
  li.classList.add("incomplete-tasks__list--add");

  const checkboxInput = document.createElement("input"); // step 1, create an element
  checkboxInput.classList.add("incomplete-tasks__input--checkbox--add");
  checkboxInput.type = "checkbox";

  const label = document.createElement("label");
  label.classList.add("incomplete-tasks__label--add")


  const button = document.createElement("button");
  button.classList.add("incomplete-tasks__button--delete--add");
  button.innerHTML = "delete";

  const userInput = document.getElementById("new-task__input").value; // step 1
  const inputText = document.createTextNode(userInput); // step 2, create a text node

  if (userInput === "") {
    // alert("You must write something!");
    document.getElementById("new-task__input").textContent;
  } else {
    li.append(checkboxInput);
    li.append(label);
    li.append(button);
    label.appendChild(inputText); // step 3, append the text to <label>
    document.getElementById("incomplete-tasks").appendChild(li);
  }
  console.log(label.textContent);
}
// document.getElementById("new-task__input").value = "";

// Append elements once function is triggered.
addBtn.addEventListener("click", () => {
  newElement();
  // document.getElementById("new-task__input").value = "";
});
