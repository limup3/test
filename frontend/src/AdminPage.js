import React from 'react';
import { Switch, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import { RouteWithLayout } from './admin/components';
import { Main as MainLayout, Minimal as MinimalLayout } from './admin/layouts';
import { chartjs } from './admin/helpers';
import theme from './admin/theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './admin/assets/css/index.css';
import validators from './admin/common/validators';
import {
  Dashboard as DashboardView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView,
  Board as BoardView,
  HospitalList as HospitalView
} from './admin/views';
import OverViewSales from './admin/views/Dashboard/components/LatestSales/OverViewSales';
import { RecentVisitingHospital } from './admin/views/Dashboard/components/LatestOrders';
import { HospitalsAdd } from './admin/views/HospitalList/components';


const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

const AdminPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router history={browserHistory}>
    <Switch>
      <Redirect
        exact
        from="/admin"
        to="/admin/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/admin/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/admin/users"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/admin/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/admin/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/admin/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/admin/settings"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/admin/not-found"
      />
      <RouteWithLayout
        component={OverViewSales}
        exact
        layout={MainLayout}
        path="/admin/OverViewSales"
      />
      <RouteWithLayout
        component={RecentVisitingHospital}
        exact
        layout={MainLayout}
        path="/admin/RecentVisitingHospital"
      />
      <RouteWithLayout
        component={BoardView}
        exact
        layout={MainLayout}
        path="/admin/Board"
      />
      <RouteWithLayout
        component={HospitalView}
        exact
        layout={MainLayout}
        path="/admin/Hospital"
      />
      <RouteWithLayout
        component={HospitalsAdd}
        exact
        layout={MainLayout}
        path="/admin/HospitalsAdd"
      />
    </Switch>
    </Router>
      </ThemeProvider>
  );
};

export default AdminPage;
