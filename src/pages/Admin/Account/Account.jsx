import { React } from 'react'
import PageBreadcrumb from '../../../components/PageBreadcrumb/PageBreadcrumb'
import AccountProfile from '../../Customer/Account/AccountProfile'
import classes from './Account.module.scss'
import AdminPageLayout from '../../../components/Layout/AdminPageLayout/AdminPageLayout'

const Account = ({ children, props }) => {
  const AccountData = {
    firstName: 'John',
    lastName: 'Kahan',
    email: 'JonniKahan@gmail.com',
  }

  return (
    <div className={classes.Account}>
      <AdminPageLayout>
        <PageBreadcrumb title="My Account" />
        <div>
          <AccountProfile AccountData={AccountData} type={props} />
        </div>
        {children}
      </AdminPageLayout>
    </div>
  )
}

export default Account
