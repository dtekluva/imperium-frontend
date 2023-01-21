export const overviewStackedOptions = {
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
    },
  },
  responsive: true,
  scales: {
    x: {
      title: { display: true, text: 'Month' },
      stacked: true,
    },
    y: {
      stacked: true,
      title: {
        text: 'kWh',
        display: true,
      },
    },
  },
}

export const stackBarData = [
  {
    id: 1,
    energyGenerated: '400',
    energyConsumed: '400',
    month: 'January',
  },
  {
    id: 2,
    energyGenerated: '500',
    energyConsumed: '500',
    month: 'February',
  },
  {
    id: 3,
    energyGenerated: '230',
    energyConsumed: '350',
    month: 'March',
  },
  {
    id: 4,
    energyGenerated: '430',
    energyConsumed: '420',
    month: 'April',
  },
  {
    id: 5,
    energyGenerated: '260',
    energyConsumed: '320',
    month: 'May',
  },
  {
    id: 6,
    energyGenerated: '430',
    energyConsumed: '500',
    month: 'June',
  },
  {
    id: 7,
    energyGenerated: '390',
    energyConsumed: '410',
    month: 'July',
  },
  {
    id: 8,
    energyGenerated: '380',
    energyConsumed: '430',
    month: 'August',
  },
  {
    id: 9,
    energyGenerated: '390',
    energyConsumed: '410',
    month: 'September',
  },
  {
    id: 10,
    energyGenerated: '330',
    energyConsumed: '500',
    month: 'October',
  },
  {
    id: 11,
    energyGenerated: '430',
    energyConsumed: '570',
    month: 'November',
  },
  {
    id: 12,
    energyGenerated: '310',
    energyConsumed: '400',
    month: 'December',
  },
]
