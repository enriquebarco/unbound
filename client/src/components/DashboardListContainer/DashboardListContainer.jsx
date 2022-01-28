import React from 'react';
import DashboardListHeading from '../DashboardListHeading/DashboardListHeading';
import DashboardList from '../DashboardList/DashboardList';
import "./DashboardListContainer.scss";

export default function DashboardListContainer({ data, token }) {
  return(
      <section className="dashboard-list-container">
          <DashboardListHeading />
          <DashboardList data={data} token={token}/>
      </section>
    )
}
