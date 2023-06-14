![GSSoC Logo Light](https://user-images.githubusercontent.com/63473496/213306239-9e8fc317-ce2f-4127-8bfe-17f5df06ee99.png#gh-light-mode-only)
![GSSoC Logo Dark](https://user-images.githubusercontent.com/63473496/213306279-338f7ce9-9a9f-4427-8c2a-3e344874498f.png#gh-dark-mode-only)

# Official website repository for the GirlScript Summer of Code 2023 (GSSoC'23)

GirlScript Summer Of Code is a three-month-long Open-Source Program conducted every summer by the Girlscript Foundation.  
With constant efforts, participants contribute to numerous projects under the extreme guidance of skilled mentors over these months. With such exposure, students begin to contribute to real-world projects from the comfort of their homes. GirlScript Summer Of Code has witnessed active participation over the years, and the 2023 edition aims to carry the legacy with a promising impact.
  
---
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  
- Subsequently this was designed from scratch purely using [TailwindCSS](https://tailwindcss.com/) framework and does not use any predefined UI library or design system.
- The brand palette and prototype was designed in [Figma](https://figma.com) and can be found **[HERE](https://www.figma.com/file/aXL6autoWxlLLqLyYTTLVB/GirlScript-Summer-of-Code?t=IGeoI4nib4u0ejJf-0)**

## Preview

[gssoc-website.webm](https://user-images.githubusercontent.com/63473496/213291499-67c96070-0a8a-4fd7-986d-e72b226a6be6.webm)

## Setting Up the Development Environment
Go through the documentation below or checkout the demo [video](https://drive.google.com/file/d/18_q00UQ_flt6HVRaezXU4vz9nWRp0v5c/view?usp=sharing) for ease.

First, install the node modules & dependencies:

```bash
npm i
# or
yarn
```
## Getting Started


Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  

## Project Structure  

```
.
├── .github
│   └── workflows
│       ├── gssoc-deploy.yml
│       └── contributors.yml
├── public/*
├── components/*
├── pages/*
├── styles/*
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── LICENCE
└── contributors.md
```
- [x] You can start editing the homepage by modifying `pages/index.js`. The page auto-updates as you edit the file.
- [x] All the other pages under the pages directory are a part of the sitemap and represent the different webpages in the website.
- [x] [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
- [x] The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
- [x] The various components used in the pages have been defined under `components` directory   
- [x] `public` directory contains all the assets used in the project (including images, certificates, graphics and logos)
The `styles/globals.css` file consists of all the custom css used apart from inline Tailwind styles.  

## Theming and Dual Modes

The website was designed to support both light and dark themes. It reads the current theme preference of the client browser and accordingly applies the state throughout the website.

### Light Mode  

<details> <summary>Toggle me to Preview!</summary>
  
![image](https://user-images.githubusercontent.com/83456083/236680082-9182439e-633a-4269-a5bb-9720c87a57b2.png) 
  
</details>

### Dark Mode  

<details> <summary>Toggle me to Preview!</summary>
  
![image](https://user-images.githubusercontent.com/83456083/236680214-b1f29e4a-bf08-496e-bbb3-8776c9f1c8cf.png)
  
</details>

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on GitHub pages  
The website in our case was deployed on GitHub pages using a custom workflow that can be found at `.github\workflows\gssoc-deploy.yml`  

At the time of writing this project, GitHub did not provide GitHub pages configuration for Next.js by default and thus, had to be deployed using the [next-pages](https://github.com/marketplace/actions/next-pages) workflow from the [Github Actions marketplace](https://github.com/marketplace?category=&query=&type=actions&verification=)

## Participating Projects List
![Project List](https://user-images.githubusercontent.com/63473496/213307997-43920dbd-3042-468b-97df-93d22f17e61b.png)

The list of participating projects for the GirlScript Summer of Code 2022 as well as in the previous editions is made available through the JSON Endpoint available **[HERE](https://opensheet.elk.sh/1OC5gOWCpUrDXI8HAPEM9iOohoznBfAVF9d-rSMO7FXM/JSON_EndPoint)** which is actually the raw version of the selected project list available in **[THIS](https://docs.google.com/spreadsheets/d/1OC5gOWCpUrDXI8HAPEM9iOohoznBfAVF9d-rSMO7FXM/edit#gid=0)** Google Sheet.

## Leaderboard

![Leaderboard](https://user-images.githubusercontent.com/63473496/213297009-6faeff7e-5e4b-442a-b67d-7a3de9c17dcd.png)

The leaderboard's backend is hosted in [Heroku](https://www.heroku.com/) and is developed in a separate repository which can be found **[HERE](https://github.com/girlscript/gssoc22-leaderboard-backend)**.  
This uses the [GitHub OctoKit SDK](https://github.com/octokit/octokit.js) documented **[HERE](https://github.com/octokit/octokit.js)** to fetch merged PR data for each contributor in the program and calculates their global rank as per labels assigned by the project owners/maintainers as per the following scoring system:  

![Discord Scoring System](https://user-images.githubusercontent.com/63473496/213296737-9da733f4-9a0c-4f26-b880-119227a092c4.png)

##### Note - The dynamic leaderboard was disconnected at the last date of the program at midnight (ie, 6/2/2022, 23:59:52 PM) and replaced using the static `json` of contributors' final ranking data. It can found at `pages\api\leaderboard.json`

## Onchain Certificate Verification  
![Certificate Verifier](https://user-images.githubusercontent.com/63473496/213298847-2c58c58b-e528-4807-b477-bcc7a6775cf1.png)

The website includes a feature of onchain certificate verification to provide convinient download of certificates for eligible participants in each role:
namely Top 100 Contributors, Top Mentors, Top Project Admins, Top Campus Ambassadors and the organising team. The data of eligible open-sourecerers can be checked under `pages\JSON` directory  

The smart contract and ABI used to achieve this can be found at `pages\JSON\Certificates.sol` and `pages\JSON\ABI.json` respectively.  

## Learn More on Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
