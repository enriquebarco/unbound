import React from 'react';
import DashboardItem from '../DashboardItem/DashboardItem';

export default function DashboardList( { data } ) {

    return(
        <div className="list">
            {data.map(team => {
                return <DashboardItem
                    key={team.id}
                    id={team.id}
                    name={team.name}
                    country={team.country}
                    jobTitle={team.jobTitle}
                    contract={team.contract} 
                />
            })}
        </div>
    )
}
