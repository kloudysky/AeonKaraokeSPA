import React from 'react';
import FeatureCard from './FeatureCard';
import '../styles/features.module.css';

type Feature = {
  title: string;
  description: string;
  imageName: string;
};

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Plug & Play HDMI Device',
      description: 'Easily connects to your TV’s HDMI port like Chromecast.',
      imageName: 'hdmi_device.png',
    },
    {
      title: 'Bluetooth Microphone Remote',
      description: 'Stream your voice and control the UI with our smart mic.',
      imageName: 'bluetooth_microphone.png',
    },
    {
      title: 'Voice Transformations',
      description: 'Apply auto-tune and other effects in real-time.',
      imageName: 'voice_transformation.png',
    },
    {
      title: 'AI Singers',
      description: 'Add virtual singers for duet and group songs.',
      imageName: 'ai_singers.png',
    },
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imageName={feature.imageName}
        />
      ))}
    </section>
  );
};

export default Features;
