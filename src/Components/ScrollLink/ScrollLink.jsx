import { useState, useEffect } from "react";

export default function ScrollLink({
  to,
  offset = 0,
  spy,
  activeClass,
  className,
  onClick,
  children,
  ...rest
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!spy) return;
    const target = document.getElementById(to);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [to, spy]);

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    onClick?.();
  };

  const combinedClass = [className, isActive && activeClass ? activeClass : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={`#${to}`} className={combinedClass || undefined} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
