import React, { useState } from 'react'

import { ReactComponent as EnergyWidgetIcon } from '../../../assets/widget-icons/energy-icon.svg'
import { ReactComponent as HomeWidgetIcon } from '../../../assets/widget-icons/home-icon.svg'
import InstructionModal from './InstructionModal/InstructionModal'
import PageBreadcrumb from '../../../components/PageBreadcrumb/PageBreadcrumb'
import PageLayout from '../../../components/Layout/PageLayout'
import { ReactComponent as SEnergyWidgetIcon } from '../../../assets/widget-icons/cancel-energy-con.svg'
import SHSTable from '../../../components/SHSTable/SHSTable'
import ShsDeviceMap from '../../../components/Map/ShsDeviceMap'
import StackedBarChart from '../../../components/Charts/StackedBarChart/StackedBarChart'
import Widget from '../../../components/Widget/Widget/Widget'
import WidgetFilter from '../../../components/WidgetFilter/WidgetFilter'
import classes from './Overview.module.scss'
import { stackBarData } from '../../../components/Charts/StackedBarChart/data'

const Overview = () => {
  const [chartData, setChartData] = useState({
    labels: stackBarData.map((data) => data.month),
    datasets: [
      {
        label: 'Energy Consumption',
        data: stackBarData.map((data) => data.energyConsumed),
        backgroundColor: '#66AB4F',
        borderRadius: '5',
        barThickness: '32',
      },
      {
        label: 'Energy Generation',
        data: stackBarData.map((data) => data.energyGenerated),
        backgroundColor: '#497A38',
        borderRadius: '7',
        barThickness: '32',
      },
    ],
  })

  const widgets = [
    {
      id: 1,
      icon: EnergyWidgetIcon,
      title: 'Total Energy Generation ',
      range: 'For the year',
      value: '100.241',
      valueCurrency: 'kWh',
    },
    {
      id: 2,
      icon: SEnergyWidgetIcon,
      title: 'Total Energy Consumption',
      range: 'For the year',
      value: '50.82',
      valueCurrency: 'kWh',
    },
    {
      id: 3,
      icon: HomeWidgetIcon,
      title: 'Total SHS',
      range: 'For the year',
      value: '7',
      valueCurrency: 'kWh',
    },
  ].map((widget) => (
    <Widget
      key={widget.id}
      Icon={widget.icon}
      range={widget.range}
      title={widget.title}
      value={widget.value}
      valueCurrency={widget.valueCurrency}
    />
  ))

  return (
    <PageLayout>
      <div style={{ backgroundColor: '#FCFCFD' }} className={classes.Overview}>
        <section className={classes.Overview__headerSection}>
          <PageBreadcrumb title="Overview" />
        </section>
        <section className={classes.Overview__filters}>
          <WidgetFilter />
        </section>
        <div className={classes.Overview__widgets}>{widgets}</div>
        {/* <div className={classes.Overview__map}>
          <ShsDeviceMap />
        </div> */}
        <div className={classes.Overview__chart}>
          <StackedBarChart
            title="Energy Generation vs Energy Consumption"
            chartData={chartData}
          />
        </div>
        <div className={classes.Overview__shsTable}>
          <SHSTable />
        </div>
      </div>
      {/* <InstructionModal /> */}
    </PageLayout>
  )
}

export default Overview
