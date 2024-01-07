import { useRef, useState } from "react";

export default function TimerChallange({ title, targetTimer }) {
	const timer = useRef();
	const [challengeStarted, setChallengeStrted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStart() {
		setChallengeStrted(true);
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			setChallengeStrted(false);
		}, targetTimer * 1000);
	}

	function handleStop(){
		setChallengeStrted(false)
		clearTimeout(timer.current)
	}

	return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpired && <p> You lost! </p>}
			<p className="challenge-time">
				{targetTimer} second{targetTimer > 1 && "s"}
			</p>
			<button onClick={ challengeStarted? handleStop: handleStart}>
				{challengeStarted ? "Stop" : "Start"} Challenge
			</button>
			<p className={challengeStarted ? "active" : undefined}>
				{challengeStarted ? "Time is running..." : "Timer inactive"}
			</p>
		</section>
	);
}
