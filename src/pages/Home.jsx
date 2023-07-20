import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import change from "../assets/echanger.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [promptText, setPromptText] = useState("");

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
          <p>
            {promptText
              .replaceAll("Je ", "mi ")
              .replaceAll("Tu ", "ou ")
              .replaceAll("Il ", "li ")
              .replaceAll(" lui ", "li ")
              .replaceAll("Elle ", "li ")
              .replaceAll("Nous ", "nou ")
              .replaceAll("Vous ", "zot ")
              .replaceAll("Ils", "bana ")
              .replaceAll("Elles", "bana ")
              .replaceAll("t'aime", "aime aou")
              .replaceAll("beaucoup", "bonpé")
              .replaceAll("alcool", "larak")
              .replaceAll(" suis ", " lé ")
              .replaceAll("g", "j")
              .replaceAll("ss", "s")
              .replaceAll("mme", "m")
              .replaceAll("un", "in")
              .replaceAll("il", "y")
              .replaceAll("c", "k")
              .replaceAll(" est ", " lé ")
              .replaceAll(" es ", " lé ")
              .replaceAll(" suis ", " lé ")
              .replaceAll(" sommes ", " lé ")
              .replaceAll(" êtes ", " lé ")
              .replaceAll(" etes ", " lé ")
              .replaceAll(" sont ", " lé ")
              .replaceAll(" pied ", " pié ")
              .replaceAll(" pieds ", " pié ")
              .replaceAll(" ses ", " son ")
              .replaceAll(" bete", " kouyon ")
              .replaceAll(" bête", " kouyon ")
              .replaceAll(" alors que ", " tandi ")
              .replaceAll("en", "an")
              .replaceAll(" aime ", " i aim ")
              .replaceAll("beaucoup", "bonpé")
              .replaceAll(" le ", " ")
              .replaceAll(" la ", " ")
              .replaceAll("eau", "o")
              .replaceAll("oo", "o")
              .replaceAll("oup ", "ou ")
              .replaceAll(" et ", " é ")
              .replaceAll("oi", "wa")
              .replaceAll("d'", "")}
          </p>
        </div>
        <button type="button" className="buttonSend">
          TRADUIRE
        </button>
      </section>
    </main>
  );
}
