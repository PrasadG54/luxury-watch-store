const PDFDocument = require("pdfkit");

const generateAppointmentPdf = (appointment, res) => {
  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
  });

  // PDF response headers
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="appointment-${appointment.bookingReference}.pdf"`
  );

  // Send PDF directly to response
  doc.pipe(res);


  // HEADER


  doc
    .fontSize(20)
    .font("Helvetica-Bold")
    .text("LUXURY WATCH STORE", {
      align: "center",
    });

  doc
    .moveDown(0.5)
    .fontSize(10)
    .font("Helvetica")
    .text("APPOINTMENT CONFIRMATION", {
      align: "center",
    });

  doc.moveDown(2);


  // BOOKING REFERENCE


  doc
    .fontSize(11)
    .font("Helvetica-Bold")
    .text("Booking Reference");

  doc
    .fontSize(14)
    .font("Helvetica")
    .text(appointment.bookingReference);

  doc.moveDown(1.5);


  // CUSTOMER DETAILS


  doc
    .fontSize(13)
    .font("Helvetica-Bold")
    .text("Customer Details");

  doc.moveDown(0.5);

  doc
    .fontSize(10)
    .font("Helvetica")
    .text(`Name: ${appointment.customer.name}`)
    .text(`Phone: ${appointment.customer.phone}`)
    .text(`Email: ${appointment.customer.email}`);

  doc.moveDown(1.5);


  // ADDITIONAL GUESTS


  if (appointment.guests && appointment.guests.length > 0) {
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("Additional Guests");

    doc.moveDown(0.5);

    appointment.guests.forEach((guest, index) => {
      doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .text(`Person ${index + 2}`);

      doc
        .font("Helvetica")
        .text(`Name: ${guest.name}`)
        .text(`Phone: ${guest.phone}`)
        .text(`Email: ${guest.email}`);

      doc.moveDown(0.7);
    });

    doc.moveDown(0.5);
  }


  // STORE DETAILS


  doc
    .fontSize(13)
    .font("Helvetica-Bold")
    .text("Selected Store");

  doc.moveDown(0.5);

  doc
    .fontSize(10)
    .font("Helvetica")
    .text(`Store: ${appointment.store.name}`)
    .text(`Address: ${appointment.store.address}`)
    .text(`City: ${appointment.store.city}`);

  doc.moveDown(1.5);


  // APPOINTMENT DETAILS


  doc
    .fontSize(13)
    .font("Helvetica-Bold")
    .text("Appointment Details");

  doc.moveDown(0.5);

  doc
    .fontSize(10)
    .font("Helvetica")
    .text(`Date: ${appointment.appointmentDate}`)
    .text(`Time: ${appointment.appointmentTime}`)
    .text(`Status: ${appointment.status}`);

  doc.moveDown(3);


  // FOOTER


  doc
    .fontSize(9)
    .font("Helvetica")
    .text(
      "Thank you for choosing Luxury Watch Store.",
      {
        align: "center",
      }
    );

  doc
    .moveDown(0.3)
    .fontSize(8)
    .fillColor("gray")
    .text(
      "Please present this confirmation when visiting the store.",
      {
        align: "center",
      }
    );

  // Finish PDF
  doc.end();
};

module.exports = generateAppointmentPdf;