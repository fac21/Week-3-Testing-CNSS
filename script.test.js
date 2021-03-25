//Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
  // test goes here
  let userInputExpected = document.getElementById("new-task__input"); // step 1
  userInputExpected.value = "TEST";

  const addBtn = document.querySelector(".new-task__button"); // step 1

  addBtn.click();

  const result = document.querySelector(".incomplete-tasks__label--add");
  console.dir(result);

  equal(result.textContent, "TEST"); // step 4
  userInputExpected.value = ""; // reset the page so it doesn't affect the page/other tests
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
