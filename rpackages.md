---
layout: page
title: "R packages"
permalink: /rpackages/
feature_image: "/png/header/header_random_B.png"
---

### lattice-tools

[Link to github repository with documentation](https://github.com/m-jahn/lattice-tools)

This package contains panel functions and wrapper functions for the **R lattice package**, a general purpose plotting package from Deepayan Sarkar. Lattice’s functionality is comparable to the popular ggplot2 package but has a slightly different look and feel. The functions collected here were added over time and might not always adhere perfectly to the lattice conventions. However some care was taken to replicate the original lattice behavior so that users can use grouping and paneling as they are used to. Feel free to copy, fork or source functions that you find useful. Contributions welcome!

**Installation**

To install the package directly from github, use this function from
`devtools` package in your R session:

``` r
require(devtools)
    devtools::install_github("https://github.com/m-jahn/lattice-tools")
```

**Examples**

***panel.barplot***

Draw barplot with error bars in lattice plots. This custom panel function for lattice plots allows to draw barplots with error bars for
arbitrary groups of data points. Error bars will be drawn for groups of identical x values with optional subsetting by grouping or paneling
variables.

``` r
library(latticetools)
library(lattice)
data(mtcars)

# we can use a grouping variable similar to other lattice panel functions
xyplot(mpg ~ factor(cyl), mtcars, 
  groups = cyl, lwd = 2,
  panel = function(x, y, ...) {
    panel.barplot(x, y, ...)
  }
)
```

<img src="https://github.com/m-jahn/lattice-tools/raw/master/vignettes/README_files/figure-gfm/unnamed-chunk-4-2.png" align="center" width="80%"/>

***panel.directlabel***

Point labels for scatterplots. Draw text labels for all points of a scatterplot using functions from directlabels. In contrast to the
functionality of the original `directlabels` package, *every point* is labelled instead of groups. Labels are also independent from the
grouping variable, so that e.g. colors indicate a grouping variable and labels another. By default, labels adapt the graphical parameters of the higher level plot, including coloring according to groups. However, many parameters can be customized.

``` r
library(grid)
library(lattice)
library(directlabels)

data("mtcars")
mtcars$car <- rownames(mtcars)

# A standard example using lattice grouping and paneling;
# We can also draw boxes around labels and change label size
xyplot(mpg ~ wt | factor(cyl), mtcars,
  groups = cyl, pch = 19, labels = mtcars$car,
  as.table = TRUE, layout = c(3, 1), cex = 0.6,
  panel = function(x, y, ...) {
    panel.xyplot(x, y, ...)
    panel.directlabel(x, y, draw_box = TRUE, box_line = TRUE, ...)
  }
)
```

<img src="https://github.com/m-jahn/lattice-tools/raw/master/vignettes/README_files/figure-gfm/unnamed-chunk-6-1.png" align="center" width="80%" />


### SysbioTreemaps

[Link to github repository with documentation](https://github.com/m-jahn/SysbioT  reemaps)

Generate and plot **Voronoi treemaps** or **Sunburst treemaps** from hierarchical data. Treemaps are a visually appealing graphical representation of numerical data using a space-filling approach. A plane or ‘map’ is subdivided into smaller areas called cells. The cells in the map are scaled according to an underlying metric which allows to grasp the hierarchical organization and relative importance of many objects at once. This package contains two different implementations of treemaps, Voronoi treemaps and Sunburst treemaps.

**Installation**

The C++ code computing the actual Voronoi tesselation requires the [CGAL](https://www.cgal.org/download.html) headers. This requirement is now satisfied with the R package [cgal4h](https://cran.r-project.org/web/packages/cgal4h/index.html) so that local installation of CGAL is no longer required. 

To install the package directly from github, use this function from the `devtools` package in your R session:

``` r
require(devtools)
devtools::install_github("https://github.com/m-jahn/SysbioTreemaps")
```

**Examples**

The functions to create Voronoi (or Sunburst) treemaps take a `data.frame` as main input. The `data.frame` should contain column(s)
with numerical or categorical data (i.e. a character vector).

``` r
library(SysbioTreemaps)

df <- data.frame(
  A = rep(c("a", "b", "c"), each = 15),
  B = sample(letters[4:12], 45, replace = TRUE),
  C = sample(10:100, 45)
)

tm <- voronoiTreemap(
  data = df,
  levels = c("A", "B", "C"),
  cell_size = "C",
  shape = "rounded_rect"
)

drawTreemap(tm, title = "treemap 1", 
  color_type = "categorical", color_level = 1, 
  layout = c(1,3), position = c(1, 1))

drawTreemap(tm, title = "treemap 2",
  color_type = "categorical", color_level = 2, border_size = 3,
  add = TRUE, layout = c(1,3), position = c(1, 2))

drawTreemap(tm, title = "treemap 3",
  color_type = "cell_size", color_level = 3,
  color_palette = heat.colors(10),
  border_color = grey(0.4), label_color = grey(0.4),
  add = TRUE, layout = c(1,3), position = c(1, 3),
  title_color = "black")
```

<img src="https://github.com/m-jahn/SysbioTreemaps/raw/master/vignettes/png/unnamed-chunk-7-1.png" width="100%" style="display: block; margin: auto;" />

-----

{% include nav-share.html %}