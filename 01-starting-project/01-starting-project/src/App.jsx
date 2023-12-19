import { CORE_CONCEPTS } from "./data";
import { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
	const [tabContent, setTabContent] = useState();

	function handleClick(content) {
		setTabContent(content);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{/* <CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/> */}

						{/* when all key are the same ase we need we can pass all of them at once */}
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id="examples">
					<h2> Examples </h2>
					<menu>
						<TabButton isSelected={tabContent === "components"} onClick={() => handleClick("components")}>
							Components
						</TabButton>
						<TabButton isSelected={tabContent === "jsx"} onClick={() => handleClick("jsx") }> JSX </TabButton>
						<TabButton isSelected={tabContent === "props"} onClick={() => handleClick("props")}> Props </TabButton>
						<TabButton isSelected={tabContent === "state"} onClick={() => handleClick("state")}> State </TabButton>
					</menu>
					{!tabContent ? (
						<p> Please select the topic. </p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[tabContent].title}</h3>
							<p>{EXAMPLES[tabContent].description}</p>
							<code>{EXAMPLES[tabContent].code}</code>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
