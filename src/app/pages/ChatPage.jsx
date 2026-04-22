import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../../api/chat";
import ReactMarkdown from "react-markdown";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CFormInput,
  CSpinner,
} from "@coreui/react";

export default function Chat() {

  const imageUrl = "https://iamedicine-images.s3.us-east-1.amazonaws.com/imagenes_RA/imagen3.jpg";
  const imageUrl2 = "https://iamedicine-images.s3.us-east-1.amazonaws.com/imagenes_RA/imagen_1.jpg"

  const presentation = `Hi there!, I am an expert Professor of Rheumatology specialized in the standardization of joint\
   physical examination techniques to assess disease activity in adults with Rheumatoid Arthritis (RA).\
   \n Can I help you?`

  const [texto, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: "bot", text: presentation, url_image:null },
  ]);

  const nextIdRef = useRef(2);
  const scrollRef = useRef(null);
  const [stickToBottom, setStickToBottom] = useState(true);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setStickToBottom(distanceToBottom < 40);
  };

  useEffect(() => {
    if (!stickToBottom) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length, stickToBottom, loading]);

  const onSend = async (e) => {
    e.preventDefault();
    const trimmed = texto.trim();
    if (!trimmed || loading) return;

    const userMsg = { id: nextIdRef.current++, role: "user", text: trimmed, url_image:null};
    setMessages((m) => [...m, userMsg]);
    setText("");
    setLoading(true);

    try {
      const res = await sendMessage(userMsg.text);

      console.log("este es la respuesta imagen:\n ",res.url_image);
      
      const botMsg = { id: nextIdRef.current++, role: "bot", text: res.reply, url_image: res.url_image };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          id: nextIdRef.current++,
          role: "bot",
          text: `error llamando api: ${String(err)}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CCard>
      <CCardHeader className="mb-4 d-flex align-items-center" style={{ height: "8vh" }}>
        <strong>Chat</strong>
        <span className="ms-auto text-body-secondary" style={{ fontSize: 12 }}>
          {loading ? "Respondiendo..." : "Online"}
        </span>
      </CCardHeader>

      <CCardBody className="d-flex flex-column">
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="border p-3 rounded overflow-auto"
          style={{ height: "60vh", backgroundColor: "#f8f9fa" }}
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`d-flex mb-2 ${
                m.role === "user" ? "justify-content-end" : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded-3 shadow-sm ${
                  m.role === "user" ? "bg-primary text-white" : "bg-white"
                }`}
                style={{
                  maxWidth: "75%",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                {m.role === "bot" ? (
                   <>
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2">{children}</p>,
                          ul: ({ children }) => <ul className="mb-2 ps-4">{children}</ul>,
                          ol: ({ children }) => <ol className="mb-2 ps-4">{children}</ol>,
                          li: ({ children }) => <li>{children}</li>,
                          strong: ({ children }) => <strong>{children}</strong>,
                        }}
                      >  
                        {m.text} 
                      </ReactMarkdown>
                      
                      {
                        (m.url_image != null)&(m.url_image != "")&(m.url_image != "https://noneimage.jpg")? 
                          <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>

                              <img src={m.url_image} alt="Imagen desde S3" style={{ width: "400px", borderRadius: "8px"}} />  
                          </div>:
                           <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
                              {/* <img src={imageUrl} alt="Imagen desde S3" style={{ width: "350px", borderRadius: "8px"}} />   */}
                          </div>
                      }

                      
                      
                  </>
                ) : (
                  <span style={{ whiteSpace: "pre-wrap" }}>{m.text}</span>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="d-flex mb-2 justify-content-start">
              <div
                className="p-3 rounded-4 shadow-sm border bg-white"
                style={{
                  maxWidth: "75%",
                  minWidth: "180px",
                }}
              >
                <div
                  className="text-body-secondary mb-2"
                  style={{ fontSize: "0.9rem", fontWeight: 500 }}
                >
                  El asistente está escribiendo...
                </div>

                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CCardBody>

      <CCardFooter>
        <form className="d-flex gap-2" onSubmit={onSend}>
          <CFormInput
            placeholder={loading ? "Esperando respuesta..." : "Escribe un mensaje..."}
            value={texto}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
          />
          <CButton type="submit" color="primary" disabled={loading}>
            {loading ? (
              <>
                <CSpinner size="sm" className="me-2" />
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </CButton>
        </form>
      </CCardFooter>

      <style>{`
        .typing-dots {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 18px;
        }

        .typing-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #6c757d;
          display: inline-block;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .typing-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .typing-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }

        .typing-dots span:nth-child(3) {
          animation-delay: 0s;
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0.6);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </CCard>
  );
}