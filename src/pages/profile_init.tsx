import React from 'react';
import './profile_init.scss';
import bannerImage from '../assets/banner_default_profile.png';

const ProfileInit: React.FC = () => {
    return (
        <div className="profile-init">
            <div className="banner">
                <img src={bannerImage} alt="Banner" />
            </div>
            {/* Other content can go here */}
        </div>
    );
};

export default ProfileInit;