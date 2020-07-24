# A statically generated blog example using Next.js and esa

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [esa](https://esa.io/) as the data source.

## Demo

### [https://next-blog-esa.now.sh/](https://next-blog-esa.now.sh/)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [Blog Starter](/examples/blog-starter)

## How to use

Execute [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npm init next-app --example cms-esa cms-esa-app
# or
yarn create next-app --example cms-esa cms-esa-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/cms-esa
cd cms-esa
```

## Configuration

### Step 1. Create an account and a team on esa

First, [create an account on esa](https://esa.io/).

After creating an account, create a **new team** from the dashboard and assign any name to it.

### Step 2. Populate Content

### Step 3. Set up environment variables

From the dropdown next to the project name, click **API Keys**.

Create a new API Key with the **Read** permission.

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `ESA_API_TOKEN` should be the API token you just copied.
- `ESA_TEAM` should be the team name, which is a subdomain in the esa URL: `https://<team>.esa.io/`

Your `.env.local` file should look like this:

```bash
ESA_API_TOKEN=...
ESA_TEAM=...
```

### Step 4. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 5. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.
