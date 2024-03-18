import React, { Component } from 'react';
import "./UserProfile.css"; // Ensure the CSS complements Bootstrap's styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';

class UserProfile extends Component {
    render() {
        const { name, age, job, company, image } = this.props;

        return (
            <div className="container mt-5 userProfile-container"> {/* Additional class for styling */}
                
                <div className="card userProfile-card" style={{ maxWidth: '24rem', margin: 'auto' }}> {/* Increased maxWidth */}
                    <img src={image} alt={`${name}'s avatar`} className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title">Your Profile</h5>
                        <p className="card-text"><strong>Name:</strong> {name}</p>
                        <p className="card-text"><strong>Age:</strong> {age}</p>
                        <p className="card-text"><strong>Job Title:</strong> {job}</p>
                        <p className="card-text"><strong>Company:</strong> {company}</p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;

