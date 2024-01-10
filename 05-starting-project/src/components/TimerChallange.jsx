import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();

	const [challengeStarted, setChallengeStrted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStart() {
		setChallengeStrted(true);
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			dialog.current.open();
			// setChallengeStrted(false);
		}, targetTime * 1000);
	}

	function handleStop(){
		// setChallengeStrted(false)
		clearTimeout(timer.current)
	}

	return (
		<>
		{timerExpired && <ResultModal ref={dialog} result="lost" targetTime={targetTime}/>}
		<section className="challenge">
			<h2>{title}</h2>
			<p className="challenge-time">
				{targetTime} second{targetTime > 1 && "s"}
			</p>
			<button onClick={ challengeStarted? handleStop: handleStart}>
				{challengeStarted ? "Stop" : "Start"} Challenge
			</button>
			<p className={challengeStarted ? "active" : undefined}>
				{challengeStarted ? "Time is running..." : "Timer inactive"}
			</p>
		</section>
		</>
	);
}
