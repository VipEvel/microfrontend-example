# Microfrontend Example

This repository contains an example of a microfrontend architecture implemented using modern web technologies. The project demonstrates how to split a web application into multiple independently deployable and scalable microfrontends.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Microfrontends is an architectural style where independently deliverable frontend applications are composed into a greater whole. This example project showcases how to implement microfrontends using tools like Webpack, Module Federation, and single-spa.

## Features

- Modular architecture with microfrontends
- Independent deployment and scaling of frontend modules
- Seamless integration using Webpack Module Federation
- Example modules for demonstration

## Technologies

- **Webpack**: Module bundler used for packaging the frontend modules.
- **Module Federation**: Webpack plugin for sharing code and dependencies between microfrontends.
- **single-spa**: A JavaScript framework for front-end microservices that allows combining multiple microfrontends.

## Architecture

The project consists of multiple microfrontends, each with its own codebase, that are composed into a single application. Each microfrontend can be developed, tested, and deployed independently.

```bash
/microfrontend-example
     /root-main
     /header-mf
     /content-mf
     /footer-mf
```


- **root-main**: The main application shell that loads and orchestrates the microfrontends.
- **header-mf**: Example microfrontend Header.
- **footer-mf**: Example microfrontend Footer.
- **content-mf**: Example microfrontend Footer.

## Installation

To get started with the project, clone the repository and install the dependencies for each microfrontend and the container (in our case we are using one command).

```bash
git clone https://github.com/VipEvel/microfrontend-example.git
cd microfrontend-example

# Install dependencies for each module
npm run pkg:install
```

## Usage

To run the microfrontends locally, start the development server for each module (in our case we are using concurrently to run all in one command).

```bash
# Start the container
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or enhancements.

## Fork the repository
```bash
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add your feature')
Push to the branch (git push origin feature/your-feature)
Create a new Pull Request
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

