import { skills } from './data';

const zipFromRepo = (repoUrl) => {
  if (!repoUrl) return null;
  const m = repoUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)$/i);
  if (!m) return null;
  return `https://github.com/${m[1]}/${m[2]}/archive/refs/heads/main.zip`;
};

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="badge">OPEN SOURCE SKILLS</p>
        <h1>OpenClaw Skill Marketplace</h1>
        <p>
          Download deine vorgestellten Open-Source-Skills als ZIP, schau das jeweilige Tutorial auf
          YouTube und starte direkt.
        </p>
      </header>

      <section className="grid">
        {skills.map((skill) => {
          const zipUrl = zipFromRepo(skill.repoUrl);
          return (
            <article className="card" key={skill.title}>
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>

              <div className="actions">
                <a className="btn ghost" href={skill.videoUrl} target="_blank" rel="noreferrer">
                  Video
                </a>
                {zipUrl ? (
                  <a className="btn primary" href={zipUrl} target="_blank" rel="noreferrer">
                    ZIP Download
                  </a>
                ) : (
                  <span className="btn disabled" title="Repo-Link fehlt im Video-Text">
                    ZIP folgt
                  </span>
                )}
              </div>

              {skill.repoUrl ? (
                <a className="repo" href={skill.repoUrl} target="_blank" rel="noreferrer">
                  {skill.repoUrl}
                </a>
              ) : (
                <span className="repo missing">Repo-Link konnte aus der Beschreibung nicht sicher extrahiert werden.</span>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
