# Markdown Image Hosting

Host all your local markdown image links and use your markdown anywhere.

## Description

You can now use your markdown file directly on any blogging platform 😃 without the hustle of uploading/selecting each image manually 💻.

## Getting Started

### Dependencies

- node

### Installing

Install the app. It will install all your dependencies.

```
npm install
```

Start the app and specify the markdown file in the arguments

```
npm start blog/my-blog.md
```

The parser will parse the markdown files and search for all the images links like `![my-image](./images/image1.png)`.

Please note that all the local image links should be correct. It's recommended that both the markdown file and the images should be under same **dir**

![output](./snap-output.jpg)

Now all the images link will be updated with the new one (hosted one).

## Help

If some error occurred try opening your markdown before hosting to check all images path are correct. Try keeping markdown and images files under same dir and then give the markdown path to the app.

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details
