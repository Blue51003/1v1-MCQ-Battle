import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MCQForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  useEffect(() => {
    if (id) {
      const fetchMCQ = async () => {
        try {
          const response = await axios.get(`/api/mcqs/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching MCQ", error);
        }
      };
      fetchMCQ();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/mcqs/${id}`, formData);
        alert("MCQ updated");
      } else {
        await axios.post("/api/mcqs", formData);
        alert("MCQ added");
      }
    } catch (error) {
      console.error("Error saving MCQ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Question"
        value={formData.question}
        onChange={handleChange}
      />
      {formData.options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
        />
      ))}
      <input
        type="text"
        name="correctAnswer"
        placeholder="Correct Answer"
        value={formData.correctAnswer}
        onChange={handleChange}
      />
      <button type="submit">Save MCQ</button>
    </form>
  );
};

export default MCQForm;
