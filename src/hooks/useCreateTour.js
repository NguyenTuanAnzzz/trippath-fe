import { useState } from "react";
import useFetchWithAuth from "./useFetchWithAuth";
import { createTour } from "../apis/tourPackageApi";

export default function useCreateTour() {
    const fetchWithAuth = useFetchWithAuth();
    const [form, setForm] = useState({
        name: '',
        description: '',
        durationDays: 1,
        durationNights: 0,
        price: '',
        location: '',
        itineraries: [
            {
                dayNumber: 1,
                title: '',
                description: ''
            }
        ],
        images: []
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState();
    const handleChange = (e) => {
        const { files, value, name } = e.target
        if (name == 'image') {
            setForm((prev) => ({ ...prev, images: [...prev.images, files[0]] }))
            return;

        }
        if (name === "durationDays") {
            const days = Number(value);

            setForm((prev) => ({
                ...prev,
                durationDays: days,
                itineraries: Array.from(
                    { length: days },
                    (_, index) => ({
                        dayNumber: index + 1,
                        title: prev.itineraries[index]?.title || "",
                        description: prev.itineraries[index]?.description || ""
                    })
                )
            }));

            return;
        }

        setForm({ ...form, [name]: value })
    }


    const handleItineraryChange = (index, e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            itineraries: prev.itineraries.map((item, i) =>
                i === index
                    ? {
                        ...item,
                        [name]: value
                    }
                    : item
            )
        }));
    };


    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        try {
            setError("");
            setMessage("");
            setLoading(true);

            const formData = new FormData()
            // Thông tin tour
            formData.set("name", form.name);
            formData.set("description", form.description);
            formData.set("durationDays", form.durationDays);
            formData.set("durationNights", form.durationNights);
            formData.set("price", form.price);
            formData.set("location", form.location);
            form.itineraries.forEach((itinerary, index) => {
                formData.set(
                    `itineraries[${index}].dayNumber`,
                    itinerary.dayNumber
                );

                formData.set(
                    `itineraries[${index}].title`,
                    itinerary.title
                );

                formData.set(
                    `itineraries[${index}].description`,
                    itinerary.description
                );
            });
            form.images.forEach((image) => {
                if (image instanceof File) {
                    formData.append("images", image);
                }

            });
            const result = await fetchWithAuth(createTour, formData)
            if (result) {
                setMessage("Thêm tour thành công");
                setForm({
                    name: '',
                    description: '',
                    durationDays: 1,
                    durationNights: 0,
                    price: '',
                    location: '',
                    itineraries: [
                        {
                            dayNumber: 1,
                            title: '',
                            description: ''
                        }
                    ],
                    images: []
                });
                return true;
            }
        } catch (error) {
            setError(error.message)
            return false;
        } finally {
            setLoading(false)
        }
    }
    return { form, error, message, loading, handleChange, handleSubmit, handleItineraryChange }
}