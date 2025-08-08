import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // You can replace this with your backend email sending logic
    toast.success("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 px-4 bg-base-200">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-500 mt-2">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-base-100 shadow-lg rounded-lg p-6 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        ></textarea>

        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
