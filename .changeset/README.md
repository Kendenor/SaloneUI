# Changesets in SaloneUI

SaloneUI uses Changesets for 100% automated releases, changelog generation, and npm publishing.

## How it works for contributors

When making changes to components, documentation, or styles, run:
```bash
npx changeset
```
Select whether your change is a `patch`, `minor`, or `major` update, and enter a brief summary of the change.
Commit the generated `.changeset/*.md` file alongside your code in your pull request.

## How it works for releases (Maintainers)

You **never** need to create tags manually or type `npm publish`:
1. When pull requests with changesets merge into `main`, GitHub Actions automatically creates or updates a pull request named **"Version Packages"**.
2. When you merge the **"Version Packages"** pull request:
   - Changesets automatically bumps the version in `package.json`.
   - Generates and updates `CHANGELOG.md`.
   - Creates the git tag and GitHub Release.
   - Automatically publishes the new package to npm using `NPM_TOKEN`.
