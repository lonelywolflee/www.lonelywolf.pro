# www.lonelywolf.pro

개인 홈페이지 — Hugo 기반 정적 사이트, Cloudflare Pages 배포

## 환경 설치

### 필수 도구

| 도구 | 최소 버전 | 설치 |
|------|-----------|------|
| Hugo (extended) | v0.128+ | `brew install hugo` |
| Go | 1.22+ | `brew install go` (Hugo modules 사용 시) |
| Git | 2.0+ | `brew install git` |

### 선택 도구

| 도구 | 용도 | 설치 |
|------|------|------|
| Node.js | PostCSS 등 asset pipeline 사용 시 | `brew install node` |
| Wrangler | Cloudflare Pages 로컬 테스트/배포 | `npm install -g wrangler` |

### 설치 확인

```bash
hugo version    # hugo v0.128+ extended 확인
go version      # go1.22+ 확인
```

## Hugo 사용 가이드

### 개발 서버 실행

```bash
# 기본 실행 (드래프트 포함)
hugo server --buildDrafts

# 특정 포트 지정
hugo server --buildDrafts --port 1414

# 네트워크 내 다른 기기에서 접근 허용
hugo server --buildDrafts --bind 0.0.0.0
```

개발 서버는 파일 변경 시 자동 리로드된다. 기본 주소: http://localhost:1313

### 콘텐츠 작성

#### 새 글 생성

```bash
# 블로그 글 (한국어)
hugo new content blog/2024-03-30-my-first-post.md --contentDir content/ko

# 블로그 글 (영어)
hugo new content blog/2024-03-30-my-first-post.md --contentDir content/en

# 프로젝트 소개 (한국어)
hugo new content projects/my-project.md --contentDir content/ko
```

#### Front Matter 예시

```yaml
---
title: "글 제목"
date: 2024-03-30
description: "SEO를 위한 150자 이내 설명"
tags: ["hugo", "web"]
draft: false
---
```

- `draft: true`인 글은 `--buildDrafts` 없이 빌드 시 제외됨
- `description`은 검색엔진 노출에 직접 영향을 미치므로 반드시 작성

#### 다국어 콘텐츠 구조

```
content/
├── ko/                        # 한국어 콘텐츠
│   ├── _index.md              # 홈
│   ├── about.md               # 소개
│   ├── blog/
│   │   ├── _index.md          # 블로그 목록
│   │   └── my-post.md         # 블로그 글
│   └── projects/
│       ├── _index.md          # 프로젝트 목록
│       └── my-project.md      # 프로젝트
└── en/                        # 영어 콘텐츠 (같은 파일명)
    ├── _index.md
    ├── about.md
    ├── blog/
    │   ├── _index.md
    │   └── my-post.md
    └── projects/
        ├── _index.md
        └── my-project.md
```

같은 파일명을 사용하면 Hugo가 자동으로 언어 전환 링크를 생성한다.

### 프로덕션 빌드

```bash
hugo --minify
```

빌드 결과물은 `public/` 디렉토리에 생성된다.

## Cloudflare Pages 배포 가이드

### 초기 설정

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → "Create a project"
2. GitHub 저장소 연결
3. 빌드 설정:
   - **Framework preset**: Hugo
   - **Build command**: `hugo --minify`
   - **Build output directory**: `public`
4. 환경 변수 추가:
   - `HUGO_VERSION`: `0.159.1` (사용 중인 Hugo 버전과 일치시킬 것)

### 자동 배포

- `main` 브랜치에 push → 프로덕션 자동 배포
- 다른 브랜치에 push → 프리뷰 배포 (고유 URL 생성)

### 커스텀 도메인

1. Cloudflare Pages 프로젝트 → "Custom domains" → "Set up a custom domain"
2. `www.lonelywolf.pro` 입력
3. Cloudflare DNS에서 자동 CNAME 설정

### 로컬에서 Cloudflare Pages 테스트 (선택)

```bash
# Wrangler 설치
npm install -g wrangler

# 빌드 후 로컬 프리뷰
hugo --minify
wrangler pages dev public
```

### Cloudflare 리다이렉트 설정

`static/_redirects` 파일로 리다이렉트 규칙을 설정할 수 있다:

```
# www → apex 도메인 리다이렉트 예시
https://lonelywolf.pro/* https://www.lonelywolf.pro/:splat 301
```

### Cloudflare 헤더 설정

`static/_headers` 파일로 커스텀 헤더를 설정할 수 있다:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```
