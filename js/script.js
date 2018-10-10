new Chart(document.getElementById("skills"), {
    type: "doughnut",
    data: {
        labels: ["PHP","HTML/CSS", "Mysql","Javascript",],
        datasets: [
            {
                data: [40, 35, 15, 10],
                backgroundColor: [
                    "rgb(3, 169, 244)",
                    "rgb(255, 87, 34)",
                    "rgb(38, 166, 154)",
                    "rgb(255, 235, 59)"
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
