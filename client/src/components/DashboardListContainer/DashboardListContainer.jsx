import React from 'react';
import DashboardListHeading from '../DashboardListHeading/DashboardListHeading';
import DashboardList from '../DashboardList/DashboardList';
import "./DashboardListContainer.scss";
import 'animate.css';

export default function DashboardListContainer({ data, token }) {
  return(
      <section className="dashboard-list-container animate__animated animate__fadeInUp">
          <DashboardListHeading />
          <DashboardList data={data} token={token}/>
      </section>
    )
}
