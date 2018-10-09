new Chart(document.getElementById("skills"), {
    type: "doughnut",
    data: {
        labels: ["PHP","Mysql","Javascript","HTML/CSS","Laravel(勉強中)"],
        datasets: [
            {
                data: [50, 17, 15, 15,3],
                backgroundColor: [
                    "rgb(3, 169, 244)",
                    "rgb(38, 166, 154)",
                    "rgb(255, 235, 59)",
                    "rgb(255, 87, 34)",
                    "rgb(255, 110, 64)",
                ],
                borderWidth:[0,0,0,0,0]
            }
        ],
    },
    options: {
        legend: {
            display: false,
        }
    }
});
