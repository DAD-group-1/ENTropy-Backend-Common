# @dad-group-1/backend-common

This package contains common utilities, DTOs, and configurations for the ENTropy microservices architecture. It is published to the GitHub Packages registry.

## How to use this package in other repositories

Since this package is hosted on GitHub Packages (instead of the public npm registry), you need to authenticate with GitHub using a Personal Access Token (PAT) before you can install it in other microservices or repositories.

### 1. Create a GitHub Personal Access Token (PAT)

1. Go to your GitHub account settings.
2. Navigate to **Developer settings** > **Personal access tokens** > **Tokens (classic)**.
3. Click **Generate new token (classic)**.
4. Give your token a descriptive name (e.g., `npm-packages-read`).
5. Under scopes, select at least the **`read:packages`** permission. (If you plan to publish packages, you'll also need `write:packages`).
6. Click **Generate token** and copy the token value immediately. *(You won't be able to see it again!)*

### 2. Create an `.npmrc` file

In the root of the project where you want to use this package (e.g., inside one of your microservices), create an `.npmrc` file. This tells npm where to look for `@dad-group-1` scoped packages and how to authenticate.

Create `.npmrc` and add the following:

```ini
@dad-group-1:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```
> **Warning**: Replace `YOUR_GITHUB_TOKEN` with the actual token you generated in Step 1. 
> 
> **Important**: Do **NOT** commit the `.npmrc` containing your actual token to version control. Add `.npmrc` to your `.gitignore` file, or set the token using an environment variable locally (e.g., `//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}`).

### 3. Install the package

Once authenticated, you can install the package just like any other npm package:

```bash
npm install @dad-group-1/backend-common
```

or for the latest version:

```bash
npm install @dad-group-1/backend-common@latest
```

## Publishing a new version

To publish a new version of this package from the `ENTropy-Backend-Common` folder:

1. Guarantee your terminal is authenticated with a token holding `write:packages`.
2. Update the code.
3. Run the release script:
   ```bash
   npm run release
   ```
   *Note: This will build the TS code, update the version (`standard-version`), create a Git tag, push it to the repo, and publish the package to GitHub Packages.*

