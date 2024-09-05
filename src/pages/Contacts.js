import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const public_key = "vwXj3gfN4FyxDyWMM";
  const templateId = "template_4rr288p";
  const serviceId = "service_ryo6y4s";

  const templateParams = {
    from_name: name,
    email_id: email,
    to_name: "Aayush Code",
    message: message,
  };

  const validateForm = () => {
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill out all fields before submitting.");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    emailjs
      .send(serviceId, templateId, templateParams, public_key)
      .then((resp) => {
        console.log("Email sent successfully", resp);
        toast.success("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Error sending email", err);
        toast.error("Failed to send the email. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-20 pt-8">
        <h1 className="text-center text-3xl font-poppins">Get in Touch</h1>
        <div className="p-16 flex-col justify-center items-center sm:flex-row flex gap-8">
          <div className="bg-[#922232] dark:bg-white flex flex-col justify-center gap-6 h-96 p-4 w-full sm:w-1/3">
            <h2 className="dark:text-black text-[#D0C2B3] font-poppins">
              My Socials
            </h2>
            <div className="flex flex-col gap-8 font-poppins">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/aayush4444/"
                className="flex gap-4 cursor-pointer text-white dark:text-black"
              >
                <FaFacebook size={30} />
                <p>Facebook</p>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/aayushhh44"
                className="flex gap-4 cursor-pointer text-white dark:text-black"
              >
                <FaGithub
                  size={30}
                  className="cursor-pointer text-white dark:text-black"
                />
                <p>Github</p>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/aayblush"
                className="flex gap-4 cursor-pointer text-white dark:text-black"
              >
                <FaInstagram
                  size={30}
                  className="cursor-pointer text-white dark:text-black"
                />
                <p>Instagram</p>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="flex gap-4 cursor-pointer text-white dark:text-black"
              >
                <FaLinkedin
                  size={30}
                  className="cursor-pointer text-white dark:text-black"
                />
                <p>Linkedin</p>
              </a>
            </div>
          </div>
          <div className="w-full sm:w-2/3">
            <form onSubmit={sendEmail} className="flex flex-col gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-0 p-2 border-b-2 border-black focus:border-black outline-none placeholder:font-poppins dark:text-black"
                placeholder="Your Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 p-2 border-b-2 border-black focus:border-black outline-none placeholder:font-poppins dark:text-black"
                placeholder="Email"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-0 p-2 border-b-2 border-black focus:border-black outline-none placeholder:font-poppins dark:text-black"
                placeholder="Messages"
              />
              <button
                type="submit"
                className="p-2 bg-[#922232] text-[#D0C2B3] font-poppins mt-8"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
