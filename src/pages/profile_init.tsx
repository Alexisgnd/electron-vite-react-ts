import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/Button";
import "./profile_init.scss";

const ProfileInit: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);

    const isButtonDisabled = !firstName || !lastName;

    const handleNextButtonClick = () => {
        setIsFormVisible(false);
        setIsBackButtonVisible(true);
        console.log("Étape suivante");
    };

    const handleBackButtonClick = () => {
        setIsFormVisible(true);
        setIsBackButtonVisible(false);
        console.log("Retour à l'étape précédente");
    };

    return (
        <div className="profile-init-container">
            {/* Bannière */}
            <div className="banner" />

            {/* En-tête */}
            <div className="header">
                <h2>AVANT DE VOUS LÂCHER...</h2>
                <p>... et si on prenait quelques instants pour mieux vous connaître ?</p>
            </div>

            <div className="content">
                {/* Formulaire */}
                <div className={`form-section ${isFormVisible ? "visible" : "hidden"}`}>
                    <Input
                        type="text"
                        placeholder="Votre prénom"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        iconClass="icon-user"
                    />
                    <Input
                        type="text"
                        placeholder="Votre nom"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        iconClass="icon-user"
                    />
                    <Input
                        type="text"
                        placeholder="Votre description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        iconClass="icon-edit"
                    />
                </div>

                {/* Affichage Profil */}
                <div className="profile-preview">
                    <div className="profile-header"></div> {/* Rectangle du haut */}
                    <div className="avatar"></div>
                    <h3>{firstName || "{Prénom}"} {lastName || "{Nom}"}</h3>
                    <p>{description}</p>
                    <div className="profile-footer"></div> {/* Rectangle du bas */}
                </div>
            </div>

            {/* Boutons */}
            <div className="button-container">
                {isBackButtonVisible && (
                    <Button
                        text="Précédent"
                        onClick={handleBackButtonClick}
                        variant="secondary"
                    />
                )}
                <Button
                    text="Suivant"
                    onClick={handleNextButtonClick}
                    variant="primary"
                    disabled={isButtonDisabled}
                />
            </div>
        </div>
    );
};

export default ProfileInit;