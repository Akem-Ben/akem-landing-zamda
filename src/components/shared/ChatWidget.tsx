import React, { useState, useRef, useEffect } from "react";
import aiIcon from "../../assets/ai.png";
import whatsapp from "../../assets/whatsapp-4.png";
import avatar from "../../assets/avatar.png";

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showQuick, setShowQuick] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi 👋 I’m Zam, your Zamda Health assistant. Ask me anything about our products, pricing, or support!",
      time: "8:30",
    },
    {
      type: "user",
      text: "Hello",
      time: "9:00",
    },
    {
      type: "bot",
      text: "Hi there! 👋 Welcome to Zamda Health.",
      time: "9:00",
    },
  ]);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userMessage, time: "Now" },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Got it 👍 Let me help you with that.",
          time: "Now",
        },
      ]);
    }, 800);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Would you like to request a demo, check pricing, or get technical support?",
          time: "Now",
        },
      ]);
      setShowQuick(true);
    }, 1600);
  };

  return (
    <>
      {open && (
        <>
          <style>{`.chat-widget-body::-webkit-scrollbar { display: none; } .chat-widget-body { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
          <div style={styles.backdrop} onClick={() => setOpen(false)}></div>
          <div style={{...styles.container, ...(isMobile && styles.containerMobile)}} onClick={(e) => e.stopPropagation()}>
            {/* HEADER */}
          <div style={{...styles.header, ...(isMobile && styles.headerMobile)}}>
            <div style={styles.headerLeft}>
              {/* AI ICON  */}
              <img src={avatar} style={styles.headerAvatar} />

              <div>
                <div style={styles.headerTitle}>Zam Assistant</div>
                <div style={styles.status}>
                  <span style={styles.dot}></span> Online · Typically replies instantly
                </div>
              </div>
            </div>

            {/* WhatsApp Icon */}
            <img src={whatsapp} style={styles.whatsapp} />
          </div>

          {/* BODY */}
          <div ref={chatRef} className="chat-widget-body" style={{...styles.body, ...(isMobile && styles.bodyMobile)}}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent:
                    msg.type === "user" ? "flex-end" : "flex-start",
                  marginBottom: "14px",
                }}
              >
                {msg.type === "bot" && (
                  <img src={aiIcon} style={styles.aiAvatar} />
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                      msg.type === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      ...styles.bubble,
                      background:
                        msg.type === "user" ? "#2D2F8F" : "#FFFFFF",
                      color: msg.type === "user" ? "#fff" : "#1A1A1A",
                      borderTopRightRadius:
                        msg.type === "user" ? "4px" : "16px",
                      borderTopLeftRadius:
                        msg.type === "bot" ? "4px" : "16px",
                    }}
                  >
                    {msg.text}
                  </div>

                  <span style={styles.time}>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT AREA */}
          <div style={{...styles.inputArea, ...(isMobile && styles.inputAreaMobile)}}>
            {showQuick && (
              <div style={styles.quickRow}>
                <button style={{...styles.quickBtn, ...(isMobile && styles.quickBtnMobile)}}>Request a Demo</button>
                <button style={{...styles.quickBtn, ...(isMobile && styles.quickBtnMobile)}}>Pricing Info</button>
                <button style={{...styles.quickBtn, ...(isMobile && styles.quickBtnMobile)}}>Technical Support</button>
              </div>
            )}

            <div style={styles.inputRow}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a Message..."
                style={styles.input}
              />

              <button style={styles.send} onClick={sendMessage}>
                ➤
              </button>
            </div>
          </div>
        </div>
      </>
      )}

      {/* FLOAT BUTTON */}
      {/* <button style={styles.fab} onClick={() => setOpen(!open)}>
        {open ? (
          <span style={styles.closeIcon}>×</span>
        ) : (
          <img src={aiIcon} style={{ width: "100%", height: "100%" }} />
        )}
      </button> */}
    </>
  );
};

export default ChatWidget;

/* ================= STYLES ================= */

const styles: any = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 1099,
  },

  fab: {
    position: "fixed",
    bottom: "16px",
    right: "16px",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    zIndex: 1101,
    display: "grid",
    placeItems: "center",
  },
  closeIcon: {
    color: "#fff",
    fontSize: "25px",
    lineHeight: 1,
    fontWeight: 400,
    background: "#2D2F8F",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    paddingTop: "17px"
  },

  container: {
    position: "fixed",
    bottom: "75px",
    right: "30px",
    width: "400px",
    height: "440px",
    background: "#F9F9FA",
    borderRadius: "20px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 1100,
  },

  containerMobile: {
    width: "90vw",
    height: "70vh",
    bottom: "80px",
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)",
  },

  header: {
    background: "#2D2F8F",
    color: "#fff",
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  headerAvatar: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    padding: "4px",
  },

  headerTitle: {
    fontSize: "15px",
    fontWeight: 600,
  },

  status: {
    fontSize: "10px",
    fontWeight: "400",
    marginTop: "4px",
    letterSpacing: "0.5px",
  },

  dot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    background: "#22C55E",
    borderRadius: "50%",
    marginRight: "6px",
  },

  whatsapp: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },

  body: {
    flex: 1,
    padding: "18px 18px",
    overflowY: "auto",
    background: "#F9F9FA",
  },

  aiAvatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginTop: "2px",
  },

  bubble: {
    padding: "11px 25px",
    borderRadius: "16px",
    maxWidth: "75%",
    fontSize: "13px",
    lineHeight: "1.6",
  },

  time: {
    fontSize: "10px",
    fontWeight: "600",
    color: "#616161",
    marginTop: "5px",
  },

  inputArea: {
    borderTop: "1px solid #E5E7EB",
    padding: "14px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  quickRow: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "nowrap",
  },

  quickBtn: {
    background: "#E3E3EE",
    color: "#201E82",
    border: "1px solid #A9A8CE",
    borderRadius: "18px",
    padding: "7px 12px",
    fontSize: "11px",
    cursor: "pointer",
  },

  quickBtnMobile: {
    padding: "6px 8px",
    fontSize: "9px",
    whiteSpace: "nowrap",
    flex: 1,
    minWidth: 0,
  },

  inputRow: {
    display: "flex",
    gap: "10px",
  },

  input: {
    flex: 1,
    padding: "12px 14px",
    borderRadius: "14px",
    border: "1px solid #D1D5DB",
    fontSize: "13px",
    outline: "none",
  },

  send: {
    background: "#2D2F8F",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "10px 14px",
    cursor: "pointer",
  },

  headerMobile: {
    padding: "12px",
  },

  bodyMobile: {
    padding: "12px",
  },

  inputAreaMobile: {
    padding: "10px",
  },
};