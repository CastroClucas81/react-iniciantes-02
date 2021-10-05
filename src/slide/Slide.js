import React from "react";
import styles from "./Slide.module.css";

//slides será um array com as pgs de cada slide
export default function Slide({ slides }) {
  //starta no ativo o slide inicial (0)
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  //useRef no contet para eu ter referencia dele o tempo todo
  const contentRef = React.useRef();

  //esse efeito vai ocorrer toda vez q o slide ativo for modificado
  React.useEffect(() => {
    //pegando o width do content
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(active * width));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div className={styles.item} key={slide.id}>
            {slide.text}
          </div>
        ))}
      </div>

      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
}
