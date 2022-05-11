import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>About</h1>
      <br />
      <p>
        Je m'appelle Jordan, je suis passionné par l'informatique depuis mon
        plus jeune âge. Je suis actuellement en formation chez BeCode et
        j'apprends un peu plus sur le monde du web...
      </p>
      <br />
      <p>
        Le but du projet est d'apprendre React, prendre connaissance de ce
        qu'est un component, un hook, etc. J'utilise l'API Country REST qui me
        permet de générer mes données pour ensuite pouvoir les traiter en React.
      </p>
    </div>
  );
}
