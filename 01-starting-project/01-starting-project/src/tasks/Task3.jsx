// Your task is to make the CourseGoal component reusable / configurable. It should accept a "title" and a "description" input and output the received data between the <h2> (title) and <p> (description) tags.

// The App component should then render at least two instances of the CourseGoal component.

// One of those CourseGoal components must receive a title of "Learn React" and a description of "In-depth". The other titles and descriptions are entirely up to you.

export function CourseGoal({title,description}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal 
        title = "Learn React"
        description = "In-depth"/>
        <CourseGoal
        title = "Practice"
        description = "Practice working with react"/>
      </ul>
    </div>
  );
}

export default App;