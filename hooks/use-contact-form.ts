import { useState } from "react";

export const useContactForm = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const lastSubmission = localStorage.getItem("last_contact_submission");
        if (lastSubmission) {
            const timeSince = Date.now() - parseInt(lastSubmission, 10);
            const cooldown = 60 * 60 * 1000;
            if (timeSince < cooldown) {
                setStatus("error");
                const minutesLeft = Math.ceil((cooldown - timeSince) / 60000);
                setMessage(`Please wait ${minutesLeft} minutes before sending another message.`);
                setTimeout(() => {
                    setStatus("idle");
                    setMessage("");
                }, 5000);
                return;
            }
        }

        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""); 
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem("last_contact_submission", Date.now().toString());
                setStatus("success");
                setMessage("Message sent successfully! I'll get back to you soon.");
                (e.target as HTMLFormElement).reset();
            } else {
                console.error("Error", data);
                setStatus("error");
                setMessage(data.message || "Something went wrong. Please try again.");
                setTimeout(() => {
                    setStatus("idle");
                    setMessage("");
                }, 3000);
            }
        } catch (error) {
            console.error("Error", error);
            setStatus("error");
            setMessage("Network error. Please check your connection.");
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 3000);
        }
    };

    return { status, message, handleSubmit };
};
