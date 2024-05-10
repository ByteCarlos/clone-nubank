import nubankLogo from '../nubank-logo.png';
import './background.css';

export default function Background() {
    return (
        <div className="background-container">
            <img src={nubankLogo} alt='nubank-logo'></img>
        </div>
    );
}