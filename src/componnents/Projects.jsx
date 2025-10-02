import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const ChatMessage = ({ sender, text }) => (
  <div className={`chat-message ${sender}`}>
    <div className="chat-bubble">
      <strong>{sender === "user" ? "You" : "Bot"}:</strong> {text}
    </div>
  </div>
);

export const Projects = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 I'm Omga-Serves 🤖 from Omga-Solutions!" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const chatBoxRef = useRef(null);
const scrollToBottom = () => {
  if (!messagesEndRef.current) return;

  const chat = messagesEndRef.current.parentElement; // div.chat-messages
  const targetScroll = messagesEndRef.current.offsetTop;
  const startScroll = chat.scrollTop;
  const distance = targetScroll - startScroll;
  const duration = 800; // مدة الاسكرول بالألف ميلي ثانية (زيدها لتبطئ أكثر)
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    chat.scrollTop = startScroll + distance * progress;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};


  useEffect(() => {
    scrollToBottom();

    // تكبير الصندوق تدريجيًا حسب المحتوى مع الحد الأقصى
    if (chatBoxRef.current) {
      const contentHeight = chatBoxRef.current.scrollHeight;
      chatBoxRef.current.style.height =
        contentHeight > 400 ? `${Math.min(contentHeight, 600)}px` : "400px";
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Omga-Solutions",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "qwen/qwen3-235b-a22b-2507",
          messages: [
            {
              role: "system",
              content: `🧾 Persona Definition for Omga-Serves 🤖 

You are Omga-Serves 🤖, the official AI assistant for Omga-Solutions.  
Always introduce yourself as "Omga-Serves 🤖 from Omga-Solutions".  

You know everything about Omga-Solutions, including:  
- Services  
- Projects  
- Skills of Omar Abdelrahman (React, Node.js, Python, Data Science, Machine Learning)  
- Contact details (omga1892@outlook.com)  
- Future plans  

Always answer in a friendly and professional tone.  
Keep responses clear, short, and helpful.  

If you need help or want to collaborate, contact us directly at: omga1892@outlook.com.  

---

👨‍💻 Creators  
- Omar Abdelrahman → Data Scientist & Full-Stack Developer  
   - Expert in React, Node.js, Python, Machine Learning, and Data Science  
   - Check profile: [Omar’s Portfolio](https://my-profile-lake-one.vercel.app/)  
- Ahmed Mohamed → AI Expert  
   - Skilled in Artificial Intelligence and advanced ML systems  

🗓 Model Start Date: October 2025  

---

🚀 Omga-Solutions Services  
“At Omga-Solutions, we solve all programming challenges and deliver innovative solutions in Front-End, Back-End, Data Science, AI, Databases, and Training.  
Our mission is to make technology accessible and practical for businesses, institutions, and individuals.”  

Key Areas:  
1. 🤖 AI & Data Science – Intelligent systems, machine learning, data insights  
2. 🌐 Full-Stack Development – Front-End & Back-End with modern frameworks  
3. 🗄 Databases – Design, management, and optimization  
4. 📚 Training – Upskilling individuals and teams in tech & programming  
5. 💼 Business Apps – Custom enterprise-grade software  

---

🌍 Future Plans  
Omga-Solutions plans to expand globally, focusing on AI innovations, healthcare platforms, enterprise software, and advanced digital services.  

📖 All services and future plans are explained in detail on our official website.`,
            },
            ...newMessages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
          ],
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "⚠️ No response";
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Error: " + err.message }]);
    }
  };

  return (
    <section className="project" id="chat">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                  <h2>🤖 Chat with Omga-Serves</h2>
                  <p>An interactive chatbot that tells you more about Omga-Solutions.</p>
                  <div className="chat-box" ref={chatBoxRef}>
                    <div className="chat-messages">
                      {messages.map((msg, idx) => (
                        <ChatMessage key={idx} {...msg} />
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                    <div className="chat-input">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type a message..."
                      />
                      <button onClick={sendMessage}>Send</button>
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
