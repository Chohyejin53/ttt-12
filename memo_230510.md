# 0510 STUDY

## Vite

: 리액트 빌드 도구

vite로 템플릿 웹팩 설치  
https://vitejs-kr.github.io/guide/

## install

node -v 18.16.0  
yarn -v 1.22.19

명령어 입력

`yarn create vite . --template react`
<br>

- `yarn create` : npx 와 같은 패키지 실행 명령어
- `vite` : 패키지
- `.` : 현재 폴더
- `--template react` : 리액트 템플릿
  <br>

> 터미널 명령어
> code . : 현재폴더 열기  
> <br>
> Mac에서 Alias 설정하는 방법  
>  echo "export PATH=\"$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin\"" >> ~/.zshrc

[참고](https://ithub.tistory.com/50)

## 커밋 & 푸시

- `git status`
- `git add .`
- `git commit - m "test"`
- `git push`

## 실행

- `yarn install` : yarn 설치
- `yarn dev` : 5000번대로 로컬경로 열기

## ESLint

- ESLint 설치
- 터미널에 `문제`에 문법오류가 나는 것 정상
- `.eslintrc.cjs`은 기본 자바스크립트 유형의 모듈이라는 의미
- `'eslint:recommended',` 삭제 (사용하지않을 것)

- standard.js

  - https://github.com/standard/standard
  - https://standardjs.com/

- 터미널 명령어 입력
  `yarn add -D eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-n`

## eslintrc.cjs

test

```
rules: {
    'react-refresh/only-export-components': 'warn',
    'import/no-absolute-path': 'off',
  },
```

## build

`yarn build`
