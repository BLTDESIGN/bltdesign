import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import discoverImage from '../../../assets/images/diagrams/discover.svg';
import sigImage from '../../../assets/images/diagrams/sig.svg';
import feedbackImage from '../../../assets/images/diagrams/feedback.svg';
import mappingImage from '../../../assets/images/diagrams/mapping.svg';
import modelImage from '../../../assets/images/diagrams/model.svg';
import constraintImage from '../../../assets/images/diagrams/constraint.svg';
import errorImage from '../../../assets/images/diagrams/error.svg';
import consistencyImage from '../../../assets/images/diagrams/consistency.svg';
import recogImage from '../../../assets/images/diagrams/recog.svg';
import visheirImage from '../../../assets/images/diagrams/vis-heir.svg';
import patternImage from '../../../assets/images/diagrams/pattern.svg';
import minimalImage from '../../../assets/images/diagrams/minimal.svg';

const design = props => {
	return (
		<Aux>
			<Helmet>
				<title>UX Pt. 4: UX Design Process</title>
				<meta content="Dan Beltramo - About Me" name="description" />
			</Helmet>
			<section className="uxDefinition m-t-150 l-w1">
				<h2 className="m-projTitleGroup">UX Part 4</h2>
				<h1 className="m-b-10">Design Process</h1>
				<p>May 3, 2018</p>
			</section>
			<section className="l-w1 m-b-90">
				<p className="m-projCopy m-b-90">
					This phase is most effective design phase when all teams (dev teams, marketing teams, IS teams) are
					integrated early on, and designs are developed iteratively (working in cycles to validate ideas and
					assumptions).
					<br />
					The design phase usually includes: Sketching - quick way of visualize a range of design solutions.
					<br />
					Wireframes - A representation of page structure (often used as the skeletons for mockups).
					<br />
					Prototypes - focused on the interaction and experience; a simulation of the product, commonly using
					clickable wireframes. (Axure, Balsamiq, Sketch (new), others).
				</p>

				<h1 className="m-b-10">Sketching the User Flow</h1>
				<p className="m-projCopy">
					A fast and loose user flow sketching format, developed by Signal v. Noise, has proven to be a fast
					and effective way to map out a user flow before beginning early design work. Each moment in a flow
					is two-sided; a page communcates one side, and the user's reaction is the other side. In this
					digramatic style, content above the solid bar is what the user sees. Below the bar are the possible
					actions or choices a user can follow through with (these actions/choices are sepearated by dotted
					lines). Depending on which action a user selects, arrows are drawn to connect a user's action with a
					following page or content shown to the user. This style is a quick way to annotate a flow, and
					allows for a highly-legible communication of complex user flows and information.
				</p>
			</section>
			<h1 className="l-w1">Design Principles</h1>
			<div className="l-flexbox-grey l-w1">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Discoverability</h2>
					<img alt="Discoverability Diagram" className="uxDiagram" src={discoverImage} />
					<p className="m-projCopy">
						Users must understand which actions are possible in order to take these actions. Labeling icons
						is highly important.
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Signifiers</h2>
					<img alt="Signifiers Diagram" className="uxDiagram" src={sigImage} />
					<p className="m-projCopy">How people discover potential actions on an object (affordances)</p>
				</div>
			</div>
			<div className="l-flexbox-grey l-w1">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Feedback</h2>
					<img alt="Feedback Diagram" className="uxDiagram" src={feedbackImage} />
					<p className="m-projCopy">
						Explicit information about the impact of the action. It also means constant visibility of
						(system status) (kept informed)
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Mappings</h2>
					<img alt="Feedback Diagram" className="uxDiagram" src={mappingImage} />
					<p className="m-projCopy">
						Mapping is the relationship between controls and their effect (function).
					</p>
				</div>
			</div>
			<div className="l-flexbox-grey l-w1">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Mental Models</h2>
					<img alt="Model Diagram" className="uxDiagram" src={modelImage} />
					<p className="m-projCopy">
						While digital products are difficult to understand in their entireity, since users experience
						one page at a time, Navigational hints and digital wayfinding can help users anticipate
						interactions with future pages.
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Constraints</h2>
					<img alt="Constraint Diagram" className="uxDiagram" src={constraintImage} />
					<p className="m-projCopy">
						Help facilitate efficient interaction by providing “guide rails” for users—make sure only
						specific things are enabled, or even visible (state changes), in order to guide the user towards
						certain interactions.
					</p>
				</div>
			</div>
			<div className="l-flexbox-grey l-w1">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Error Prevention</h2>
					<img alt="Error Diagram" className="uxDiagram" src={errorImage} />
					<p className="m-projCopy">
						Offering suggestions, implement error messages, and keep checking for error-prone circumstances.
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Consistency</h2>
					<img alt="Consistency Diagram" className="uxDiagram" src={consistencyImage} />
					<p className="m-projCopy">
						Using a consistent treatment of elements, functions, and behaviors, such as navigation, to
						increase usability and efficiency and provide a better overall experience.
					</p>
				</div>
			</div>
			<div className="l-flexbox-grey l-w1">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Recognition</h2>
					<img alt="Recognition Diagram" className="uxDiagram" src={recogImage} />
					<p className="m-projCopy">
						The ability to “recognize” an event, pattern, or icon as being familiar. Our brains process
						symbols many times faster than reading text. Important that icons are self-explanatory and
						simple
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Patterns</h2>
					<img alt="Pattern Diagram" className="uxDiagram" src={patternImage} />
					<p className="m-projCopy">
						Difficult and timely for users to learn a new way of doing things; common components or patterns
						provide instant learnability. Make efficient and effective use of patterns in a new way.
					</p>
				</div>
			</div>
			<div className="l-flexbox-grey pad-Bot-60 l-w1">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Visual Heirarchy</h2>
					<img alt="Visual Heirarchy Diagram" className="uxDiagram" src={visheirImage} />
					<p className="m-projCopy">
						Visual hierarchy influences the order in which the human eye perceives what it sees, and can be
						achieved by size, proximity, color, opacity, and actual tonal contrasts.
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup blackText">Aesthetic & Minimalist Design</h2>
					<img alt="Minimalist Diagram" className="uxDiagram" src={minimalImage} />
					<p className="m-projCopy">
						Remove content which doesn't support a user’s goals (user research & testing helps develop this
						understanding).
					</p>
				</div>
			</div>
			<section className="l-w1">
				<h1>Laws of UX</h1>
				<h2 className="m-projTitleGroup blackText">Doherty Threshold</h2>
				<p className="m-projCopy">
					Productivity increases greatly when a computer and users interact without need to wait for the
					other.
				</p>
				<h2 className="m-projTitleGroup blackText">Fitts Law</h2>
				<p className="m-projCopy">
					Time required to select a click target is directly proportional to the size of the target and the
					distance a user must travel to get there.
				</p>
				<h2 className="m-projTitleGroup blackText">Hicks Law</h2>
				<p className="m-projCopy">
					The number and complexity of choices available directly affects the time required to make a
					decision.
				</p>
				<h2 className="m-projTitleGroup blackText">Jacobs Law</h2>
				<p className="m-projCopy">
					Users spend most of their time on other sites, and are able to become accustomed to a new website by
					interacting with familiar design patterns
				</p>
				<h2 className="m-projTitleGroup blackText">Law of Common Region</h2>
				<p className="m-projCopy">
					Elements are thought to be grouped if they share a common area with a clearly defined boundary
				</p>
				<h2 className="m-projTitleGroup blackText">Law of Law of Prägnanz</h2>
				<p className="m-projCopy">
					Ambiguous or complex images are generally interpreted as simply as possible, as this requires the
					least cognitive effort.
				</p>
				<h2 className="m-projTitleGroup blackText">Law of Proximity</h2>
				<p className="m-projCopy">
					Users perceive objects to be grouped when they are physically near each other.
				</p>
				<h2 className="m-projTitleGroup blackText">Law of Similarity</h2>
				<p className="m-projCopy">
					Users perceive similar elements to be grouped, even if those elements are physically separated.
				</p>
				<h2 className="m-projTitleGroup blackText">Law of Uniform Connectedness</h2>
				<p className="m-projCopy">
					Elements which are connected visually are thought to be more related than elements which share no
					visual connection.
				</p>
				<h2 className="m-projTitleGroup blackText">Miller's Law</h2>
				<p className="m-projCopy">
					The average person’s working memory has a maximum capacity of around 7 items.
				</p>
				<h2 className="m-projTitleGroup blackText">Occam's Razor</h2>
				<p className="m-projCopy">
					When choosing between hypotheses of equal likelihood, that with the fewest inherent assumptions
					should be selected.
				</p>
				<h2 className="m-projTitleGroup blackText">Pareto Principle</h2>
				<p className="m-projCopy">
					This principle states that 20% of the actions often brings about 80% of the total impact.
				</p>
				<h2 className="m-projTitleGroup blackText">Parkinson’s Law</h2>
				<p className="m-projCopy">
					This law states that work towards a specific task will take up all available time set aside for that
					task.
				</p>
				<h2 className="m-projTitleGroup blackText">Serial Position Effect</h2>
				<p className="m-projCopy">Users are most likely to remember the first and last items in a list.</p>
				<h2 className="m-projTitleGroup blackText">Tesler’s Law</h2>
				<p className="m-projCopy">
					All systems include an inherent amount of complexity which cannot be distilled or reduced.
				</p>
				<h2 className="m-projTitleGroup blackText">Von Restorff Effect</h2>
				<p className="m-projCopy">
					A prediction that, among a series of multiple similar objects, the most unique is the most likely to
					be remembered.
				</p>
				<h2 className="m-projTitleGroup blackText">Zeigarnik Effect</h2>
				<p className="m-projCopy">
					People remember uncompleted or interrupted tasks better than completed tasks.
				</p>
			</section>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/ux/productTesting">
					Product Testing
				</Link>
			</div>
		</Aux>
	);
};

export default design;
