# SaloneUI Release Guide

SaloneUI provides 100% automated releases, changelog generation, and npm publishing via Changesets. You **NEVER** need to create tags manually or type `npm publish`.

---

## Method 1: 100% Automated Releases with Changesets (Recommended)

This workflow is fully hands-off:

### Step 1: Add a Changeset
Whenever you make changes, fix bugs, or add components, generate a changeset in your branch/PR:
```bash
npx changeset
```
Follow the interactive prompt:
- Choose change type: `patch` (bug fixes), `minor` (new features/components), or `major` (breaking changes).
- Enter a short description of the changes.
- Commit the generated `.changeset/*.md` file with your code.

### Step 2: Merge Your Pull Request
When your PR merges into `main`, GitHub Actions (`.github/workflows/changesets.yml`) automatically opens or updates a PR titled **"Version Packages"**.

### Step 3: Merge "Version Packages" to Release
Whenever you are ready to ship:
1. Open the **"Version Packages"** PR on GitHub.
2. Click **Merge**.
3. **Everything else happens automatically**:
   - The version in `package.json` is updated.
   - `CHANGELOG.md` is updated with your commit notes.
   - The git tag (e.g., `v1.2.1`) is created automatically.
   - The GitHub Release is published with release notes.
   - The package is published directly to npm using the `NPM_TOKEN` secret.

---

## Method 2: Manual 1-Command Release (Fallback)

If you ever prefer to trigger a release directly from your local terminal:

```bash
# For a bug fix (e.g., 1.2.0 -> 1.2.1):
npm version patch && git push origin main --tags

# For a new feature (e.g., 1.2.0 -> 1.3.0):
npm version minor && git push origin main --tags
```
The tag push will trigger `.github/workflows/prepare-release.yml` and `.github/workflows/release.yml`.

---

## Setting Up npm Automation (Optional)

1. Log in to [npmjs.com](https://www.npmjs.com/) and go to **Access Tokens**.
2. Generate an **Automation** token.
3. In this GitHub repository, navigate to:
   **Settings > Secrets and variables > Actions**.
4. Click **New repository secret**:
   - **Name**: `NPM_TOKEN`
   - **Secret**: `<paste your npm token>`
