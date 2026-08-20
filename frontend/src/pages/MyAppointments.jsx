import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMyAppointments, sendAppointmentPdfEmail } from "../services/appointmentService";

function MyAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [sendingPdf, setSendingPdf] = useState(null);
    const [sentPdf, setSentPdf] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                setError("");

                const token = localStorage.getItem("token");

                if (!token) {
                    setError("Please login to view your appointments.");
                    return;
                }

                const data = await getMyAppointments(token);

                setAppointments(data.appointments || []);
            } catch (error) {
                console.error("Fetch appointments error:", error);

                setError(
                    error.response?.data?.message ||
                    "Unable to load your appointments."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    // Download PDF
    const handleDownloadPdf = async (appointmentId, bookingReference) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login again.");
                return;
            }

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/appointments/${appointmentId}/pdf`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Unable to download PDF.");
            }

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = `appointment-${bookingReference}.pdf`;

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download PDF error:", error);

            setError("Unable to download appointment PDF.");
        }
    };

    const handleSendPdfEmail = async (appointmentId) => {
        try {
            setSendingPdf(appointmentId);
            setSentPdf(null);
            setError("");

            const token = localStorage.getItem("token");

            if (!token) {
                setError("Please login again.");
                return;
            }

            await sendAppointmentPdfEmail(
                appointmentId,
                token
            );

            setSentPdf(appointmentId);

        } catch (error) {
            console.error("Send PDF email error:", error);

            setError(
                error.response?.data?.message ||
                "Unable to send PDF to your email."
            );
        } finally {
            setSendingPdf(null);
        }
    };

    return (
        <>
            <Navbar light />

            <main className="min-h-screen bg-[#F7F5F2] px-6 pt-32 pb-16">

                <div className="mx-auto max-w-5xl">

                    {/* HEADER */}

                    <div className="mb-12 text-center">

                        <p className="text-xs uppercase tracking-[4px] text-[#B08A58]">
                            Personal Space
                        </p>

                        <h1 className="mt-4 text-4xl font-light tracking-wide text-[#292929] md:text-5xl">
                            My Appointments
                        </h1>

                        <p className="mt-4 text-sm text-[#777]">
                            View and manage your store appointments.
                        </p>

                    </div>


                    {/* LOADING */}

                    {loading && (
                        <div className="py-20 text-center">

                            <p className="text-sm text-[#777]">
                                Loading your appointments...
                            </p>

                        </div>
                    )}


                    {/* ERROR */}

                    {!loading && error && (
                        <div className="border border-red-200 bg-red-50 px-6 py-5 text-center">

                            <p className="text-sm text-red-600">
                                {error}
                            </p>

                        </div>
                    )}


                    {/* EMPTY STATE */}

                    {!loading && !error && appointments.length === 0 && (
                        <div className="border border-[#E3DDD5] bg-white px-6 py-16 text-center">

                            <p className="text-xs uppercase tracking-[3px] text-[#B08A58]">
                                No Appointments
                            </p>

                            <h2 className="mt-4 text-2xl font-light text-[#292929]">
                                You have no appointments yet.
                            </h2>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#777]">
                                Book a private appointment at one of our stores
                                to explore our timepieces.
                            </p>

                            <Link
                                to="/point-of-sale"
                                className="mt-8 inline-block border border-[#292929] px-8 py-4 text-sm uppercase tracking-[2px] transition hover:bg-[#292929] hover:text-white"
                            >
                                Book an Appointment
                            </Link>

                        </div>
                    )}


                    {/* APPOINTMENTS */}

                    {!loading && !error && appointments.length > 0 && (
                        <div className="space-y-6">

                            {appointments.map((appointment) => (

                                <div
                                    key={appointment._id}
                                    className="border border-[#E3DDD5] bg-white p-7 md:p-8"
                                >

                                    {/* TOP */}

                                    <div className="flex flex-col gap-5 border-b border-[#E5DFD7] pb-6 md:flex-row md:items-start md:justify-between">

                                        <div>

                                            <p className="text-xs uppercase tracking-[2px] text-[#999]">
                                                Booking Reference
                                            </p>

                                            <h2 className="mt-2 text-xl font-light tracking-wide text-[#292929]">
                                                {appointment.bookingReference}
                                            </h2>

                                        </div>

                                        <span className="w-fit border border-green-200 bg-green-50 px-4 py-2 text-xs uppercase tracking-[2px] text-green-700">
                                            {appointment.status}
                                        </span>

                                    </div>


                                    {/* DETAILS */}

                                    <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">

                                        {/* STORE */}

                                        <div>

                                            <p className="text-xs uppercase tracking-[2px] text-[#999]">
                                                Store
                                            </p>

                                            <p className="mt-2 text-base font-light text-[#292929]">
                                                {appointment.store?.name || "Not available"}
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-[#777]">
                                                {appointment.store?.address}
                                            </p>

                                            <p className="text-sm text-[#777]">
                                                {appointment.store?.city}
                                            </p>

                                        </div>


                                        {/* DATE */}

                                        <div>

                                            <p className="text-xs uppercase tracking-[2px] text-[#999]">
                                                Date
                                            </p>

                                            <p className="mt-2 text-base font-light text-[#292929]">
                                                {appointment.appointmentDate}
                                            </p>

                                        </div>


                                        {/* TIME */}

                                        <div>

                                            <p className="text-xs uppercase tracking-[2px] text-[#999]">
                                                Time
                                            </p>

                                            <p className="mt-2 text-base font-light text-[#292929]">
                                                {appointment.appointmentTime}
                                            </p>

                                        </div>

                                    </div>


                                    {/* CUSTOMER */}

                                    <div className="mt-7 border-t border-[#E5DFD7] pt-7">

                                        <p className="text-xs uppercase tracking-[2px] text-[#999]">
                                            Customer
                                        </p>

                                        <div className="mt-3 flex flex-col gap-1 text-sm text-[#555]">

                                            <p>
                                                {appointment.customer?.name}
                                            </p>

                                            <p>
                                                {appointment.customer?.phone}
                                            </p>

                                            <p>
                                                {appointment.customer?.email}
                                            </p>

                                        </div>

                                    </div>


                                    {/* ACTIONS */}

                                    <div className="mt-7 flex flex-col gap-3 border-t border-[#E5DFD7] pt-7 sm:flex-row">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDownloadPdf(
                                                    appointment._id,
                                                    appointment.bookingReference
                                                )
                                            }
                                            className="border border-[#292929] px-6 py-3 text-sm uppercase tracking-[1.5px] transition hover:bg-[#292929] hover:text-white"
                                        >
                                            Download PDF
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleSendPdfEmail(appointment._id)
                                            }
                                            disabled={sendingPdf === appointment._id}
                                            className="border border-[#E3DDD5] px-6 py-3 text-sm uppercase tracking-[1.5px] text-[#555] transition hover:border-[#A88D6A] hover:text-[#292929] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {sendingPdf === appointment._id
                                                ? "Sending..."
                                                : sentPdf === appointment._id
                                                    ? "PDF Sent ✓"
                                                    : "Send PDF to Email"}
                                        </button>
                                    </div>

                                </div>

                            ))}

                        </div>
                    )}

                </div>

            </main>

            <Footer />
        </>
    );
}

export default MyAppointments;