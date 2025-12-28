# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

When we need to amend any thing !

firebase login --reauth

npm install -g firebase-tools

>>>>>>>>
git add .
git commit -m ""
git push --force origin main

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

use vpn please :
firebase init hosting
firebase use react-portfolio-d53aYb --add
npm run build
firebase deploy --only hosting
>>>>>>>>



في حال حدوث مشكلة بالكود لايقبل الاستضافة
Unable to fetch the CLI MOTD and remote config. This is not a fatal error, but may indicate an issue with your network connection.


name: Deploy to Firebase Hosting on merge
on:
  push:
    branches:
      - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js 20 LTS
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_REACT_PORTFOLIO_D53AB }}
          channelId: live
          projectId: react-portfolio-d53ab


          Run FirebaseExtended/action-hosting-deploy@v0
Verifying firebase.json exists
Setting up CLI credentials
Deploying to production site
  /opt/hostedtoolcache/node/18.20.8/x64/bin/npx firebase-tools@latest deploy --only hosting --project react-portfolio-d53ab --json
  npm warn exec The following package was not found and will be installed: firebase-tools@14.17.0
  npm warn EBADENGINE Unsupported engine ***
  npm warn EBADENGINE   package: 'firebase-tools@14.17.0',
  npm warn EBADENGINE   required: *** node: '>=20.0.0 || >=22.0.0' ***,
  npm warn EBADENGINE   current: *** node: 'v18.20.8', npm: '10.8.2' ***
  npm warn EBADENGINE ***
  npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead
  Firebase CLI v14.17.0 is incompatible with Node.js v18.20.8 Please upgrade Node.js to version >=20.0.0 || >=22.0.0
  
  The process '/opt/hostedtoolcache/node/18.20.8/x64/bin/npx' failed with exit code 1
  Retrying deploy with the --debug flag for better error output
  /opt/hostedtoolcache/node/18.20.8/x64/bin/npx firebase-tools@latest deploy --only hosting --project react-portfolio-d53ab --debug
  Firebase CLI v14.17.0 is incompatible with Node.js v18.20.8 Please upgrade Node.js to version >=20.0.0 || >=22.0.0
  
  The process '/opt/hostedtoolcache/node/18.20.8/x64/bin/npx' failed with exit code 1
  Error: The process '/opt/hostedtoolcache/node/18.20.8/x64/bin/npx' failed with exit code 1
  ***
    conclusion: 'failure',
    output: ***
      title: 'Deploy preview failed',
      summary: "Error: The process '/opt/hostedtoolcache/node/18.20.8/x64/bin/npx' failed with exit code 1"
    ***
  ***