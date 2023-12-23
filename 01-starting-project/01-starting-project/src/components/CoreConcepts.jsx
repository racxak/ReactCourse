import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import React from "react";

function CoreConcepts () {
  return (
  <section id="core-concepts">
					<h2>Core Concepts</h2>
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
				</section>
	)
};

export default CoreConcepts;