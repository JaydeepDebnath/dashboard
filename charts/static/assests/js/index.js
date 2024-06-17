import React, { useState, useEffect } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

const ChartComponent = ({ chartData }) => {
  return (
    <div className="chart">
      <Bar data={chartData.bar} />
      <Pie data={chartData.pie} />
      <Line data={chartData.line} />
    </div>
  );
};

const chartContainer = ()=>{
  const [chartData,setChartData] = useState(null);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/chart_data/')
      .then(response => response.json())
      .then(resposne_data =>{
        const labels = Object.keys(resposne_data.values[0]);
        const values = Object.values(resposne_data.values[0]);
        const sector_labels = Object.keys(resposne_data.values[1])
        const sector_values = Object.values(resposne_data.values[1])
        const topic_labels = Object.keys(resposne_data.values[2])
        const topic_values = Object.values(resposne_data.values[2])

        const newChartData = {
          bar:{
            labels : labels,
            datasets: [{
              label: 'Intensitys',
              data: values ,
              backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ] ,
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
                borderWidth: 1
            }]

          },
          pie:{
            labels:sector_labels,
            datasets : [{
              label : 'Sectors',
              data : sector_values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor : [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth : 1,
            }] 
          },
          line:{
            labels : topic_labels,
            datasets : [{
              label : 'Topics',
              data : topic_values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor : [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth : 1,
            }] 
          }
        };

        setChartData(newChartData)
      })
      .catch(error =>{
        console.error('Error fetching data :',error)
      });
    
  },[])

  return(
    <div className="container">
    <h1>Dashboard Application</h1>
    {chartData ? <ChartComponent chartData={chartData} /> : <p>Loading...</p>}
  </div>
  );
};

export default chartContainer;
    

// const ctx = document.getElementById("MyChart");
// const piectx = document.getElementById("pieChart");
// const linectx = document.getElementById("lineChart");
// const totalTopic = document.getElementById("total-topic");

  // fetch('http://127.0.0.1:8000/api/chart_data/')
  //   .then(response => response.json())
  //   .then(resposne_data =>{
  //  // megre API data
  // const labels = Object.keys(resposne_data.values[0]);
  // const values = Object.values(resposne_data.values[0]);
  // const sector_labels = Object.keys(resposne_data.values[1])
  // const sector_values = Object.values(resposne_data.values[1])
  // const topic_labels = Object.keys(resposne_data.values[2])
  // const topic_values = Object.values(resposne_data.values[2])

  // let MyChart = new Chart(ctx,{
  //   type: 'bar',
  //     data: {
  //         labels : labels,
  //           datasets: [{
  //               label: 'Intensitys',
  //               data: values ,
  //               backgroundColor:[
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //               ] ,
  //                 borderColor: [
  //                   'rgba(255, 99, 132, 1)',
  //                   'rgba(54, 162, 235, 1)',
  //                   'rgba(255, 206, 86, 1)',
  //                   'rgba(75, 192, 192, 1)',
  //                   'rgba(153, 102, 255, 1)',
  //                   'rgba(255, 159, 64, 1)'
  //               ],
  //                 borderWidth: 1
  //             }]
  //           },
  //           options: {
  //             scales:- {
  //               yAxes:[{
  //                       ticks: {
  //                         // beginAtZero: true
  //                         autoSkip: true,
  //                         maxTicksLimit: 20
  //                     },
  //                     display: true,
  //                     scaleLabel: {
  //                     display: true,
  //                     labelString: "Point"
  //                 }
  //                 }]
  //             }
  //         }
  //   }),
  //   // Create pie Chart
  //   pieChart = new Chart(piectx,{
  //     type:'pie',
  //     data:{
  //       labels:sector_labels,
  //       datasets : [{
  //         label : 'Sectors',
  //         data : sector_values,
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor : [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth : 1,
  //       }] 
  //     },
  //     options:{
  //       scales:{
  //         yAxes:[{
  //           display:false
  //         }],
  //         xAxes:[{
  //           display :false
  //         }]
  //       }
  //     }
  //   })

  //   // Create line Chart
  //   lineChart = new Chart(linectx,{
  //     type:'line',
  //     data:{
  //       labels : topic_labels,
  //       datasets : [{
  //         label : 'Topics',
  //         data : topic_values,
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor : [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth : 1,
  //       }] 
  //     },

  //   })
  //   });
  // // return(
  // //   <div className="container">
  // //   <h1>Dashboard Application</h1>
  // //   <div className="d-flex">
  // //     <div className="card">
  // //       <div className="card-body">
  // //         <canvas id="MyChart" width="400" height="400"></canvas>
  // //       </div>
  // //     </div>
  // //     <div className="card">
  // //       <div className="card-body">
  // //         <canvas id="pieChart" width="400" height="400"></canvas>
  // //       </div>
  // //     </div>
  // //     <div className="card">
  // //       <div className="card-body">
  // //         <canvas id="lineChart" width="800" height="400"></canvas>
  // //       </div>
  // //     </div>
  // //   </div>
  // // </div>
  // // )


// const totalTopic = document.getElementById('total-topic');
const totalSecttor = document.getElementById('total-sector');

fetch('http://127.0.0.1:8000/api/chart_data/')
    .then(response => response.json())
    .then(resposne_data =>{

     // megre API data
     const topic_labels = Object.keys(resposne_data.values[2])
     const topic_values = Object.values(resposne_data.values[2])
     const sector_labels = Object.values(resposne_data.values[1])
     const sector_values = Object.values(resposne_data.values[1])

      let lineChart = new Chart(totalTopic,{
        type:'bar',
        data:{
          labels : topic_labels,
          datasets : [{
            label : 'Topics',
            data : topic_values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor : [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth : 1,
          }] 
        },

      })

      pieChart = new Chart(totalSecttor,{
        type:'line',
        data:{
          labels:sector_labels,
          datasets : [{
            label : 'Sector',
            data : sector_values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor : [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth : 1,
          }] 
        },
        options:{
          scales:{
            yAxes:[{
              display:false
            }],
            xAxes:[{
              display :false
            }]
          }
        }
      })
  })


