import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  InputGroup,
  Badge,
  Table,
} from "react-bootstrap";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const appointments = [
    { patient: "Pavan", mode: "Video", doctor: "Dr. Indu", slot: "10:00 AM", fee: "Card", feeAmount: "₹500", status: "Paid" },
    { patient: "Keerthi", mode: "Clinic", doctor: "Dr. Raghunath", slot: "11:30 AM", fee: "Card", feeAmount: "₹800", status: "Pending" },
    { patient: "Manoj", mode: "Video", doctor: "Dr. Archana", slot: "1:00 PM", fee: "UPI", feeAmount: "₹600", status: "Paid" },
    { patient: "Arun", mode: "Clinic", doctor: "Dr. Kumar", slot: "3:30 PM", fee: "UPI", feeAmount: "₹700", status: "Pending" },
    { patient: "Nikitha", mode: "Video", doctor: "Dr.M.Rakesh", slot: "5:00 PM", fee: "Card", feeAmount: "₹500", status: "Paid" }
  ];

  // Filter appointments based on search
  const filteredAppointments = appointments.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Container className="mt-4">
      {/* Inline CSS for vertical layout on mobile */}
      <style>
        {`
          /* Hide vertical version by default */
          .vertical-table { display: none; }

          @media (max-width: 576px) {
            /* Hide normal table on mobile */
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

      {/* Card with Total Appointments */}
      <Card className="text-center shadow-sm border-0 mb-4">
        <Card.Body>
          <HiOutlineUserGroup size={40} color="#0d6efd" className="mb-2" />
          <Card.Title className="fw-bold">{appointments.length}</Card.Title>
          <Card.Text>Total Appointments</Card.Text>
        </Card.Body>
      </Card>

      {/* Search bar */}
      <Row className="mb-3">
        <Col md={6} className="mx-auto">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search by patient, doctor, mode, slot, fee, or status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      {/* Normal horizontal table (tablet/desktop) */}
      <Card className="shadow-sm border-0 horizontal-table">
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Consult Mode</th>
                <th>Doctor Name</th>
                <th>Booked Slot</th>
                <th>Fee Mode</th>
                <th>Fee</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{appt.patient}</td>
                    <td>{appt.mode}</td>
                    <td>{appt.doctor}</td>
                    <td>{appt.slot}</td>
                    <td>{appt.fee}</td>
                    <td>{appt.feeAmount}</td>
                    <td>
                      <Badge
                        bg={appt.status === "Paid" ? "success" : "warning"}
                        text={appt.status === "Pending" ? "dark" : "light"}
                        style={{
                          minWidth: "80px",
                          display: "inline-block",
                          textAlign: "center",
                          padding: "8px 0"
                        }}
                      >
                        {appt.status}
                      </Badge>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No appointments found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Vertical table (mobile only) */}
      <div className="vertical-table">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appt, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <td>Patient Name</td>
                  <td>{appt.patient}</td>
                </tr>
                <tr>
                  <td>Consult Mode</td>
                  <td>{appt.mode}</td>
                </tr>
                <tr>
                  <td>Doctor Name</td>
                  <td>{appt.doctor}</td>
                </tr>
                <tr>
                  <td>Booked Slot</td>
                  <td>{appt.slot}</td>
                </tr>
                <tr>
                  <td>Fee Mode</td>
                  <td>{appt.fee}</td>
                </tr>
                <tr>
                  <td>Fee</td>
                  <td>{appt.feeAmount}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>
                    <Badge
                      bg={appt.status === "Paid" ? "success" : "warning"}
                      text={appt.status === "Pending" ? "dark" : "light"}
                      style={{
                        minWidth: "80px",
                        display: "inline-block",
                        textAlign: "center",
                        padding: "8px 0"
                      }}
                    >
                      {appt.status}
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <Card className="text-center shadow-sm border-0">
            <Card.Body className="text-muted">No appointments found</Card.Body>
          </Card>
        )}
      </div>
    </Container>
  );
};

export default Appointments;
