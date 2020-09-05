---
layout: post
title: Latte pappa - myth or reality?
feature_image: /png/header/blog.png
---

My github activity is in free fall, my email response time is at least
two days, and my stress level is lower than usual. What has happened, am
I on vacation? Not quite, I’m in the middle of a five month parental
leave with my almost one year old daughter Sophie. So far it’s been a
joyful but also challenging time. Here are some thoughts about my own
parental leave, about the conditions here in Sweden, and a comparison
with other European countries.

-----

### Latte pappa?\!

How did I end up with **5 month of parental leave**? That might sound
like an awful lot, and even more so in countries where institutional
support for paternal leave is generally low. In Sweden, equal
opportunities (and duties) for all genders is strongly encouraged, there
is no specific maternal or paternal leave. The fact that dads can be
spotted everywhere roaming the playground with their phone in one hand
and a *latte* in the other (is that a word, latte?) gave rise to the
friendly neologism ‘latte pappa’. Personally, I chose to take five
months leave because it was in good agreement with my wife’s job
situation and I wanted to spend as much time with the baby as possible.
If this is above or below the Swedish average I actually didn’t know.
But read on to find out.

**How does it work in Sweden formally?** Both parents can **share up to
480 days of paid leave.** Of those 480 days, 390 are ‘fully’ paid based
on your pervious income (actually not fully but around 80%). The
remaining 90 days are a basic flat rate of 180 SEK per day (~18 €). You
can apply for support and **manage your account of days on line**. Not a
single sheet of paper required. Very convenient.

**For comparison, parental leave in Germany** is paid for up to 14
months (420 days) that parents can share, at around 60 % of your
previous income. A parent has to take at least two month to get the
benefit. I often hear from friends that the kid’s mother takes tvelve
months and the father just two, the bare minimum. We’ll have a look at
the actual statistics below. Application for parental leave is paper
based, requires you to hand in proof of your monthly income, and a
personal visit in the city hall is likely. Not so convenient.

### Parental leave in Sweden and the EU

I wondered how many mums and dads actually take parental leave in the
EU, and if the situation is different between member states. We can use
the fantastic ´eurostats´ R package to see if there is central data
available. There is\!

``` r
# attach packages
library(tidyverse)
library(eurostat)
library(lattice)
library(latticeExtra)
library(latticetools)
library(SysbioTreemaps)
```

-----

``` r
# search and download data from eurostats
search_eurostat("parental leave")
```

    ## # A tibble: 1 x 8
    ##   title code  type  `last update of… `last table str… `data start` `data end`
    ##   <chr> <chr> <chr> <chr>            <chr>            <chr>        <chr>     
    ## 1 Pers… lfso… data… 16.02.2019       27.02.2020       2010         2010      
    ## # … with 1 more variable: values <chr>

``` r
df <- get_eurostat("lfso_10lparlea", type = "label", stringsAsFactors = FALSE)
head(df)
```

    ## # A tibble: 6 x 8
    ##   unit    sex    age     duration  isced97          geo        time       values
    ##   <chr>   <chr>  <chr>   <chr>     <chr>            <chr>      <date>      <dbl>
    ## 1 Thousa… Femal… From 1… Zero mon… Pre-primary, pr… European … 2010-01-01   411.
    ## 2 Thousa… Femal… From 1… Zero mon… Upper secondary… European … 2010-01-01   356.
    ## 3 Thousa… Femal… From 1… Zero mon… First and secon… European … 2010-01-01    NA 
    ## 4 Thousa… Femal… From 1… Zero mon… No response      European … 2010-01-01    NA 
    ## 5 Thousa… Femal… From 1… Zero mon… All ISCED 1997 … European … 2010-01-01   817 
    ## 6 Thousa… Femal… From 1… From 3 t… Pre-primary, pr… European … 2010-01-01    NA

First I would like to take a lot at parental leave in Sweden, broken
down by gender, age, and education. We will sum up all people that did
parental leave regardless of the duration and look at the proportion of
men and women. We need to reshape the data a bit by excluding summary
values such as ‘all age grous’ or ‘all education levels’. We also
exclude ‘zero months’ duration because that means no parental leave was
taken, while we should include the ‘no response’ group ( where it’s not
clear how long people were absent from work).

``` r
# filter data for Sweden only, and remove summary values
df_swe <- filter(df,
  age != "From 15 to 64 years",
  geo == "Sweden",
  sex != "Total",
  isced97 != "All ISCED 1997 levels",
  duration != "Zero months",
  !is.na(values)
)

# abbreviate lengthy description
df_swe <- mutate(df_swe,
  age = gsub("From | years", "", age),
  education = c("tertiary", "no response", 
    "primary", "secondary")[factor(isced97) %>% as.numeric]
)
```

