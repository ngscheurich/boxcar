# Boxcar

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> You’re not punk, and I’m telling everyone.

## Table of Contents

* [Install](#install)
* [Overview](#overview)
* [Maintainers](#maintainers)
* [Contribute](#contribute)
* [License](#license)

## Install

First make sure you have the following installed:

* Ruby 2.4.x
* PostgreSQL 9.6.x
* Node 6.10.x
* Yarn (or NPM)

After cloning the application and changing to its directory, you’ll want to run
the setup script:

```
% bin/setup AppName app_name
```

This will:

* Install application dependencies
* Create your database
* Inject your app name into files where appropriate

That’s all there is to it. Spin up a server on http://localhost:3000 and
start hacking:

```
% bin/rails server
```

## Overview

Boxcar is an opinionated collection of content management and software
development tools all bundled together and ready for you to start building
client sites on top of.

It’s powered by a some awesome open source projects:

* [Ruby on Rails](http://rubyonrails.org/), a web application framework
  that you may have heard of.
* [Trestle](https://trestle.io/), a powerful, customizable admin framework
  that makes content management a snap.
* [Breakfast](http://breakfast.devlocker.io/), a project that integrates
  modern JavaScript tooling (by way of [Brunch](http://brunch.io/)) into
  your Rails app.

There are a handful of useful Ruby libraries included; check the Gemfile
to see what’s what.

Boxcar also comes loaded with some frontend libraries set up and ready for
action:

* [Turbolinks](https://github.com/turbolinks/turbolinks)
* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)

Finally, some tools are configured and in place to help check your work:

* [RuboCop](https://github.com/bbatsov/rubocop)
* [ESLint](https://eslint.org/)
* [stylelint](https://stylelint.io/)

## Deployment

Boxcar can easily be deployed to [Heroku](https://www.heroku.com/), assuming
you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
installed.

First, run `bin/heroku_setup your-app-name`; this script will set you up with
two Heroku apps (one for staging and one for production) with Heroku
PostgreSQL instances attached and in a development pipeline.

From then on, you can `bin/deploy` to deploy to staging and `heroku
pipelines:promote -r staging` to promote the staging app to production.

## Maintainers

[@ngscheurich](https://github.com/ngscheurich)

## Contribute

PRs accepted, *however* this is an admittedly opinionated framework based
on what I use at [work](http://theadvocate.com) to get projects built
quickly and with a high level of confidence. If you’re looking to make big
changes to workflow or tooling you should fork the project.

Small note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme)
specification.

## License

MIT © 2017 N. G. Scheurich
