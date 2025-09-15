import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaStethoscope, FaComments } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { BsPersonPlus, BsFileText, BsCreditCard } from "react-icons/bs";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const dataSets = {
  Day: [
    { name: "Sun", earnings: 6000 },
    { name: "Mon", earnings: 5000 },
    { name: "Tue", earnings: 8000 },
    { name: "Wed", earnings: 6500 },
    { name: "Thu", earnings: 7000 },
    { name: "Fri", earnings: 7500 },
    { name: "Sat", earnings: 9000 },
  ],
  Week: [
    { name: "Week 1", earnings: 40000 },
    { name: "Week 2", earnings: 45000 },
    { name: "Week 3", earnings: 42000 },
    { name: "Week 4", earnings: 48000 },
  ],
  Months: [
    { name: "Jan", earnings: 60000 },
    { name: "Feb", earnings: 65000 },
    { name: "Mar", earnings: 62000 },
    { name: "Apr", earnings: 67000 },
    { name: "May", earnings: 64000 },
    { name: "Jun", earnings: 66000 },
    { name: "Jul", earnings: 68000 },
    { name: "Aug", earnings: 69000 },
    { name: "Sep", earnings: 63000 },
    { name: "Oct", earnings: 70000 },
    { name: "Nov", earnings: 65000 },
    { name: "Dec", earnings: 67000 },
  ],
  "6 Months": [
    { name: "Jan", earnings: 360000 },
    { name: "Feb", earnings: 390000 },
    { name: "Mar", earnings: 400000 },
    { name: "Apr", earnings: 420000 },
    { name: "May", earnings: 440000 },
    { name: "Jun", earnings: 460000 },
  ],
  Year: [
    { name: "2021", earnings: 700000 },
    { name: "2022", earnings: 750000 },
    { name: "2023", earnings: 800000 },
    { name: "2024", earnings: 850000 },
  ],
};

