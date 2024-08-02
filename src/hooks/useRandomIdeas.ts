import { useState, useEffect, useCallback } from 'react';
import { ideas } from '../data/ideas';
import { Idea, Category } from '../types';
import { useMediaQuery } from 'react-responsive';
import { theme } from '../styles/theme';

export const useRandomIdeas = () => {
  const [randomIdeas, setRandomIdeas] = useState<Idea[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.mobile });

  const generateRandomIdeas = useCallback(() => {
    const categories: Category[] = ['adjective', 'character', 'location', 'verb', 'element'];
    return categories.map(category => {
      const categoryIdeas = ideas[category];
      const randomIndex = Math.floor(Math.random() * categoryIdeas.length);
      return categoryIdeas[randomIndex];
    });
  }, []);

  const fetchIdeas = useCallback(async () => {
    try {
      setSpinning(true);
      const newIdeas = generateRandomIdeas();
      
      if (isMobile) {
        // For mobile, update ideas immediately
        setRandomIdeas(newIdeas);
        setSpinning(false);
      } else {
        // For desktop, delay updating ideas to allow for spinning animation
        setTimeout(() => {
          setRandomIdeas(newIdeas);
          setSpinning(false);
        }, 3000); // This should match the spin duration in DesktopSlotMachine
      }
      
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      setSpinning(false);
    } finally {
      setLoading(false);
    }
  }, [generateRandomIdeas, isMobile]);

  useEffect(() => {
    fetchIdeas();
  }, [fetchIdeas]);

  return { ideas: randomIdeas, spinning, loading, error, refetch: fetchIdeas };
};