"use strict";

const btn = document.getElementById("check");

function vowels() {
    let count = 0;    
    let input = document.getElementById("input").value;
    let input_array = input.split("");
    let vowels_array = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö", "A", "E", "I", "O", "U", "Y", "Å", "Ä", "Ö"];

    for(let i = 0; i < input_array.length; i++) {
        (vowels_array.includes(input_array[i])) ? count++ : count;
    }
    
    alert("There are " + count + " vowels");
}

btn.addEventListener("click", function() {
    vowels();
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
});
