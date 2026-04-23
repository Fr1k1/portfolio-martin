import { motion } from "framer-motion";
import "./Experience.scss";

const experiences = [
  {
    role: "Software Engineer",
    company: "Emil Frey Digital",
    location: "Varaždin, Croatia",
    date: "Nov 2024 – Present",
    color: "#2563EB",
    current: true,
    bullets: [
      "Enterprise apps with Java Quarkus, Spring Boot & Python Flask",
      "System design for 20k+ DAU across 10+ countries",
      "Kubernetes, Helm, Azure DevOps, Key Vault, CI/CD pipelines",
      "Extended Apache Superset BI platform (React) for org requirements",
      "AI solutions integration and enterprise AI governance frameworks",
      "Monitoring with Prometheus, Grafana & OpenSearch",
    ],
    tags: ["Java", "Quarkus", "Spring Boot", "Kubernetes", "React", "Python", "Azure"],
  },
  {
    role: "React Developer",
    company: "Deck99",
    location: "Remote",
    date: "Jun 2023 – Nov 2024",
    color: "#61DAFB",
    bullets: [
      "Lead frontend developer for a SaaS platform",
      "Built Chrome extensions to enhance user productivity",
      "Architected scalable React component libraries",
      "RESTful API integration and performance optimization",
    ],
    tags: ["React", "Next.js", "TypeScript", "Chrome Extensions"],
  },
  {
    role: "React Developer",
    company: "Speck Academy",
    location: "Remote",
    date: "Apr 2023 – Jul 2023",
    color: "#61DAFB",
    bullets: [
      "Finished in top 10% of the apprenticeship cohort",
      "Async programming, modern JavaScript and React patterns",
    ],
    tags: ["React", "JavaScript"],
  },
  {
    role: ".NET Developer",
    company: "Faculty of Organization and Informatics",
    location: "Varaždin, Croatia",
    date: "Apr 2023 – Jun 2023",
    color: "#9B59B6",
    bullets: ["Developed Project ORKAN — fleet management system for UAVs"],
    tags: [".NET", "C#"],
  },
  {
    role: "Frontend Developer",
    company: "SICK Mobilisis",
    location: "Croatia",
    date: "Jul 2022 – Sep 2022",
    color: "#F7DF1E",
    bullets: [
      "Summer internship — travel order management system",
      "jQuery, ASP.NET, JavaScript, DevExtreme, SwaggerAPI",
    ],
    tags: ["jQuery", "ASP.NET", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="content-wrapper">
        <motion.div
          className="exp-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-left">
                <div className="timeline-dot" style={{ background: exp.color }}>
                  <div className="dot-ring" style={{ borderColor: exp.color }} />
                </div>
                {i < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-card glass">
                <div className="timeline-card-header">
                  <div>
                    <div className="timeline-role">
                      {exp.role}
                      {exp.current && <span className="badge-current">Now</span>}
                    </div>
                    <div className="timeline-company" style={{ color: exp.color }}>
                      {exp.company}
                    </div>
                    <div className="timeline-location">{exp.location}</div>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
