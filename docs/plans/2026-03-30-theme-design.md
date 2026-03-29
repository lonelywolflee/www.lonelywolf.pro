# 커스텀 테마 lonelywolf 설계

## 결정 사항

- **접근**: 커스텀 테마 직접 제작 (`themes/lonelywolf/`)
- **CSS**: Tailwind CSS (Hugo Pipes 연동)
- **색상 모드**: 다크/라이트 토글 (시스템 설정 기본값, localStorage 저장)
- **SNS**: GitHub, LinkedIn, X (Twitter), Email

## 아키텍처

```
themes/lonelywolf/
├── assets/css/main.css
├── layouts/
│   ├── _default/baseof.html
│   ├── _default/list.html
│   ├── _default/single.html
│   ├── index.html
│   └── partials/
│       ├── head.html
│       ├── nav.html
│       ├── footer.html
│       ├── seo/jsonld.html
│       ├── seo/opengraph.html
│       └── social-links.html
├── static/icons/
└── theme.toml
```

## 페이지

| 페이지 | 경로 | 내용 |
|--------|------|------|
| 홈 | `/` | 히어로 + SNS, 최근 프로젝트 3개, 최근 블로그 3개 |
| About | `/about/` | 상세 소개, 기술 스택, 경력 |
| Projects | `/projects/` | 카드 그리드 → 상세 |
| Blog | `/blog/` | 글 목록 (태그) → 상세 |

## 색상

- Light: 배경 `#ffffff`, 텍스트 `#111827`, 액센트 `#2563eb`
- Dark: 배경 `#0f172a`, 텍스트 `#e2e8f0`, 액센트 `#3b82f6`

## SEO

- JSON-LD: Person (홈), Article (블로그), BreadcrumbList (전체)
- Open Graph + Twitter Card 메타 태그
- 시맨틱 HTML, robots.txt, sitemap.xml
