// MOBILE active user ratio
const activeUserRatioConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [43, 57],
        backgroundColor: ['#4E153F', '#F5F1FF'],
        borderColor: 'transparent',
        label: 'Dataset 1',
      },
    ],
    labels: ['Active Users', 'Inactive Users'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 70,
    legend: {
      display: false,
      position: 'bottom',
      boxHeight: 8,
      pointStyle: 'circle',
      usePointStyle: true,
    },
  },
}
const activeUserRatioPieCtx = document.getElementById('activeUserRatio')
window.myPie = new Chart(activeUserRatioPieCtx, activeUserRatioConfig)

// MOBILE referred active user ratio
const referredActiveUserRatioConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [23, 77],
        backgroundColor: ['#4E153F', '#F5F1FF'],
        borderColor: 'transparent',
        label: 'Dataset 1',
      },
    ],
    labels: ['Referred Active Users', 'Inactive Users'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 70,
    legend: {
      display: false,
    },
  },
}
const referredActiveUserRatioPieCtx = document.getElementById('referredActiveUserRatio')
window.myPie = new Chart(referredActiveUserRatioPieCtx, referredActiveUserRatioConfig)


// MOBILE Tier Distribution
const tierDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [23, 79, 52],
        backgroundColor: ['#4E153F', '#F5F1FF', '#E1F0A8'],
        borderColor: 'transparent',
        label: 'Dataset 1',
      },
    ],
    labels: ['Tier 1', 'Tier 2', 'Tier 3'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 70,
    legend: {
      display: false,
      position: 'bottom'
    },
  },
}
const tierDistributionPieCtx = document.getElementById('tier-distribution')
window.myPie = new Chart(tierDistributionPieCtx, tierDistributionConfig)

// MOBILE Tier Distribution
const tierActiveDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [73, 49, 52],
        backgroundColor: ['#4E153F', '#F5F1FF', '#E1F0A8'],
        borderColor: 'transparent',
        label: 'Dataset 1',
      },
    ],
    labels: ['Tier 1', 'Tier 2', 'Tier 3'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 70,
    legend: {
      display: false,
      position: 'bottom'
    },
  },
}
const tierActiveDistributionPieCtx = document.getElementById('tier-distribution-active')
window.myPie = new Chart(tierActiveDistributionPieCtx, tierActiveDistributionConfig)


// MOBILE STATE USER DISTRIBUTION
const stateDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [23, 57, 12, 26, 43],
        backgroundColor: ['#4E153F', '#F5F1FF', '#EAF6BC', '#FFDECA', '#FFEAF0'],
        borderColor: 'transparent',
        label: 'State Distribution',
      },
    ],
    labels: ['Delta', 'Lagos', 'Kano', 'Oyo', 'Ogun'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      // display: false,
      position: 'bottom'
    },
  },
}
const stateDistributionPieCtx = document.getElementById('mobile-state-distribution')
window.myPie = new Chart(stateDistributionPieCtx, stateDistributionConfig)

// MOBILE STATE DISTRIBUTION OF ACTIVE USERS
const stateDistributionActiveConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [13, 37, 11, 16, 23],
        backgroundColor: ['#4E153F', '#F5F1FF', '#EAF6BC', '#FFDECA', '#FFEAF0'],
        borderColor: 'transparent',
        label: 'State Distribution',
      },
    ],
    labels: ['Delta', 'Lagos', 'Kano', 'Oyo', 'Ogun'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      // display: false,
      position: 'bottom'
    },
  },
}
const stateDistributionActivePieCtx = document.getElementById('mobile-state-distribution-active')
window.myPie = new Chart(stateDistributionActivePieCtx, stateDistributionActiveConfig)


