// // Step 1: Select all buttons
// const buttons = document.querySelectorAll("button");

// // Step 2: Loop through buttons
// buttons.forEach(button => {
  
//   // Step 3: Add click event
//   button.addEventListener("click", () => {
    
//     // Step 4: Get color from data attribute
//     const color = button.getAttribute("data-color");

//     // Step 5: Change background color
//     document.body.style.backgroundColor = color;
//   });

// });

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    document.body.style.backgroundColor = color;
  });
});
