import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Table, Form, Button } from "react-bootstrap";
import { FaUser, FaFileAlt, FaBell } from "react-icons/fa";
import "./ManagePatient.css";

const PatientsManagement = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please login.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPatients(response.data.users || []);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Failed to fetch patients");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Filter patients based on search term
  const filteredPatients = Array.isArray(patients)
    ? patients.filter(
        (p) =>
          p.full_name.toLowerCase().includes(search.toLowerCase()) ||
          p.email?.toLowerCase().includes(search.toLowerCase()) ||
          p.phone_number?.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  if (loading) return <p className="text-center mt-3">Loading patients...</p>;
  if (error) return <p className="text-center text-danger mt-3">{error}</p>;

  return (
    <Container fluid className="mt-3">
      <style>
        {`
          .vertical-table { display: none; }
          @media (max-width: 576px) {
            .horizontal-table { display: none; }
            .vertical-table { display: block; width: 100%; }
            .vertical-table table {
              width: 100%;
              table-layout: fixed;
              margin-bottom: 1.5rem;
              border: 1px solid #dee2e6;
              border-radius: 8px;
              background: #fff;
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

      {/* Stats Row */}
      <Row className="mb-4">
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaUser size={28} style={{ color: "#00A99D" }} className="me-3" />
              <div>
                <h5>Total Patients</h5>
                <h2>{patients.length}</h2>
                <small>Overall registered patients</small>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaFileAlt size={28} style={{ color: "#00A99D" }} className="me-3" />
              <div>
                <h5>Patients with Documents</h5>
                <h2>{patients.filter(p => p.documents.length > 0).length}</h2>
                <small>Uploaded at least one document</small>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaBell size={28} style={{ color: "#00A99D" }} className="me-3" />
              <div>
                <h5>Users with Issues</h5>
                <h2>{patients.filter(p => p.status === false).length}</h2>
                <small>Inactive or flagged patients</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Patient List Card */}
      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="mb-3">Patient List</h5>

          <Row className="mb-3">
            <Col xs={12}>
              <Form.Control
                type="text"
                placeholder="Search by name, email or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
          </Row>

          {/* Horizontal Table */}
          <Table hover responsive className="align-middle horizontal-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Documents</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((p, idx) => (
                <tr key={idx}>
                  <td className="fw-bold">{p.full_name}</td>
                  <td>{p.email}</td>
                  <td>{p.phone_number}</td>
                  <td>{p.documents.length} files</td>
                  <td>{p.status ? "Active" : "Inactive"}</td>
                  <td>
                    <Button variant="link" className="p-0 text-decoration-none">
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
              {filteredPatients.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted">No patients found</td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Vertical Table (mobile) */}
          <div className="vertical-table">
            {filteredPatients.map((p, idx) => (
              <table key={idx}>
                <tbody>
                  <tr><td>Patient Name</td><td className="fw-bold">{p.full_name}</td></tr>
                  <tr><td>Email</td><td>{p.email}</td></tr>
                  <tr><td>Phone</td><td>{p.phone_number}</td></tr>
                  <tr><td>Documents</td><td>{p.documents.length} files</td></tr>
                  <tr><td>Status</td><td>{p.status ? "Active" : "Inactive"}</td></tr>
                  <tr><td>Actions</td><td><Button variant="link" className="p-0 text-decoration-none">View Details</Button></td></tr>
                </tbody>
              </table>
            ))}
            {filteredPatients.length === 0 && (
              <p className="text-center text-muted">No patients found</p>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PatientsManagement;
