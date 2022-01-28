# Shopify Intern Application

## Goals

- Create a front-end to interact with one of NASA's APIs.

## Install

```
npm install
```

## Run

This application will run on PORT:3000

```
npm start
```

## Features

- This application allows you to search for the title of an image.
- Styled utilizing Material-UI v5 (MUI).
- Mobile responsive.
- Can like an image.
- Loader when waiting for API response

## Limitations

- Will only grab a small range of images. Future refactor to include a date-picker.
- API limitations. If encountered, replace the API key variable with "DEMO_KEY"
- Will not persist like state. Future refactor to include a back-end utilizing rails to track sessions and persist likes in the database.
