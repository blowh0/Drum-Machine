import React from "react";
import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
  playSound: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Drum: React.FC<DrumProps> = ({ audioClip, playSound }) => {
  return (
    <div
      id={"drum-" + audioClip.keyTrigger}
      className="drum-pad"
      onClick={() => {
        const audio = document.getElementById(audioClip.keyTrigger) as HTMLAudioElement;
        audio.play().catch(console.error);
        document.getElementById("display")!.innerText = audioClip.description;
      }}
      onKeyDown={playSound} // Trigger playSound when a key is pressed
      tabIndex={0} // Make it focusable for accessibility
    >
      {audioClip.keyTrigger}
      {/* Add an audio element with the corresponding ID, className, and URL */}
      <audio
        id={audioClip.keyTrigger}
        className="clip"
        src={audioClip.url}
      />
    </div>
  );
};

export default Drum;

