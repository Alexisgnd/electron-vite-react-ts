import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/Button";
import "./profile_init.scss";

const ProfileInit: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="profile-init-container">
            {/* En-tête */}
            <div className="header">
                <h2>AVANT DE VOUS LÂCHER...</h2>
                <p>... et si on prenait quelques instants pour mieux vous connaître ?</p>
            </div>

            <div className="content">
                {/* Formulaire */}
                <div className="form-section">
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
                    <div className="avatar"></div>
                    <h3>{firstName || "{Prénom}"} {lastName || "{Nom}"}</h3>
                    <p>{description || "blablablablablablablablablablablabla"}</p>
                </div>
            </div>

            {/* Bouton */}
            <div className="button-container">
                <Button text="Suivant" onClick={() => console.log("Étape suivante")} />
            </div>
        </div>
    );
};

export default ProfileInit;
