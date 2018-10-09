new Chart(document.getElementById("skills"), {
    type: "doughnut",
    data: {
        labels: ["PHP","Mysql","Javascript","HTML/CSS",],
        datasets: [
            {
                data: [50, 20, 15, 15,],
                backgroundColor: [
                    "rgb(3, 169, 244)",
                    "rgb(38, 166, 154)",
                    "rgb(255, 235, 59)",
                    "rgb(255, 87, 34)"
                ],
                borderWidth:[0,0,0,0]
            }
        ],
    },
    options: {
        legend: {
            display: false,
        }
    }
});
