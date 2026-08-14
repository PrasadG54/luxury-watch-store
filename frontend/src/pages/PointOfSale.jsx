import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStores } from "../services/storeService";
import Navbar from "../components/Navbar";

function PointOfSale() {
    const navigate = useNavigate();

    const [stores, setStores] = useState([]);
    const [selectedStore, setSelectedStore] = useState(null);

    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const [guests, setGuests] = useState([]);

    const [appointment, setAppointment] = useState({
        date: "",
        time: "",
    });

    const [loadingStores, setLoadingStores] = useState(true);
    const [storeError, setStoreError] = useState("");

    // LOAD STORES

    useEffect(() => {
        const loadStores = async () => {
            try {
                setLoadingStores(true);

                const data = await getStores();

                setStores(data.stores || []);
            } catch (error) {
                console.error("Failed to load stores:", error);

                setStoreError("Unable to load stores.");
            } finally {
                setLoadingStores(false);
            }
        };

        loadStores();
    }, []);

    // CUSTOMER INPUT

    const handleCustomerChange = (e) => {
        const { name, value } = e.target;

        setCustomer((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ADD GUEST

    const addGuest = () => {
        setGuests((prev) => [
            ...prev,
            {
                name: "",
                phone: "",
                email: "",
            },
        ]);
    };

    // REMOVE GUEST

    const removeGuest = (index) => {
        setGuests((prev) => prev.filter((_, i) => i !== index));
    };

    // GUEST INPUT

    const handleGuestChange = (index, field, value) => {
        setGuests((prev) =>
            prev.map((guest, i) =>
                i === index
                    ? {
                        ...guest,
                        [field]: value,
                    }
                    : guest
            )
        );
    };

    // STORE SELECTION

    const handleStoreSelect = (store) => {
        setSelectedStore(store);
    };

    // APPOINTMENT INPUT

    const handleAppointmentChange = (e) => {
        const { name, value } = e.target;

        setAppointment((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // SUBMIT

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedStore) {
            return;
        }

        navigate("/appointment-confirmation", {
            state: {
                customer,
                guests,
                store: selectedStore,
                appointment,
            },
        });
    };

    return (
        <>
            <Navbar light />
            <div className="min-h-screen bg-[#f8f7f4] px-6 pt-28 pb-12">

                <div className="mx-auto max-w-5xl">

                    {/* PAGE HEADER */}

                    <div className="mb-10 text-center">

                        <h1 className="text-4xl font-light tracking-wide text-neutral-900">
                            Book an Appointment
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500">
                            Schedule a private visit at your preferred Luxury Watch Store
                            location.
                        </p>

                    </div>


                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* =====================================
              CUSTOMER DETAILS
          ====================================== */}

                        <section className="rounded-2xl bg-white p-8 shadow-sm">

                            <div className="mb-6">

                                <h2 className="text-xl font-medium text-neutral-900">
                                    Your Details
                                </h2>

                                <p className="mt-1 text-sm text-neutral-500">
                                    Enter the details of the person booking the appointment.
                                </p>

                            </div>


                            <div className="grid gap-5 md:grid-cols-3">

                                <div>
                                    <label className="mb-2 block text-sm text-neutral-600">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={customer.name}
                                        onChange={handleCustomerChange}
                                        placeholder="Your full name"
                                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-500"
                                        required
                                    />
                                </div>


                                <div>
                                    <label className="mb-2 block text-sm text-neutral-600">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={customer.phone}
                                        onChange={handleCustomerChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-500"
                                        required
                                    />
                                </div>


                                <div>
                                    <label className="mb-2 block text-sm text-neutral-600">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={customer.email}
                                        onChange={handleCustomerChange}
                                        placeholder="your@email.com"
                                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-neutral-500"
                                        required
                                    />
                                </div>

                            </div>

                        </section>


                        {/* =====================================
              ADDITIONAL GUESTS
          ====================================== */}

                        <section className="rounded-2xl bg-white p-8 shadow-sm">

                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                                <div>

                                    <h2 className="text-xl font-medium text-neutral-900">
                                        Additional Guests
                                    </h2>

                                    <p className="mt-1 text-sm text-neutral-500">
                                        Add details of anyone accompanying you.
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    onClick={addGuest}
                                    className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm transition hover:bg-neutral-900 hover:text-white"
                                >
                                    + Add Person
                                </button>

                            </div>


                            {guests.length > 0 && (
                                <div className="mt-6 space-y-5">

                                    {guests.map((guest, index) => (

                                        <div
                                            key={index}
                                            className="rounded-xl border border-neutral-200 p-5"
                                        >

                                            <div className="mb-4 flex items-center justify-between">

                                                <h3 className="text-sm font-medium text-neutral-800">
                                                    Person {index + 2}
                                                </h3>

                                                <button
                                                    type="button"
                                                    onClick={() => removeGuest(index)}
                                                    className="text-sm text-red-500 hover:text-red-700"
                                                >
                                                    Remove
                                                </button>

                                            </div>


                                            <div className="grid gap-5 md:grid-cols-3">

                                                <input
                                                    type="text"
                                                    value={guest.name}
                                                    onChange={(e) =>
                                                        handleGuestChange(
                                                            index,
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Full name"
                                                    className="rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-500"
                                                />


                                                <input
                                                    type="tel"
                                                    value={guest.phone}
                                                    onChange={(e) =>
                                                        handleGuestChange(
                                                            index,
                                                            "phone",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Phone number"
                                                    className="rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-500"
                                                />


                                                <input
                                                    type="email"
                                                    value={guest.email}
                                                    onChange={(e) =>
                                                        handleGuestChange(
                                                            index,
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Email"
                                                    className="rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-500"
                                                />

                                            </div>

                                        </div>

                                    ))}

                                </div>
                            )}

                        </section>


                        {/* =====================================
              STORE SELECTION
          ====================================== */}

                        <section className="rounded-2xl bg-white p-8 shadow-sm">

                            <div className="mb-6">

                                <h2 className="text-xl font-medium text-neutral-900">
                                    Select a Store
                                </h2>

                                <p className="mt-1 text-sm text-neutral-500">
                                    Choose the Luxury Watch Store location you would like to
                                    visit.
                                </p>

                            </div>


                            {loadingStores && (
                                <p className="text-sm text-neutral-500">
                                    Loading stores...
                                </p>
                            )}


                            {storeError && (
                                <p className="text-sm text-red-500">
                                    {storeError}
                                </p>
                            )}


                            {!loadingStores && !storeError && (
                                <div className="grid gap-4 md:grid-cols-2">

                                    {stores.map((store) => {

                                        const isSelected =
                                            selectedStore?._id === store._id;

                                        return (
                                            <button
                                                type="button"
                                                key={store._id}
                                                onClick={() => handleStoreSelect(store)}
                                                className={`rounded-xl border p-5 text-left transition ${isSelected
                                                    ? "border-neutral-900 bg-neutral-900 text-white"
                                                    : "border-neutral-200 hover:border-neutral-400"
                                                    }`}
                                            >

                                                <h3 className="text-lg font-medium">
                                                    {store.name}
                                                </h3>

                                                <p
                                                    className={`mt-2 text-sm ${isSelected
                                                        ? "text-neutral-300"
                                                        : "text-neutral-500"
                                                        }`}
                                                >
                                                    {store.address}
                                                </p>

                                                <p
                                                    className={`mt-1 text-sm ${isSelected
                                                        ? "text-neutral-300"
                                                        : "text-neutral-500"
                                                        }`}
                                                >
                                                    {store.city}, {store.country}
                                                </p>

                                            </button>
                                        );

                                    })}

                                </div>
                            )}

                        </section>


                        {/* =====================================
              SELECTED STORE DETAILS
          ====================================== */}

                        {selectedStore && (

                            <section className="rounded-2xl bg-neutral-900 p-8 text-white">

                                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                                    Selected Store
                                </p>

                                <h2 className="mt-3 text-2xl font-light">
                                    {selectedStore.name}
                                </h2>

                                <p className="mt-3 text-sm text-neutral-300">
                                    {selectedStore.address}
                                </p>

                                <p className="text-sm text-neutral-300">
                                    {selectedStore.city}, {selectedStore.country}
                                </p>

                                <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">

                                    <div>
                                        <p className="text-neutral-500">
                                            Phone
                                        </p>

                                        <p className="mt-1">
                                            {selectedStore.phone}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-neutral-500">
                                            Opening Hours
                                        </p>

                                        <p className="mt-1">
                                            {selectedStore.openingTime} –{" "}
                                            {selectedStore.closingTime}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-neutral-500">
                                            Available Days
                                        </p>

                                        <p className="mt-1">
                                            {selectedStore.availableDays?.join(", ")}
                                        </p>
                                    </div>

                                </div>

                            </section>

                        )}


                        {/* =====================================
              APPOINTMENT DATE & TIME
          ====================================== */}

                        <section className="rounded-2xl bg-white p-8 shadow-sm">

                            <div className="mb-6">

                                <h2 className="text-xl font-medium text-neutral-900">
                                    Appointment Details
                                </h2>

                                <p className="mt-1 text-sm text-neutral-500">
                                    Choose your preferred date and time.
                                </p>

                            </div>


                            <div className="grid gap-5 md:grid-cols-2">

                                <div>

                                    <label className="mb-2 block text-sm text-neutral-600">
                                        Appointment Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        value={appointment.date}
                                        onChange={handleAppointmentChange}
                                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-500"
                                        required
                                    />

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm text-neutral-600">
                                        Appointment Time
                                    </label>

                                    <input
                                        type="time"
                                        name="time"
                                        value={appointment.time}
                                        onChange={handleAppointmentChange}
                                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:border-neutral-500"
                                        required
                                    />

                                </div>

                            </div>

                        </section>


                        {/* =====================================
              CONFIRM BUTTON
          ====================================== */}

                        <div className="flex justify-end">

                            <button
                                type="submit"
                                disabled={!selectedStore}
                                className="rounded-full bg-neutral-900 px-8 py-3.5 text-sm text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Continue to Confirmation
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}

export default PointOfSale;