[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/IDEMSInternational/parenting-app-ui.git)

# Parenting App UI

[Online Documentation](https://idemsinternational.github.io/parenting-app-ui/)


# Quickstart

## Prequisites

1. Download and install [Git](https://git-scm.com/downloads)  
   This will be used to download the repository

2. Download and install [Git LFS](https://git-lfs.github.com/)  
   Run `git lfs install` to set up Git LFS for your user account.
   This will be used to download any required binary assets, such as images or pdfs

3. Download and install [Node](https://nodejs.org/en/download/) 
   This is the programming lanugage required to run the project

4. Download and Install [Yarn](https://classic.yarnpkg.com/en/docs/install)  
   This manages all 3rd-party code dependencies

## Installation

### Download the repo with binary assets
```
$ git clone https://github.com/jfmcquade/ae-soils-app
```

### Install required dependencies
```
$ cd ae-soils-app
$ yarn install
```
Note - you may have to do this from time to time when content is updated)

## Configuration
### Set Deployment
The app supports using different workspace or deployment configurations. These are stored in [.idems_app/deployments](./.idems_app/deployments)

An initial deployment should be specified via the command
```
yarn scripts deployment set
```
For the AE App, select the `ae_soils` deployment.

### Firebase
To be able to run the full project a specific configuration file needs to be included to access
the online database and authentication methods.
```
$ cp src/environments/firebaseConfig.sample.ts src/environments/firebaseConfig.ts
```
The default file is blank and so some features may not be availabe (e.g. testing google sign-in)
It can be replaced with a version requested from the dev team.

(Note - this process will likely be simplified in the future)

## Running locally

### Start the local server
```
yarn start
```
This will start a local server and serve the app in your browser on http://localhost:4200

# For Content Coders

Please see [Quickstart Authors](https://idemsinternational.github.io/parenting-app-ui/authors/quickstart/)

# For Developers

Please see [Quickstart Developers]([/documentation/quickstart-developers.md](https://idemsinternational.github.io/parenting-app-ui/developers/quickstart/))
