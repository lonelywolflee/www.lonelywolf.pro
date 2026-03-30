# Commit

Analyze git changes and create well-structured commits following best practices.

## Core Principles

### 1. Single-Purpose Commits
Each commit MUST contain only one logical change with a single purpose. If the changes serve multiple purposes, they MUST be split into separate commits.

### 2. Commit Type Categorization
Every commit must be categorized into exactly ONE of these types:
- **feat**: New features or functionality
- **refactor**: Code restructuring without changing behavior
- **fix**: Bug fixes
- **test**: Adding or modifying tests
- **docs**: Documentation changes (README, comments, etc.)

A single commit CANNOT contain multiple types. If changes span multiple types, they MUST be split into separate commits.

## Workflow

### Step 1: Examine Changes in Detail

Run these commands in parallel to understand current changes:

```bash
git status
git diff
git diff --staged
git log --oneline -5
```

Read the full diff output to understand:
- What functionality was added, modified, or removed
- Whether changes serve a single purpose or multiple purposes
- Which commit type(s) apply to the changes

### Step 2: Group Changes by Commit Type

Based on the analysis, group files into commits according to these rules:

**Grouping Rules:**
1. All files in a commit must be the same type (feat, refactor, fix, test, docs)
2. All files in a commit must serve a single logical purpose
3. If files serve different purposes, split them into separate commits
4. If files are different types, split them into separate commits

**Examples of Valid Grouping:**
- All test files for a new feature -> one `test` commit
- New API endpoint with its handler and route -> one `feat` commit
- Refactoring a module split across multiple files -> one `refactor` commit
- README and inline documentation updates -> one `docs` commit

**Examples of Invalid Grouping:**
- New feature + tests for that feature -> must split into `feat` and `test` commits
- Bug fix + refactoring -> must split into `fix` and `refactor` commits
- Two unrelated features -> must split into two `feat` commits
- Documentation + code changes -> must split into `docs` and appropriate code commit

### Step 3: Create Commits

For each group of changes:

1. **Stage the files** for that specific commit:
   ```bash
   git add <file1> <file2> ...
   ```

2. **Generate commit message** following the structured format:
   - Title: `<type>: <brief description>` (imperative mood, up to 100 chars)
   - Body: Use structured sections (# Why, # Changes, # Impact) with bullet points

3. **Create the commit** using heredoc for proper formatting:
   ```bash
   git commit -m "$(cat <<'EOF'
   <type>: <brief description>

   # Why
   - Reason 1
   - Reason 2

   # Changes
   - Change 1
   - Change 2

   # Impact (optional)
   - Impact description

   Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
   EOF
   )"
   ```

4. **Verify** the commit was created successfully:
   ```bash
   git status
   git log -1
   ```

5. **Repeat** for each remaining group until all changes are committed.

## Commit Message Guidelines

### Brief Description (Title)
- Use imperative mood: "add feature" not "added feature"
- Aim for clarity and completeness (100 characters is acceptable if needed)
- No period at the end
- Focus on what changed at a high level

### Body (Structured Format)

**Preferred Structure:**
```
<type>: <brief description>

# Why
- Reason for the change
- Problem being solved

# Changes
- Key change 1
- Key change 2

# Impact
- What this affects
- Breaking changes (if any)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

**Notes:**
- Use bullet points and sections to organize information
- Skip sections that don't apply (e.g., simple changes may only need "Why")
- Use narrative text ONLY when structured format doesn't fit
- Keep it concise but complete

### Examples

Simple change:
```
feat: add user authentication endpoint

# Why
- Support new mobile app authentication requirements

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

Complex change:
```
refactor: extract database connection logic into separate module

# Why
- Improve testability of database-dependent code
- Reduce duplication across multiple services

# Changes
- Created new `db/connection.js` module
- Moved connection logic from individual services
- Updated all services to use new module

# Impact
- All services now share connection logic
- No breaking changes to public APIs

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

Bug fix:
```
fix: prevent race condition in cache invalidation

# Why
- Cache could be invalidated during active reads
- Caused inconsistent state in production

# Changes
- Added read-write lock around cache operations
- Implemented deferred invalidation queue

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

## Validation Checklist

Before completing, verify:
- [ ] Each commit contains only one type (feat/refactor/fix/test/docs)
- [ ] Each commit serves a single logical purpose
- [ ] Commit messages follow the format guidelines
- [ ] All changed files have been committed
- [ ] No files with secrets (.env, credentials.json, etc.) are committed
- [ ] `git status` shows a clean working tree (or expected remaining changes)

## Edge Cases

### Mixed Changes in a Single File
If a single file has multiple types of changes (e.g., bug fix + new feature):
1. **Preferred**: Split the changes using `git add -p` to stage hunks separately
2. **Alternative**: Commit the file with the dominant change type and note the mixed nature in the commit message

### Dependent Changes
If changes logically depend on each other but are different types:
1. Commit in dependency order (base change first, dependent change second)
2. Reference the previous commit in the dependent commit's message

### No Changes to Commit
If `git status` shows no changes:
- Inform the user there are no changes to commit
- Do not create empty commits
