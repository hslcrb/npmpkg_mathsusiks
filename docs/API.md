# Full API Reference / 전체 API 참조 가이드

The `q` (or `퀵`) function is the recommended way to access all formulas.
모든 공식은 `q` (또는 `퀵`) 함수를 통해 접근하는 것을 권장합니다.

---

## 1. Arithmetic / 기초 연산 (`arithmetic`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `plus` | `+`, `더하기` | `add(a, b)` | Addition / 덧셈 |
| `minus` | `-`, `빼기` | `subtract(a, b)` | Subtraction / 뺄셈 |
| `times` | `*`, `곱하기` | `multiply(a, b)` | Multiplication / 곱셈 |
| `divide` | `/`, `나누기` | `divide(a, b)` | Division / 나눗셈 |
| `mod` | `%`, `나머지` | `modulo(a, b)` | Remainder / 나머지 |
| `pow` | `^`, `거듭제곱` | `power(a, b)` | Exponentiation / 거듭제곱 |
| `sqrt` | `루트`, `제곱근` | `sqrt(a)` | Square root / 제곱근 |

---

## 2. Algebra / 대수학 (`algebra`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `fact` | `!` | `factorial(n)` | n! Calculation / 계승 계산 |
| `npr` | `순열` | `permutation(n, r)` | Permutations / 순열 |
| `ncr` | `조합` | `combination(n, r)` | Combinations / 조합 |
| `quad` | `근의공식` | `quadratic(a, b, c)` | Quadratic roots / 이차방정식의 근 |

---

## 3. Trigonometry / 삼각함수 (`trigonometry`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `sin` | `사인` | `sin(deg)` | Sine (Degree) / 사인 |
| `cos` | `코사인` | `cos(deg)` | Cosine (Degree) / 코사인 |
| `tan` | `탄젠트` | `tan(deg)` | Tangent (Degree) / 탄젠트 |
| `d2r` | `라디안변환` | `degToRad(deg)` | Degrees to Radians / 라디안 변환 |
| `r2d` | `각도변환` | `radToDeg(rad)` | Radians to Degrees / 각도 변환 |

---

## 4. Engineering & Calculus / 공학 및 미적분 (`engineering`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `circle` | `원넓이` | `circleArea(r)` | Area of circle / 원의 넓이 |
| `circum` | `원둘레` | `circumference(r)` | Circumference / 원의 둘레 |
| `hypot` | `대각선`, `빗변` | `hypotenuse(a, b)` | Pythagorean theorem / 피타고라스 |
| `avg` | `평균`, `mean` | `mean(arr)` | Mean / 평균 |
| `std` | `표준편차` | `stdDev(arr)` | Standard deviation / 표준편차 |
| `diff` | `미분` | `derivative(f, x)` | Numerical derivative / 수치 미분 |
| `int` | `적분` | `integrate(f, a, b)` | Numerical integration / 수치 적분 |

---

## 5. Physics / 물리학 (`physics`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `force` | `힘`, `f` | `force(m, a)` | Newton's 2nd Law (F=ma) / 힘 |
| `emc2` | `상대성` | `massEnergy(m)` | Mass-Energy ($E=mc^2$) / 상대성 원리 |
| `ke` | `에너지` | `kineticEnergy(m, v)` | Kinetic energy / 운동 에너지 |
| `pe` | `위치에너지` | `potentialEnergy(m, h)` | Potential energy / 위치 에너지 |
| `work` | `일` | `work(F, d)` | Mechanical work / 일 |
| `press` | `압력` | `pressure(F, A)` | Pressure / 압력 |

---

## 6. Finance / 금융 모듈 (`finance`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `roi` | `수익률` | `roi(gain, cost)` | Return on investment / 투자 수익률 |
| `int_c` | `복리` | `compoundInterest` | Compound interest / 복리 계산 |
| `int_s` | `이자`, `단리` | `simpleInterest` | Simple interest / 이자 계산 |
| `cagr` | `성장률` | `cagr(b, e, n)` | Compound annual growth rate / 성장률 |

---

## 7. Science & Health / 과학 및 건강 (`science`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `bmi` | `비만도` | `bmi(w, h)` | Body Mass Index / 비만도 지수 |
| `gas_p` | `기체압력` | `idealGasP` | Ideal gas pressure / 기체 압력 |
| `molar` | `몰농도` | `molarity` | Molar concentration / 몰 농도 |
| `reynolds` | `레이놀즈` | `reynoldsNumber` | Reynolds number / 레이놀즈 수 |

---

