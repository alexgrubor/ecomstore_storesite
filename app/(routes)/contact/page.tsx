"use client";
import Head from "next/head";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="contact us" />
      </Head>

      <div className="max-w-3xl min-h-screen mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.825794731854!2d-122.41941563191519!3d37.77492982960371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1624907828202!5m2!1sen!2sus"
              style={{ border: "0" }}
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:col-span-1">
            {!isSubmitted && (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
                    style={{
                      outline: "black",
                    }}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
                    style={{
                      outline: "black",
                    }}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-600 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
                    style={{
                      outline: "black",
                    }}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <Button type="submit">Submit</Button>
              </form>
            )}
            {isSubmitted && (
              <div className="text-gray-600 text-lg">
                Thank you for your message. We will get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
