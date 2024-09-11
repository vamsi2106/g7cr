import React, {
  useState,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import { If } from "./if.component";

const Timer = forwardRef(
  ({ name, running: initialRunning, hideControls, onPause }, ref) => {
    const [ms, setMs] = useState(0);
    const [running, setRunning] = useState(initialRunning);
    const intervalId = useRef(null);

    // Exposing the reset and toggle methods via ref
    useImperativeHandle(ref, () => ({
      reset() {
        if (intervalId.current) {
          clearInterval(intervalId.current);
        }
        setMs(0);
        setRunning(false);
      },
      toggle() {
        if (running) {
          clearInterval(intervalId.current);
          if (onPause) {
            onPause(name, ms);
          }
        } else {
          intervalId.current = setInterval(() => {
            setMs((prevMs) => prevMs + 100);
          }, 100);
        }
        setRunning((prevRunning) => !prevRunning);
      },
    }));

    let _ms = ms % 1000;
    let seconds = Math.floor((ms - _ms) / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    return (
      <div className="timer-component">
        <h3>{name}</h3>
        <div className="timer">
          <span>{minutes.toString().padStart(2, "0")}:</span>
          <span>{seconds.toString().padStart(2, "0")}.</span>
          <span>{_ms.toString().padStart(3, "0")}</span>
        </div>

        <If condition={!hideControls}>
          <div className="same-row">
            <button onClick={() => ref.current.toggle()}>
              {running ? "Pause" : "Start"}
            </button>
            <button onClick={() => ref.current.reset()}>Reset</button>
          </div>
        </If>
      </div>
    );
  }
);

export default Timer;
