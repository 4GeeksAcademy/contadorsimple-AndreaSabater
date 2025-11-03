import React, { useState } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);


    // Esta función se ejecuta cuando el componente se desmonta (LO QUE HACE ES LIMPIARLO)
    return () => clearInterval(interval);
  }, []);

  // JSX que se renderiza
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>{seconds} segundos</h1>
    </div>
  );
};


export default SecondsCounter;

