import React from 'react';
import SpeakerCard from '../Componets/Ui/SpeakerCard';

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  imageSrc:string;
}

interface SpeakerListProps {
  speakers: Speaker[];
  selectedSpeakers: number[];
  onCheckboxChange: (id: number) => void;
}

const SpeakerList: React.FC<SpeakerListProps> = ({ speakers, selectedSpeakers, onCheckboxChange }) => {
  return (
    <div>
      {speakers.map((speaker) => (
        <SpeakerCard
          key={speaker.id}
          name={speaker.name}
          title={speaker.title}
          imageSrc={speaker.imageSrc}
          organization={speaker.organization}
          checked={selectedSpeakers.includes(speaker.id)}
          onChange={() => onCheckboxChange(speaker.id)}
        />
      ))}
    </div>
  );
};

export default SpeakerList;
