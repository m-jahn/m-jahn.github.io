
## Repository for **[m-jahn.github.io](https://m-jahn.github.io)**

Follow the link above to browse my github.io page. Here are quick links to some of the featured content.

## Quick links

- [About this page](https://m-jahn.github.io/about/)
- [Resources for scientific projects](https://m-jahn.github.io/projects/)
- [My publications](https://m-jahn.github.io/publications/)
- [Curriculum vitae](https://m-jahn.github.io/CV/)


## About this page

This website is made with Jekyll and uses the [Alembic](https://alembic.darn.es/) theme. To use this theme as a simple starting point for a github page, check out [the Jekyll theme gem](https://alembic.darn.es/#as-a-jekyll-theme) or the [GitHub Pages remote theme](https://github.com/daviddarnes/alembic-kit/tree/remote-theme). 

Template content can be modified or new content added by creating a markdown document for a new page (`example.md`). The new markdown page needs to have a `yml` header specifying its name and page style:

```
---
title: My new page
layout: page
feature_image: "/png/example.png"
---
```

But that's not enough to make the page accessible through the menu. For this purpose we also need a menu entry in `_config.yml`, which looks like the following entry. Note that the url matches the name of the `*.md` document, not the page name.

```
# Header nav
navigation_header:
- title: Home
  url: /
- title: My new page
  url: /example/
```

The site can then be constructed and inspected locally before submitting to GitHub. This is done using `bundler`. In a linux terminal, run:

```
cd path/to/github.io-repo
sudo apt install bundler  

# install all ruby/gem dependicies
bundle install

# test page and follow the proposed link
bundle exec jekyll serve
```

## Issues

When running the command above results in an error message similar to that:
`cannot load such file -- webrick (LoadError)'

The solution is to add the webrick library by running this command in the terminal:

```
bundle add webrick
```