import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton"

export default function Examples (){
  const [tabContent, setTabContent] = useState();

	function handleClick(content) {
		setTabContent(content);
	}
 
 return( 
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
  );
};
