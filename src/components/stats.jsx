import React from "react";

function stats(stats) {
  return (
    <>
      <table>
        <thead>
          <tr className="table-headers">
            <th className="table-header-info">Goals</th>
            <th className="table-header-info">Assists</th>
            <th className="table-header-info">Matches</th>
            <th className="table-header-info">Yellow Cards</th>
            <th className="table-header-info">Red Cards</th>
          </tr>
        </thead>
        <tbody className="table">
          <tr className="table-data">
            <td className="table-data-info">{stats.goals}</td>
            <td className="table-data-info">{stats.assists}</td>
            <td className="table-data-info">{stats.matches}</td>
            <td className="table-data-info">{stats.yellowCards}</td>
            <td className="table-data-info">{stats.redCards}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default stats;
