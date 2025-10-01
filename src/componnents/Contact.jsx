import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import { BsPaypal, BsPhone } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
 
export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
        const formattedPhone = formDetails.phone.replace(/\s+/g, ""); // Format phone number without spaces

        const BACKEND_URL = "https://your-backend.vercel.app"; // Replace with your actual backend URL

        const response = await fetch(`${BACKEND_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: formDetails.firstName,
                lastName: formDetails.lastName,
                email: formDetails.email,
                phone: formattedPhone,
                message: formDetails.message,
            }),
        });

        setButtonText("Send");
        const result = await response.json();
        setFormDetails(formInitialDetails);

        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully ✈" });
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again 💀" });
        }
    } catch (error) {
        setButtonText("Send");
        setStatus({ success: false, message: "Network error. Please try again later 💀" });
    }
};



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* First Name and Last Name Input */}
                      {["First Name", "Last Name"].map((placeholder, idx) => (
  <Col size={12} sm={6} className="px-1" key={idx}>
    <input
      type="text"
      value={
        placeholder === "First Name"
          ? formDetails.firstName
          : formDetails.lastName
      }
      placeholder={placeholder}
      onChange={(e) =>
        onFormUpdate(
          placeholder === "First Name" ? "firstName" : "lastName",
          e.target.value
        )
      }
      required
    />
  </Col>
))}

                      {/* Email Input */}
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                          required
                        />
                      </Col>
                      {/* Phone Input */}
                      <Col size={12} className="px-1">
                        <PhoneInput
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(phone) => onFormUpdate("phone", phone)}
                          enableSearch
                          searchPlaceholder="Search for your country"
                          className="custom-phone-input"
                          required
                        />
                      </Col>
                      {/* Message Input */}
                      <Col size={12} sm={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {/* Status Message */}
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                  {/* Social Media Links */}
                 <div className="contact-links mt-4">
  <h3>Connect with me:</h3>
  <a
    href="https://wa.me/201228810429"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-icon"
  >
    <FaWhatsapp size={30} color="#25D366" /> WhatsApp
  </a>
  <a
    href="https://discord.com/users/omga_1"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-icon"
  >
    <FaDiscord size={30} color="#7289DA" /> Discord
  </a>
  <a
    href="mailto:omar.abdelrahman.hardball@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-icon"
  >
    <FaEnvelope size={30} color="#EA4335" /> Email
  </a>
</div>

                  {/* Payment Methods */}
                  <div className="buy-section mt-5">
                    <h3>Payment Methods:</h3>
                    <div className="contact-links">
                      <a
                        href="https://paypal.me/OmarAbdelrahman194?country.x=EG&locale.x=ar_EG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon"
                      >
                        <BsPaypal size={30} color="#003087" /> PayPal
                      </a>
                      <a
                        href="https://ipn.eg/S/omar.hassaballa/instapay/9oup7A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon"
                      >
                        <BsPhone size={30} color="#00A4E4" /> InstaPay
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
