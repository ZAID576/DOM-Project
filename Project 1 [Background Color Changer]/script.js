let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click",() => {

        let color = button.dataset.color;

        document.body.style.backgroundColor = color;

    });

});