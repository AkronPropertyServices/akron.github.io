import React, { useEffect, useRef } from "react";

interface IAnimatedComponent {
  children: React.ReactElement[] | React.ReactElement;
}

export default function AnimatedComponent({ children }: IAnimatedComponent) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const children = Array.from(entry.target.children) as HTMLElement[];
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add("animate-appear"));
        } else {
          children.forEach((child) => child.classList.remove("animate-appear"));
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.0,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="animate-container">{children}</div>
    </div>
  );
}
