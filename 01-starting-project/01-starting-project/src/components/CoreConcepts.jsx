import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import React from "react";
import Section from "./Section";
function CoreConcepts () {
  return (
  <Section id="core-concepts" title="Core Concepts">
					<ul>
						{/* <CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/> */}

						{/* when all key are the same ase we need we can pass all of them at once */}

						{CORE_CONCEPTS.map( (conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept> )}
						{/* <CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} /> */}
					</ul>
				</Section>
	)
};

export default CoreConcepts;