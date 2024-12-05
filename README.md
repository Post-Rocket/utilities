![PostRocket logo](https://github.com/Post-Rocket/client/blob/main/assets/favicon/app.webp)
# *PostRocket:* General Utilities Codebase

[PostRocket](postrocket.app) is a company focused on automating social media posting.

## Table of content
- [*PostRocket:* General Utilities Codebase](#postrocket-general-utilities-codebase)
  - [Table of content](#table-of-content)
  - [Terms and conditions](#terms-and-conditions)
- [Instaling as a github submodule](#instaling-as-a-github-submodule)
  - [Installation](#installation)
  - [Update](#update)
- [Utilities](#utilities)

## Terms and conditions
By working with *PostRocket*, you are agreeing to the following term and conditions:
- This is a proprietary suite of softwares, tools, framework, design sytem, etc.
- Do not distribute, modify, sell unless consulted and agreed before by William Brendel (brendel.william@gmail.com)

# Instaling as a github submodule

## Installation

Go to your other repo you want this repo to be connected as a submodule and type:

    git submodule add https://github.com/Post-Rocket/utilities utilities
    git add .
    git commit -am "utilities submodule"
    git push

You may need to sudo the commands to get access rights.

## Update

Go to the repo where this module has been installed and type:

    git submodule update --init --recursive
    git submodule foreach --recursive git pull origin main
    git commit -am "utilities submodule"
    git push

You may need to sudo the commands to get access rights.

# Utilities

Client / Server utilities.