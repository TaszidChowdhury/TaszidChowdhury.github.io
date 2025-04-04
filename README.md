# Taszid Chowdhury - Personal Portfolio Website

Welcome to the official source code for **Taszid Chowdhury's personal portfolio website**. This interactive and professional website serves as a comprehensive showcase of Taszid's skills, projects, experiences, and technical expertise.

---

## 🌐 About the Website

This portfolio website is a modern, responsive, and highly customizable digital resume and project showcase built using **Jekyll** and styled with the **TeXt theme**. It is designed to introduce who Taszid is, what he does, and the work he's most proud of in an aesthetically pleasing and performance-optimized format.

---

## 👤 Who It’s For

This website is about and for **Taszid Chowdhury**, a Computer Science student with interests in:
- DevOps
- Cybersecurity
- Web Development
- Cloud Infrastructure
- Software Engineering
- Data Science and more

It is built to help:
- Recruiters find relevant skills and experience
- Collaborators learn about Taszid’s past and ongoing projects
- Professors and mentors access academic work and technical portfolios
- Visitors connect through provided links and contact options

---

## 🚀 Features

### ✨ Front-End Features

- **Responsive Layout:** Optimized for desktop, tablet, and mobile viewing.
- **Elegant Theming:** Built on the TeXt Jekyll theme with clean typography and iOS-inspired cards.
- **Homepage Highlights:**
  - Professional Introduction
  - Recent Projects & Featured Work
- **Project Portfolio Section:** Showcases major coding, research, and collaborative efforts.
- **Blog/Articles (optional):** Includes markdown-rendered posts (if enabled).
- **About Me Page:** Overview of Taszid’s background, interests, and values.
- **Resume Download Section** *(optional)*

### ⚙️ Back-End & Dev Features

- **Powered by Jekyll** - Static site generator that renders pages from Markdown and HTML.
- **Markdown Integration** - Easily add new blog posts or update project pages via Markdown files.
- **Custom Configuration** - `_config.yml` is tailored to personalize the theme.
- **Docker Support** - Includes a development-ready Dockerfile for local preview and CI integration.
- **Travis CI** - Setup for automatic deployment and linting checks.

---

## 🛠️ Tech Stack

- **Jekyll** (Static Site Generator)
- **HTML / CSS / Markdown**
- **TeXt Theme** (iOS-style interface)
- **GitHub Pages** (Deployment)
- **Docker** (Optional dev environment)
- **Travis CI** (Optional for continuous integration)

---

## 📂 Directory Structure Overview

```
.
├── _posts/              # Blog posts in Markdown
├── _layouts/            # HTML templates
├── assets/              # Images, CSS, JS
├── about.md             # About Me page
├── index.html           # Homepage
├── archive.html         # Archive listing
├── _config.yml          # Site-wide configuration
├── Dockerfile.dev       # Docker for local development
├── .travis.yml          # CI pipeline
```

---

## 🧪 Getting Started (Local Development)

1. **Install Jekyll** (see [official guide](https://jekyllrb.com/docs/installation/))
2. Clone this repo:
   ```bash
   git clone https://github.com/TaszidChowdhury/TaszidChowdhury.github.io.git
   cd TaszidChowdhury.github.io
   ```
3. Install dependencies:
   ```bash
   bundle install
   ```
4. Serve locally:
   ```bash
   bundle exec jekyll serve
   ```

Then visit `http://localhost:4000`

> **Tip:** You can also run the site using Docker:
```bash
docker build -f Dockerfile.dev -t taszid-portfolio .
docker run -p 4000:4000 taszid-portfolio
```

---

## 📦 Deployment

This site is deployed using **GitHub Pages**, which means any push to the `main` branch will automatically update the live site.

URL: [https://TaszidChowdhury.github.io](https://TaszidChowdhury.github.io)

---

## 📄 License

This website is licensed under the [MIT License](./LICENSE).

---

## 🤝 Contributions

While this is a personal project, suggestions for accessibility, performance, or security improvements are always welcome. Feel free to open an issue or pull request!

---

# [TeXt Theme](https://github.com/kitian616/jekyll-TeXt-theme)

---

## 📬 Contact

Want to connect? Reach out via:
- Email: [taszidchowdhury@gmail.com]
- LinkedIn:[Taszid Chowdhury](https://www.linkedin.com/in/taszid-chowdhury-42a37923b/)]
- GitHub: [https://github.com/TaszidChowdhury](https://github.com/TaszidChowdhury)

---

_Thank you for visiting my portfolio site!_
