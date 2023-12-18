// Your task is to create a reusable Card component that takes a name prop as an input and, in addition, can be wrapped around any JSX code.

// Use the already existing Card.js file to create the Card component in there. You can add the card CSS class to the main wrapping element in that component for some styling.

// The name prop should be output as a title inside the Card component, the wrapped JSX code should be output below that title.


export default function Card ({name, children}) {
  return (
      <section class="card"> 
      <h2>{name}</h2>
      {children}
      </section>
      )
  
}