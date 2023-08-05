var Button = document.getElementsByClassName("button")[0];

fetch("https://api.adviceslip.com/advice")
    .then(response => {
        return response.json();
    })
    .then(data => {

        var Id = data.slip.id;
        var advice = data.slip.advice;
        console.log(Id);
        document.getElementsByClassName("advice-id")[0].textContent = "ADVICE #" + Id;
        document.getElementsByClassName("advice-text")[0].textContent = advice;
    })

    .catch(error => {
        console.error("Error fetching advice:", error);
    });

Button.onclick = function () {

    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return response.json();
        })
        .then(data => {

            var Id = data.slip.id;
            var advice = data.slip.advice;
            console.log(Id);
            document.getElementsByClassName("advice-id")[0].textContent = "ADVICE #" + Id;
            document.getElementsByClassName("advice-text")[0].textContent = advice;
        })

        .catch(error => {
            console.error("Error fetching advice:", error);
        });

    // console.log("reached");

}
