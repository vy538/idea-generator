import { useState, useEffect } from 'react';
import { Idea, ideas } from '../data/ideas';

export const useRandomIdeas = () => {
  const [randomIdeas, setRandomIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const generateRandomIdeas = () => {
    const categories = ['adjective', 'character', 'location', 'verb', 'element'];
    const newIdeas = categories.map(category => {
      const categoryIdeas = ideas.filter(idea => idea.category === category);
      const randomIndex = Math.floor(Math.random() * categoryIdeas.length);
      return categoryIdeas[randomIndex];
    });
    return newIdeas;
  };

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      const newIdeas = generateRandomIdeas();
      setRandomIdeas(newIdeas);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return { ideas: randomIdeas, loading, error, refetch: fetchIdeas };
};