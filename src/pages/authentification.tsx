import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import "./authentification.scss";
import Button from "../components/Button";
import Input from "../components/input";

// Initialisation de Supabase avec les variables d'environnement
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Authentification = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isEmailUsed, setIsEmailUsed] = useState(false);
    const navigate = useNavigate(); // Ajout de useNavigate

    // Bascule entre "Connexion" et "Inscription"
    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
        setErrorMessage(""); // Réinitialisation des erreurs
        setIsEmailUsed(false); // Réinitialisation de l'état de l'email utilisé
    };

    // Vérifie si l'email est déjà utilisé
    const checkEmailExists = async (email: string) => {
        const { data, error } = await supabase
            .from('users')
            .select('email')
            .eq('email', email);

        if (error) {
            console.error("Erreur lors de la vérification de l'email:", error);
            return false;
        }

        return data.length > 0;
    };

    useEffect(() => {
        if (isSignUp && email) {
            const timer = setTimeout(async () => {
                const exists = await checkEmailExists(email);
                setIsEmailUsed(exists);
                if (exists) {
                    setErrorMessage("Cet email existe déjà.");
                } else {
                    setErrorMessage("");
                }
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [email, isSignUp]);

    // Gestion de l'authentification avec Supabase
    const handleAuth = async () => {
        setLoading(true);
        setErrorMessage("");

        if (isSignUp && password !== confirmPassword) {
            setErrorMessage("Les mots de passe ne correspondent pas.");
            setLoading(false);
            return;
        }

        try {
            let result;
            if (isSignUp) {
                // Inscription
                result = await supabase.auth.signUp({ email, password });

                if (!result.error) {
                    // Ajouter l'utilisateur à la table 'users'
                    const { error: insertError } = await supabase
                        .from('users')
                        .insert([{ email }]);

                    if (insertError) {
                        throw insertError;
                    }

                    // Redirection vers la page profile_init après une inscription réussie
                    navigate('/profile_init');
                }
            } else {
                // Connexion
                result = await supabase.auth.signInWithPassword({ email, password });
            }

            if (result.error) {
                throw result.error;
            }

            alert(isSignUp ? "Inscription réussie !" : "Connexion réussie !");
        } catch (error) {
            const errorMessage = (error as Error).message || "Une erreur est survenue.";
            if (errorMessage.includes("Invalid login credentials")) {
                setErrorMessage("Identifiants de connexion invalides.");
            } else if (errorMessage.includes("Email already registered")) {
                setErrorMessage("Email déjà enregistré.");
            } else {
                setErrorMessage(errorMessage);
            }
        }

        setLoading(false);
    };

    return (
        <div className="auth-container">
            {/* Partie gauche */}
            <div className="auth-left">
                <div className="auth-texts-container">
                    <div className="auth-texts">
                        <p>
                            {isSignUp ? "Vous avez déjà un compte ?" : "Vous n’avez pas de compte ?"}{" "}
                            <span className="inscription" onClick={toggleAuthMode}>
                                {isSignUp ? "Se connecter" : "S’inscrire"}
                            </span>
                        </p>
                        <h1>{isSignUp ? "INSCRIPTION" : "CONNEXION"}</h1>
                    </div>
                </div>

                {/* Formulaire d'authentification */}
                <div className="auth-form">
                    <div className="input-container">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            iconClass="user-icon"
                        />
                        <Input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            iconClass="lock-icon"
                        />
                        {isSignUp && (
                            <Input
                                type="password"
                                placeholder="Confirmation de mot de passe"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                iconClass="lock-icon"
                            />
                        )}

                        {!isSignUp && (
                            <div className="forgot-password">
                                <p>Mot de passe oublié ?</p>
                            </div>
                        )}
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <Button
                        text={loading ? (isSignUp ? "Inscription en cours..." : "Connexion en cours...") : isSignUp ? "S'inscrire" : "Se connecter"}
                        variant={loading || (isSignUp && isEmailUsed) ? "disabled" : "primary"}
                        onClick={handleAuth}
                    />
                </div>
            </div>

            {/* Partie droite (image de fond) */}
            <div className="auth-right"></div>
        </div>
    );
};

export default Authentification;