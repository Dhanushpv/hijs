document.getElementById('num').onclick = function() {
    let inputValue = document.getElementById('sub').value;
    let convertedValue = parseFloat(inputValue) / 3.2808;
    console.log("Converted value:", convertedValue);
  }

document.getElementById('num').onclick = function() {
    let inputValue = document.getElementById('sub').value.trim(); // Trim any extra spaces
    let convertedValue = parseFloat(inputValue) / 3.2808;
  
    if (isNaN(convertedValue)) {
      console.log("Converted value is NaN. Please enter a valid number.");
    } else {
      console.log("Converted value:", convertedValue);
    }
  }
  
// document.getElementById('num').onclick = function() {
//     let inputValue = document.getElementById('sub').value.trim(); // Trim any extra spaces
//     console.log("Input value:", inputValue); // Log the input value
  
//     if (inputValue === "") {
//       console.log("Input is empty");
//       return;
//     }
  
//     let convertedValue = parseFloat(inputValue) / 3.2808;
//     console.log("Parsed value:", parseFloat(inputValue)); // Log the parsed value
  
//     if (isNaN(convertedValue)) {
//       console.log("Converted value is NaN. Please enter a valid number.");
//     } else {
//       console.log("Converted value:", convertedValue);
//     }
//   }
  