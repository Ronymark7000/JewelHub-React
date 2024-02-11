const Dashboard = () => {
  
  return (
    <>
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">154</div>
            <div className="cardName">Customers</div>
          </div>

          <div className="iconBx">
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">290</div>
            <div className="cardName">Books</div>
          </div>

          <div className="iconBx">
            <ion-icon name="podium-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">9</div>
            <div className="cardName">Orders</div>
          </div>

          <div className="iconBx">
            <ion-icon name="documents-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">NRs 590k</div>
            <div className="cardName">Sales</div>
          </div>

          <div className="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>

      {/* <!-- Order Detail List --> */}

      <div className="charts">
        <div className="chart">
          <h2>Inventory Book Scaling</h2>
          <canvas id="barChart"></canvas>
        </div>
        <div className="chart" id="doughnut-chart">
          <h2>Order Ratio</h2>
          <canvas id="piechart"></canvas>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
