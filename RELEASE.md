# SaloneUI Release Guide

SaloneUI uses automated GitHub Actions workflows to handle releases and npm package publishing.

---

## 1-Command Release

To release a new version, run one of the following commands in your terminal:

```bash
# For a bug fix or minor patch (e.g., 1.2.0 -> 1.2.1):
npm version patch && git push origin main --tags

# For a new feature or component (e.g., 1.2.0 -> 1.3.0):
npm version minor && git push origin main --tags

# Or using the automated script:
./scripts/release.sh patch
```

---

## What Happens Automatically:

1. **`npm version`** updates `package.json`, commits the version bump, and creates a signed Git tag `vX.Y.Z`.
2. **`git push --tags`** sends the tag to GitHub.
3. The **Prepare Release Bot** (`.github/workflows/prepare-release.yml`) triggers on the `v*` tag:
   - Collects all commit messages since the previous tag.
   - Generates formatted release notes and CDN links.
   - Drafts a GitHub Release under your repository's Releases tab.
4. When you review and click **Publish Release** on GitHub:
   - The **Release Bot** (`.github/workflows/release.yml`) builds the assets and publishes the package to npm using your repository secret (`NPM_TOKEN`).

---

## Setting Up npm Automation (Optional)

1. Log in to [npmjs.com](https://www.npmjs.com/) and go to **Access Tokens**.
2. Generate an **Automation** token.
3. In this GitHub repository, navigate to:
   **Settings > Secrets and variables > Actions**.
4. Click **New repository secret**:
   - **Name**: `NPM_TOKEN`
   - **Secret**: `<paste your npm token>`
