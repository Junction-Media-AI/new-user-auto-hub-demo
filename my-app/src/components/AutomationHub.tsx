import { useState } from 'react';
import FullAutomation from './FullAutomation';
import SegmentCustomization from './SegmentCustomization';
import '/src/App.css';

const AutomationHub = () => {
	const [choice, setChoice] = useState<
		'fullAutomation' | 'segmentCustomization' | null
	>(null);

	const renderContent = () => {
		if (choice === 'fullAutomation') {
			return <FullAutomation />;
		}
		if (choice === 'segmentCustomization') {
			return <SegmentCustomization />;
		}

		return (
			<div className="automation-hub-container">
				<h1 className="heading">Welcome to the Automation Hub!</h1>
				<p className="subheading">How would you like to proceed?</p>
				<div className="button-group">
					<button
						onClick={() => setChoice('fullAutomation')}
						className="btn full-automation">
						Let AI Automate Everything!
					</button>
					<button
						onClick={() => setChoice('segmentCustomization')}
						className="btn segment-customization">
						Create my own segments!
					</button>
				</div>
			</div>
		);
	};

	return <div className="automation-hub">{renderContent()}</div>;
};

export default AutomationHub;
