function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

//Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
  // test goes here
  const userInput = document.getElementById("new-task-input").value; // step 1
  userInput.value = "TEST";

  const addBtn = document.getElementById("add-btn"); // step 1
  addBtn.click();

  const result = document.getElementsByClassName(
    "incomplete-tasks__label--add"
  );

  equal(result.textContent, "TEST"); // step 4
  result.textContent = ""; // reset the page so it doesn't affect the page/other tests
});

// //Check things off my list so that I can see what I’ve done
// test("Checking an entry marks it as complete", () => {
//   // test goes here
// });

// //Delete things from the list if I don’t need to do them anymore

// test("Deleting an entry removes it from the list", () => {
//   // test goes here
// });

// //Use all the features of the app without a mouse

// //Filter out completed to-dos from my list so that I can focus on what’s left to do
// test("Toggling the filter hides completed tasks from the list", () => {
//   // test goes here
// });


..