import React, { useState, useEffect } from 'react';
import { Idea } from '../types';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import { useUserRole } from '../hooks/useUserRole';

const AdminPage: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const userRole = useUserRole();

  useEffect(() => {
    if (userRole !== 'admin') return;

    const db = getDatabase();
    const ideasRef = ref(db, 'ideas');
    onValue(ideasRef, (snapshot) => {
      const data = snapshot.val();
      const loadedIdeas = Object.values(data) as Idea[];
      setIdeas(loadedIdeas);
    });
  }, [userRole]);

  const handleAddImage = (ideaEn: string, imageUrl: string) => {
    const db = getDatabase();
    const ideaRef = ref(db, `ideas/${ideaEn}/image`);
    push(ideaRef, imageUrl);
  };

  const handleDeleteIdea = (ideaEn: string) => {
    const db = getDatabase();
    const ideaRef = ref(db, `ideas/${ideaEn}`);
    remove(ideaRef);
  };

  if (userRole !== 'admin') {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div>
      <h1>Admin Page</h1>
      {ideas.map((idea) => (
        <div key={idea.text.en}>
          <h2>{idea.text.en} / {idea.text.zh}</h2>
          <p>Category: {idea.category}</p>
          <input
            type="text"
            placeholder="Image URL"
            onBlur={(e) => handleAddImage(idea.text.en, e.target.value)}
          />
          <button onClick={() => handleDeleteIdea(idea.text.en)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;