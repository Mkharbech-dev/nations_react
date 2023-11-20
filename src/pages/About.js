import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="">
      <Navigation />
      <div className="about m-5">
        <h3>À PROPOS DE CE PROJET</h3>

        <p>
          Ce projet est inspiré sur restcountries.eu par Fayder Florez. Bien que
          le projet d'origine soit désormais passé à une API de base
          d'abonnement, ce projet est toujours Open Source et gratuit à
          utiliser.
        </p>
        <br />
        <h3>UNE INFORMATION IMPORTANT</h3>
        <p>
          LCe projet est inspiré sur restcountries.eu par Fayder Florez. Bien
          que le projet d'origine soit désormais passé à une API de base
          d'abonnement, ce projet est toujours Open Source et gratuit à
          utiliser. UNE INFORMATION IMPORTANT
        </p>
        <br />
        <h3>PAYS REST</h3>
        <p>
          Vous pouvez accéder à l'API via https://restcountries.com/v3.1/all
          mais afin d'obtenir une réponse plus rapide, vous devez filtrer les
          résultats par les champs dont vous avez besoin. Comme
        </p>
        <br />
      </div>
      <Footer/>
    </div>
  );
};

export default About;
