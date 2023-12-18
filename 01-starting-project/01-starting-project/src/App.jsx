import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

	function handleClick(){
    
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
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
					</ul>
				</section>
				<section id="examples">
					<h2> Examples </h2>
					<menu> 
						<TabButton onClick={handleClick}> Components </TabButton>
						<TabButton onClick={handleClick}> JSX </TabButton>
						<TabButton onClick={handleClick}> Props </TabButton>
						<TabButton onClick={handleClick}> State </TabButton>
					</menu>
					
				</section>
			</main>
		</div>
	);
}

export default App;
