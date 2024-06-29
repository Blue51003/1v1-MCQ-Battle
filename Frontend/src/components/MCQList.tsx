import { useEffect, useState } from "react";
import axios from "axios";

const MCQList = () => {
  const [mcqs, setMcqs] = useState([]);

  useEffect(() => {
    const fetchMCQs = async () => {
      try {
        const response = await axios.get("/api/mcqs");
        setMcqs(response.data);
      } catch (error) {
        console.error("Error fetching MCQs", error);
      }
    };
    fetchMCQs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this MCQ?")) {
      try {
        await axios.delete(`/api/mcqs/${id}`);
        setMcqs(mcqs.filter((mcq) => mcq.id !== id));
      } catch (error) {
        console.error("Error deleting MCQ", error);
      }
    }
  };

  return (
    <div>
      <h2>MCQ List</h2>
      <ul>
        {mcqs.map((mcq) => (
          <li key={mcq.id}>
            {mcq.question}
            <button onClick={() => handleDelete(mcq.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQList;
