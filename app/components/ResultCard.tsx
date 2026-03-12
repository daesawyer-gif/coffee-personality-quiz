'use client';

interface ResultCardProps {
  name: string;
  emoji: string;
  coffeeMatch: string;
  description: string;
  onRetake: () => void;
}

export default function ResultCard({
  name,
  emoji,
  coffeeMatch,
  description,
  onRetake,
}: ResultCardProps) {
  const handleShare = async () => {
    const text = `I took the Coffee Personality Quiz and I'm ${name}! My coffee match is ${coffeeMatch}. ☕`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Coffee Personality', text });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(text);
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className="result-card">
      <p className="result-label">You are...</p>
      <div className="result-emoji">{emoji}</div>
      <h2 className="result-name">{name.toUpperCase()}</h2>
      <p className="result-description">{description}</p>
      <div className="coffee-match">
        <span className="coffee-match-label">Your coffee match:</span>
        <span className="coffee-match-value">☕ {coffeeMatch}</span>
      </div>
      <div className="result-buttons">
        <button className="btn-share" onClick={handleShare}>
          Share My Result
        </button>
        <button className="btn-retake" onClick={onRetake}>
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
