const btn = document.querySelector(".add-btn");
const input = document.querySelector(".input");
const list = document.querySelector(".todo-list");

// events

btn.addEventListener("click", (event) => {
    event.preventDefault();
    
    if(input.value != ""){

    // creating a li element
    const li = document.createElement("li");
    // adding bootstrap classes to  the list item
    li.className = "list-group-item list-group-item-primary mb-2"
    // appending the value from the input to our newly created li
    li.appendChild(document.createTextNode(`${input.value}`));
    //creating a delete button
    const delBtn = document.createElement("button");
    // adding bootstrap classes to the delete button
    delBtn.className = "btn btn-danger btn-sm float-right delete"
    // adding text label to the button
    delBtn.appendChild(document.createTextNode("Delete"));
    // adding the button to the list
    li.appendChild(delBtn);
    // adding the li to the list
    list.appendChild(li);

    }
});


list.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")){
        // I want to referance to the li.. here the event is happening on the delete button
        // so I want to target the parent element of the delete button which is li and save it on a variable
        const li = event.target.parentElement;

        // this code is going to delete the todo
        list.removeChild(li);
    }
});


// changing the color
let darkMode = localStorage.getItem("darkmode");
const changeBtn = document.querySelector("#change");
const container = document.querySelector(".container");

const enableDarkMode = () => {
    // adding the necessary classes for darkmode
    container.classList.add("bg-success");

    // updating the local storage
    localStorage.setItem("darkmode", "enabled");
    
}

const disableDarkMode = () => {
    // adding the necessary classes for darkmode
    container.classList.remove("bg-success");

    // updating the local storage
    localStorage.setItem("darkmode", null);
    
}

if(darkMode === "enabled"){
    // it checks if user has any previous settings set to true, in this case it is dark mode
    enableDarkMode();
}

changeBtn.addEventListener("click", () => {
    // I am setting the value again to the variable darkmode because even if i click it the value is not going to change in the variable
    // the value of local storage is changing but in the variable it isn't updating
    darkMode = localStorage.getItem("darkmode"); 
    
    if(darkMode !== "enabled"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
});