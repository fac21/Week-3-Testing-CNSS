const addBtn = document.getElementById("add-btn"); // step 1
const input = document.getElementById("new-task-input").value; // step 1

// Append elements
function newElement() {
  const li = document.createElement("li");
  li.classList.add("incomplete-tasks__list--add");

  const checkboxInput = document.createElement("input"); // step 1, create an element
  checkboxInput.classList.add("incomplete-tasks__input--checkbox--add");
  checkboxInput.type = "checkbox";

  const label = document.createElement("label");
  label.classList.add("incomplete-tasks__label--add");

  const button = document.createElement("button");
  button.classList.add("incomplete-tasks__button--delete--add");
  button.innerHTML = "delete";

  const userInput = document.getElementById("new-task-input").value; // step 1
  const inputText = document.createTextNode(userInput); // step 2, create a text node

  label.appendChild(inputText); // step 3, append the text to <label>

  li.append(checkboxInput);
  li.append(label);
  li.append(button);
  // document.getElementById("incomplete-tasks").appendChild(li);

  if (userInput === "") {
    // alert("You must write something!");
    document.getElementById("new-task-input").textContent;
  } else {
    document.getElementById("incomplete-tasks").appendChild(li);
  }
}

document.getElementById("new-task-input").value = "";

// Append elements once function is triggered.
addBtn.addEventListener("click", () => {
  newElement();
  document.getElementById("new-task-input").value = "";
});
