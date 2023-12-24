// Your task is to build a highly re-usable, custom Button component that can be used in all the following ways (also see the code in the App.js file)...

export default function Button({ children, mode = 'filled', Icon, ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  if (Icon) {
    cssClasses += ' icon-button';
  }
 
  if (props.className) {
    cssClasses += ' ' + props.className;
  }
 
  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}