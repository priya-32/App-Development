import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Widget from '../../Admin/Widget/Widget'
import Chart from '../../Admin/Chart/Chart'
import Performance from '../../Admin/Performance/Performance'
import Navbar1 from '../Navbar/Navbar'

const UserPanel = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar1 />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Performance />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  )
}

export default UserPanel