## 9. Conversion / 단위 변환 (`conversion`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `km2m` | `km_mile` | `kmToMiles(km)` | Kilometers to Miles / 킬로미터 -> 마일 |
| `m2km` | `mile_km` | `milesToKm(miles)` | Miles to Kilometers / 마일 -> 킬로미터 |
| `c2f` | `섭씨화씨` | `celsiusToFahrenheit` | Celsius to Fahrenheit / 섭씨 -> 화씨 |
| `f2c` | `화씨섭씨` | `fahrenheitToCelsius` | Fahrenheit to Celsius / 화씨 -> 섭씨 |
| `kg2lb` | `kg_lb` | `kgToLbs(kg)` | Kg to Pounds / 킬로그램 -> 파운드 |
| `lb2kg` | `lb_kg` | `lbsToKg(lbs)` | Pounds to Kg / 파운드 -> 킬로그램 |

---

## 10. Number Theory / 정수론 (`number_theory`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `prime` | `소수`, `is_prime` | `isPrime(n)` | Check if prime / 소수 판별 |
| `gcd` | `최대공약수` | `gcd(a, b)` | Greatest Common Divisor / 최대공약수 |
| `lcm` | `최소공배수` | `lcm(a, b)` | Least Common Multiple / 최소공배수 |
| `fibo` | `피보나치` | `fibonacci(n)` | Fibonacci number / 피보나치 수열 |

---

## 11. Constants / 상수 (`constants`)

| Constant | Description (EN/KR) | Value |
| :--- | :--- | :--- |
| `PI` | 원주율 | ~3.14159 |
| `E` | 오일러 수 | ~2.71828 |
| `C` | 광속 | 299,792,458 m/s |
| `G` | 중력 상수 | 6.6743e-11 |
| `g` | 지구 중력 가속도 | 9.80665 m/s² |

---

## 12. Matrix / 행렬 (`matrix`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `mat_add` | `행렬합` | `matAdd(A, B)` | Matrix Addition / 행렬 덧셈 |
| `mat_mult` | `행렬곱` | `matMult(A, B)` | Matrix Multiplication / 행렬 곱셈 |
| `transpose` | `전치행렬` | `transpose(m)` | Transpose / 전치 행렬 |
| `det` | `행렬식` | `det2x2(m)` | Determinant (2x2) / 행렬식 |

---

## 13. Random / 랜덤 (`random`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `rand` | `랜덤정수` | `randInt(min, max)` | Random Integer / 랜덤 정수 |
| `rand_f` | `랜덤실수` | `randFloat(min, max)` | Random Float / 랜덤 실수 |
| `pick` | `뽑기` | `pick(arr)` | Pick random element / 요소 뽑기 |
| `dice` | `주사위` | `dice(sides)` | Roll dice / 주사위 굴리기 |
| `coin` | `동전` | `coinFlip()` | Coin flip / 동전 던지기 |

---

## 14. Date & Time / 날짜 및 시간 (`date_utils`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `diff_days` | `날짜차이` | `diffDays(d1, d2)` | Days difference / 날짜 차이 |
| `add_days` | `날짜더하기` | `addDays(d, n)` | Add days / 날짜 더하기 |
| `leap` | `윤년` | `isLeapYear(y)` | Leap year check / 윤년 확인 |
| `now` | `현재시간` | `now()` | Current Timestamp / 현재 시간 |

---

## 15. Security / 보안 (`security`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `sha256` | `해시`, `hash` | `sha256(content)` | SHA-256 Hashing / SHA-256 해시 |

---

## 16. String Math / 문자열 수학 (`string_math`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `leven` | `편집거리` | `levenshtein(a, b)` | Levenshtein Distance / 편집 거리 |
| `hamming` | `해밍거리` | `hamming(a, b)` | Hamming Distance / 해밍 거리 |

---

## 17. Logic / 논리 (`logic`)

| Keyword | Alias | Function | Description (EN/KR) |
| :--- | :--- | :--- | :--- |
| `and` | `논리곱` | `and(a, b)` | AND Gate / 논리곱 |
| `or` | `논리합` | `or(a, b)` | OR Gate / 논리합 |
| `xor` | `배타적논리합` | `xor(a, b)` | XOR Gate / 배타적 논리합 |
| `not` | `논리부정` | `not(a)` | NOT Gate / 논리 부정 |
| `nand` | `낸드` | `nand(a, b)` | NAND Gate / 낸드 |
| `nor` | `노어` | `nor(a, b)` | NOR Gate / 노어 |

---
Copyright (c) 2008-2026 Rheehose (Rhee Creative)
