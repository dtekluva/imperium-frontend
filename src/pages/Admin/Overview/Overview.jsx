import { Button, List, Spin } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import {
  additionalOverviewBarProps,
  additionalOverviewProps,
} from '../../../components/Charts/data'
import {
  useGetActiveUsersQuery,
  useGetAdminOverviewAnalyticsQuery,
  useGetAdminOverviewCurrentVoltageQuery,
  useGetMapDataQuery,
  useGetOverviewActiveAlertQuery,
  useGetOverviewEmissionDataQuery,
  useGetOverviewEnergyDataQuery,
  useGetOverviewSectorQuery,
  useGetOverviewSolarHouseDataQuery,
} from '../../../features/slices/overview/adminOverviewSlice'

import AdminEnergyAnalytic from '../../../components/Widget/AdminEnergyAnalytic/AdminEnergyAnalytic'
import AdminPageLayout from '../../../components/Layout/AdminPageLayout/AdminPageLayout'
import AreaChart from '../../../components/Charts/AreaChart/AreaChart'
import Donut from '../../../components/Charts/Donut/Donut'
import { ReactComponent as GraphIcon } from '../../../assets/widget-icons/Line.svg'
import { ReactComponent as GraphIcon2 } from '../../../assets/widget-icons/overview-line-icon.svg'
import PageBreadcrumb from '../../../components/PageBreadcrumb/PageBreadcrumb'
import SHSTable from '../../../components/SHSTable/SHSTable'
import ShsDeviceMap from '../../../components/Map/ShsDeviceMap'
import SimpleBarChart from '../../../components/Charts/SimpleBarChart/SimpleBarChart'
import WidgetFilter from '../../../components/WidgetFilter/WidgetFilter'
import WidgetLoader from '../../../components/Widget/WidgetLoader/WidgetLoader'
import classes from '../../Customer/Overview/Overview.module.scss'
import { formatLabel } from '../../../utils/helpers'

