import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);

    emailjs
      .sendForm(
        "service_1shw258",
        "template_ga204db",
        form.current,
        "2A-RCb4aAI0NKZbZD"
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message ❌ Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[7vw] lg:px-[12vw] font-sans bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-700 drop-shadow-[3px_3px_0_#000]">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-yellow-400 mx-auto mt-4 rounded-full shadow-[2px_2px_0_#000]"></div>
        <p className="text-gray-700 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions! 🎨
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 p-6 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000]">
        <h3 className="text-xl font-bold text-purple-700 text-center drop-shadow-[2px_2px_0_#000]">
          Connect With Me <span>🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          {/* Inputs */}
          {["email", "name", "title"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field === "email"
                  ? "Your Email"
                  : field === "name"
                  ? "Your Name"
                  : "Subject"
              }
              required
              className="w-full p-3 rounded-xl bg-[#fff9f0] border-4 border-black text-purple-700 font-semibold focus:outline-none focus:border-purple-500 transition-transform transform hover:scale-105"
            />
          ))}

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-xl bg-[#fff9f0] border-4 border-black text-purple-700 font-semibold focus:outline-none focus:border-purple-500 transition-transform transform hover:scale-105"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-bold rounded-xl border-4 border-black shadow-[4px_4px_0px_#000] transition-transform transform hover:scale-110 ${
              isSending ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Success Message */}
        {isSent && (
          <p className="text-green-500 text-center mt-4 font-bold drop-shadow-[2px_2px_0_#000]">
            🎉 Thanks for reaching out! I’ll get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
