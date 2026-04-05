# AGENTS.md

This project is a Japanese-first brand site for ドーナツメソッド.

## Intent
- Lead with meaning before metaphor.
- Keep ドーナツメソッド and 気質タイプチェック clearly separated.
- Maintain a calm, grounded, elegant tone.
- Avoid medical or diagnostic framing.

## Technical notes
- Next.js App Router + TypeScript.
- Styling is in `app/globals.css`.
- Shared copy and navigation live in `data/site.ts`.
- Keep internal links valid; do not introduce dead routes.
- Preserve accessibility basics: semantic landmarks, visible focus, reduced interaction complexity.

## Before changing copy
- Prefer simple Japanese over branded jargon.
- Use `1対1セッション` rather than foregrounding `コーチング`.
- Use `気質タイプチェック` rather than `診断`.
- Do not add unsupported claims or credentials.

## Before shipping
- Replace placeholder domain and email in `data/site.ts`.
- Replace metadata images if a branded design is available.
- Review privacy policy and legal copy for the real operation.

- Fonts currently use CSS fallback stacks rather than bundled font files.
