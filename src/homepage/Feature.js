import { React } from 'react';
import { Link } from 'react-router-dom';

export function FeatureTitle() {
    return (
        <div className="col d-flex flex-column align-items-start gap-2">
              <h3 className="fw-bold lead">Over 20 years of experience in the clean energy domain</h3>
              <p className="text-body-secondary">Choose from the following categories for additional information</p>
              <Link to="/categories" className="btn btn-primary btn-lg">Go to products</Link>
            </div>
    );
}

export function Feature(props) {
    return (
        <div className="col d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-left justify-content-left bg-gradient fs-4 rounded-3 feature-header">
              <img className="featureSvg" src={process.env.PUBLIC_URL + "/images/favicon.png"} alt="mini-logo"></img>
          </div>
          <h4 className="fw-semibold mb-0">{props.feature.title}</h4>
          <p className="text-body-secondary">{props.feature.description}</p>
          <Link to={"/categories/" + props.id} className="btn btn-secondary btn-md">Go to {props.feature.title}</Link>
        </div>
    );
}