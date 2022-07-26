
// const lineConfig = {
//   type: 'line',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Organic',
//         /**
//          * These colors come from Tailwind CSS palette
//          * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
//          */
//         backgroundColor: '#0694a2',
//         borderColor: '#0694a2',
//         data: [43, 48, 40, 54, 67, 73, 70],
//         fill: false,
//       },
//       {
//         label: 'Paid',
//         fill: false,
//         /**
//          * These colors come from Tailwind CSS palette
//          * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
//          */
//         backgroundColor: '#7e3af2',
//         borderColor: '#7e3af2',
//         data: [24, 50, 64, 74, 52, 51, 65],
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     legend: {
//       display: false,
//     },
//     tooltips: {
//       mode: 'index',
//       intersect: false,
//     },
//     hover: {
//       mode: 'nearest',
//       intersect: true,
//     },
//     scales: {
//       x: {
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'Month',
//         },
//       },
//       y: {
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'Value',
//         },
//       },
//     },
//   },
// }

// // change this to the id of your chart element in HMTL
// const lineCtx = document.getElementById('line')
// window.myLine = new Chart(lineCtx, lineConfig)

// User Growth
const userGrowthConfig = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        // label: 'Organic',
        backgroundColor: '#cabffd',
        borderColor: '#cabffd',
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    base: 0,
    legend: {
      display: false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
}
const userGrowthlineCtx = document.getElementById('growth-users')
window.myLine = new Chart(userGrowthlineCtx, userGrowthConfig)

const transactionsGrowthConfig = {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        // label: 'Organic',
        backgroundColor: '#4E153F',
        borderColor: '#4E153F',
        data: [33, 18, 60, 44, 77, 93, 65],
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    base: 0,
    legend: {
      display: false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
}
const transactionsGrowthlineCtx = document.getElementById('growth-transactions')
window.myLine = new Chart(transactionsGrowthlineCtx, transactionsGrowthConfig)
