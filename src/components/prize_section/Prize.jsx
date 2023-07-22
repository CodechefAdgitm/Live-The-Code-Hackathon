import React from 'react';

const themesData = [
  { title: '1st Prize', description: 'Description of prize 1' },
  { title: '2nd prize', description: 'Description of prize 2' },
  { title: '3rd prize', description: 'Description of prize 3' },
  { title: '4th prize', description: 'Description of prize 4' },
  // Add more themes as needed
];


export default function Prize() {
  return (
    <div>
      <section className="themes">
      <div className="themes-container">
        {themesData.map((theme, index) => (
          <div className="theme-box" key={index}>
            <h3>{theme.title}</h3>
            <p>{theme.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
