import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ReactMarkdown from 'react-markdown';
import Layout from '@theme/Layout';

function ReleaseFeature() {
  const { siteConfig } = useDocusaurusContext();
  const [changeLog, setChangeLog] = useState<string>('');
  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    async function fetchChangeLog() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/CLSFramework/soccer-simulation-proxy/master/ChangeLog.md');
        const text = await response.text();
        setChangeLog(text);

        // Extract titles
        const titleLines = text.split('\n').filter(line => line.startsWith('## ['));
        setTitles(titleLines);
      } catch (error) {
        console.error('Error fetching change log:', error);
      }
    }

    fetchChangeLog();
  }, []);

  return (
    <div style={{ display: 'flex', margin: '50px' }}>
      <div style={{ width: '20%', paddingRight: '20px' }}>
        <h3>Change Log Titles</h3>
        <ul>
        {titles.map((title, index) => {
            const version = title.match(/\[(.*?)\]/)?.[1];
            const url = `https://github.com/CLSFramework/soccer-simulation-proxy/releases/tag/${version}`;
            return (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {title.replace(/#/g, '').trim()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ width: '80%' }}>
        <ReactMarkdown>{changeLog}</ReactMarkdown>
      </div>
    </div>
  );
}

export default function ReleasePage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Develop a soccer simulation team by using any programming language">
      <main>
        <ReleaseFeature />
      </main>
    </Layout>
  );
}