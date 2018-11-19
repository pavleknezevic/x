function ss() {
  for (var i = 1; i < 9; i++) {
    var res = "myChart"+i;
    var ctx = document.getElementById(res).getContext('2d');
  tt(ctx);
  }
}
function tt(dat) {
  var mixedChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
            label: 'Line Dataset1',
            backgroundColor: 'rgba(255, 99, 150,0)',
            borderColor: 'rgb(0, 0, 255)',
            data: [50,30,70,10,3,100,10,98,42,83,5],

          }, {
            label: 'Line Dataset',
            backgroundColor: 'rgba(135, 206, 235,100)',
            borderColor: 'rgba(135, 206, 235,100)',
            data: [40,20,60,0,50,90,0,88,32,73,5],
            // Changes this dataset to become a line
            type: 'line'
          }],
      labels: ["06:00","08:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]
    },
    options: {
      title: {
           display: true,
           text: 'HGw status',
           position:'top',
           fontSize:30
       },
       legend: {
         position: 'bottom',
         labels: {
        usePointStyle: true
      }
       }
    }
  });
}
