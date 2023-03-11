import React from 'react';
import { apiURL, fetcher } from '../../apiUtils';
import useSWR from 'swr';
import './LandingPage.Style.css';

export const LandingPage = () => {
  const {
    data: exampleResources,
    error,
    data,
  } = useSWR(`${apiURL()}/exampleResources`, fetcher);

  return (
    <div className="landing-page-container">
      <h1>Landing Page</h1>
      {error && <div>Failed to load</div>}
      {!data && <div>Loading...</div>}
      {exampleResources?.map((example) => (
        <div key={example.id}>{example.title}</div>
      ))}
    </div>
  );
};
