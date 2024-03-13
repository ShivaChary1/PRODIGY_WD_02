import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const pauseStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const saveLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return {
      ganta: `${hours.toString().padStart(2, '0')}`,
      nimishalu: `${minutes.toString().padStart(2, '0')}`,
      secanulu: `${remainingSeconds.toString().padStart(2, '0')}`,
    };
  };

  return (
    <>
    <div className='header'>
    <span className="project-title">STOPWATCH</span>
    <span className='tag-name'>Track Your Time</span>
    </div>
    <div className="content-box">
      <div className="stopwatch">
        <div className="time-names">
          <span className='span-time-names'>Hours</span>
          <span className='span-time-names'>Minutes</span>
          <span className='span-time-names'>Seconds</span>
        </div>
        <div className="time">
          <span className='time-span'>{formatTime(time).ganta}</span> <span className='time-dots'>:</span>
          <span className='time-span'>{formatTime(time).nimishalu}</span> <span className='time-dots'>:</span>
          <span className='time-span'>{formatTime(time).secanulu}</span>
        </div>
        <div className="controls">
          {!isRunning ? (
            <>
            <button className='btn btn-outline-primary' onClick={startStopwatch}>Start</button>
            <button className='btn btn-outline-danger' onClick={resetStopwatch}>Reset</button>
            </>
          ) : (
            <>
              <button className='btn btn-primary' onClick={pauseStopwatch}>Pause</button>
              <button className='btn btn-outline-warning' onClick={saveLap}>Lap</button>
            </>
          )}
        </div>
      </div>
    </div>
    <div className='laps-div'>
      {laps.length > 0 && (
        <div className='scrollable'>
          <h4 className='laps-title'>LAPS</h4>
          <ul className='laps-list'>
            {laps.map((lap, index) => (
              <li className='lap-list-item' key={index}><span>Lap{index+1}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{formatTime(lap).ganta}:{formatTime(lap).nimishalu}:{formatTime(lap).secanulu}</span></li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default Stopwatch;
