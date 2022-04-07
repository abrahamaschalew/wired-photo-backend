# Wired Photo Backend

## Description

Node.Js server application built for [Wired Photo](https://github.com/abrahamaschalew/wired-photo) to serve images.

## Requiremnts

- Node.JS

## Setup

```bash
    git clone https://github.com/abrahamaschalew/wired-photo-backend.git wired-photo-backend
    cd wired-photo-backend
    npm i
    npm run start
```

### API End Points

These endpoints allow you to get images and get file names.

#### GET

`GET FileNames`

Request

`GET /files`

Response

> `HTTP Status Code (200)`

```json
{
    "files": [
        "7835fdcf15720539f4db0bcb647f5384.jpg",
        "Dog Ross takes a selfie.jpeg",
        "2bfebe397a40a73c3fc167d98e68896e.jpg",
        "3efb2b98050b19aef5563ccc9d763e2e.jpg",
        "936bb9d3afdd96151a52a9e9724b2f17.jpg",
        "Why is his hair perfect than mine 🤣🤣.jpeg",
        ...
    ]
}
```

After you know how many file you can get from the server. You can iterate each of them to get them as image.

#### GET

`GET FileName`

Request

`GET /{filename}`

Response

Image file
