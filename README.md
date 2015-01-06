EBO
===

EBO test front end client for development against. 

# Environment setup

To fully utilise some aspects of this project, such as end-to-end testing and auto parsing, a few pieces of third-party software are needed.

## Node.js

Download and install Node and NPM for your platform from the [Node.js website](http://nodejs.org/).

## Global dependencies

The following applications are needed to be installed globally. In Windows this can be acheived by opening Command Prompt in Administrator Mode. In Mac / Unix environments use the variant of `sudo` that suits your system.

* Gulp
* Bower
* Browser-sync
* Protractor

```
npm install -g gulp bower browser-sync protractor
```

## Installation

Firstly use NPM to install the node module dependencies from within the repository directory:

```
npm install
```

Then use Bower to install it's dependencies:

```
bower install
```

## Building and Running

You can use the Gulp commands to build the app:

```
gulp
```

And to run it in development mode:

```
gulp serve
```
