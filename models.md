---
layout: page
title: "Metabolic models"
permalink: /models/
feature_image: "/png/header/header_treemap_bw_blur.png"
feature_text: METABOLIC MODELS
---

- [*Cupriavidus necator* resource allocation model](#cupriavidus-necator-resource-allocation-model)
- [*Cupriavidus necator* genome scale model](#cupriavidus-necator-genome-scale-model)
- [*Synechocystis* resource allocation model](#synechocystis-resource-allocation-model)

### *Cupriavidus necator* resource allocation model

[Link to github repository with documentation](https://github.com/m-jahn/Bacterial-RBA-models)

<img src="https://github.com/m-jahn/Bacterial-RBA-models/raw/master/Ralstonia-eutropha-H16/figures/RBA_model_generation.png" width="100%" align="center"/>

This *resource balance analysis* (RBA) model was generated using the `RBApy` package from [Bulovic et al. (2019)](https://doi.org/10.1016/j.ymben.2019.06.001), using a genome scale metabolic model (GSM) originally developed by [Park et al., 2011](http://bmcsystbiol.biomedcentral.com/articles/10.1186/1752-0509-5-101). The original genome scale model was refactored and many reactions were curated and harmonized to community standards as e.g. available through the Bigg model database. The genome scale model that serves as base for the RBA model is described below.

The RBA model is an extension of a standard GSM where the solution space is constrained by many additional parameters. The topology of the metabolic network and its gene and reaction annotations are taken from the GSM. In a next step, enzymes and cellular 'machineries' are built based on data retrieved from uniprot. The model simulates all cellular processes from DNA replication, to transcription, translation and protein folding. The protein pool is limited so that the optimization of gene expression towards a specific objective (e.g. growth) becomes dependent on environmental parameters but also rate limitations. Catalytic efficiency of enzymes links enzyme abundance to maximal rate so that flux through the metabolic netowrk can not become infinitely high.

### *Cupriavidus necator* genome scale model

[Link to github repository with documentation](https://github.com/m-jahn/genome-scale-models)

<img src="https://github.com/m-jahn/genome-scale-models/raw/master/map.png" width="100%" align="center"/>

Genome scale metabolic model for *Ralstonia eutropha* a.k.a. *Cupriavidus necator* H16. The model was previously published in [Park et al., 2011](http://bmcsystbiol.biomedcentral.com/articles/10.1186/1752-0509-5-101). However the original model contained many errors or missing annotations and was therefore extensively manually curated. The full list of changes to the original model is documented on the models github repo. The original model, for example, showed flux through artificial energy generating cycles (see Fritzemeier et al., PLOS Comp Bio, 2017). After identification and removal of the following issues, no activity of such cycles was found anymore using FBA.

### *Synechocystis* resource allocation model

[Link to github repository with documentation](https://github.com/m-jahn/cell-economy-models)

<img src="/png/models_syn_cell_eco.png" width="80%" align="center"/>

Simplified *cellular economy model* for the simulation of fundamental processes in photo-autotrophic bacteria. The purpose of this models is not to reflect cellular behavior in its entire complexity, but rather to reduce complexity to an amount that still allows drawing significant conclusions while keeping the number of components and reactions as small as possible. The cellular economy model bundles fundamental processes in 'super-enzymes', single catalytic units that serve as proxies for similar pathways. Such coarse-grain models are useful to illustrate metabolic tradeoffs under different conditions without getting lost in details. The models are mixed-integer non-linear optimization (MINLP) problems, based on previous work by [Molenaar et al. (2009)](http://www.pubmedcentral.nih.gov/articlerender.fcgi?artid=2795476&tool=pmcentrez&rendertype=abstract) and [R. Burnap (2015)](http://journal.frontiersin.org/article/10.3389/fbioe.2015.00001/abstract).

Last updated: 2022-01-18

-----

{% include nav-share.html %}  