import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Main.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { user, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleProfileClick = async () => {
        alert("Profile button clicked! User: " + (user ? "Logged in" : "Not logged in"));
        if (user) {
            navigate('/profile');
        } else {
            try {
                console.log("Attempting Google login...");
                const result = await loginWithGoogle();
                console.log("Login successful:", result);
            } catch (err) {
                console.error("Login Error:", err);
                alert("Login failed: " + (err.message || err.code || "Unknown error. Please check Firebase Console settings."));
            }
        }
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg sticky-top ${scrolled ? 'scrolled' : ''}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="/"><b>SuuSri</b></a>
                    
                    <div className="nav-profile" onClick={handleProfileClick}>
                        {user && user.picture ? (
                            <img 
                              src={user.picture} 
                              alt="Profile" 
                              className="profile-pic-nav" 
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="profile-dummy-icon"><i class="fas fa-user-circle"></i></div>';
                              }}
                            />
                        ) : (
                            <div className="profile-dummy-icon">
                                <i className="fas fa-user-circle"></i>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
