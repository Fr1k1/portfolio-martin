import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import "./Hero.scss";

function Particles() {
  const count = 1800;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }
    return arr;
  }, []);
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.018;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#60A5FA"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

const LINES = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Martin Friščić · Software Engineer" },
  { type: "blank" },
  { type: "cmd", text: "cat stack.json" },
  { type: "key", label: "Languages", value: "Java · TypeScript · Python" },
  { type: "key", label: "Frontend ", value: "React · Next.js · Angular" },
  { type: "key", label: "Backend  ", value: "Quarkus · Spring Boot" },
  { type: "key", label: "DevOps   ", value: "K8s · Docker · Azure" },
  { type: "blank" },
  { type: "cmd", text: "cat awards.txt" },
  { type: "award", text: "★  Ri-Hack 2023 — Winner" },
  { type: "award", text: "★  Zadar Smart City — Winner" },
  { type: "blank" },
  { type: "cmd", text: "echo $CURRENT_ROLE" },
  { type: "status", text: "Software Engineer @ Emil Frey Digital" },
];

function TerminalWindow() {
  const [shownLines, setShownLines] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => {
        setShownLines([]);
        setTypingText("");
        setLineIdx(0);
        setCharIdx(0);
        setDone(false);
      }, 3500);
      return () => clearTimeout(t);
    }

    if (lineIdx >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[lineIdx];

    if (line.type === "cmd") {
      if (charIdx < line.text.length) {
        const t = setTimeout(() => {
          setTypingText(line.text.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setShownLines((prev) => [...prev, line]);
          setTypingText("");
          setCharIdx(0);
          setLineIdx((i) => i + 1);
        }, 320);
        return () => clearTimeout(t);
      }
    } else {
      const t = setTimeout(
        () => {
          setShownLines((prev) => [...prev, line]);
          setLineIdx((i) => i + 1);
        },
        line.type === "blank" ? 80 : 170,
      );
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, done]);

  const renderLine = (line, i) => {
    switch (line.type) {
      case "blank":
        return <div key={i} className="t-blank" />;
      case "cmd":
        return (
          <div key={i} className="t-cmd">
            <span className="t-prompt">$</span> {line.text}
          </div>
        );
      case "out":
        return (
          <div key={i} className="t-out">
            {line.text}
          </div>
        );
      case "key":
        return (
          <div key={i} className="t-key">
            <span className="t-lbl">{line.label}</span>
            <span className="t-val">{line.value}</span>
          </div>
        );
      case "award":
        return (
          <div key={i} className="t-award">
            {line.text}
          </div>
        );
      case "status":
        return (
          <div key={i} className="t-status">
            {line.text}
          </div>
        );
      default:
        return null;
    }
  };

  const currentLine = LINES[lineIdx];
  const isTypingCmd = !done && currentLine?.type === "cmd";

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="t-dot t-dot--red" />
          <span className="t-dot t-dot--yellow" />
          <span className="t-dot t-dot--green" />
        </div>
        <span className="terminal-title">martin@portfolio ~ zsh</span>
      </div>

      <div className="terminal-body">
        {shownLines.map(renderLine)}

        {isTypingCmd ? (
          <div className="t-cmd">
            <span className="t-prompt">$</span> {typingText}
            <span className="t-cursor">▊</span>
          </div>
        ) : (
          <span className="t-cursor t-cursor--blink">▊</span>
        )}
      </div>
    </div>
  );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { value: "3+", label: "Yrs Experience" },
  { value: "20k+", label: "Daily Users" },
  { value: "10+", label: "Countries" },
  { value: "2×", label: "Hackathon Wins" },
];

const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <section className="hero" id="home">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <pointLight position={[6, 5, 4]} intensity={1.5} color="#2563EB" />
          <Suspense fallback={null}>
            <Stars
              radius={90}
              depth={50}
              count={3500}
              factor={4}
              saturation={0}
              fade
              speed={0.7}
            />
            {!reduced && <Particles />}
          </Suspense>
        </Canvas>
      </div>

      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-inner">
          {/* Left — text */}
          <motion.div
            className="hero-text"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="hero-badge">
              <span className="hero-dot" />
              Software Engineer · Open to opportunities
            </motion.div>

            <motion.h1 variants={item} className="hero-heading">
              Martin
              <br />
              <span className="hero-gradient">Friščić</span>
            </motion.h1>

            <motion.p variants={item} className="hero-desc">
              Full-Stack Engineer building scalable enterprise systems
              <br />
              at <strong>Emil Frey Digital</strong> · Java · React · Python ·
              Kubernetes
            </motion.p>

            <motion.div variants={item} className="hero-stats">
              {stats.map((s) => (
                <div key={s.label} className="hero-stat">
                  <span className="stat-val">{s.value}</span>
                  <span className="stat-lbl">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="hero-ctas">
              <Link to="contact" smooth duration={600} offset={-80}>
                <button className="btn-primary">Get in touch</button>
              </Link>
              <Link to="projects" smooth duration={600} offset={-80}>
                <button className="btn-ghost">View my work</button>
              </Link>
            </motion.div>

            <motion.div variants={item} className="hero-socials">
              <a
                href="https://github.com/Fr1k1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-btn"
              >
                <GithubLogo size={20} weight="bold" />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-fri%C5%A1%C4%8Di%C4%87-928bb2247/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-btn"
              >
                <LinkedinLogo size={20} weight="bold" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — terminal */}
          <motion.div
            className="hero-terminal-side"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-scroll"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ArrowDown size={16} />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
