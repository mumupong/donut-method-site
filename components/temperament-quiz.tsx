'use client';

import { useMemo, useState } from 'react';

import {
  temperamentQuestions,
  temperamentTypes,
  type TemperamentTypeId,
} from '@/data/site';

type Answers = Record<string, TemperamentTypeId>;

export function TemperamentQuiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const completed = temperamentQuestions.length === Object.keys(answers).length;

  const result = useMemo(() => {
    if (!completed) {
      return null;
    }

    const scoreMap = temperamentTypes.reduce<Record<TemperamentTypeId, number>>((acc, type) => {
      acc[type.id] = 0;
      return acc;
    }, {} as Record<TemperamentTypeId, number>);

    Object.values(answers).forEach((typeId) => {
      scoreMap[typeId] += 1;
    });

    const ranked = [...temperamentTypes].sort((a, b) => scoreMap[b.id] - scoreMap[a.id]);
    return ranked[0];
  }, [answers, completed]);

  return (
    <div className="quiz-shell">
      <div className="quiz-note">
        <p>
          これは医療的な診断ではなく、自分の傾向をやさしく知るためのチェックです。
          その時期の疲れや環境によっても結果は変わります。
        </p>
      </div>

      <div className="quiz-grid">
        {temperamentQuestions.map((question, index) => (
          <fieldset key={question.id} className="quiz-card">
            <legend>
              <span className="quiz-number">Q{index + 1}</span>
              <span>{question.prompt}</span>
            </legend>
            <div className="quiz-options">
              {question.options.map((option) => {
                const id = `${question.id}-${option.type}`;
                return (
                  <label key={id} htmlFor={id} className="quiz-option">
                    <input
                      id={id}
                      type="radio"
                      name={question.id}
                      value={option.type}
                      checked={answers[question.id] === option.type}
                      onChange={() => {
                        setAnswers((current) => ({
                          ...current,
                          [question.id]: option.type,
                        }));
                      }}
                    />
                    <span>{option.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="quiz-actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={() => setAnswers({})}
        >
          回答をリセットする
        </button>
      </div>

      {result ? (
        <section className="quiz-result" aria-live="polite">
          <p className="section-eyebrow">Result</p>
          <h3>あなたの今の傾向は「{result.name}」が近そうです。</h3>
          <p>{result.description}</p>
          <dl className="result-grid">
            <div>
              <dt>向いている整え方</dt>
              <dd>{result.fit}</dd>
            </div>
            <div>
              <dt>気をつけたいこと</dt>
              <dd>{result.caution}</dd>
            </div>
          </dl>
        </section>
      ) : (
        <div className="quiz-result pending">
          <p>すべて回答すると結果が表示されます。</p>
        </div>
      )}
    </div>
  );
}
