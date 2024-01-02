import SingleInput from "./SingleInput";

const INPUT_TITLES = [
  "Initial Investment",
  "Annual Investment",
  "Expexted Return",
  "Duration"
]

export default function UserInput() {
	return (
		<div id="user-input">

      <span className="input-group">
			<SingleInput name={INPUT_TITLES[0]} />
			<SingleInput name={INPUT_TITLES[1]} />
      </span>

      <span className="input-group">
			<SingleInput name={INPUT_TITLES[2]}/>
			<SingleInput name={INPUT_TITLES[3]} />
      </span>

		</div>
	);
}
