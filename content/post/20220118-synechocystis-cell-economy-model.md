---
layout:     post
title:      "Synechocystis resource allocation model"
subtitle:   "A simplified cellular economy model for photoautotrophic bacteria"
description:
excerpt:
date: 2022-01-18
author: Michael Jahn
image: 
tags:
  - Models
  - Metabolic modeling
URL: ""
categories: [ Models ]
---

### Purpose of the model

In order to study the fundamental processes in photo-autotrophic bacteria, we developed a simplified *cellular economy model* for the simulation of these processes.

The purpose of such models is not to reflect cellular behavior in its entire complexity, but rather to reduce complexity to an amount that still allows drawing significant conclusions while keeping the number of components and reactions as small as possible.

The cellular economy model bundles fundamental processes in 'super-enzymes', single catalytic units that serve as proxies for similar pathways. Such coarse-grain models are useful to illustrate metabolic tradeoffs under different conditions without getting lost in details.

Our cell economy model for Synechocystis is [available on GitHub](https://github.com/m-jahn/cell-economy-models).

<img src="/png/models_syn_cell_eco.png" width="80%" align="center"/>

The models are mixed-integer non-linear optimization (MINLP) problems, based on previous work by [Molenaar et al. (2009)](http://www.pubmedcentral.nih.gov/articlerender.fcgi?artid=2795476&tool=pmcentrez&rendertype=abstract) and [R. Burnap (2015)](http://journal.frontiersin.org/article/10.3389/fbioe.2015.00001/abstract).
