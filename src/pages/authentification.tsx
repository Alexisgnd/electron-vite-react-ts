import "./authentification.scss";
import Button from "../components/Button";

const Authentification = () => {
    return (
        <div className="auth-container">
            {/* Partie gauche */}
            <div className="auth-left">
                {/* Conteneur pour les textes */}
                <div className="auth-texts-container">
                    {/* Section supérieure avec les textes */}
                    <div className="auth-texts">
                        <p>Vous n’avez pas de compte ? <span className="inscription">S’inscrire</span></p>
                        <h1>CONNEXION</h1>
                    </div>
                </div>

                {/* Section inférieure contenant le formulaire */}
                <div className="auth-form">
                    <div className="input-container">
                        <div className="input-field">
                            <i className="icon user-icon"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="icon lock-icon"></i>
                            <input type="password" placeholder="Mot de passe" />
                        </div>
                    </div>

                    <Button text="Se connecter" variant="primary" />

                    <button className="discord-login">
                        <div className="discord-icon" />
                        Se connecter avec Discord
                    </button>
                </div>
            </div>

            {/* Partie droite (image de fond) */}
            <div className="auth-right"></div>
        </div>
    );
};

export default Authentification;