import { useState } from "react";
import EmptyProjects from "./components/EmptyProjects";
import YourProjects from "./components/YourProjects";
import Form from "./components/Form";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  
  
  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId:null,

      }
    });
  }

  function handleAddProject(projectsData){
    setProjectsState((prevState) => {
      const newProject = {...projectsData,  id: Math.random()}
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <YourProjects onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {projectsState.selectedProjectId === undefined && <EmptyProjects onStartAddProject={handleStartAddProject}></EmptyProjects>}
      {projectsState.selectedProjectId === null && <Form handleSaveProject={handleAddProject}></Form> }
    </main>
  );
}

export default App;
