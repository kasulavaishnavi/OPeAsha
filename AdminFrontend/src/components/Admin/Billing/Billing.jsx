import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Badge, Form } from "react-bootstrap";
import { FaRupeeSign, FaCreditCard, FaListUl, FaUndo } from "react-icons/fa";

import "./Billing.css";

const BillingPayments = () => {
  const summary = [
    { title: "Total Outstanding", value: "₹2,500.00", icon: <FaRupeeSign />, color: "success" },
    { title: "Total Paid", value: "₹11,50.00", icon: <FaCreditCard />, color: "primary" },
    { title: "Total Transactions", value: "123", icon: <FaListUl />, color: "secondary" },
    { title: "Refunded Transactions", value: "42", icon: <FaUndo />, color: "danger" },
  ];

  const transactions = [
    { patient: "Anil", doctor: "Dr. Rajesh", type: "Clinic", amount: "₹250.00", status: "Paid", date: "2024-07-20" },
    { patient: "Rakesh", doctor: "Dr. Sai", type: "Video Consult", amount: "₹75.50", status: "Pending", date: "2024-07-19" },
    { patient: "Varun", doctor: "Dr. Priya", type: "Clinic", amount: "₹420.00", status: "Paid", date: "2024-07-18" },
    { patient: "Pranav", doctor: "Dr. Siva", type: "Video Consult", amount: "₹180.25", status: "Refunded", date: "2024-07-17" },
    { patient: "Preethi", doctor: "Dr. Anjali", type: "Video Consult", amount: "₹300.00", status: "Pending", date: "2024-07-16" },
    { patient: "Mallesh", doctor: "Dr. Aparna", type: "Video Consult", amount: "₹120.00", status: "Paid", date: "2024-07-15" },
    { patient: "Ramu", doctor: "Dr. Salman", type: "Clinic", amount: "₹95.00", status: "Paid", date: "2024-07-14" },
    { patient: "Nithin", doctor: "Dr. Rafi", type: "Clinic", amount: "₹500.00", status: "Pending", date: "2024-07-13" },
    { patient: "Deepthi", doctor: "Dr. Venu", type: "Clinic", amount: "₹320.00", status: "Paid", date: "2024-07-12" },
    { patient: "Sam", doctor: "Dr. Sunitha", type: "Video Consult", amount: "₹110.00", status: "Refunded", date: "2024-07-11" },
  ];

  const [search, setSearch] = useState("");

  const getStatusBadge = (status) => {
    const commonClasses = "px-3 py-2 d-inline-block text-center";
    const fixedWidth = { minWidth: "100px" };

    switch (status) {
      case "Paid":
        return (
          <Badge bg="success" className={commonClasses} style={fixedWidth}>
            Paid
          </Badge>
        );
      case "Pending":
        return (
          <Badge bg="warning" text="dark" className={commonClasses} style={fixedWidth}>
            Pending
          </Badge>
        );
      case "Refunded":
        return (
          <Badge bg="danger" className={commonClasses} style={fixedWidth}>
            Refunded
          </Badge>
        );
      default:
        return (
          <Badge bg="secondary" className={commonClasses} style={fixedWidth}>
            {status}
          </Badge>
        );
    }
  };

  const filteredTransactions = transactions.filter(
    (tx) =>
      tx.patient.toLowerCase().includes(search.toLowerCase()) ||
      tx.doctor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container fluid className="p-4 billing-overview">
      {/* Mobile table styles */}
      <style>
        {`
          .vertical-table { display: none; }

          @media (max-width: 576px) {
            .horizontal-table { display: none; }
            .vertical-table { display: block; width: 100%; }
            .vertical-table table {
              width: 100%;
              margin-bottom: 1.5rem;
              border: 1px solid #dee2e6;
              border-radius: 8px;
              background: #fff;
              table-layout: fixed;
            }
            .vertical-table td {
              padding: 8px 12px;
              border: 1px solid #dee2e6;
              word-wrap: break-word;
            }
            .vertical-table td:first-child {
              font-weight: 600;
              width: 40%;
              background: #f8f9fa;
            }
            .vertical-table td:last-child {
              width: 60%;
            }
          }
        `}
      </style>

      <h3 className="mb-4 fw-bold">Billing & Payments Overview</h3>

      {/* Summary Cards */}
      <Row className="mb-4">
        {summary.map((item, idx) => (
          <Col key={idx} xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className={`fs-3 text-${item.color} me-3`}>{item.icon}</div>
                  <div>
                    <div className="text-muted">{item.title}</div>
                    <h4 className="fw-bold mb-0">{item.value}</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Transactions Table */}
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h5 className="fw-bold mb-3">Transaction History</h5>

          {/* Search */}
          <Form.Control
            type="text"
            placeholder="Search by Patient or Doctor..."
            className="mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Horizontal Table (default) */}
          <Table hover responsive className="horizontal-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Doctor Name</th>
                <th>Type Of Visit</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx, idx) => (
                  <tr key={idx}>
                    <td>{tx.patient}</td>
                    <td>{tx.doctor}</td>
                    <td>{tx.type || "-"}</td>
                    <td className="fw-bold">{tx.amount}</td>
                    <td>{getStatusBadge(tx.status)}</td>
                    <td>{tx.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Vertical Table (mobile only) */}
          <div className="vertical-table">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx, idx) => (
                <table key={idx}>
                  <tbody>
                    <tr>
                      <td>Patient Name</td>
                      <td>{tx.patient}</td>
                    </tr>
                    <tr>
                      <td>Doctor Name</td>
                      <td>{tx.doctor}</td>
                    </tr>
                    <tr>
                      <td>Type Of Visit</td>
                      <td>{tx.type || "-"}</td>
                    </tr>
                    <tr>
                      <td>Amount</td>
                      <td className="fw-bold">{tx.amount}</td>
                    </tr>
                    <tr>
                      <td>Payment Status</td>
                      <td>{getStatusBadge(tx.status)}</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>{tx.date}</td>
                    </tr>
                  </tbody>
                </table>
              ))
            ) : (
              <p className="text-center text-muted">No matching records found</p>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BillingPayments; 

