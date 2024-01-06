import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallange title="Easy" targetTimer={1} />
      <TimerChallange title="Not easy" targetTimer={5} />
      <TimerChallange title="Getting tough" targetTimer={10} />
      <TimerChallange title="Pros only" targetTimer={15} />

    </>
  );
}

export default App;
