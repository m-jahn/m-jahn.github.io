---
layout: page
title: "Projects"
permalink: /projects/
feature_image: "/png/header/header_random_C.png"
---

This page is a collection of resources for ongoing (or finished) research projects. Most of these resources are bioinformatic pipelines related to publications.


### CRISPRi library in *Synechocystis*

Now published as *Pooled CRISPRi screening of the cyanobacterium Synechocystis sp PCC 6803 for enhanced industrial phenotypes* in [Nature Communications](https://www.nature.com/articles/s41467-020-15491-7)!

The preprint is available at [BioRxive](https://www.biorxiv.org/content/10.1101/823534v2).

**Background:**
We designed a CRISPRi respression library for the cyanobacterium *Synechocystis* sp. PCC6803. The library is based on the inhibitory effect of the dCas9 gene and a corresponding short guide RNA (sgRNA) that conveys specificity to the enzyme. In each cell, the dCas9 enzyme will bind a unique sequence variant of the sgRNA. The dCas9-sgRNA complex then binds a region close to the promoter of the target gene and will repress transcription by physically blocking RNA polymerase. By using a pool of thousands of different sgRNAs, transcription of all genes of a bacterial strain
can be repressed, one at a time. The following **R notebooks** detail most of the data analysis for this publication.

- [_Synechocystis_ CRISPRi library data processing](https://m-jahn.github.io/R-notebooks/CRISPRi_library_data_processing.nb.html)
- [_Synechocystis_ CRISPRi library enrichment analysis](https://m-jahn.github.io/R-notebooks/CRISPRi_library_enrichment_analysis.nb.html)
- [_Synechocystis_ CRISPRi library additional tests](https://m-jahn.github.io/R-notebooks/CRISPRi_library_additional_tests.nb.html)


### *Ralstonia eutropha* protein resource allocation

**Background:**
*Ralstonia eutropha* a.k.a. *Cupriavidus necator* is a highly interesting bacterium for its metabolic properties. It is a model organism both for the production of bioplastics (polyhydroxy butyrate, PHB) as well as for litho-autotrophic growth. This means it has the special ability to grow solely on CO2 as carbon source and hydrogen (H2) as energy source. These porperties make it highly interesting for biotech applications, where we could picture a biorefinery taking CO2 and H2 as (waste) gas streams and feeding a population of *R. eutropha* that will turn these substrates into biomass and product (such as PHB). However, *R. eutropha* is also a cryptic organism with a very large genome (6600 genes), poorly understood metabolism and regulation, and very few genetic tools available. In this project we want to address some of these shortcomings by analyzing growth under a variety of conditions. We will grow wild type and mutant strains with fixed growth rates (chemostat, turbidostat), gather information about gene expression using proteomics, and feed our data back into a mathematic model of the cell (see also [Metabolic models](https://m-jahn.github.io/models) for details). The focus of this project is to learn more about how a 'large' bacterium with many duplicated genes manages its gene expression resources. Bottlenecks and inefficiencies in gene expression will then be a starting point for the design of new engineered strains. The following links cover some of the work in progress for *R. eutropha*.

This R notebook describes the addition and curation of COG (cluster of orthologous groups) terms for *Ralstonia eutropha*.

- [_Ralstonia eutropha_ COG re-annotation](https://m-jahn.github.io/R-notebooks/Ralstonia_H16_genome_re_annotation.nb.html)

This R notebook describes the selection of constraints for a resource allocation model (see also [Metabolic models](https://m-jahn.github.io/models))

- [_Ralstonia eutropha_ model constraints](https://m-jahn.github.io/R-notebooks/Ralstonia_model_constraints.nb.html)


Links to preliminary BioCircos maps showing the global using gene expression profile of *Ralstonia eutropha*. These maps were made using a [modified Biocircos R package](https://github.com/m-jahn/BioCircos.R ).

- [BioCircos map for Ralstonia eutropha, pHG1](https://m-jahn.github.io/BioCircos.R/RE_pHG1.html)
- [BioCircos map for Ralstonia eutropha, chromosome 1](https://m-jahn.github.io/BioCircos.R/RE_chromosome_1.html)
- [BioCircos map for Ralstonia eutropha, chromosome 2](https://m-jahn.github.io/BioCircos.R/RE_chromosome_2.html)


-----

{% include nav-share.html %}  