// MOBILE GENDER USER DISTRIBUTION
const genderDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [23, 57,],
        borderColor: 'transparent',
        backgroundColor: ['#4E153F', '#F5F1FF'],
        label: 'Gender Distribution',
      },
    ],
    labels: ['Male', 'Female'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      display: false,
      position: 'bottom'
    },
  },
}
const genderDistributionPieCtx = document.getElementById('mobile-gender-distribution')
window.myPie = new Chart(genderDistributionPieCtx, genderDistributionConfig)

// MOBILE GENDER ACTIVE USER DISTRIBUTION 
const genderDistributionActiveConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [20, 43,],
        borderColor: 'transparent',
        backgroundColor: ['#4E153F', '#F5F1FF'],
        label: 'Gender Distribution',
      },
    ],
    labels: ['Male', 'Female'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      display: false,
      position: 'bottom'
    },
  },
}
const genderDistributionActivePieCtx = document.getElementById('mobile-gender-distribution-active')
window.myPie = new Chart(genderDistributionActivePieCtx, genderDistributionActiveConfig)


// MOBILE AGE USER DISTRIBUTION
const ageDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [23, 57, 31],
        borderColor: 'transparent',
        backgroundColor: ['#4E153F', '#F5F1FF', '#EAF6BC'],
        label: 'Age Distribution',
      },
    ],
    labels: ['18-30', '31-50', '51-65'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      // display: false,
      position: 'bottom'
    },
  },
}
const ageDistributionPieCtx = document.getElementById('mobile-age-distribution')
window.myPie = new Chart(ageDistributionPieCtx, ageDistributionConfig)

// MOBILE AGE ACTIVE USER DISTRIBUTION 
const ageDistributionActiveConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [12, 42, 14],
        borderColor: 'transparent',
        backgroundColor: ['#4E153F', '#F5F1FF', '#EAF6BC'],
        label: 'Age Distribution (Active Users)',
      },
    ],
    labels: ['18-30', '31-50', '51-65'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      // display: false,
      position: 'bottom'
    },
  },
}
const ageDistributionActivePieCtx = document.getElementById('mobile-age-distribution-active')
window.myPie = new Chart(ageDistributionActivePieCtx, ageDistributionActiveConfig)

// MOBILE USER INDUSTRY DISTRIBUTION
const industryDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [23, 57, 30],
        backgroundColor: ['#4E153F', '#F5F1FF', '#EAF6BC'],
        borderColor: 'transparent',
        label: 'Industry Distribution',
      },
    ],
    labels: ['Fashion', 'Electronics', 'Telecom'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      // display: false,
      position: 'bottom'
    },
  },
}
const industryDistributionPieCtx = document.getElementById('mobile-industry-distribution')
window.myPie = new Chart(industryDistributionPieCtx, industryDistributionConfig)

// MOBILE ACTIVE USER INDUSTRY DISTRIBUTION
const activeIndustryDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [12, 22, 16],
        backgroundColor: ['#4E153F', '#F5F1FF', '#EAF6BC'],
        borderColor: 'transparent',
        label: 'Industry Distribution',
      },
    ],
    labels: ['Fashion', 'Electronics', 'Telecom'],
  },
  options: {
    responsive: true,
    // cutoutPercentage: 80,
    legend: {
      // display: false,
      position: 'bottom'
    },
  },
}
const activeIndustryDistributionPieCtx = document.getElementById('mobile-industry-distribution-active')
window.myPie = new Chart(activeIndustryDistributionPieCtx, activeIndustryDistributionConfig)


// MOBILE NPL ratio
const nplDistributionConfig = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [53, 57,],
        backgroundColor: ['#4e153f', '#f5f1ff'],
        borderColor: 'transparent',
        label: 'Gender Distribution',
      },
    ],
    labels: ['Performing Active Loans', 'Non performing loans'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 60,
    legend: {
      // display: false,
      position: 'bottom'
    },
  },
}
const nplDistributionPieCtx = document.getElementById('mobile-npl-distribution')
window.myPie = new Chart(nplDistributionPieCtx, nplDistributionConfig)