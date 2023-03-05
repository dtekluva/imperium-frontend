import { apiSlice } from '../../../api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminforgotPassword: builder.mutation({
      query: (email) => {
        return {
          url: '/imperium-admin/auth/forgot-password/',
          method: 'POST',
          body: email,
        }
      },
      async onQueryStarted(email, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
        } catch (error) {
          return error
        }
      },
    }),
    adminOtp: builder.mutation({
      query: (credentials) => {
        return {
          url: '/imperium-admin/auth/forgot-password/confirm/',
          method: 'POST',
          body: credentials,
        }
      },
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
        } catch (error) {
          return error
        }
      },
    }),
    adminNewPassword: builder.mutation({
      query: (credentials) => {
        return {
          url: '/imperium-admin/auth/forgot-password/complete/',
          method: 'POST',
          body: credentials,
        }
      },
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
        } catch (error) {
          return error
        }
      },
    }),
  }),
})

export const {
  useAdminforgotPasswordMutation,
  useAdminOtpMutation,
  useAdminNewPasswordMutation,
} = authApiSlice
