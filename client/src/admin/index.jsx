import React, { lazy, Suspense, useContext } from 'react'
import { Switch } from 'react-router-dom'

import { Icons, Loading, ToastProvider, useToast } from '@miq/components'
import { AdminLayout as Layout, AdminSidebar, AdminMain, AccountProfileUpdateView } from '@miq/adminjs'
import { AdminRoute, AdminView, SettingsLayout } from '@miq/adminjs'
import { SharedDataCtx } from '@miq/contexts'

const StaffShopRoutes = lazy(() => import('../shop'))

const Dashboard = (props) => <AdminView title="Dashboard"></AdminView>

export default function AdminLayout(props) {
  const toastCtx = useToast()
  const ctx = useContext(SharedDataCtx)

  if (!ctx) return null
  if (!ctx.isLoaded) return <Loading />

  const { path } = props.match
  const { site } = ctx

  return (
    <ToastProvider context={toastCtx}>
      <Layout {...props}>
        <AdminSidebar
          {...{ path, ctx }}
          header={<h2 className="text-md">{site.name}</h2>}
          footer={
            <>
              <AdminSidebar.AccountNavLink path={path} user={ctx.user} />
              <AdminSidebar.SettingsNavLink path={path} />
            </>
          }
        >
          <AdminSidebar.DashboardNavLink path={path} />

          <AdminSidebar.NavLink
            to={`${path}shop/`}
            label="Shop"
            Icon={Icons.Bookmark}
            requiredPerms={['shop.view_product']}
          />
        </AdminSidebar>

        <AdminMain className="store-main">
          <Suspense fallback={<Loading />}>
            <Switch>
              <AdminRoute path={`${path}shop/`} component={StaffShopRoutes} requiredPerms={['shop.view_product']} />
              <AdminRoute path={`${path}settings/`} component={SettingsLayout} />
              <AdminRoute path={`${path}account/`} component={AccountProfileUpdateView} />
              <AdminRoute path={`${path}`} component={Dashboard} />
            </Switch>
          </Suspense>
        </AdminMain>

        {/* <MobileNav /> */}
      </Layout>
    </ToastProvider>
  )
}
