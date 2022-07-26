
const barConfig = {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Shoes',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Bags',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
}
const barsCtx = document.getElementById('bars')
window.myBar = new Chart(barsCtx, barConfig)


// // MOBILE > DASHBOARD: TIER DISTRIBUTION  
// const tierDistributionBarConfig = {
//   type: 'bar',
//   data: {
//     labels: ['Tier 1', 'Tier 2', 'Tier 3'],
//     datasets: [
//       {
//         label: 'Tiers',
//         backgroundColor: '#A30937',
//         // borderColor: window.chartColors.blue,
//         borderWidth: 1,
//         data: [56, 13, 43, ],
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//     base: 0,
//     legend: {
//       display: false,
//     },
//   },
// }
// const tierDistributionBarsCtx = document.getElementById('tier-distribution')
// window.myBar = new Chart(tierDistributionBarsCtx, tierDistributionBarConfig)
