import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_icvgme9",   // replace with your EmailJS service ID
      "template_d31gg4a",  // replace with your template ID
      form.current,
      "tctc9qiNoybv7_YXZ"    // replace with your public key
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccess("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        setSuccess("Failed to send message. Try again.");
      }
    );
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center px-6 md:px-20 bg-blackVibrant text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  from-green-200 via-red-200 to-blue-500 opacity-40 blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full bg-blackVibrant/80 backdrop-blur-md rounded-3xl p-8 shadow-xl"
      >
        <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 rounded-lg bg-white/10 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-white/10 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 rounded-lg bg-white/10 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg bg-white/10 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Send Message
          </button>
          {success && <p className="mt-2 text-center text-green-400">{success}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