const formatValue = (value, isMobile) => {
  if (isMobile) {
    if (value >= 1000) {
      return value % 1000 === 0
        ? `${value / 1000}k`
        : `${(value / 1000).toFixed(1)}k`;
    }
  }
  return value;
};

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("Months");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // 👇 NEW: Doctors count from API
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [errorDoctors, setErrorDoctors] = useState(null);

  // Fetch doctors count
  const fetchDoctorsCount = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setErrorDoctors("No token found. Please login.");
      setLoadingDoctors(false);
      return;
    }
    try {
      setLoadingDoctors(true);
      const response = await axios.get(
        "http://localhost:5000/api/admin/doctors",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const doctorsList = response.data.doctors || [];
      setDoctorsCount(doctorsList.length);
    } catch (err) {
      console.error("Error fetching doctors:", err.response || err);
      setErrorDoctors(
        err.response?.data?.message || err.message || "Failed to fetch doctors"
      );
    } finally {
      setLoadingDoctors(false);
    }
  };

  useEffect(() => {
    fetchDoctorsCount();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 576);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Container fluid className="p-4">
      <style>{`
        @media (max-width: 991px) {
          .dashboard-card-col {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        @media (max-width: 576px) {
          .dashboard-card-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .dashboard-card-col h4 {
            font-size: 1rem;
          }
        }

        @media (max-width: 991px) {
          .offcanvas-start {
            width: 70% !important;
          }
        }

        @media (min-width: 1024px) and (max-width: 1439.98px) {
          .dashboard-card-col {
            flex: 0 0 33.33%;
            max-width: 33.33% !important ;
          }
        }

        .clickable-card {
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }
        .clickable-card:hover {
          transform: scale(1.02);
        }

        .white-dropdown {
          background-color: #ffffff !important;
          z-index: 2000 !important;
          border: 1px solid #ddd;
        }
        .white-dropdown .dropdown-item {
          color: #000 !important;
        }
        .white-dropdown .dropdown-item:hover {
          background-color: #f8f9fa !important;
        }
      `}</style>

      <h4 className="fw-bold">Welcome, Admin!</h4>
      <p className="text-muted">Overview</p>

      {/* Dashboard Stat Cards */}
      <Row className="mb-4">
        <Col lg={3} className="mb-3 dashboard-card-col">
          <Card
            className="p-3 shadow-sm clickable-card"
            onClick={() => navigate("/appointments")}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <HiOutlineUserGroup size={20} className="text-primary" />
                <h6 className="mb-0">Total Appointments</h6>
              </div>
              <h4 className="fw-bold mb-0">12</h4>
            </div>
          </Card>
        </Col>
        <Col lg={3} className="mb-3 dashboard-card-col">
          <Card className="p-3 shadow-sm clickable-card">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <MdCurrencyRupee size={20} className="text-success" />
                <h6 className="mb-0">Total Revenue</h6>
              </div>
              <h4 className="fw-bold mb-0">₹2500</h4>
            </div>
          </Card>
        </Col>
        <Col lg={3} className="mb-3 dashboard-card-col">
          <Card
            className="p-3 shadow-sm clickable-card"
            onClick={() => navigate("/doctors")}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <FaStethoscope size={20} className="text-info" />
                <h6 className="mb-0">Total Doctors</h6>
              </div>
              <h4 className="fw-bold mb-0">
                {loadingDoctors
                  ? "..."
                  : errorDoctors
                  ? "Error"
                  : doctorsCount}
              </h4>
            </div>
          </Card>
        </Col>
        <Col lg={3} className="mb-3 dashboard-card-col">
          <Card
            className="p-3 shadow-sm clickable-card"
            onClick={() => navigate("/queries")}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <FaComments size={20} className="text-warning" />
                <h6 className="mb-0">Query Requests</h6>
              </div>
              <h4 className="fw-bold mb-0">5</h4>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Earnings Summary */}
      <Card className="p-3 shadow-sm mb-4">
        <Row className="mb-3">
          <Col>
            <h6 className="fw-bold">Earning Summary</h6>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle variant="light" size="sm">
                {selectedRange}
              </Dropdown.Toggle>
              <Dropdown.Menu className="white-dropdown">
                {["Day", "Week", "Months", "6 Months", "Year"].map((range) => (
                  <Dropdown.Item
                    key={range}
                    onClick={() => setSelectedRange(range)}
                  >
                    {range}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dataSets[selectedRange]}
            margin={{
              top: 20,
              right: 0,
              left: isMobile ? -25 : 0,
              bottom: 5,
            }}
            barCategoryGap="10%"
            barGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              padding={{ left: 0, right: 0 }}
              interval={selectedRange === "Day" && isMobile ? 0 : "preserveEnd"}
            />
            <YAxis tickFormatter={(val) => formatValue(val, isMobile)} />
            <Tooltip formatter={(val) => formatValue(val, isMobile)} />
            <Bar dataKey="earnings" fill="#b3d2ffff">
              {!(selectedRange === "Months" && isMobile) && (
                <LabelList
                  dataKey="earnings"
                  position="top"
                  formatter={(val) => formatValue(val, isMobile)}
                />
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Quick Actions */}
      <h6 className="fw-bold mb-3">Quick Actions</h6>
      <Row>
        <Col md={4} sm={12} className="mb-3">
          <Card
            className="p-3 shadow-sm clickable-card"
            onClick={() => navigate("/doctors")}
          >
            <div className="d-flex align-items-center gap-2">
              <BsPersonPlus size={20} className="text-primary" />
              <h6 className="mb-0">Verify Doctors</h6>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-3">
          <Card
            className="p-3 shadow-sm clickable-card"
            onClick={() => navigate("/patients")}
          >
            <div className="d-flex align-items-center gap-2">
              <BsFileText size={20} className="text-success" />
              <h6 className="mb-0">View Patient Records</h6>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-3">
          <Card
            className="p-3 shadow-sm clickable-card"
            onClick={() => navigate("/billing")}
          >
            <div className="d-flex align-items-center gap-2">
              <BsCreditCard size={20} className="text-info" />
              <h6 className="mb-0">Payments</h6>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
