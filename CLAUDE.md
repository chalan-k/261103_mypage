# 프로젝트 작업 규칙

Vanilla JavaScript를 사용하는 Vite 프로젝트입니다. GitHub에 업로드한 후 Netlify와 연동하여 배포합니다.
코드 작업 전에 아래 규칙을 먼저 확인합니다.

## 코드 작성 규칙

1. HTML, CSS, JavaScript 코드는 각각 분리된 파일로 작성합니다.
2. `index.html`은 프로젝트 루트에, 애플리케이션의 CSS와 JavaScript 파일은 `src` 폴더에 작성합니다. `vite.config.js` 등 설정 파일은 프로젝트 루트에 둡니다.
3. JavaScript는 모듈 방식으로 연결하고, CSS는 JavaScript 진입 파일에서 import하여 Vite 빌드에 포함되도록 합니다.
4. 외부 JavaScript 라이브러리는 `npm install`로 설치하고 import하여 사용합니다. CDN 방식은 사용하지 않습니다.
5. 기존 파일과 설정이 있다면 먼저 확인하고 필요한 부분만 수정합니다.

## 사이트 구성

- 이름, 문구, 프로젝트, 연락처 등 내용은 `src/content.js`에서만 관리합니다.
- 제공되지 않은 경력, 연구 실적, 이메일, 사이트 주소는 만들지 않고 빈 값으로 두어 입력 표시가 나타나게 합니다.
- 방명록은 Netlify Forms를 사용합니다. Netlify가 빌드된 HTML에서 찾을 수 있도록 `<form>`은 `index.html`에 직접 둡니다.

## 빌드 및 배포

- 빌드: `npm run build` (출력 폴더: `dist`)
- Netlify 설정: Build command `npm run build`, Publish directory `dist`
