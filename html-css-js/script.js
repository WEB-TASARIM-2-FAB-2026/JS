var list = document.getElementById("list")
var button = document.getElementById("button")
var input = document.getElementById("input")

button.addEventListener("click", function () {
    var text = input.value

    if (text == "") {
        return;
    }

    var li = document.createElement("li");
    li.textContent = text

    list.appendChild(li)
    input.value = ""
})