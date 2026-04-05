'use client';

export function PrintPageButton() {
  return (
    <button className="button button-secondary" type="button" onClick={() => window.print()}>
      このページを印刷する
    </button>
  );
}
