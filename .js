elapsedSeconds = 0;
  if (elapsedSeconds==0) {
    showElement("realTimer"); 
    showElement("timenumber");
    timedLoop(1000, function() {
      elapsedSeconds = elapsedSeconds + 1;
      setText("timenumber", elapsedSeconds);
      setText("timenumber2", elapsedSeconds);
      setText("timenumber3", elapsedSeconds);
      setText("timenumber4", elapsedSeconds);
      setText("timenumber5", elapsedSeconds);
      if (elapsedSeconds==250) {
        stopTimedLoop();
        setPosition("staringatme", 110, 340, 100, 100);
        setText("timenumber", "0");
        hideElement("restart");
        stopSound("Song for Computer Science.mp3");
        playSound("Game Over.mp3", false);
        setScreen("gameoveryeah");
      }
    });
