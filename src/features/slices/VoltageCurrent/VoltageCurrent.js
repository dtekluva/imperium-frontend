import { apiSlice } from '../../api/apiSlice'

const BASE_URL = 'imperium-admin/list-voltage/'

export const voltageCurrentSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAdminVoltageCurrentAnalytics: build.query({
      query: () => {
        return `${BASE_URL}analytics/`
      },
      transformResponse: (response, meta, arg) => {
        return response
      },
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    getAdminVoltageCurrentStatistics: build.query({
      query: () => {
        return `${BASE_URL}statistics/`
      },
      transformResponse: (response, meta, arg) => {
        return response
      },
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    getAdminVoltageCurrentTable: build.query({
      query: ({ page, search }) => {
        let url = `${BASE_URL}table/?page=${page}`
        if (search) {
          url += `&search=${search}`
        }
        return url
      },
      transformResponse: (response, meta, arg) => {
        return response
      },
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
})

export const {
  useGetAdminVoltageCurrentAnalyticsQuery,
  useGetAdminVoltageCurrentStatisticsQuery,
  useGetAdminVoltageCurrentTableQuery,
} = voltageCurrentSlice
