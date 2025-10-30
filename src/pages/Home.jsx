import React from 'react'

function Section({ title, items }) {
  return (
    <section className="home-section">
      <h2 className="home-section_title">{title}</h2>
      <ul className="home-section_list">
        {items.map((item, idx) => (
          <li key={idx} className="home-section_item">
            <div className="item_heading">
              <span className="item_name">
                {item.linkText && item.link ? (
                  (() => {
                    const parts = item.name.split(item.linkText)
                    if (parts.length < 2) return item.name
                    return (
                      <>
                        {parts[0]}
                        <a href={item.link} target="_blank" rel="noreferrer">{item.linkText}</a>
                        {parts.slice(1).join(item.linkText)}
                      </>
                    )
                  })()
                ) : (
                  item.name
                )}
              </span>
              {item.meta && (
                item.meta.toLowerCase() === 'site' && item.link ? (
                  <a className="item_meta item_meta--link" href={item.link} target="_blank" rel="noreferrer">{item.meta}</a>
                ) : (
                  <span className="item_meta">{item.meta}</span>
                )
              )}
            </div>
            {item.desc && <p className="item_desc">{item.desc}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Home() {
  const work = [
    { name: 'Applications Developer @ Howmet', linkText: 'Howmet', meta: 'Oct 2025 - Present', desc: 'Creating new opportunities.', link: 'https://www.howmet.com/' },
    { name: 'Applications Developer Intern @ Howmet', linkText: 'Howmet', meta: 'May 2025 - Aug 2025', desc: 'Building novel reporting software Orbit Analytics.', link: 'https://www.howmet.com/' },
  ]

  const projects = [
    { name: 'Summoners War Counters', meta: 'Site', desc: 'React, Vercel, AWS S3', link: 'https://www.swco.app/home' },
  ]

  const leadership = [
    { name: 'Jazz Band Vice President', meta: 'Apr 2024 - Apr 2025', desc: 'Organized rehearsals and auditions.' },
    { name: 'VALORANT Club President', meta: 'Aug 2023 - Present', desc: 'Coordinated events, facilitated growth, and hosted tournaments.' },
  ]

  return (
    <main className="home">
      <Section title="Work" items={work} />
      <Section title="Projects" items={projects} />
      <Section title="Leadership" items={leadership} />
    </main>
  )
}


