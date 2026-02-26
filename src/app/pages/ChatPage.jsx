import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../../api/chat";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CFormInput,
} from "@coreui/react";

export default function Chat() {

  const [texto, setText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, role: "bot", text: "hola ¿En que te ayudo?" },
  ]);

  const nextIdRef = useRef(2);
  const scrollRef = useRef(null);
  const [stickToBottom, setStickToBottom] = useState(true);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setStickToBottom(distanceToBottom < 40); // umbral
  };

  useEffect(() => {
    if (!stickToBottom) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length, stickToBottom]);

  const onSend = async (e) => {
    e.preventDefault();
    const trimmed = texto.trim();
    if (!trimmed) return;

    const userMsg = { id: nextIdRef.current++, role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setText("");

    try {
      const res = await sendMessage(userMsg.text);
      const botMsg = { id: nextIdRef.current++, role: "bot", text: res.reply };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { id: nextIdRef.current++, role: "bot", text: `error llamando api: ${String(err)}` },
      ]);
    }
  };

  return (
    <CCard>
      <CCardHeader className="mb-4" style={{ height: "8vh" }}>
        <strong>Chat</strong>
        <span className="ms-auto text-body-secondary" style={{ fontSize: 12 }}>
          Online
        </span>
      </CCardHeader>

      <CCardBody className="d-flex flex-column">
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="border p-3 rounded overflow-auto"
          style={{ height: "60vh" }} // importante: altura fija del área scroll
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`d-flex mb-2 ${
                m.role === "user" ? "justify-content-end" : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded-3 ${
                  m.role === "user" ? "bg-primary text-white" : "bg-body-tertiary"
                }`}
                style={{
                  maxWidth: "75%",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </CCardBody>

      <CCardFooter>
        <form className="d-flex gap-2" onSubmit={onSend}>
          <CFormInput
            placeholder="Escribe un mensaje..."
            value={texto}
            onChange={(e) => setText(e.target.value)}
          />
          <CButton type="submit" color="primary">
            Enviar
          </CButton>
        </form>
      </CCardFooter>
    </CCard>
  );
}