const Overview = () => {
  const [pieChartData, setPieChartData] = useState({
    labels: [],
    data: [],
  })
  const [areaChartData, setAreaChartData] = useState([
    {
      name: 'Energy Consumed',
      data: [],
    },
    {
      name: 'Energy Generation',
      data: [],
    },
  ])
  const [chartData, setChartData] = useState([
    {
      name: 'Emission Avoided',
      data: [],
    },
  ])
  const [voltageChartData, setVoltageChartData] = useState([
    {
      name: 'Current',
      data: [],
    },
    {
      name: 'Voltage',
      data: [],
    },
  ])

  const [widgets, setWidgets] = useState([])
  const [page, setPage] = useState(1)
  const [alertPage, setAlertPage] = useState(1)
  const [globalFilter, setGlobalFilter] = useState('weekly')
  const [sectorId, setSectorId] = useState()
  const [sectorName, setSectorName] = useState('All')
  const [regionId, setRegionId] = useState()
  const [alertData, setAlertData] = useState([])

  const {
    isFetching: isAnalyticsFetching,
    isError: isAnalyticsError,
    error: analyticsError,
    data: analyticsData,
    refetch: refetchAnalytics,
  } = useGetAdminOverviewAnalyticsQuery({
    filterBy: globalFilter,
  })

  const {
    isFetching: isAlertFetching,
    isError: isAlertError,
    error: alertError,
    data: aData,
    refetch: refetchAlert,
  } = useGetOverviewActiveAlertQuery({
    page: alertPage,
    filterBy: globalFilter,
    sectorId,
    regionId,
  })

  const {
    isFetching: isEmissionFetching,
    isError: isEmissionError,
    error: emissionError,
    data: emissionData,
    refetch: refetchEmission,
  } = useGetOverviewEmissionDataQuery({
    filterBy: globalFilter,
    sectorId,
    regionId,
  })

  const {
    isFetching: isVoltageFetching,
    isError: isVoltageError,
    error: voltageError,
    data: voltageData,
    refetch: refetchVoltage,
  } = useGetAdminOverviewCurrentVoltageQuery({
    filterBy: globalFilter,
    sectorId,
    regionId,
  })

  const {
    isFetching: isSolarFetching,
    isError: isSolarError,
    error: solarError,
    data: solarData,
    refetch: refetchSolar,
  } = useGetOverviewSolarHouseDataQuery({
    page,
    filterBy: globalFilter,
    sectorId,
    regionId,
  })

  const {
    isFetching: isSectorFetching,
    isSuccess: isSectorSuccess,
    isError: isSectorError,
    error: sectorError,
    data: sectorData,
    refetch: refetchSector,
  } = useGetOverviewSectorQuery({
    filterBy: globalFilter,
  })
  const {
    isFetching: isEnergyFetching,
    isError: isEnergyError,
    error: energyError,
    data: energyData,
    refetch: refetchEnergy,
  } = useGetOverviewEnergyDataQuery({
    filterBy: globalFilter,
    sectorId,
    regionId,
  })

  const {
    isFetching: isActiveUserFetching,
    isError: isActiveUserError,
    error: activeUserError,
    data: activeUserData,
  } = useGetActiveUsersQuery({
    filterBy: globalFilter,
  })

  const {
    isFetching: isMapFetching,
    isError: isMapError,
    error: mapError,
    data: mapData,
  } = useGetMapDataQuery({
    sectorId,
    regionId,
  })

  useEffect(() => {
    if (isSectorFetching) return

    if (sectorData) {
      setPieChartData(sectorData)
    }
  }, [isSectorFetching, sectorData])

  useEffect(() => {
    if (isAnalyticsFetching) return
    setWidgets(
      [
        {
          id: 1,
          title: 'Total Energy Generation',
          value: analyticsData?.total_installed_capacity
            ? parseFloat(
                analyticsData?.total_installed_capacity?.toFixed(1),
              )?.toLocaleString()
            : 0,
          valueCurrency: 'kWh',
          graph: GraphIcon2,
        },
        {
          id: 2,
          title: 'Total Energy Consumption',
          value: analyticsData?.total_energy_consumed
            ? parseFloat(
                analyticsData?.total_energy_consumed?.toFixed(1),
              )?.toLocaleString()
            : 0,
          valueCurrency: 'kWh',
          graph: GraphIcon,
        },
        {
          id: 3,
          title: 'Total Customers',
          value: analyticsData?.total_customers
            ? parseFloat(
                analyticsData?.total_customers?.toFixed(1),
              )?.toLocaleString()
            : 0,
          graph: GraphIcon2,
        },
      ].map((widget) => (
        <AdminEnergyAnalytic
          key={widget.id}
          duration={formatLabel(globalFilter)}
          valueCurrency={widget.valueCurrency}
          title={widget.title}
          value={widget.value}
          LineGraph={widget.graph}
        />
      )),
    )
  }, [analyticsData, isAnalyticsFetching, globalFilter])

  const refetchData = useCallback(() => {
    refetchAnalytics()
    refetchAlert()
    refetchEmission()
    refetchVoltage()
    refetchSolar()
    refetchSector()
    refetchEnergy()
  }, [
    refetchAnalytics,
    refetchAlert,
    refetchEmission,
    refetchVoltage,
    refetchSolar,
    refetchSector,
    refetchEnergy,
  ])

  useEffect(() => {
    refetchData()
  }, [refetchData, globalFilter])

  useEffect(() => {
    if (alertPage == 1) setAlertData([])
    if (isAlertFetching) return

    if (isAlertError) {
      setAlertData([])
      return
    }

    if (aData?.results?.length) {
      setAlertData((prev) => [...prev, ...aData.results])
    }
  }, [aData, isAlertFetching, isAlertError, alertPage])

  useEffect(() => {
    if (emissionData) {
      setChartData((prevChartData) => [
        { ...prevChartData[0], data: emissionData },
      ])
    }
  }, [emissionData])

  useEffect(() => {
    if (isVoltageFetching) return

    if (isVoltageError) {
      setVoltageChartData([])
      return
    }

    setVoltageChartData(voltageData)
  }, [isVoltageFetching, isVoltageError, voltageData])

  useEffect(() => {
    if (isEnergyFetching) return

    if (isEnergyError) {
      setAreaChartData([
        {
          name: 'Energy Consumed',
          data: [],
        },
        {
          name: 'Energy Generation',
          data: [],
        },
      ])
      return
    }
    setAreaChartData(energyData)
  }, [isEnergyFetching, isEnergyError, energyData])

  return (
    <AdminPageLayout>
      <div className={classes.Overview}>
        <section className={classes.Overview__headerSection}>
          <PageBreadcrumb title="Overview" items={['Overview']} />
        </section>
        <section className={classes.Overview__filters}>
          <WidgetFilter
            selectFilterBy={(value) => {
              setAlertPage(1)
              setGlobalFilter(value)
            }}
            filterBy={globalFilter}
            hasSectorFilter={true}
            setRegionId={(val) => {
              setAlertPage(1)
              setRegionId(val)
            }}
            setSectorId={(val) => {
              setAlertPage(1)
              setSectorId(val)
            }}
            setSectorName={setSectorName}
          />
        </section>
        <div className={classes.Overview__widgets}>
          {isAnalyticsFetching ? <WidgetLoader /> : widgets}
        </div>
        <div className={classes.Overview__map}>
          <ShsDeviceMap isLoading={isMapFetching} data={mapData} />
        </div>
        <div className={classes.Overview__donutChart}>
          <Donut
            labels={pieChartData.labels}
            chartData={pieChartData.data}
            title={sectorName}
            loading={isSectorFetching}
          />
        </div>
        <div className={classes.Overview__areaChart}>
          <div className={classes.Overview__chartHeader}>
            <h1>Energy Generation vs Energy Consumption</h1>
            <Button className={classes.Overview__chartHeaderBtn}>
              View report
            </Button>
          </div>
          {isEnergyFetching ? (
            <Spin />
          ) : (
            <AreaChart
              chartData={areaChartData}
              chartProps={{ height: '100%', width: '100%' }}
              optionProps={additionalOverviewProps}
              height={'100%'}
              width={'100%'}
              strokeWidth={3}
              showGridY={true}
              showGrid={true}
              showYAxis={false}
            />
          )}
        </div>
        <div className={classes.Overview__shsTable}>
          <SHSTable
            isLoading={isSolarFetching}
            setPage={setPage}
            data={solarData}
          />
        </div>
        <div className={classes.Overview__bottom}>
          <div className={classes.Overview__bottomLeft}>
            <div className={classes.Overview__bottomChart}>
              {isEmissionFetching ? (
                <Spin />
              ) : (
                <SimpleBarChart
                  title="CO2 Emission Avoided"
                  chartData={chartData}
                  colors={['#99C78A']}
                  borderRadius={100}
                  columnWidth={50}
                  optionProps={additionalOverviewBarProps}
                />
              )}
            </div>
            <div className={classes.Overview__bottomAreaChart}>
              {isVoltageFetching ? (
                <Spin />
              ) : (
                <AreaChart
                  chartData={voltageChartData}
                  chartProps={{ height: '100%', width: '100%' }}
                  optionProps={{
                    ...additionalOverviewProps,
                    title: { text: 'Voltage & Current Statistic ' },
                    colors: ['#385E2B', '#7F56D9'],
                  }}
                  showGridY={true}
                  showGrid={true}
                  showYAxis={false}
                  strokeWidth={3}
                />
              )}
            </div>
          </div>
          <div className={classes.Overview__alerts}>
            <h1>Active Alerts</h1>
            <div className={classes.Overview__alertList}>
              {isAlertFetching ? (
                <Spin />
              ) : (
                <List
                  dataSource={alertData}
                  renderItem={(item, index) => (
                    <List.Item key={index}>
                      <List.Item.Meta
                        title={item.active_alert}
                        description={item.shs_name}
                      />
                      <p
                        style={{
                          color:
                            item.status === 'UNRESOLVED'
                              ? '#B42318'
                              : '#5C9D48',
                        }}
                      >
                        {item.status}
                      </p>
                    </List.Item>
                  )}
                />
              )}
            </div>
            <Button
              onClick={() => setAlertPage(aData?.page + 1)}
              disabled={aData?.page === aData?.total_pages}
              className={classes.Overview__alertBtn}
            >
              Show more
            </Button>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  )
}

export default Overview
