let string = "";
// querry selector will select all the buttons whose class is btn
let buttons = document.querySelectorAll(".btn");

// creating an array that will traverse each button
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {                       // calculate
      string = eval(string);
      document.querySelector("input").value = string;
    }
    else if(e.target.innerHTML == 'Clear'){                    // clear
        string = "";
        document.querySelector("input").value = string;
    }
    else if(e.target.innerHTML == 'Del'){
        var number = document.querySelector("input");
        var remove = number.value;
        remove = remove.slice(0, -1);               // to remove the last digit of a number 
        number.value = remove;
    }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
