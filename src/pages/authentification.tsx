import React from "react";
import "./authentification.scss";

const Authentification = () => {
  return (
    <div className="auth-container">
      {/* Partie gauche */}
      <div className="auth-left">
        <div className="auth-content">
          {/* Section supérieure avec les textes */}
          <div className="auth-texts">
            <p>Vous n’avez pas de compte ? <span className="inscription">S’inscrire</span></p>
            <h1>CONNEXION</h1>
          </div>

          {/* Section inférieure (vide pour le moment) */}
          <div className="auth-form"></div>
        </div>
      </div>

      {/* Partie droite (image de fond) */}
      <div className="auth-right"></div>
    </div>
  );
};

export default Authentification;
