import React from 'react';
import DashboardItem from '../DashboardItem/DashboardItem';

export default function DashboardList( { data, token } ) {

    return(
        <div className="dashboard-list__container">
            {data.map(team => {
                return <DashboardItem
                    key={team.id}
                    id={team.id}
                    name={team.name}
                    country={team.country}
                    jobTitle={team.jobTitle}
                    contract={team.contract}
                    prefCurrency={team.prefCurrency}
                    paymentAmount={team.paymentAmount}
                    milestone={team.milestone}
                    token={token} 
                />
            })}
        </div>
    )
}
