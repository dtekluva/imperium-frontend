import { DatePicker, Radio, Select } from 'antd'
import React, { useState } from 'react'
import {
  useListShsRegionsQuery,
  useListShsSectorsQuery,
} from '../../features/slices/customersSlice'

import { CloudDownloadOutlined } from '@ant-design/icons'
import DropDownFilter from '../DropDownFilter/DropDownFilter'
import classes from './WidgetFilter.module.scss'

const { Option } = Select
const { Group, Button } = Radio

const optionData = [
  { name: '12 months', value: 'yearly' },
  { name: '30 days', value: 'monthly' },
  { name: '7 days', value: 'weekly' },
  { name: '24 hours', value: 'daily' },
]

const options = optionData.map((option, index) => (
  <Option key={index} value={option.value}>
    {option.name}
  </Option>
))

const radioButtonOptions = optionData.map((option, index) => (
  <Button key={index} value={option.value}>
    {option.name}
  </Button>
))

const WidgetFilter = ({
  hasExportButton = false,
  selectFilterBy,
  filterBy,
  hasSectorFilter = false,
  setRegionId,
  setSectorId,
}) => {
  let sectors = []
  let regions = []

  const {
    isFetching: fetchingRegion,
    isError: regionError,
    data: regionData,
  } = useListShsRegionsQuery()

  const {
    isFetching: fetchingSector,
    isError: sectorError,
    data: sectorData,
  } = useListShsSectorsQuery()

  if (!fetchingRegion && !regionError && regionData.results) {
    regions = regionData.results.map((region, index) => (
      <Option value={region.id} key={index}>
        {region.name}
      </Option>
    ))
  }

  if (!fetchingSector && !sectorError && sectorData.results) {
    sectors = sectorData.results.map((region, index) => (
      <Option value={region.id} key={index}>
        {region.name}
      </Option>
    ))
  }

  return (
    <div className={classes.WidgetFilter}>
      <section className={classes.WidgetFilter__leftSection}>
        <div className={classes.WidgetFilter__btnSection}>
          <Group
            value={filterBy}
            onChange={(e) => selectFilterBy(e.target.value)}
            className={classes.WidgetFilter__btn}
          >
            {radioButtonOptions}
          </Group>
        </div>

        <div className={classes.WidgetFilter__btnSectionMobile}>
          <DropDownFilter
            options={options}
            onFilterChanged={selectFilterBy}
            value={filterBy}
          />
        </div>

        <DatePicker className={classes.WidgetFilter__date} />
      </section>
      {hasSectorFilter ? (
        <>
          <div className={classes.WidgetFilter__divider}></div>

          <section className={classes.WidgetFilter__selectSection}>
            <Select
              className={classes.WidgetFilter__select}
              placeholder="Select Region"
              onChange={setRegionId}
              allowClear
            >
              {regions}
            </Select>

            <Select
              className={classes.WidgetFilter__select}
              placeholder="Select Sector"
              onChange={(val) => setSectorId(val)}
              allowClear
            >
              {sectors}
            </Select>
          </section>
        </>
      ) : null}
    </div>
  )
}

export default WidgetFilter
