# Portfolio

All pages are managed inside pages folder
index.tsx is the home page of the root

Based on the lock file, run 
`yarn run dev` or `npm run dev`

1. In index.tsx
   1. Remove everything except the `<Head>`
   
2. Install tailwindCSS: Follow the steps in `https://tailwindcss.com/docs/guides/nextjs`
Install tailwindCSS Intellisense on VSCode

3. Build out the header
Create components folder
Install the ES7+ react extension 
Type in `tsrfc` which should intellisense with the react component outline
Social icons library: `npm install react-social-icons`
Framer-motion: `https://www.framer.com/motion/`

4. Tailwind CSS Background circles
Absolute allows for layering visual appearance
Lack of absolute cause it to be positioned such that it blocked the text
snap-center allows for the screen to remain centered. 
Set the parent to be snap-mandatory and h-screen
the child will snap center

5.  Creating the buttons
Add `button` and `Link` to the Hero.tsx
`z-20` on the div for Softwawre engineer which allows the buttons to work 

6. Creating the sections 
Add in the `h-screen` to get the screen to snap to the window

7. Missing "key" prop for element in iterator react/jsx-key in React
When you use map to render list of components you must provide a unique key prop to rendered component

8. Utilizing an array in React 
{projects.map((project , i) => ()}}

9. Install heroicons

10. Install React Hook Form

11. `...` means SPREAD. The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

12. For a custom scrollbar 
install --save-dev tailwind-scrollbar



## Things I learned
1. TailwindCSS installation
   1. You can add CSS very easily to whatever you want including React className
2. 
2. React
React implements an app shell model so a majority of the content is Client-side rendered (CSR)
Word press use PHP langauge and server-side rendering (SSR)
Static site generation/ Static rendering: re-rendering Javascript into HTML beforea browser requests the URL

3. SEO means search engine optimization (basically the visibility of your site)

4. Social Icon Library for React

5. CSS
   1. Two div elements: one placed below the other.
   2. sticky

6. Framer Motion is a React library for animations

7. React simple-typewriter library

8. Creating a CRUD application

9. Sanity.IO is a headless CMS that allows for changes to the website without editing the underlying code
    CMS= CONTENT MANAGEMENT SYSTEM
    Allows non-developers add things the site

10. heroicons package

11. React Hook Form

12. sanity creates a seperate set inside the project directory. Use the blog scheme predefined
    1.  Has it's own dependencies
    2.  Go to post and change name to pageInfo
    3.  GROQ query language : `*[_type == "skill"]
    4.  Put sanity/node_modules because git would think there are a lot of source control changes

13. API routing

14. next-sanity installation
    1.  cd .. because sanity folder has dependencies of its own

   import { createClient } from "next-sanity";
   import createImageUrlBuilder from "@sanity/image-url"

   export const config = {
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      projectID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      apiVersion: "2021-03-25",
      useCdn: process.env.NODE_ENV === "production"
   };

Create URL endpoints (see the getSocials.ts file)


15. typings.d.ts : type definitions
    1.  The interface is based off the results seen in the GROQ
    2.  getSocials had an error with Social until typings helped resolved it by setting up the type definition

16. create util folder for utility funcations that pull from the backend code (front end)
    1.  Create fetchSkills.ts etc.

17. Pull it into the frontend

18. The benefit of nextjs is you can use different types of rendering (serverside, static, etc.)
    1.  ISR (Incremental Static Regeneration): Middle ground. Static pages get regenerated periodically.
Summary: When we deploy, the data will be fetched, the page will be built and cached. It won't be constantly up to date.
Now we can add a revalidate flag.

19. In the header tag, we will add in social and tell the Header.ts Props that they can except a Social[].

20. Go to Social Icons and add in the mapping

21. Vercel: Popular site for front end developers to deploy their site

22. Eventually change the .env.local to the deployed URL so once localhost is closed it will still work.
Replaced

   SocialIcon 
      url="https://www.linkedin.com/in/raymondvoong/" 
      fgColor="gray" 
      bgColor="transparent" 

1.  ? when passing Props in accounts for scenario when it is undefined.



# TODO
Using image component in next.js to render images

Possibly create a backend for the ContactMe. Create a mail server.