# BuildFast

Build your Landing page in hours, not days. The NextJS boilerplate with all you need to build your SaaS product Landing page. Super easy to customize.

## Table of Contents
- About BuildFast
- Getting Started
- Project Structure
- Customization
- API Routes
- Environment Variables
- Learn More
- Deploy on Vercel

## About BuildFast

BuildFast is a Next.js boilerplate designed to help you build your SaaS product landing page quickly and efficiently. It comes with all the essential features and is super easy to customize.

## Getting Started

First, clone the repository:
```bash
git clone https://github.com/chiragksharma/BuildFast.git
cd BuildFast
```
Install the dependencies:
```bash
npm i
# or
yarn install
# or
pnpm install
# or
bun install
```
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
The project structure is as follows:
- `src/app/`: Contains the main application components.
- `src/components/`: Contains reusable UI components.
- `src/config/`: Contains configuration files, including siteConfig.json.
- `src/context/`: Contains React context providers.
- `src/customTypes/`: Contains custom TypeScript types.
- `src/hooks/`: Contains custom React hooks.
- `src/pages/`: Contains Next.js pages and API routes.
- `src/styles/`: Contains global styles and Tailwind CSS configuration.
- `src/utils/`: Contains utility functions.

## Customization

You can easily customize the entire landing page using the `siteConfig.json` file located in the `src/config/` directory. This file contains all the customizable content and settings for the landing page.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Steps to Easily Deploy to Vercel 🚀🚀

1. **Login to Vercel**
   Run the following command to log in to Vercel:

    ```sh
    npx vercel login
    ```

    This will prompt you to authenticate using a variety of methods:
    ```
    ? Log in to Vercel (Use arrow keys)
    ❯ Continue with GitHub
    Continue with GitLab
    Continue with Bitbucket
    Continue with Email
    Continue with SAML Single Sign-On
    ─────────────────────────────────
    Cancel
    ```

    After you’ve successfully authenticated, you should see a message like the following in your terminal:

    ```
    ? Log in to Vercel Continue with GitHub
    > Success! GitHub authentication complete for hello@example.com
    ```
    Congratulations! You are now logged in. In order to deploy something, run vercel.

 2. **Create and Deploy Vercel Project**

    Run the following command to create and deploy your Vercel project:
    ```
    npx vercel
    ```
    This will initiate a prompt to set up a Vercel project. Once you get to the step where it asks you if you want to link to an existing project, enter `y/n` accordingly if you want to create a new project or link to an exsisting project.
    Then, select your project and deploy it to the project. Follow the prompts to complete the deployment process. 
   
    Wohoo !! Congratulations you successfully deployed your landing page 🥳
    


