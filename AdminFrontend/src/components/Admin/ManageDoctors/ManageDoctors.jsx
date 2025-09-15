import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Table, Card } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ManageDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch all doctors
  const fetchDoctors = async () => {
    if (!token) {
      setError("No token found. Please login.");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/admin/doctors", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDoctors(response.data.doctors || []);
    } catch (err) {
      console.error("Error fetching doctors:", err.response || err);
      setError(err.response?.data?.message || err.message || "Failed to fetch doctors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [token]);

  // ✅ Accept / Verify doctor using POST API
  const handleAccept = async (doctorId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/admin/doctors/verify/${doctorId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data && response.data.success) {
        toast.success("Doctor verified successfully!", { position: "top-right" });
        fetchDoctors();
      } else {
        toast.error(response.data?.message || "Failed to verify doctor", { position: "top-right" });
      }
    } catch (err) {
      console.error("Error verifying doctor:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Failed to verify doctor", { position: "top-right" });
    }
  };

  // Delete doctor
  const handleDelete = async (doctorId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/doctors/${doctorId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDoctors((prev) => prev.filter((doc) => doc._id !== doctorId));
      toast.info("Doctor removed", { position: "top-right" });
    } catch (err) {
      console.error("Error deleting doctor:", err.response || err);
      toast.error(err.response?.data?.message || "Failed to delete doctor", { position: "top-right" });
    }
  };

  // Filter doctors
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.speciality?.toLowerCase().includes(search.toLowerCase()) ||
      doc.email?.toLowerCase().includes(search.toLowerCase()) ||
      doc.mobile?.toLowerCase().includes(search.toLowerCase()) ||
      doc.hospitalName?.toLowerCase().includes(search.toLowerCase())
  );

  const doctorsToVerify = filteredDoctors.filter((doc) => !doc.isApproved);
  const activeDoctors = filteredDoctors.filter((doc) => doc.isApproved);

  if (loading) return <p className="text-center mt-3">Loading doctors...</p>;
  if (error) return <p className="text-center text-danger mt-3">{error}</p>;

  return (
    <Container fluid className="p-4">
      <ToastContainer autoClose={2500} hideProgressBar newestOnTop />
      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div>
                <h5>Total Doctors</h5>
                <h2>{doctors.length}</h2>
                <small>All registered doctors</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div>
                <h5>Doctors to Verify</h5>
                <h2>{doctorsToVerify.length}</h2>
                <small>Pending verification</small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Search bar */}
      <Row>
        <Col xs={12}>
          <Form.Control
            type="text"
            placeholder="Search Doctors..."
            className="mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      {/* Verify Doctors */}
      <Row>
        <Col xs={12}>
          <h5>Verify Doctors</h5>
          <Table striped bordered hover responsive className="horizontal-table">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Speciality</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Hospital</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctorsToVerify.map((doc) => (
                <tr key={doc._id}>
                  <td>{doc.name}</td>
                  <td>{doc.speciality}</td>
                  <td>{doc.email}</td>
                  <td>{doc.mobile}</td>
                  <td>{doc.hospitalName}</td>
                  <td>
                    <div className="d-flex flex-column flex-sm-row gap-2">
                      <Button
                        size="sm"
                        style={{ backgroundColor: "#00A99D", borderColor: "#00A99D" }}
                        onClick={() => handleAccept(doc._id)}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(doc._id)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {doctorsToVerify.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No doctors to verify
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Active Doctors */}
      <Row className="mt-4">
        <Col xs={12}>
          <h5>Doctor History</h5>
          <Table striped bordered hover responsive className="horizontal-table">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Speciality</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Hospital</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeDoctors.map((doc) => (
                <tr key={doc._id}>
                  <td>{doc.name}</td>
                  <td>{doc.speciality}</td>
                  <td>{doc.email}</td>
                  <td>{doc.mobile}</td>
                  <td>{doc.hospitalName}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(doc._id)}
                    >
                      <BsTrash />
                    </Button>
                  </td>
                </tr>
              ))}
              {activeDoctors.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No active doctors
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Mobile vertical tables */}
      <style>{`
        .vertical-table { display: none; }
        @media (max-width: 576px) {
          .horizontal-table { display: none; }
          .vertical-table { display: block; width: 100%; }
          .vertical-table table {
            width: 100%; table-layout: fixed; margin-bottom: 1.5rem;
            border: 1px solid #dee2e6; border-radius: 8px; background: #fff;
          }
          .vertical-table td { padding: 8px 12px; border: 1px solid #dee2e6; word-wrap: break-word; }
          .vertical-table td:first-child { font-weight: 600; width: 40%; background: #f8f9fa; }
          .vertical-table td:last-child { width: 60%; }
        }
      `}</style>

      {/* Mobile: Doctors To Verify */}
      <div className="vertical-table">
        {doctorsToVerify.map((doc) => (
          <table key={doc._id}>
            <tbody>
              <tr><td>Doctor Name</td><td>{doc.name}</td></tr>
              <tr><td>Speciality</td><td>{doc.speciality}</td></tr>
              <tr><td>Email</td><td>{doc.email}</td></tr>
              <tr><td>Mobile</td><td>{doc.mobile}</td></tr>
              <tr><td>Hospital</td><td>{doc.hospitalName}</td></tr>
              <tr><td>Actions</td>
                <td>
                  <div className="d-flex flex-column flex-sm-row gap-2">
                    <Button
                      size="sm"
                      style={{ backgroundColor: "#00A99D", borderColor: "#00A99D" }}
                      onClick={() => handleAccept(doc._id)}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(doc._id)}
                    >
                      Cancel
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>

      {/* Mobile: Active Doctors */}
      <div className="vertical-table">
        {activeDoctors.map((doc) => (
          <table key={doc._id}>
            <tbody>
              <tr><td>Doctor Name</td><td>{doc.name}</td></tr>
              <tr><td>Speciality</td><td>{doc.speciality}</td></tr>
              <tr><td>Email</td><td>{doc.email}</td></tr>
              <tr><td>Mobile</td><td>{doc.mobile}</td></tr>
              <tr><td>Hospital</td><td>{doc.hospitalName}</td></tr>
              <tr><td>Actions</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(doc._id)}
                  >
                    <BsTrash />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </Container>
  );
}

export default ManageDoctors;
