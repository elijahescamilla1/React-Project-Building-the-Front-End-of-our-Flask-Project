import React from 'react';
import useFetch from '../hooks/useFetch';

const Dashboard = () => {
  const { data, loading, error } = useFetch('http://localhost:5000/api/characters');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
