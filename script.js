const addBtn = document.querySelector(".new-task__button"); // step 1

//Create new Elements
function newElement() {
  //Li tag
  const li = createLiTag();

  //Input Tag
  const checkboxInput = inputTag();

  //Label Tag
  const label = labelTag();

  //Button Tag
  const button = buttonTag();

  //User Input
  let userInput = document.getElementById("new-task__input"); // step 1
  userInput.value;
  const inputText = document.createTextNode(userInput.value); // step 2, create a text node
  userInput.value = "";

  //Adds a Event listener to delete button that was created when new item added
  button.addEventListener("click", (event) => {
    deleteItems(event);
  });

  //Formatting elements
  if (userInput === "") {
    // alert("You must write something!");
    document.getElementById("new-task__input").textContent;
  } else {
    li.append(checkboxInput, label, button);
    label.append(inputText); // step 3, append the text to <label>
    document.getElementById("incomplete-tasks").appendChild(li);
  }
}

function createLiTag() {
  const li = document.createElement("li");
  li.classList.add("incomplete-tasks__list--add");
  return li;
}

function inputTag() {
  const checkboxInput = document.createElement("input"); // step 1, create an element
  checkboxInput.classList.add("incomplete-tasks__input--checkbox--add");
  checkboxInput.type = "checkbox";
  checkboxInput.setAttribute("type", "checkbox");
  checkboxInput.setAttribute("id", `input`);
  checkboxInput.setAttribute("id", `input`);
  checkboxInput.setAttribute("aria-checked", `false`);

  checkboxInput.addEventListener("click", toggle);
  return checkboxInput;
}

function labelTag() {
  const label = document.createElement("label");
  label.classList.add("incomplete-tasks__label--add");
  label.setAttribute("for", `input`);
  return label;
}

function buttonTag() {
  const button = document.createElement("button");
  button.classList.add("incomplete-tasks__button--delete--add");
  button.innerHTML = "X";
  return button;
}

// Append elements once function is triggered.
addBtn.addEventListener("click", () => {
  newElement();
});

//Function to delete items after it completed
function deleteItems(event) {
  const deleteButtonPressed = event.target;
  const itemToDelete = deleteButtonPressed.parentElement;
  itemToDelete.remove();
}

// ADD LOGIC TO THE LINE THROUGH STYLING
function toggle(event) {
  const checkbox = event.currentTarget;
  // HTML attributes are always strings, so we need to turn it into an actual boolean
  const checked =
    checkbox.getAttribute("aria-checked") === "true" ? true : false;
  // set the aria-checked attribute to the opposite of its current boolean value
  checkbox.setAttribute("aria-checked", !checked);
}
