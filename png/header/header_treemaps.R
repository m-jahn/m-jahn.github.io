# GENERATE TREEMAP HEADERS
#
# author:  Michael Jahn
# date:    2020-05-08
#
# Script to generate Voronoi treemap header images using the SysbioTreemaps package
#
# ------------------------
# load libraries
#
#require(devtools)
#devtools::install_github("https://github.com/m-jahn/SysbioTreemaps")
library(SysbioTreemaps)
library(viridisLite)

# generate some fake data
df <- data.frame(
  cells = sample(letters, 1000, replace = TRUE),
  size = 7-log(1:1000)
)

# generate a horizontal treemap
tm <- voronoiTreemap(
  data = df,
  levels = "size",
  cell_size = "size",
  positioning = "random",
  shape = list(
    x = c(0, 1600, 1600, 0),
    y = c(0, 0, 500, 500)),
  maxIteration = 200,
  error_tol = 0.001
)

# export tm for later plotting
save(tm, file = "tm.Rdata")

# plot with different colors
for (theme in c("A", "B", "C", "D", "E")) {
  filename <- paste0("header_random_", theme, ".png")
  png(filename, width = 1776, height = 1776, res = 100)
  drawTreemap(
    tm, color_type = "cell_size",
    color_palette = viridis(100, option = theme, end = 0.9),
    border_size = 1,
    border_color = "#150052",
    label_level = NULL
  )
  dev.off()
}
