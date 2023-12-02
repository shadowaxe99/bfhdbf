```typescript
import React, { useState, useEffect } from 'react';
import { PersonaService } from '../../services/PersonaService';
import styles from './styles.module.css';
import { IPersona } from '../../types/index.d';

const UniqueAIPersonas: React.FC = () => {
  const [personas, setPersonas] = useState<IPersona[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        setLoading(true);
        const fetchedPersonas = await PersonaService.getPersonas();
        setPersonas(fetchedPersonas);
      } catch (e) {
        setError('Failed to fetch personas');
      } finally {
        setLoading(false);
      }
    };

    fetchPersonas();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.personasContainer}>
      {personas.map((persona) => (
        <div key={persona.id} className={styles.personaCard}>
          <img src={persona.avatar} alt={persona.name} className={styles.personaAvatar} />
          <div className={styles.personaInfo}>
            <h3 className={styles.personaName}>{persona.name}</h3>
            <p className={styles.personaDescription}>{persona.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniqueAIPersonas;
```