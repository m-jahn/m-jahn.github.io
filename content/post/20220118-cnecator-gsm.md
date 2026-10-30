---
layout:     post
title:      "Cupriavidus necator genome scale model"
subtitle:   "A curated genome-scale metabolic model for *Ralstonia eutropha* H16"
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

### Cupriavidus necator Genome Scale Model

We recently prepared a genome scale metabolic model for *Ralstonia eutropha* a.k.a. *Cupriavidus necator* H16. The model was previously published in [Park et al., 2011](http://bmcsystbiol.biomedcentral.com/articles/10.1186/1752-0509-5-101), but no defined genome scale model definition was published with this paper, except from a PDF description.

The original model in PDF format was later parsed and converted to SBML standard in a publication by [Peyraud et al., PLoS Pathogens, 12(10), 2016](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5061431/), discovering a resource allocation trade-Off between virulence and proliferation in the plant pathogen *Ralstonia solanacearum*.

Next, we built on the work from Peyraud et al. and further curated the model to correct errors and fill in missing annotations. The resulting model is available on our [GitHub repository](https://github.com/m-jahn/genome-scale-models).

<img src="https://github.com/m-jahn/genome-scale-models/raw/master/map.png" width="100%" align="center"/>

The original model contained many errors or missing annotations and was therefore extensively manually curated. The full list of changes to the original model is documented on the models github repo. The original model, for example, showed flux through artificial energy generating cycles (see Fritzemeier et al., PLOS Comp Bio, 2017). After identification and removal of the following issues, no activity of such cycles was found anymore using FBA.
