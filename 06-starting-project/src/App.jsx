import { useState } from "react";
import EmptyProjects from "./components/EmptyProjects";
import YourProjects from "./components/YourProjects";
import Form from "./components/Form";
import SelectedProject from "./components/SelectedProject";
import Tasks from "./components/Tasks";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});  


	function handleAddTask(text) {
		setProjectsState((prevState) => {
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: Math.random(),
			};
			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
			};
		});
	}

	function handleDeleteTask(id) {
    setProjectsState((prevState) => {
			return {
				...prevState,
				tasks: [
					...prevState.tasks.filter((task) => (task.id !== id)),
				],
			};
		});
  }

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleAddProject(projectsData) {
		setProjectsState((prevState) => {
			const newProject = { ...projectsData, id: Math.random() };
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handleCancelAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	function handleSelectProject(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	}

	function handleDelete(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [
					...prevState.projects.filter((project) => (project.id !== id)),
				],
			};
		});
	}

	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProjectId
	);

	return (
		<main className="h-screen my-8 flex gap-8">
      <p onClick={() => handleAddProject({title: "tytuł",
			description: "des",
			dueDate: "1.05.2024"})}>test </p>
			<YourProjects
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
			/>

			{projectsState.selectedProjectId === undefined && (
				<EmptyProjects
					onStartAddProject={handleStartAddProject}
				></EmptyProjects>
			)}

			{projectsState.selectedProjectId === null && (
				<Form
					handleSaveProject={handleAddProject}
					handleCancelProject={handleCancelAddProject}
				></Form>
			)}
			{projectsState.selectedProjectId !== undefined &&
				projectsState.selectedProjectId !== null && (
					<SelectedProject
						onDelete={handleDelete}
						project={selectedProject}
						onDeleteTask={handleDeleteTask}
						onAddTask={handleAddTask}
						tasks={projectsState.tasks.filter((task) => task.projectId == projectsState.selectedProjectId)}
					/>
				)}
		</main>
	);
}

export default App;
