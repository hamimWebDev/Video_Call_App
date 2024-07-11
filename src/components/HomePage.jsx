import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your name..."
          required
        />
        <button onClick={submitHandler}>Join</button>
      </form>
    </div>
  );
};

export default HomePage;
