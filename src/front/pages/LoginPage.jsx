import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/app");
    } catch (err) {
      console.log(err)
      setError(err.message || "Error");
    }
  };

  return (
         
        <section id="login" className="login">
           <div className="container">
              <br />
              <br />
              <br />
              <div className="section-header">
                <h2>Login</h2>
              </div>
             </div>
            
            <div className="container"> 
                {/* <div style={{ maxWidth: 320, margin: "40px auto" }}> */}
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                                <form onSubmit={onSubmit}>
                                  <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email"
                                    style={{ width: "100%", marginBottom: 8 }}
                                  />

                                  <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                    type="password"
                                    style={{ width: "100%", marginBottom: 8 }}
                                  />

                                  <button style={{ width: "100%" }} type="submit">
                                    Entrar
                                  </button>
                                </form>

                                {error && <p style={{ color: "red" }}>{error}</p>}

                                <p style={{ fontSize: 12, opacity: 0.8 }}>
                                  Prueba: email con @ y password de 4+ caracteres.
                                </p>
                      </div>
                      <div className="col-lg-4"></div>
                </div>
            </div>
           
        </section>

  );
}
