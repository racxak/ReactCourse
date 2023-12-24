import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
	const [tabContent, setTabContent] = useState();

	function handleClick(content) {
		setTabContent(content);
	}

	const tabContentDisplay = (
		<>
			{!tabContent ? (
				<p> Please select the topic. </p>
			) : (
				<div id="tab-content">
					<h3>{EXAMPLES[tabContent].title}</h3>
					<p>{EXAMPLES[tabContent].description}</p>
					<code>{EXAMPLES[tabContent].code}</code>
				</div>
			)}
		</>
	);

	return (
		<Section id="examples" title="Examples">
			<Tabs
				ButtonsContainer="menu"
				buttons={
					<>
						<TabButton
							isSelected={tabContent === "components"}
							onClick={() => handleClick("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={tabContent === "jsx"}
							onClick={() => handleClick("jsx")}
						>
							{" "}
							JSX{" "}
						</TabButton>
						<TabButton
							isSelected={tabContent === "props"}
							onClick={() => handleClick("props")}
						>
							{" "}
							Props{" "}
						</TabButton>
						<TabButton
							isSelected={tabContent === "state"}
							onClick={() => handleClick("state")}
						>
							{" "}
							State{" "}
						</TabButton>
					</>
				}
			> 
				{tabContentDisplay}
			</Tabs>
		</Section>
	);
}
