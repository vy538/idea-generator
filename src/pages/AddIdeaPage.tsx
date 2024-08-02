import React, { useState } from 'react';
import { Idea, Category, Language } from '../types';

const AddIdeaPage: React.FC = () => {
  const [idea, setIdea] = useState<Partial<Idea>>({
    category: 'adjective',
    text: { en: '', zh: '' },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submission logic
    console.log('Submitting idea:', idea);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'category') {
      setIdea((prevIdea) => ({ ...prevIdea, category: value as Category }));
    } else if (name === 'en' || name === 'zh') {
      setIdea((prevIdea) => ({
        ...prevIdea,
        text: { ...prevIdea.text, [name]: value } as Language
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="category" value={idea.category} onChange={handleChange}>
        <option value="adjective">Adjective</option>
        <option value="character">Character</option>
        <option value="location">Location</option>
        <option value="verb">Verb</option>
        <option value="element">Element</option>
      </select>
      <input
        type="text"
        name="en"
        value={idea.text!.en}
        onChange={handleChange}
        placeholder="English text"
      />
      <input
        type="text"
        name="zh"
        value={idea.text!.zh}
        onChange={handleChange}
        placeholder="Chinese text"
      />
      <button type="submit">Add Idea</button>
    </form>
  );
};

export default AddIdeaPage;