For the fun of it we can plot the data in a treemap representation. It’s
not ideal for every type of data but here it works fairly well. We plot
it using my
[**SysbioTreemaps**](https://github.com/m-jahn/SysbioTreemaps) R package
that can plot nested Voronoi and Sunburst treemaps from a `data.frame`.
Both representations tell the same story, that men and women take
equally often parental leave, although we do not know how long.

``` r
# generate treemaps
# ---------------------------------
# parental leave as Voronoi treemap
tm <- voronoiTreemap(
  data = df_swe,
  levels = c("sex", "age", "education"),
  cell_size = "values",
  shape = "circle",
  error_tol = 0.001,
  maxIteration = 200,
  positioning = "regular"
)
```

    ## Level 1 tesselation:  0.25 % mean error,  0.25 % max error,  200 iterations
    ## Level 2 tesselation:  0.07 % mean error,  0.1 % max error,  177 iterations
    ## Level 3 tesselation:  0.06 % mean error,  0.09 % max error,  65 iterations
    ## Level 3 tesselation:  0.06 % mean error,  0.1 % max error,  87 iterations
    ## Level 3 tesselation:  0.07 % mean error,  0.1 % max error,  177 iterations
    ## Level 2 tesselation:  0.06 % mean error,  0.1 % max error,  164 iterations
    ## Level 3 tesselation:  0.05 % mean error,  0.09 % max error,  51 iterations
    ## Level 3 tesselation:  0.07 % mean error,  0.1 % max error,  100 iterations
    ## Level 3 tesselation:  0.06 % mean error,  0.1 % max error,  124 iterations
    ## Treemap successfully created

``` r
# parental leave as Sunburst treemap
tm2 <- sunburstTreemap(
  data = df_swe,
  levels = c("sex", "age", "education"),
  cell_size = "values"
)
```

    ## Treemap successfully created

``` r
# draw generated treemaps
# ---------------------------------
drawTreemap(
  tm,
  label_level = 1:3, 
  label_size = 1.5,
  label_color = c(grey(0.95), grey(0.8), grey(0.5)),
  border_size = 8,
  legend = TRUE,
  title = "Number of parents taking leave for first kid, Eurostat 2010",
  layout = c(1, 2),
  position = c(1, 1)
)
```

    ## Warning in drawTreemap(tm, label_level = 1:3, label_size = 1.5, label_color =
    ## c(grey(0.95), : Use 'add = TRUE' if you want to add more treemaps to this page.

``` r
drawTreemap(
  tm2,
  label_level = 1, 
  label_color = grey(0.8),
  border_size = 5,
  legend = TRUE,
  title = "Number of parents taking leave for first kid, Eurostat 2010",
  layout = c(1, 2),
  position = c(1, 2), 
  add = TRUE
)
```

![](/png/2019-11-09-parental-leave_files/figure-gfm/unnamed-chunk-4-1.png)<!-- -->

-----

This data set is a good example for rich annotation because it contains
several variables of metadata that we can use to interrogate it. **We
can plot parental leave broken down by country, age, gender, duration**,
and so on. Or everything at once (that would be messy). I initially
wondered about mums and dads taking different duration of parental
leave, and assumed that **the gender gap might be smaller in Sweden than
in other EU contries**. Now it’s time to find out.

``` r
# filter for all EU countries and summary 
# values for age and education
df_mod <- filter(df,
  age == "From 15 to 64 years",
  !grepl("Euro", geo),
  sex != "Total",
  isced97 == "All ISCED 1997 levels",
  !duration %in% c("No response", "Ongoing", "Not applicable")
)

# change order of factor duration
df_mod <- mutate(df_mod,
  duration = factor(duration, unique(duration)[c(1,3,2,4,5)])
)

# turn absolute number of parents to relative
df_mod <- mutate(df_mod, geo = gsub(" .until.*", "", geo)) %>%
  group_by(geo, sex) %>%
  mutate(rel_frequency = 100*values/sum(values, na.rm = TRUE))

# parental leave 
xyplot(rel_frequency ~ factor(duration) | geo, 
  df_mod, col = c("orange", "#65CCF5"),
  groups = sex, as.table = TRUE,
  between = list(x = 0.4, y = 0.4),
  par.settings = custom.lattice(),
  xlab = "duration of parental leave",
  ylab = "relative frequency of parents",
  scales = list(alternating = FALSE, x = list(rot = 35)),
  panel = function(x, y, ...) {
    panel.grid(h = -1, v = -1, col.line = grey(0.9))
    panel.barchart(x, y, horizontal = FALSE, origin = 0, stack = FALSE, 
      border = NA, box.width = 0.8, ...)
    panel.key(c("female", "male"), col = c("orange", "#65CCF5"), pch = 15, 
      corner = c(0.9, 0.9))
  }
)
```

![](/png/2019-11-09-parental-leave_files/figure-gfm/unnamed-chunk-5-1.png)<!-- -->

Well, the result is… disappointing. The blue bars are dads taking
parental leave broken down by EU member state, and **the overwhelming
majority of men take no parental leave at all**. Sweden and Finland seem
to be the top countries regarding paternal leave. But even in Sweden,
most men don’t take parental leave and the number of dads that do drops
with increasing duration.

The surprising finding is that even **many mothers don’t take any
maternal leave**. Bulgaria, Cyprus, Denmark, Greece, Iceland, who takes
care of your babies during the first year? If you know the answer please
leave a comment. What is very well possible is that the data presented
here is outdated (2010) or that some groups are not accurately
annotated, e.g. if a member state doesn’t collect or report data on
duration of parental leave to Eurstat.
