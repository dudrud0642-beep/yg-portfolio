# 이영경 포트폴리오 (leeyg.site)

## 구조

```text
.
├─ index.html              # 2026 리뉴얼 메인 페이지
├─ assets/
│  ├─ css/portfolio.css    # 리뉴얼 스타일 (토큰·레이아웃·반응형)
│  ├─ js/portfolio.js      # 데이터(기존 작업·AI 작업)와 인터랙션
│  ├─ fonts/               # Pretendard(기본 한글) · Paperlogy(포인트 한글) · Gmarket Sans(영문, 라틴 서브셋)
│  └─ images/              # AI 작업 캡처, 파비콘
├─ images/                 # 기존 작업 썸네일·Design Works 이미지 (리뉴얼 페이지와 공용)
├─ js/redirect.js          # leeyg.site 도메인·구 주소 리다이렉트 (공용)
└─ legacy/                 # 리뉴얼 전 포트폴리오 원본 백업 (leeyg.site/legacy/)
```

루트의 `detail.html`, `data.js`, `index2.html`, `index3.html`, `js/main.js`, `scss/`, `font/`, `html/`은 리뉴얼 전 파일로, 지우지 않고 그대로 두었습니다.

## 기존 포트폴리오 백업

- `legacy/` 폴더: 리뉴얼 전 사이트를 원본 그대로 복사해 두었습니다. leeyg.site/legacy/ 에서 그대로 열립니다.
- git 태그 `legacy-portfolio-2026-10`: 리뉴얼 직전 상태(커밋 5e068cc)를 고정 보관합니다.
  되돌릴 때: `git checkout legacy-portfolio-2026-10`

## 자주 고치는 곳

- AI 작업 추가·완성: `assets/js/portfolio.js`의 `AI` 목록
  - `url`에 사이트 주소를 넣으면 "사이트 보기" 버튼이 생깁니다.
  - `shots`에 캡처 이미지를 넣으면 예시 화면 대신 실제 화면이 보입니다.
- 기존 작업 목록(Index): `assets/js/portfolio.js`의 `P` 목록
- 색상·여백·글자 크기: `assets/css/portfolio.css` 상단 `:root`
- 수정 후 CSS·JS 캐시 갱신: `index.html`의 `?v=` 값을 바꿉니다.

## 반응형 기준

1180 · 1100 · 900 · 820 · 760 · 600 · 420px
