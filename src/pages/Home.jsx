import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import change from "../assets/echanger.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [promptText, setPromptText] = useState("");
  const [trad, setTrad] = useState([]);

  const prepareData = (data) => {
    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        obj = { [line[0]]: line[1] };
      }
      return obj;
    });

    json.shift();
    setTrad([...new Set(json)]);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_TRAD)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  const transformedObject = {};

  for (const obj of trad) {
    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
      transformedObject[key] = obj[key];
    }
  }

  const translateSentence = (text) => {
    const words = text.split(" ");
    const translatedText = words
      .map((word) => transformedObject[word] || word)
      .join(" ");
    return translatedText;
  };

  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="traduction">
        <div className="traduction_top">
          <p>Français</p>
          <button type="button">
            <img src={change} alt="" />
          </button>
          <p>Créole Réunionnais</p>
        </div>
        <div className="traduction_main">
          <textarea
            name="demande"
            placeholder="Écrire quelque chose à traduire..."
            id=""
            value={promptText}
            onChange={(event) => {
              setPromptText(event.target.value);
            }}
          />

          <p>{translateSentence(promptText.toLowerCase())}</p>
        </div>
      </section>
    </main>
  );
}
