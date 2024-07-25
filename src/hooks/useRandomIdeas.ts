import { useState, useEffect, useCallback } from 'react';
import { Idea, ideas } from '../data/ideas';

export const useRandomIdeas = () => {
  const [randomIdeas, setRandomIdeas] = useState<Idea[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const generateRandomIdeas = useCallback(() => {
    const categories = ['adjective', 'character', 'location', 'verb', 'element'];
    return categories.map(category => {
      const categoryIdeas = ideas.filter(idea => idea.category === category);
      const randomIndex = Math.floor(Math.random() * categoryIdeas.length);
      return categoryIdeas[randomIndex];
    });
  }, []);

  const fetchIdeas = useCallback(async () => {
    try {
      setSpinning(true);
      // Generate new ideas immediately but don't set them yet
      const newIdeas = generateRandomIdeas();
      // Set a timeout to update the ideas after the spinning animation
      setTimeout(() => {
        setRandomIdeas(newIdeas);
        setSpinning(false);
      }, 3000); // This should match the spin duration in SlotMachine
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      setSpinning(false);
    } finally {
      setLoading(false);
    }
  }, [generateRandomIdeas]);

  useEffect(() => {
    fetchIdeas();
  }, [fetchIdeas]);

  return { ideas: randomIdeas, spinning, loading, error, refetch: fetchIdeas };
};