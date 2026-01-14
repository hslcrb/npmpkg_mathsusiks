# MathSusiks 📐 - The Universal Math Library

![MathSusiks Banner](./mathsusiks_banner.png)

**MathSusiks** is the **most versatile and easy-to-use** mathematical library for JavaScript. From simple addition to complex engineering, finance, physics, random simulations, date calculations, and even security hashing—**all with just a few words.**

**MathSusiks**는 JavaScript를 위한 **가장 다재다능하고 사용하기 쉬운** 수학 라이브러리입니다. 간단한 덧셈부터 복잡한 공학, 금융, 물리, 랜덤 시뮬레이션, 날짜 계산, 그리고 보안 해싱까지—**단 몇 단어**로 가능합니다.

Developed by **Rheehose (Rhee Creative)**, 2008-2026.
(Last Update: 2026-01-14 KST)

---

## � The "Universal" Quick Solver / "범용" 퀵 솔버

**Just type what you want.** You don't need to memorize complex function names.
**원하는 것을 타이핑하세요.** 복잡한 함수 이름을 외울 필요가 없습니다.

```javascript
import { q } from 'mathsusiks';

// Arithmetic / 사칙연산
q('+', 10, 20);          // 30
q('sqrt', 25);           // 5

// Physics / 물리학
q('force', 10, 9.8);     // 98 (F=ma)
q('emc2', 1);            // 8.98e16 (Energy)

// Random / 랜덤
q('dice');               // 1~6 (Roll Dice)
q('pick', ['A', 'B']);   // 'A' or 'B'

// Date / 날짜
q('dday', '2024-01-01', '2024-12-31'); // 365
q('leap', 2024);         // true (Leap Year)

// Matrix / 행렬
q('mat_add', [[1,2]], [[3,4]]); // [[4,6]]
```

---

## � Modules Overview / 모듈 개요

1.  **Arithmetic**: `+`, `-`, `*`, `/`, `sqrt`, `pow`, `mod`
2.  **Algebra**: `fact`, `nPr`, `nCr`, `quadratic`
3.  **Trigonometry**: `sin`, `cos`, `tan` (Degrees & Radians)
4.  **Engineering**: `ohm`, `derivative`, `integrate`, `stats`
5.  **Physics**: `force`, `energy`, `gravity`, `work`, `pressure`
6.  **Finance**: `interest`, `cagr`, `roi`, `annuity`
7.  **Science**: `bmi`, `gas_law`, `molarity`, `reynolds`
8.  **Conversion**: `km2m`, `c2f`, `kg2lb`, `gb2mb`
9.  **Date/Time**: `diff_days`, `add_days`, `leap_year`
10. **Random**: `dice`, `pick`, `coin_flip`, `random_int`
11. **Matrix**: `add`, `mult`, `det`, `transpose`
12. **Security**: `sha256`
13. **String Math**: `levenshtein`, `hamming`
14. **Logic**: `AND`, `OR`, `XOR`, `NOT`, `NAND`, `NOR`
15. **Type Safety**: Fully typed with JSDoc & `jsconfig.json` (TypeScript-ready).

---

## 🛡️ Type Safety / 타입 안정성

**MathSusiks** uses modern **JSDoc** and **`jsconfig.json`** to ensure strict type checking, just like TypeScript.
**MathSusiks**는 최신 **JSDoc**과 **`jsconfig.json`**을 사용하여 TypeScript와 동일한 수준의 엄격한 타입 체크를 보장합니다.

-   **Autocomplete**: Perfect IntelliSense in VS Code. / VS Code에서 완벽한 자동완성을 지원합니다.
-   **Strict Checking**: No implicit `any`, strict null checks. / 암시적 `any` 금지 및 엄격한 null 체크.

## � Installation / 설치

```bash
npm install mathsusiks
```

## 🤝 Contributing / 기여하기

We welcome contributions in both English and Korean. See [CONTRIBUTING.md](./CONTRIBUTING.md).
영어와 한국어 기여 모두 환영합니다. [CONTRIBUTING.md](./CONTRIBUTING.md)를 참조하세요.

---

## ⚖️ License / 라이선스

MIT License. Copyright (c) 2008-2026 **Rheehose (Rhee Creative)**.
