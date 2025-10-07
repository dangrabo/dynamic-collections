import React from "react";

function stats({ stats }) {
  return (
    <div className="table-container">
      <table className="table">
        <tr className="table-headers">
          <th className="table-header-info">Goals</th>
          <th className="table-header-info">Assists</th>
          <th className="table-header-info">Matches</th>
          <th className="table-header-info">Yellow Cards</th>
          <th className="table-header-info">Red Cards</th>
        </tr>
        <tr className="table-data">
          <td className="table-data-info">{stats.goals}</td>
          <td className="table-data-info">{stats.assists}</td>
          <td className="table-data-info">{stats.matches}</td>
          <td className="table-data-info">{stats.yellowCards}</td>
          <td className="table-data-info">{stats.redCards}</td>
        </tr>
      </table>
    </div>
  );
}

export default stats;
