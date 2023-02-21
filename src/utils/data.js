import { TbActivityHeartbeat, TbBolt, TbBoltOff } from 'react-icons/tb'

import { ReactComponent as BadBatteryWidgetIcon } from '../assets/widget-icons/bad-battery-icon.svg'
import { ReactComponent as BentArrowWidgetIcon } from '../assets/widget-icons/bent-arrow.svg'
import { ReactComponent as EnergyWidgetIcon } from '../assets/widget-icons/energy-icon.svg'
import { ReactComponent as GoodBatteryWidgetIcon } from '../assets/widget-icons/good-battery-icon.svg'
import { ReactComponent as HomeWidgetIcon } from '../assets/widget-icons/home-icon.svg'
import { RiseOutlined } from '@ant-design/icons'
import { ReactComponent as SEnergyWidgetIcon } from '../assets/widget-icons/cancel-energy-con.svg'
import { ReactComponent as SunWidgetIcon } from '../assets/widget-icons/sun.svg'

export const panelData = [
  {
    id: 1,
    key: 1,
    name: 'January, 2023',
    panelVoltage: 6.35,
    panelCurrent: 14.36,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
  {
    id: 2,
    key: 2,
    name: 'December, 2022',
    panelVoltage: 9.52,
    panelCurrent: 21.52,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
  {
    id: 3,
    key: 3,
    name: 'November, 2022',
    panelVoltage: 3.18,
    panelCurrent: 7.18,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
  {
    id: 4,
    key: 4,
    name: 'October, 2022',
    panelVoltage: 4.67,
    panelCurrent: 9.01,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
  {
    id: 5,
    key: 5,
    name: 'September, 2022',
    panelVoltage: 6.82,
    panelCurrent: 14.74,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
  {
    id: 6,
    key: 6,
    name: 'August, 2022',
    panelVoltage: 3.18,
    panelCurrent: 7.18,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
  {
    id: 7,
    key: 7,
    name: 'July, 2022',
    panelVoltage: 4.67,
    panelCurrent: 9.01,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
  {
    id: 8,
    key: 8,
    name: 'June, 2022',
    panelVoltage: 6.82,
    panelCurrent: 14.74,
    panelPower: 3.4,
    panelTotalEnergy: 24.0,
  },
]

export const generalFilterOptions = [
  { name: 'Yearly', value: 'yearly' },
  { name: 'Monthly', value: 'monthly' },
  { name: 'Weekly', value: 'weekly' },
]

export const energyFilterOptions = [
  { name: 'Solar house System', value: 'solar' },
  { name: 'recently added', value: 'recent' },
  ...generalFilterOptions,
]

export const energyAnalyticColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Energy Consumed',
    key: 'energyConsumed',
    dataIndex: 'energyConsumed',
    render: (value) => `${value.toLocaleString()} kwh`,
  },
  {
    title: 'Energy Generated',
    key: 'energyGenerated',
    dataIndex: 'energyGenerated',
    render: (value) => `${value.toLocaleString()} kwh`,
  },
]

export const panelWidgetsData = [
  {
    id: 1,
    icon: EnergyWidgetIcon,
    title: 'Panel Total Energy',
    range: 'For the year',
    value: '987.87',
    valueCurrency: 'WH',
  },
  {
    id: 2,
    icon: BentArrowWidgetIcon,
    title: 'Panel Voltage',
    range: 'For the year',
    value: '111.12',
    valueCurrency: 'V',
  },
  {
    id: 1,
    icon: SEnergyWidgetIcon,
    title: 'Panel Total Power',
    range: 'For the year',
    value: '790.06',
    valueCurrency: 'W',
  },
  {
    id: 1,
    icon: SunWidgetIcon,
    title: 'Panel Current',
    range: 'For the year',
    value: '987.87',
    valueCurrency: 'A',
  },
]

export const batteryWidgetsData = [
  {
    id: 1,
    icon: EnergyWidgetIcon,
    title: 'Battery Status',
    range: 'For the year',
    value: 'Good',
    valuePercentage: 99,
  },
  {
    id: 2,
    icon: SEnergyWidgetIcon,
    title: 'Battery Voltage',
    range: 'For the year',
    value: '111.12',
    valueCurrency: 'V',
  },
  {
    id: 3,
    icon: HomeWidgetIcon,
    title: 'Battery Current',
    range: 'For the year',
    value: '50.82',
    valueCurrency: 'A',
  },
]

export const batteryTableData = [
  {
    id: 1,
    key: 1,
    name: 'January, 2023',
    batteryVoltage: 6.35,
    batteryCurrent: 14.36,
    batteryHealth: true,
    chargingSource: 'Utility',
  },
  {
    id: 2,
    key: 2,
    name: 'December, 2022',
    batteryVoltage: 9.52,
    batteryCurrent: 21.52,
    batteryHealth: true,
    chargingSource: 'Utility',
  },
  {
    id: 3,
    key: 3,
    name: 'November, 2022',
    batteryVoltage: 3.18,
    batteryCurrent: 7.18,
    batteryHealth: true,
    chargingSource: 'Solar',
  },
  {
    id: 4,
    key: 4,
    name: 'October, 2022',
    batteryVoltage: 4.67,
    batteryCurrent: 9.01,
    batteryHealth: false,
    chargingSource: 'Solar',
  },
  {
    id: 5,
    key: 5,
    name: 'September, 2022',
    batteryVoltage: 6.82,
    batteryCurrent: 14.74,
    batteryHealth: true,
    chargingSource: 'Utility',
  },
  {
    id: 6,
    key: 6,
    name: 'August, 2022',
    batteryVoltage: 3.18,
    batteryCurrent: 7.18,
    batteryHealth: true,
    chargingSource: 'Utility',
  },
  {
    id: 7,
    key: 7,
    name: 'July, 2022',
    batteryVoltage: 4.67,
    batteryCurrent: 9.01,
    batteryHealth: false,
    chargingSource: 'Solar',
  },
  {
    id: 8,
    key: 8,
    name: 'June, 2022',
    batteryVoltage: 6.82,
    batteryCurrent: 14.74,
    batteryHealth: true,
    chargingSource: 'Utility',
  },
]

export const panelColumns = [
  {
    title: 'Monthly',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Panel Voltage',
    key: 'panelVoltage',
    dataIndex: 'panelVoltage',
    render: (value) => `${value.toLocaleString()} V`,
  },
  {
    title: 'Panel Current',
    key: 'panelCurrent',
    dataIndex: 'panelCurrent',
    render: (value) => `${value.toLocaleString()} A`,
  },
  {
    title: 'Panel Power',
    key: 'panelPower',
    dataIndex: 'panelPower',
    render: (value) => `${value.toLocaleString()} W`,
  },
  {
    title: 'Panel Total Energy',
    key: 'panelTotalEnergy',
    dataIndex: 'panelTotalEnergy',
    render: (value) => `${value.toLocaleString()} WH`,
  },
]

export const adminBatteryWidgetsData = [
  {
    id: 1,
    icon: EnergyWidgetIcon,
    title: 'Total SHS Battery',
    range: 'For the year',
    value: 6834,
  },
  {
    id: 2,
    icon: GoodBatteryWidgetIcon,
    title: 'Good SHS Battery',
    range: 'For the year',
    value: 6619,
  },
  {
    id: 3,
    icon: BadBatteryWidgetIcon,
    title: 'Bad SHS Battery',
    range: 'For the year',
    value: 215,
  },
]

export const adminBatteryTableData = [
  {
    id: 1,
    key: 1,
    name: 'January, 2023',
    batteryVoltage: 6.35,
    batteryCurrent: 14.36,
    batteryHealth: true,
    chargingSource: 'Utility',
    status: { percentage: 80, isCharging: true },
  },
  {
    id: 2,
    key: 2,
    name: 'December, 2022',
    batteryVoltage: 9.52,
    batteryCurrent: 21.52,
    batteryHealth: true,
    chargingSource: 'Utility',
    status: { percentage: 80, isCharging: true },
  },
  {
    id: 3,
    key: 3,
    name: 'November, 2022',
    batteryVoltage: 3.18,
    batteryCurrent: 7.18,
    batteryHealth: true,
    chargingSource: 'Solar',
    status: { percentage: 80, isCharging: true },
  },
  {
    id: 4,
    key: 4,
    name: 'October, 2022',
    batteryVoltage: 4.67,
    batteryCurrent: 9.01,
    batteryHealth: false,
    chargingSource: 'Solar',
    status: { percentage: 80, isCharging: true },
  },
  {
    id: 5,
    key: 5,
    name: 'September, 2022',
    batteryVoltage: 6.82,
    batteryCurrent: 14.74,
    batteryHealth: true,
    chargingSource: 'Utility',
    status: { percentage: 10, isCharging: false },
  },
  {
    id: 6,
    key: 6,
    name: 'August, 2022',
    batteryVoltage: 3.18,
    batteryCurrent: 7.18,
    batteryHealth: true,
    chargingSource: 'Utility',
    status: { percentage: 80, isCharging: true },
  },
  {
    id: 7,
    key: 7,
    name: 'July, 2022',
    batteryVoltage: 4.67,
    batteryCurrent: 9.01,
    batteryHealth: false,
    chargingSource: 'Solar',
    status: { percentage: 15, isCharging: false },
  },
  {
    id: 8,
    key: 8,
    name: 'June, 2022',
    batteryVoltage: 6.82,
    batteryCurrent: 14.74,
    batteryHealth: true,
    chargingSource: 'Utility',
    status: { percentage: 80, isCharging: true },
  },
]

export const adminEnergyAnalyticColumns = [
  {
    title: (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Solar House System(SHS)
        <TbBolt style={{ marginLeft: '5px', color: '#497A38' }} size={18} />
      </span>
    ),
    dataIndex: 'SHS',
    key: 'SHS',
  },
  {
    title: (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Energy Consumed
        <TbBoltOff style={{ marginLeft: '5px', color: '#497A38' }} size={18} />
      </span>
    ),
    key: 'energyConsumed',
    dataIndex: 'energyConsumed',
    render: (value) => `${value.toLocaleString()} kwh`,
  },
  {
    title: (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Energy Generated
        <TbActivityHeartbeat
          style={{ marginLeft: '5px', color: '#497A38' }}
          size={18}
        />
      </span>
    ),
    key: 'energyGenerated',
    dataIndex: 'energyGenerated',
    render: (value) => `${value.toLocaleString()} kwh`,
  },
  {
    title: (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Capacity
        <RiseOutlined
          style={{ marginLeft: '5px', color: '#497A38' }}
          size={18}
        />
      </span>
    ),
    key: 'capacity',
    dataIndex: 'capacity',
    render: (value) => value,
  },
]

export const listData = [
  { name: 'Farmilii Solar', issue: 'Low panel voltage', status: true },
  { name: 'Makanty Rewanda', issue: 'Maintenance overdue', status: true },
  { name: 'Candice Wu', issue: 'Abnormal load', status: false },
  { name: 'Makanty Rewanda', issue: 'Maintenance overdue', status: true },
  { name: 'BeMicky washo', issue: 'Low Battery volage', status: true },
  { name: 'Makanty Rewanda', issue: 'Maintenance overdue', status: false },
  { name: 'BeMicky washo', issue: 'Low panel voltage', status: true },
  { name: 'Candice Wu', issue: 'Abnormal load', status: true },
]
