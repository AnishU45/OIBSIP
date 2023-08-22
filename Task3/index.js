var input = document.getElementById("input_val");
var type = document.getElementsByName("temp");
var output = document.getElementById("output");
var btn = document.querySelector(".btn");

function convert() {
    var in_temp = parseFloat(input.value);

    if (type[0].checked) {
        output.value = (in_temp * 9/5) + 32;
    } else if (type[1].checked) {
        output.value = (in_temp - 32) * 5/9;
    }
}

btn.addEventListener("click", convert);
