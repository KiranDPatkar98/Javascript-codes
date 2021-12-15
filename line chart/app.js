
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    
    data: {
        labels: ['Udupi', 'Mangalore', 'Mysore', 'Hubbali', 'Gadag', 'Mumbai',''],
        datasets: [
           
            {
                label: 'High temperature in F',
                data: [20, 15, 9, 12, 9, 13,7],
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 4
            },
            {
                label: 'Low temperature in F',
                data: [12, 8, 5, 10, 4, 10,3],
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
                tension:0.4
            }
        },
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // },
        
        
       
    }
   


});

