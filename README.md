# NextJS Blog Template

# Get Started

# How to edit

To edit text on the webpage, navigate to folder config, open index.ts. This file contains text value for the entire website, stored in JSON format. The details and descriptions are specified in the file.

# How to upload

- To upload personal blogs, go to folder public/blogs, and add the markdown file of the blog.
- To upload images, go to folder public/images, and add images in customizable folders. When referencing images, note that the base directory is public. So referencing an image "public/images/logo.jpeg" will be "/images/logo.jpeg"
- IMPORTANT:
  - When uploading blogs, the markdown file must not have white space between the letters. For instance:
    - "my first blog post" is invalid.
    - "my-first-blog-post" is valid.
  - The markdown files must have a valid header, which includes:
    - title: the title of the blog post
    - order: the order in which the blog post appear. Smallest will be placed on the top left, largest will be placed on the bottom right.
    - thumbnailURL: Thumbnail of the blog post
    - thumbnailAlt: Description of the thumbnail. Useful when readers can't load thumbnail, this text will be displayed instead.
    - description: Short description of the blog post.

# Author

- [Wilson Le](https://wilsonle.me)
