import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import './LandingPage.Style.css';

export const LandingPage = () => {
  const [exampleResources, setExampleResources] = useState([]);
  useEffect(() => {
    async function fetchExampleResources() {
      const response = await fetch(`${apiURL()}/exampleResources`);
      const examples = await response.json();
      setExampleResources(examples);
    }

    fetchExampleResources();
  }, []);

  return (
    <div className="landing-page-container">
      <span>Landing Page</span>
      {exampleResources.map((example) => (
        <div key={example.id}>{example.title}</div>
      ))}
    </div>
  );
};
