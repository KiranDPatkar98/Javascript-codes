
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    
    data: {
        labels: ['Udupi', 'Mangalore', 'Bangalore', 'Mysore', 'Hubbali', 'Mumbai','Dharwad'],
        datasets: [
           
            {
                label: 'High Temperature in F',
                data: [12, 19, 3, 5, 2, 3,9],
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 4
            },
            {
                label: 'Low Temperature in F',
                data: [8, 10, 1, 4, 1, 2,6],
                backgroundColor: 'transparent',
                borderColor: 'green',
                borderWidth: 4
            },
    ]
    },
   
    options: {
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
             
            }
        },
        elements:{
            line:{
                tension:0
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        
        
       
    }
   


});

