# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**www.lonelywolf.pro** — 개인 홈페이지 (Hugo 정적 사이트)

기술 전문가이자 스타트업 사업 개발 전문가로서의 포트폴리오 및 블로그 사이트.
Cloudflare Pages에 배포되며, 한국어/영어 다국어(i18n)를 지원한다.

### 주요 섹션

- **대시보드(홈)**: 간단한 자기소개, SNS 링크
- **About Me / Resume**: 상세 자기소개 및 이력서
- **Projects**: 개인 프로젝트 소개
- **Blog**: 기술 블로그 글

## 기술 스택

- **SSG**: Hugo (extended)
- **CSS**: Tailwind CSS (PostCSS, Hugo Pipes)
- **테마**: `themes/lonelywolf/` (커스텀)
- **배포**: Cloudflare Pages
- **다국어**: Hugo i18n (`defaultContentLanguage = 'ko'`, 영어는 `/en/` 경로)

## 명령어

```bash
# 개발 서버 (드래프트 포함)
hugo server --buildDrafts

# 프로덕션 빌드
hugo --minify

# 새 블로그 글 작성 (한국어)
hugo new content blog/my-post.md --contentDir content/ko

# 새 블로그 글 작성 (영어)
hugo new content blog/my-post.md --contentDir content/en
```

## 콘텐츠 작성 규칙

- 한국어 콘텐츠: `content/ko/` 하위에 작성
- 영어 콘텐츠: `content/en/` 하위에 작성 (파일명 동일하게 유지)
- Front matter에 `title`, `date`, `description`, `tags` 필수 포함
- SEO를 위해 `description`은 150자 이내로 작성

## SEO / AEO / GEO 가이드라인

- 모든 페이지에 `description` meta tag 필수
- 구조화된 데이터(JSON-LD) 적용: Person, Article, BreadcrumbList
- Open Graph / Twitter Card meta tags 포함
- `robots.txt`, `sitemap.xml` 자동 생성 활성화 (`enableRobotsTXT = true`)
- 시맨틱 HTML 구조 유지 (h1~h6 계층, article, nav, main 등)
- 이미지에 alt 텍스트 필수

## Cloudflare Pages 배포

- **빌드 명령어**: `hugo --minify`
- **빌드 출력 디렉토리**: `public/`
- **환경 변수**: `HUGO_VERSION` 설정 필요
- main 브랜치 push 시 자동 배포

## 상세 가이드

환경 설치, Hugo 사용법, Cloudflare Pages CI/CD 설정 등 상세 내용은 [README.md](README.md) 참조.
