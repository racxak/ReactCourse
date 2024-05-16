import { useState } from "react";
import EmptyProjects from "./components/EmptyProjects";
import YourProjects from "./components/YourProjects";
import Form from "./components/Form";
import SelectedProject from "./components/SelectedProject";

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

  function handleCancelAddProject(){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleDelete(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects.filter((project) => project.id =! id)]
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  return (
    <main className="h-screen my-8 flex gap-8">
      <YourProjects onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} />

      {projectsState.selectedProjectId === undefined && <EmptyProjects onStartAddProject={handleStartAddProject}></EmptyProjects>}

      {projectsState.selectedProjectId === null && <Form handleSaveProject={handleAddProject} handleCancelProject={handleCancelAddProject}></Form> }
      {projectsState.selectedProjectId !== undefined && projectsState.selectedProjectId !== null && <SelectedProject onDelete={handleDelete} project={selectedProject}/>}   
    </main>
  );
}

export default App;
