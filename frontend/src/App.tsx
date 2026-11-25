import { useState, useEffect } from "react";

function App() {
  type objet = {
    id: number;
    name: string;
    description: string;
    image: string;
    quantity: number;
  };
  const [logs, setLogs] = useState<objet[]>([]);
  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:5432/logs");
      const result = (await rawData.json()) as objet[];
      setLogs(result);
    }
    fetchData();
  }, []);
  return (
    <>
      {logs.map((objet) => {
        return <p key={objet.id}>{objet.name}</p>;
      })}
    </>
  );
}

export default App;
