# Alumni Page Template Instructions

This guide explains how to use the templates in this folder to create a new alumni page for a bootcamp cohort. The bootcamp's alumni page will use JSON data to generate cards for alumni.

## Files in this folder

- `template-alumni-page.html` - The HTML structure for your alumni page
- `template-alumni.css` - Custom CSS file for bootcamp-specific styling
- `template-json-file.json` - JSON data file containing alumni information

## Step-by-Step Instructions

### 1. Add your bootcamp to the main index page

Before creating your alumni page, add a card for your bootcamp to the main website homepage (`/index.html`).

1. Open `/index.html`
2. Find the `<div class="bootcamp-list__cards grid">` section
3. Add a new bootcamp card using this structure:

```html
<a
    href="./bootcamps/[bootcamp-name]/[YYYY-MM]/index.html"
    class="card bootcamp-card"
>
    <div class="card__hero">
        <img
            src="./assets/[YYYY-MM-bootcamp]/[photo-name].jpg"
            alt="A collage of developers during the [bootcamp name]."
            class="card__hero-image"
        />
    </div>
    <div class="card__body">
        <h3 class="card__name">[Bootcamp Name] - [Month Year]</h3>
        <p class="card__description">
            [Brief description of the bootcamp and what students learned]
        </p>
    </div>
</a>
```

**Replace the following:**

- `[bootcamp-name]` - e.g., `software-development-foundations`
- `[YYYY-MM]` - e.g., `2025-10`
- `[YYYY-MM-bootcamp]` - e.g., `2025-10-foundation`
- `[photo-name].jpg` - Name of your hero image file
- `[Bootcamp Name]` - e.g., "Software Development - Foundations"
- `[Month Year]` - e.g., "October 2025"
- `[Brief description...]` - A short paragraph describing the bootcamp

**Add the hero image:**

- Place a hero/cover image for your bootcamp in `/assets/[YYYY-MM-bootcamp]/`

### 2. Create the folder structure

Create a new folder for your bootcamp cohort:

```
/bootcamps/[bootcamp-name]/[YYYY-MM]/
```

Example: `/bootcamps/software-development-foundations/2025-10/`

### 3. Copy and customize the HTML file

1. Copy `template-alumni-page.html` to your bootcamp folder
2. Rename it to `index.html`
3. Update the following sections:

**In the `<head>` section:**

- Change the `<title>` to your bootcamp name (e.g., "Software Development - Foundations")
- Add your custom CSS file link (see step 3)

**In the `<body>` section:**

- Update the `bootcamp__title` and `bootcamp__subtitle` with your bootcamp name
- Replace the bootcamp description paragraph with your cohort's bootcamp description
- Change the alumni list title (e.g., "Meet the Alumni of October 2025")
- Update the `data-json-file` attribute to point to your JSON file (e.g., `./2025-10-foundations.json`)
- Add the group photo in the "Connect with us" section if available, putting the photo in /assets/YYYY-MM-bootcamp/

### 4. Create the CSS file

1. Copy `template-alumni.css` to `/css/alumni/`
2. Rename it to match your cohort (e.g., `2025-10-foundations.css`)
3. Link this file in your HTML file's `<head>` section:
    ```html
    <link rel="stylesheet" href="../../../css/alumni/2025-10-foundations.css" />
    ```
4. Add custom card styles for individual alumni if desired

### 5. Create the JSON data file

1. Copy `template-json-file.json` to your bootcamp folder
2. Rename it to match your cohort (e.g., `2025-10-foundations.json`)
3. Add an entry for each alumnus with the following fields:
    - `name` - Name
    - `role` - Current or desired job title
    - `github` - GitHub profile URL
    - `linkedin` - LinkedIn profile URL
    - `photo` - Path to profile photo (e.g., `/assets/2025-10-foundation/profile_photos/yourname.jpg`)
    - `description` - Brief bio or statement
    - `portfolio_link` - Personal website or portfolio URL
    - `technologies` - Array of skills/technologies

### 6. Add profile photos

1. Create a folder for your cohort's photos in `/assets/[YYYY-MM-bootcamp]/profile_photos/`
2. Add individual profile photos (use consistent naming like `firstname-lastname.jpg`)
3. Use the correct path in your JSON file

### 7. Test your page

1. Open your `index.html` file in a browser
2. Verify all alumni cards display correctly
3. Check that all links work properly
4. Ensure the styling looks correct

## Naming Conventions

- **Folders**: Use lowercase with hyphens (e.g., `software-development-tfs`)
- **Dates**: Use YYYY-MM format (e.g., `2025-10`)
- **CSS files**: Format as `YYYY-MM-bootcamp-branch.css` (e.g., `2025-09-tfs.css`)
- **JSON files**: Format as `YYYY-MM-bootcamp-branch.json` (e.g., `2025-09-tfs.json`)

## Example Structure

```
bootcamps/
└── software-development-foundations/
    └── 2025-10/
        ├── index.html
        └── 2025-10-foundations.json

css/
└── alumni/
    └── 2025-10-foundations.css

assets/
└── 2025-10-foundation/
    └── profile_photos/
        ├── john-doe.jpg
        └── jane-smith.jpg
```

## Need Help?

If you encounter any issues, check existing alumni pages in the `/bootcamps/` folder for reference examples.
