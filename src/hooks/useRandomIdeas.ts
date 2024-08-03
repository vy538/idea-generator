import { useState, useEffect, useCallback } from 'react';
import { Idea, Category } from '../types';
import { useMediaQuery } from 'react-responsive';
import { theme } from '../styles/theme';
import { fetchIdeas } from '../services/database';

export const useRandomIdeas = () => {
  const [allIdeas, setAllIdeas] = useState<Record<string, Idea[]>>({});
  const [randomIdeas, setRandomIdeas] = useState<Idea[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.mobile });

  const generateRandomIdeas = useCallback(() => {
    const categories: Category[] = ['adjective', 'character', 'location', 'verb', 'element'];
    return categories.map(category => {
      const categoryIdeas = allIdeas[category] || [];
      const randomIndex = Math.floor(Math.random() * categoryIdeas.length);
      return categoryIdeas[randomIndex];
    });
  }, [allIdeas]);

  const fetchAllIdeas = useCallback(async () => {
    try {
      const ideas = await fetchIdeas();
      setAllIdeas(ideas);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllIdeas();
  }, [fetchAllIdeas]);

  const fetchRandomIdeas = useCallback(async () => {
    try {
      setSpinning(true);
      const newIdeas = generateRandomIdeas();
      
      if (isMobile) {
        setRandomIdeas(newIdeas);
        setSpinning(false);
      } else {
        setTimeout(() => {
          setRandomIdeas(newIdeas);
          setSpinning(false);
        }, 3000);
      }
      
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      setSpinning(false);
    }
  }, [generateRandomIdeas, isMobile]);

  useEffect(() => {
    if (!loading && Object.keys(allIdeas).length > 0) {
      fetchRandomIdeas();
    }
  }, [loading, allIdeas, fetchRandomIdeas]);

  return { ideas: randomIdeas, spinning, loading, error, refetch: fetchRandomIdeas };
};