[![Travis build status](https://api.travis-ci.org/thatAKGuy/EBO.svg?branch=master)](https://travis-ci.org/thatAKGuy/EBO)

EBO
===

EBO test front end client for development against. 

## Environment setup

To fully utilise some aspects of this project, such as end-to-end testing and auto parsing, a few pieces of third-party software are needed. The project will run on port `32879` so ensure that this port is available on your system.

### Node.js

Download and install Node and NPM (NPM is included in the Node.js Package) for your platform from the [Node.js website](http://nodejs.org/download/).

#### A note for Windows users

One (or more) of the packages we utilise in this project relies upon a cross-platform development script: [node-gyp](https://github.com/TooTallNate/node-gyp). In a Windows environment, this script requires a .NET framework to be installed and Python `v2.7.3`. Information on this can be found at the [node-gyp Github page](https://github.com/TooTallNate/node-gyp).
For convenience we have provided the links below:

* Python [`v2.7.3`](http://www.python.org/download/releases/2.7.3#download)
* .NET Framework [`v2.0`](http://www.microsoft.com/en-gb/download/details.aspx?id=1639) or [above](http://www.microsoft.com/net/downloads)

### Global dependencies

The following applications need to be installed globally. 

* [Gulp](https://github.com/gulpjs/gulp)
* [Bower](https://github.com/bower/bower)
* [Browser-sync](https://github.com/shakyShane/browser-sync)
* [Protractor](https://github.com/angular/protractor)

The easiest way to install these programs is by pasting the line below into your command prompt / terminal. **Note**: these scripts *must* be installed using elevated privileges. In Windows this can be acheived by opening Command Prompt in Administrator Mode. In Mac / Unix environments use the variant of `sudo` that suits your system.

```
npm install -g gulp bower browser-sync protractor
```

### Installation

*The following commands should be run in your Command Prompt / Terminal from within the directory that you extracted the repository*

Firstly use NPM to install the node module dependencies:

```
npm install
```

Then use Bower to install it's dependencies:

```
bower install
```

### Building and Running

You can use the Gulp commands to build the app:

```
gulp
```

And to run it in development mode:

```
gulp serve
```

### Testing

Full e2e live automated testing is available through

```
gulp pro:all
```
This will allow BrowserSync to update your test environment and run unit tests & e2e tests when Gulp notices changes in source files.
