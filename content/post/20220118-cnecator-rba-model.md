---
layout:     post
title:      "Cupriavidus necator resource allocation model"
subtitle:   "A genome-informed RBA model for a versatile lithoautotroph"
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

### Purpose of RBA models

The *resource balance analysis* (RBA) model is an extension of a standard genome scale model (GSM) where the solution space is constrained by many additional parameters. The topology of the metabolic network and its gene and reaction annotations are taken from the GSM. In a next step, enzymes and cellular 'machineries' are built based on data retrieved from uniprot. The model simulates all cellular processes from DNA replication, to transcription, translation and protein folding. The protein pool is limited so that the optimization of gene expression towards a specific objective (e.g. growth) becomes dependent on environmental parameters but also rate limitations. Catalytic efficiency of enzymes links enzyme abundance to maximal rate so that flux through the metabolic network can not become infinitely high.

We built a dedicated RBA model for *Cupriavidus necator* H16, freely [available on Github](https://github.com/m-jahn/Bacterial-RBA-models).

<img src="https://github.com/m-jahn/Bacterial-RBA-models/raw/master/Ralstonia-eutropha-H16/figures/RBA_model_generation.png" width="100%" align="center"/>

This RBA model was generated using the `RBApy` package from [Bulovic et al. (2019)](https://doi.org/10.1016/j.ymben.2019.06.001), using a genome scale metabolic model (GSM) originally developed by [Park et al., 2011](http://bmcsystbiol.biomedcentral.com/articles/10.1186/1752-0509-5-101). The original genome scale model was refactored and many reactions were curated and harmonized to community standards as e.g. available through the Bigg model database. The genome scale model that serves as base for the RBA model is described [in another post](/post/20220118-cnecator-gsm).
