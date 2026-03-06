import { useEffect, useRef } from "react";

function TechSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".tech-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("show");
              }, index * 200);
            });
          } else {
            items.forEach((item) => {
              item.classList.remove("show");
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="tech-section" ref={sectionRef}>
      {/* seu código de tecnologias */}
    </section>
  );
}

export default TechSection;
