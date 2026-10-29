
## Repository for **[m-jahn.github.io](https://m-jahn.github.io)**

Follow the link above to browse my github.io page. Here are quick links to some of the featured content.

## Quick links

- [Short CV](https://m-jahn.github.io/categories/about/)
- [Scientific projects](https://m-jahn.github.io/categories/projects/)
- [Publications](https://m-jahn.github.io/categories/publications/)
- [Blog](https://m-jahn.github.io/categories/blog/)

## About this page

This website is made with Hugo and uses the [clean white theme](https://github.com/zhaohuabing/hugo-theme-cleanwhite). 

Template content can be modified or new content added by creating a markdown document for a new post in `content/post/<new-post>.md`. The new markdown page needs to have a `yml` header specifying its name and page style:

```yaml
---
layout:     post
title:      "template post"
subtitle:   "all fields included"
description: 
excerpt: 
date: 2015-01-01
author: Michael Jahn
image: 
tags:
  - News
URL: ""
categories: [ News ]
---
```

The site can be built and inspected locally before submitting to GitHub. This is done using `hugo` and predefined `pixi` tasks. In a linux terminal, run:

```bash
cd path/to/github.io-repo
pixi run live
```

To only build the page without starting the live server, run:

```bash
pixi run build
```
