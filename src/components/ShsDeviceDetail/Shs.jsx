import { Tag } from 'antd'

import React from 'react'
import PageBreadcrumb from '../PageBreadcrumb/PageBreadcrumb'
import PowerSwitch from '../PowerSwitch/PowerSwitch'
import caretdown from '../../assets/widget-icons/caretdown.svg'
import classes from './Shs.module.scss'
import Loading from '../Loading/Loading'
import Performance from './Performance'
import Panel from './Panel'

import ShsChart from './ShsChart'

const Shs = ({
  id,
  client,
  performance,
  performanceLoading,
  panels,
  user,
  panelDataLoading,
  energyStatistics,
  energyStatisticsLoading,
  energyGeneration,
  energyGenerationLoading,
}) => {
  const energyGenerationSeries = [
    {
      name: 'Kwh',
      data: energyGeneration
        ? energyGeneration.map((data, key) => Math.round(data?.energy))
        : [],
    },
  ]
  const energyConsumedAndGeneratedSeries = [
    {
      name: 'Energy Consumed',
      align: 'top',
      data: energyStatistics
        ? energyStatistics.map((data, key) => data?.energy)
        : [],
    },
    {
      name: ' Energy Generated',
      data: energyGeneration
        ? energyGeneration.map((data, key) => data?.energy)
        : [],
    },
  ]

  return (
    <section className={classes.Shs}>
      <section className={classes.Shs__BreadCrumb}>
        {' '}
        <div
          style={{ display: 'flex' }}
          className={classes.Shs__PageBreadcrumb}
        >
          <PageBreadcrumb title={client} items={['Overview', '...', client]} />
          <img src={caretdown} alt="caret" srcSet="" />
        </div>
        <PowerSwitch device_id={id} user={user} />
      </section>
      <div className={classes.Shs__GridView}>
        <section className={classes.Shs__EnergyPerfomance}>
          <div>
            {' '}
            <Performance
              performanceLoading={performanceLoading}
              performance={performance}
            />
          </div>
          <div>
            <div className={classes.Shs__EnergyChart}>
              {energyStatisticsLoading ? (
                <Loading data={'energy chart'} />
              ) : (
                <ShsChart
                  series={energyConsumedAndGeneratedSeries}
                  type="area"
                  title="Energy Consumed VS Energy Generated"
                  categories={[
                    'Jan',
                    'feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ]}
                  xLabel="Month"
                  colors={['#C9E00C', '#5C9D48']}
                  opacity={0.1}
                  dataLabels={{
                    enabled: false,
                  }}
                />
              )}
            </div>
          </div>
        </section>
        <section className={classes.Shs__EnergyStats}>
          <div>
            {' '}
            <div className={classes.Shs__Generation}>
              <div className={classes.Shs__GenerationHeader}>
                <h1>
                  Energy Generation <span>(kWh)</span>
                </h1>
                <Tag
                  key={'1'}
                  style={{
                    borderRadius: '20px',
                    color: '#363636',
                    border: 'none',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '20px',
                  }}
                >
                  Today
                </Tag>
              </div>

              {energyGenerationLoading ? (
                <Loading data={'energy generated'} />
              ) : (
                <ShsChart
                  series={energyGenerationSeries}
                  type="bar"
                  yaxis={false}
                  categories={
                    energyGeneration
                      ? energyGeneration.map((data, key) => {
                          const hour = new Date(data?.hour)
                          return hour.toLocaleTimeString('en-US', {
                            hour12: true,
                            hour: 'numeric',
                          })
                        })
                      : []
                  }
                  colors="#497A38"
                  opacity={0.9}
                  dataLabels={{
                    enabled: true,
                    position: 'top',
                    style: {
                      fontSize: '14px',
                      fontWeight: 'bold',
                    },
                  }}
                  plotOptions={{
                    bar: {
                      barHeight: '7%',
                      borderRadius: 7,
                      borderRadiusApplication: 'end',
                      columnWidth: '100px',
                      dataLabels: {
                        enabled: false,
                        position: 'top',
                      },
                    },
                  }}
                />
              )}
            </div>
          </div>
          <div>
            <div className={classes.Shs__EnergyPanel}>
              <p>Panels</p>

              {panelDataLoading ? (
                <Loading data={'panel list'} />
              ) : panels ? (
                <Panel panels={panels} performance={performance} />
              ) : (
                'No data records...'
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Shs
