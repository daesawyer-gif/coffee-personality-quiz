'use client';

interface Option {
  emoji: string;
  label: string;
  personality: string;
}

interface QuizQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: Option[];
  onAnswer: (personality: string) => void;
}

export default function QuizQuestion({
  questionNumber,
  totalQuestions,
  question,
  options,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div className="quiz-question">
      <p className="progress-text">Question {questionNumber} of {totalQuestions}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>
      <h2 className="question-text">{question}</h2>
      <div className="options-grid">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswer(option.personality)}
          >
            <span className="option-emoji">{option.emoji}</span>
            <span className="option-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
