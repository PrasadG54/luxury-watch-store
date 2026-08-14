import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createAppointment } from "../services/appointmentService";

function AppointmentConfirmation() {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [confirmedAppointment, setConfirmedAppointment] = useState(null);

    const {
        customer,
        guests = [],
        store,
        appointment,
    } = location.state || {};


    const handleConfirmAppointment = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            if (!token) {
                setError("Your session has expired. Please login again.");
                return;
            }

            const appointmentData = {
                customer: {
                    name: customer.name,
                    phone: customer.phone,
                    email: customer.email,
                },

                guests,

                storeId: store._id,

                appointmentDate: appointment.date,

                appointmentTime: appointment.time,
            };

            const data = await createAppointment(
                appointmentData,
                token
            );

            console.log("Appointment created:", data);

            setConfirmedAppointment(data.appointment);

        } catch (error) {
            console.error("Appointment booking error:", error);

            setError(
                error.response?.data?.message ||
                "Unable to book appointment. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    // If the page is opened directly without coming from Point of Sale
    if (!customer || !store || !appointment) {
        return (
            <>
                <Navbar light />

                <main className="min-h-screen bg-[#f8f7f4] px-6 pt-28 pb-12">
                    <div className="mx-auto max-w-2xl text-center">

                        <h1 className="text-3xl font-light text-neutral-900">
                            No Appointment Details
                        </h1>

                        <p className="mt-3 text-sm text-neutral-500">
                            Please start the appointment booking process first.
                        </p>

                        <button
                            onClick={() => navigate("/point-of-sale")}
                            className="mt-6 rounded-full bg-neutral-900 px-7 py-3 text-sm text-white transition hover:bg-neutral-700"
                        >
                            Book an Appointment
                        </button>

                    </div>
                </main>

                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar light />

            <main className="min-h-screen bg-[#f8f7f4] px-6 pt-28 pb-12">

                <div className="mx-auto max-w-3xl">

                    {/* PAGE HEADER */}

                    <div className="mb-10 text-center">

                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                            Luxury Watch Store
                        </p>

                        <h1 className="mt-3 text-4xl font-light tracking-wide text-neutral-900">
                            Appointment Confirmation
                        </h1>

                        <p className="mt-3 text-sm text-neutral-500">
                            Please review your appointment details before confirming.
                        </p>

                    </div>


                    {/* CONFIRMATION CARD */}

                    <div className="rounded-2xl bg-white p-8 shadow-sm">

                        {/* CUSTOMER DETAILS */}

                        <section>

                            <h2 className="text-xl font-medium text-neutral-900">
                                Customer Details
                            </h2>

                            <div className="mt-5 grid gap-4 md:grid-cols-3">

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                        Name
                                    </p>

                                    <p className="mt-1 text-sm text-neutral-800">
                                        {customer.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                        Phone
                                    </p>

                                    <p className="mt-1 text-sm text-neutral-800">
                                        {customer.phone}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                        Email
                                    </p>

                                    <p className="mt-1 break-words text-sm text-neutral-800">
                                        {customer.email}
                                    </p>
                                </div>

                            </div>

                        </section>


                        {/* GUEST DETAILS */}

                        {guests.length > 0 && (

                            <section className="mt-8 border-t border-neutral-200 pt-8">

                                <h2 className="text-xl font-medium text-neutral-900">
                                    Additional Guests
                                </h2>

                                <div className="mt-5 space-y-4">

                                    {guests.map((guest, index) => (

                                        <div
                                            key={index}
                                            className="rounded-xl border border-neutral-200 p-5"
                                        >

                                            <p className="mb-4 text-sm font-medium text-neutral-900">
                                                Person {index + 2}
                                            </p>

                                            <div className="grid gap-4 md:grid-cols-3">

                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                                        Name
                                                    </p>

                                                    <p className="mt-1 text-sm text-neutral-800">
                                                        {guest.name}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                                        Phone
                                                    </p>

                                                    <p className="mt-1 text-sm text-neutral-800">
                                                        {guest.phone}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                                        Email
                                                    </p>

                                                    <p className="mt-1 break-words text-sm text-neutral-800">
                                                        {guest.email}
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </section>

                        )}


                        {/* STORE DETAILS */}

                        <section className="mt-8 border-t border-neutral-200 pt-8">

                            <h2 className="text-xl font-medium text-neutral-900">
                                Selected Store
                            </h2>

                            <div className="mt-5 rounded-xl border border-neutral-200 p-5">

                                <h3 className="text-lg font-medium text-neutral-900">
                                    {store.name}
                                </h3>

                                <p className="mt-2 text-sm text-neutral-600">
                                    {store.address}
                                </p>

                                <p className="text-sm text-neutral-600">
                                    {store.city}, {store.country}
                                </p>

                                {store.phone && (
                                    <p className="mt-3 text-sm text-neutral-600">
                                        {store.phone}
                                    </p>
                                )}

                            </div>

                        </section>


                        {/* APPOINTMENT DETAILS */}

                        <section className="mt-8 border-t border-neutral-200 pt-8">

                            <h2 className="text-xl font-medium text-neutral-900">
                                Appointment Details
                            </h2>

                            <div className="mt-5 grid gap-5 md:grid-cols-2">

                                <div className="rounded-xl border border-neutral-200 p-5">

                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                        Date
                                    </p>

                                    <p className="mt-2 text-base text-neutral-900">
                                        {appointment.date}
                                    </p>

                                </div>

                                <div className="rounded-xl border border-neutral-200 p-5">

                                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                                        Time
                                    </p>

                                    <p className="mt-2 text-base text-neutral-900">
                                        {appointment.time}
                                    </p>

                                </div>

                            </div>

                        </section>

                    </div>


                    {/* FINAL CONFIRMATION */}

          {confirmedAppointment && (
            <div className="mt-8 rounded-2xl bg-neutral-900 p-8 text-center text-white">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-neutral-900">
                ✓
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-neutral-400">
                Luxury Watch Store
              </p>

              <h2 className="mt-3 text-3xl font-light">
                Appointment Confirmed
              </h2>

              <p className="mt-4 text-sm text-neutral-300">
                Your appointment has been successfully booked.
              </p>

              <div className="mt-6">

                <p className="text-xs uppercase tracking-wider text-neutral-400">
                  Booking Reference
                </p>

                <p className="mt-2 text-xl">
                  {confirmedAppointment.bookingReference}
                </p>

              </div>

              <div className="mt-6 border-t border-neutral-700 pt-6">

                <p className="text-sm text-neutral-300">
                  Your booking confirmation will be sent to your registered
                  email address along with the appointment PDF.
                </p>

              </div>

            </div>
          )}




                    {/* Error message */}

                    {error && (
                        <p className="mt-6 text-center text-sm text-red-500">
                            {error}
                        </p>
                    )}



                    {/* ACTION BUTTONS */}

                    <div className="mt-8 flex items-center justify-between">

                        <button
                            type="button"
                            onClick={() => navigate("/point-of-sale")}
                            className="rounded-full border border-neutral-300 px-7 py-3 text-sm text-neutral-700 transition hover:bg-white"
                        >
                            Back
                        </button>

                        <button
                            type="button"
                            onClick={handleConfirmAppointment}
                            disabled={loading || confirmedAppointment}
                            className="rounded-full bg-neutral-900 px-8 py-3 text-sm text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading
                                ? "Confirming..."
                                : confirmedAppointment
                                    ? "Appointment Confirmed"
                                    : "Confirm Appointment"}
                        </button>
                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default AppointmentConfirmation;