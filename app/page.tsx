'use client';

import { useState } from 'react';
import QuizQuestion from './components/QuizQuestion';
import ResultCard from './components/ResultCard';

const questions = [
  {
    question: "It's Saturday morning. What are you doing?",
    options: [
      { emoji: '🏔️', label: 'Hiking at sunrise', personality: 'boldAdventurer' },
      { emoji: '🛏️', label: 'Still in bed, no regrets', personality: 'cozyClassic' },
      { emoji: '🥂', label: 'Brunch with friends', personality: 'socialButterfly' },
      { emoji: '🍞', label: 'Baking something cozy at home', personality: 'cozyClassic' },
    ],
  },
  {
    question: 'How do you take risks?',
    options: [
      { emoji: '🚀', label: 'I jump in headfirst', personality: 'boldAdventurer' },
      { emoji: '📚', label: 'I research everything first', personality: 'cozyClassic' },
      { emoji: '👯', label: 'I ask friends what they think', personality: 'socialButterfly' },
      { emoji: '🛋️', label: 'I avoid them when possible', personality: 'indulgentTreat' },
    ],
  },
  {
    question: 'Your ideal work environment?',
    options: [
      { emoji: '📢', label: 'Loud, buzzy open office', personality: 'socialButterfly' },
      { emoji: '🏠', label: 'Home office, total focus', personality: 'cozyClassic' },
      { emoji: '☕', label: 'Coffee shop background noise', personality: 'boldAdventurer' },
      { emoji: '🌍', label: 'Wherever I happen to land', personality: 'boldAdventurer' },
    ],
  },
  {
    question: "What's your relationship with mornings?",
    options: [
      { emoji: '⚡', label: 'I own them — up before 6', personality: 'boldAdventurer' },
      { emoji: '😐', label: 'I tolerate them', personality: 'cozyClassic' },
      { emoji: '😩', label: 'I actively avoid them', personality: 'indulgentTreat' },
      { emoji: '⏰', label: 'I need at least 3 alarms', personality: 'socialButterfly' },
    ],
  },
  {
    question: "Your phone's most-used app?",
    options: [
      { emoji: '🗺️', label: "Maps — always going somewhere", personality: 'boldAdventurer' },
      { emoji: '📝', label: "Notes — I'm a planner", personality: 'cozyClassic' },
      { emoji: '💬', label: 'Group chats — always connected', personality: 'socialButterfly' },
      { emoji: '🍕', label: 'Food delivery — treat yourself', personality: 'indulgentTreat' },
    ],
  },
];

const personalities: Record<string, { name: string; emoji: string; coffeeMatch: string; description: string }> = {
  boldAdventurer: {
    name: 'The Bold Adventurer',
    emoji: '🏔️',
    coffeeMatch: 'Double Espresso',
    description: "You live life at full throttle. You're first in line, first to try something new, and you don't slow down for anyone. Strong, intense, and always moving — just like your coffee.",
  },
  cozyClassic: {
    name: 'The Cozy Classic',
    emoji: '🛋️',
    coffeeMatch: 'Medium Roast with Cream',
    description: "You know what you love and you love what you know. Reliable, warm, and endlessly comforting — you're the kind of person everyone wants around on a rainy day.",
  },
  socialButterfly: {
    name: 'The Social Butterfly',
    emoji: '🦋',
    coffeeMatch: 'Cappuccino',
    description: "You light up every room you walk into. Life is better shared, and you're always at the center of the fun. Frothy, lively, and impossible to resist.",
  },
  indulgentTreat: {
    name: 'The Indulgent Treat',
    emoji: '🍫',
    coffeeMatch: 'Mocha with Extra Whip',
    description: "Why settle for ordinary when extraordinary exists? You believe life should be savored, not rushed. Rich, layered, and unapologetically delicious.",
  },
};

type Scores = Record<string, number>;

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({
    boldAdventurer: 0,
    cozyClassic: 0,
    socialButterfly: 0,
    indulgentTreat: 0,
  });
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (personality: string) => {
    const newScores = { ...scores, [personality]: scores[personality] + 1 };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const winner = Object.entries(newScores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
      setResult(winner);
    }
  };

  const handleRetake = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScores({ boldAdventurer: 0, cozyClassic: 0, socialButterfly: 0, indulgentTreat: 0 });
    setResult(null);
  };

  if (!started) {
    return (
      <main className="page-container">
        <div className="landing-card">
          <div className="landing-emoji">☕</div>
          <h1 className="landing-title">What Coffee Are You?</h1>
          <p className="landing-subtitle">
            Answer 5 quick questions to discover your perfect coffee personality match.
          </p>
          <button className="btn-start" onClick={() => setStarted(true)}>
            Start Quiz
          </button>
        </div>
      </main>
    );
  }

  if (result) {
    const personality = personalities[result];
    return (
      <main className="page-container">
        <ResultCard
          name={personality.name}
          emoji={personality.emoji}
          coffeeMatch={personality.coffeeMatch}
          description={personality.description}
          onRetake={handleRetake}
        />
      </main>
    );
  }

  return (
    <main className="page-container">
      <QuizQuestion
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
      />
    </main>
  );
}
