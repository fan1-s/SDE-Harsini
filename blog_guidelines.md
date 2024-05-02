# Blog Posting Guidelines

Thank you for contributing to our blog! To ensure consistency and smooth integration into our platform, please adhere to the following guidelines when creating and uploading your blog posts.

### 1. File Structure:

- Your blog post should be saved in the `content` folder within the `src -> app` directory.
- The file name must follow the format: `FILE_NAME.mdx`.

### 2. Thumbnail Upload:

- Prior to posting your blog, upload the corresponding thumbnail image to the `public -> assets` folder.
- Organize your thumbnail image in a folder with a name of your choice within the `assets` directory.

### 3. MDX File Rules:

- Ensure that your MDX file does not contain any HTML tags. Our application does not support HTML tags, and including them may cause errors.
- Tables: If you have tables in your content, consider including them as images instead of using table formatting. This ensures that the tables are displayed correctly on our blog platform. You can attach table images directly to your blog post.

### 4. Meta Data Formatting:

Begin your MDX file with the following metadata block:
```yaml
---
title: 'Your Blog Post Title'
thumbnail: '/assets/your_folder_name/your_thumbnail_name.png'
author: 'Author Name'
publishDate: 'Month Day, Year'
---
```

#### Replace the placeholder values with the appropriate information:

- 'Your Blog Post Title': Replace with the title of your blog post.
- '/assets/your_folder_name/your_thumbnail_name.png': Provide the path to your uploaded thumbnail image.
- 'Author Name': Enter the name of the author.
- 'Month Day, Year': Specify the date when the post was published in the format: Month Day, Year (e.g., March 4th, 2023).

### 5. Additional Notes:
Double-check the accuracy of your file names and metadata entries to avoid errors during the posting process.
Ensure that all uploaded assets and files are named correctly and placed in their respective directories.
By adhering to these guidelines, you'll help maintain consistency and streamline the blog posting process.

Happy blogging!

