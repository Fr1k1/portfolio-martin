import { AndroidLogo, Code, Database, Desktop } from "@phosphor-icons/react";

export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    text: "Building end-to-end web apps with React, Next.js, TypeScript, and Node.js — from pixel-perfect UIs to robust REST APIs. Experienced leading frontend architecture for SaaS platforms.",
    icon: <Code size={22} />,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Backend Engineering",
    text: "Scalable APIs and microservices with Java Quarkus, Spring Boot, and Python Flask. Experience with systems handling 20k+ DAU deployed across 10+ countries.",
    icon: <Database size={22} />,
    color: "#7C3AED",
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    text: "CI/CD pipelines, Kubernetes and Helm management, Azure DevOps, Docker containerization, Key Vault secrets, and monitoring with Prometheus and Grafana.",
    icon: <Desktop size={22} />,
    color: "#F97316",
  },
  {
    id: 4,
    title: "Mobile Development",
    text: "Cross-platform mobile apps with React Native and Kotlin. Experience shipping Android apps with complex navigation, native device integrations, and Play Store deployment.",
    icon: <AndroidLogo size={22} />,
    color: "#22C55E",
  },
];
