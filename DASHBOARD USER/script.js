const ctx = document.getElementById('balanceChart').getContext('2d');

const balanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'Balance',
            data: [4000, 5000, 4500, 6000, 6482, 5500, 6700, 7000],
            borderColor: 'rgba(155, 89, 182, 1)',
            fill: false,
            tension: 0.1,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
