test("Submitting a new task adds it to the list", () => {
  // test goes here
  let userInputExpected = document.getElementById("new-task__input"); // step 1
  userInputExpected.value = "TEST";

  const addBtn = document.querySelector(".new-task__button"); // step 1

  addBtn.click();

  const result = document.querySelector(".incomplete-tasks__label--add");

  equal(result.textContent, "TEST"); // step 4
  result.value = ""; // reset the page so it doesn't affect the page/other tests
});

test("Delete an entry removes it from the list", () => {
  let liItems = document.querySelectorAll("li");

  let expected = liItems.length - 1;
  let event = { target: { parentElement: liItems[0] } };

  deleteItems(event);

  liItems = document.querySelectorAll("li");
  let actual = liItems.length;

  equal(actual, expected);
});

// TESTING Delete items from list
// test("Delete an entry removes it from the list", () => {
//   const result = document.querySelector(".incomplete-tasks__list--add");
//   const deleteBtn = document.querySelector(
//     ".incomplete-tasks__button--delete--add"
//   );
//   deleteBtn.click();
//   equal(result.children.length, 3); // step 4
// });

// // //Check things off my list so that I can see what I’ve done
// // test("Checking an entry marks it as complete", () => {
// //   // test goes here

// // });

// // //Use all the features of the app without a mouse

// // //Filter out completed to-dos from my list so that I can focus on what’s left to do
// // test("Toggling the filter hides completed tasks from the list", () => {
// //   // test goes here
// // });
