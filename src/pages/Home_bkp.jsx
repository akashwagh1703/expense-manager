// make more responsive and add weather section. weather section design more attractive. add weather icon and make it more attractive
import React, { useState } from "react";
import { Pie, Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CollapsibleSidebar from "../components/CollapsibleSidebar";
import 'animate.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pieData = {
    labels: ["Groceries", "Bills", "Entertainment", "Miscellaneous"],
    datasets: [
      {
        label: "Expenses by Category",
        data: [500, 300, 150, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ["Food", "Rent", "Shopping", "Travel"],
    datasets: [
      {
        label: "Spending Distribution",
        data: [700, 1200, 500, 400],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Expenses (₹)",
        data: [1200, 900, 1400, 800, 1100, 1300],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Spending",
        data: [300, 450, 350, 500],
        borderColor: "#4BC0C0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <>
      <div className="container" style={{ marginRight: isSidebarOpen ? "270px" : "0", transition: "margin-right 0.3s" }}>
        {/* Graph Section - Categorized */}
        {/* Weather Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="shadow-lg rounded-4 animate__animated animate__fadeInUp"
              style={{
                background: "linear-gradient(135deg, rgba(67, 206, 162, 0.85), rgba(24, 90, 157, 0.85))",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                padding: "1rem 1.5rem",
                minHeight: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "1rem",
              }}
            >
              {/* Weather Info */}
              <div>
                <h5 className="fw-bold mb-1 d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill"></i>Pune
                </h5>
                <h6 className="mb-1 d-flex align-items-center gap-2">
                  <i className="bi bi-cloud-sun"></i> Partly Cloudy
                </h6>
                <p className="mb-0 fs-4 fw-semibold">
                  <i className="bi bi-thermometer-half me-2"></i>29°C
                </p>
              </div>

              {/* Weather Icon */}
              <div className="text-end animate__animated animate__zoomIn">
                <img
                  src="https://openweathermap.org/img/wn/03d@4x.png"
                  alt="Weather Icon"
                  style={{
                    height: "80px",
                    filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.4))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>






        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card shadow-lg p-3 text-center border-0 rounded-4 bg-light">
              <h5 className="card-title text-primary fw-bold">Expense Breakdown</h5>
              <div style={{ height: "180px", width: "100%" }}>
                <Pie data={pieData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card shadow-lg p-3 text-center border-0 rounded-4 bg-light">
              <h5 className="card-title text-danger fw-bold">Spending Distribution</h5>
              <div style={{ height: "180px", width: "100%" }}>
                <Doughnut data={doughnutData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card shadow-lg p-3 text-center border-0 rounded-4 bg-light">
              <h5 className="card-title text-success fw-bold">Monthly Expenses</h5>
              <div style={{ height: "180px", width: "100%" }}>
                <Bar data={barData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card shadow-lg p-3 text-center border-0 rounded-4 bg-light">
              <h5 className="card-title text-info fw-bold">Weekly Spending</h5>
              <div style={{ height: "180px", width: "100%" }}>
                <Line data={lineData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use the CollapsibleSidebar Component */}
      <CollapsibleSidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default Home;
