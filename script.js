const addBtn = document.querySelector(".new-task__button"); // step 1
const userInput = document.getElementById("new-task__input").value; // step 1
const inputText = document.createTextNode(userInput); // step 2, create a text node

// Append tasks
function newElement() {
  //Li tag
  const li = document.createElement("li");
  li.classList.add("incomplete-tasks__list--add");

  //Input Tag
  const checkboxInput = document.createElement("input"); // step 1, create an element
  checkboxInput.classList.add("incomplete-tasks__input--checkbox--add");
  checkboxInput.type = "checkbox";
  checkboxInput.setAttribute("type", "checkbox");
  checkboxInput.setAttribute("id", `input`);
  checkboxInput.setAttribute("id", `input`);
  checkboxInput.setAttribute("aria-checked", `false`);

  checkboxInput.addEventListener("click", toggle);

  //Label Tag
  const label = document.createElement("label");
  label.classList.add("incomplete-tasks__label--add");
  label.setAttribute("for", `input`);

  //Button Tag
  const button = document.createElement("button");
  button.classList.add("incomplete-tasks__button--delete--add");
  button.innerHTML = "X";

  //User Input
  const userInput = document.getElementById("new-task__input").value; // step 1
  const inputText = document.createTextNode(userInput); // step 2, create a text node

  //Adds a Event listener to delete button that was created when new item added
  button.addEventListener("click", (event) => {
    deleteItems(event);
  });

  //Formatting elements
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
}

// Append elements once function is triggered.
addBtn.addEventListener("click", () => {
  newElement();
});

//Function to delete items after its completed
function deleteItems(event) {
  const deleteButtonPressed = event.target;
  const itemToDelete = deleteButtonPressed.parentElement;
  itemToDelete.remove();
}

// ADD LOGIC TO THE LINE THROUGH STYLING
function toggle(event) {
  const checkbox = event.currentTarget;
  console.dir(checkbox);
  // HTML attributes are always strings, so we need to turn it into an actual boolean
  const checked =
    checkbox.getAttribute("aria-checked") === "true" ? true : false;

  // set the aria-checked attribute to the opposite of its current boolean value
  checkbox.setAttribute("aria-checked", !checked);
  if (checked === false) {
    document.querySelector(
      ".incomplete-tasks__label--add"
    ).style.textDecoration = "line-through"; // ADD LOGIC //if checkbex is checked
  } else {
    document.querySelector(
      ".incomplete-tasks__label--add"
    ).style.textDecoration = ""; // ADD LOGIC //if checkbex is checked
  }
}
