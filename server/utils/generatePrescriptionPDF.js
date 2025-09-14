import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generatePrescriptionPDF = async (prescription) => {
  const filePath = path.join(__dirname, `../temp/prescription-${prescription._id}.pdf`);
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(18).text('Prescription', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Date: ${new Date(prescription.dateIssued).toLocaleDateString()}`);
  doc.text(`Patient Name: ${prescription.patientName}`);
  doc.text(`Hospital Name: ${prescription.hospitalName}`);
  doc.text(`Patient Age: ${prescription.patientAge}`);
  doc.moveDown();

  doc.text('Medicines:', { underline: true });
  prescription.medicines.forEach((med, idx) => {
    doc.text(`${idx + 1}. ${med.name} - ${med.dosage} - ${med.frequency} - ${med.duration} - ${med.instruction}`);
  });

  if (prescription.testsRecommended) doc.moveDown().text(`Tests: ${prescription.testsRecommended}`);
  if (prescription.advice) doc.moveDown().text(`Advice: ${prescription.advice}`);

  doc.end();

  return filePath;
};
