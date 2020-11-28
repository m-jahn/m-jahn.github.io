---
layout: page
title: "Projects"
permalink: /projects/
feature_image: "/png/header/header_treemap_blur.png"
feature_text: PROJECTS
---

This page gives an overview about ongoing (or finished) research projects. Every project contains a short description and links to bioinformatic resources and related publications.

- [*Cupriavidus necator* resource allocation](#cupriavidus-necator-resource-allocation)
- [CRISPRi library in *Synechocystis*](#crispri-library-in-synechocystis)
- [*Synechocystis* resource allocation](#synechocystis-resource-allocation)

### *Cupriavidus necator* resource allocation

*Ralstonia eutropha* a.k.a. *Cupriavidus necator* is a highly interesting bacterium for its metabolic properties. It is a model organism both for the production of bioplastics (polyhydroxy butyrate, PHB) as well as for litho-autotrophic growth. This means it has the special ability to grow solely on CO2 as carbon source and hydrogen (H2) as energy source. These properties make it highly interesting for biotech applications, where we could picture a biorefinery taking CO2 and H2 as (waste) gas streams and feeding a population of *R. eutropha*. The cells will then turn these substrates into biomass and product (such as PHB). However, *R. eutropha* is also a cryptic organism with a very large genome (6600 genes), poorly understood metabolism and regulation, and very few genetic tools that are available. In this project we want to address some of these shortcomings by analyzing growth under a variety of conditions. We will grow wild type and mutant strains with fixed growth rates (chemostat, turbidostat), gather information about gene expression using proteomics, and feed our data back into a mathematic model of the cell (see also [Metabolic models](/models) for details). The focus of this project is to learn more about how a 'large' bacterium with many duplicated genes manages its gene expression resources. Bottlenecks and inefficiencies in gene expression will then be a starting point for the design of new engineered strains. The following links cover some of the work in progress for *R. eutropha*.

**Resources**

<!-- - [R notebook](https://m-jahn.github.io/R-notebooks/Ralstonia_H16_genome_re_annotation.nb.html) describing the addition and curation of COG (cluster of orthologous groups) terms for *Ralstonia eutropha* -->
- [R notebook](https://m-jahn.github.io/R-notebooks/Ralstonia_model_constraints.nb.html) describing the selection of constraints for a resource allocation model (see also [Metabolic models](/models))
- [R notebook](https://m-jahn.github.io/R-notebooks/Ralstonia_variability_analysis.nb.html) describing variability analysis of the model and general comparison about utilized proteins
- [R notebook](https://m-jahn.github.io/R-notebooks/Ralstonia_enzyme_saturation.nb.html) analyzing resource allocation and single protein utilization, with a combination of proteomics and flux simulations

Links to preliminary BioCircos maps showing the global gene expression profile of *Ralstonia eutropha*. These maps were made using a [modified Biocircos R package](https://github.com/m-jahn/BioCircos.R ).

- [BioCircos map for Ralstonia eutropha, pHG1](https://m-jahn.github.io/BioCircos.R/RE_pHG1.html)
- [BioCircos map for Ralstonia eutropha, chromosome 1](https://m-jahn.github.io/BioCircos.R/RE_chromosome_1.html)
- [BioCircos map for Ralstonia eutropha, chromosome 2](https://m-jahn.github.io/BioCircos.R/RE_chromosome_2.html)


### CRISPRi library in *Synechocystis*

**Published as *Pooled CRISPRi screening of the cyanobacterium Synechocystis sp PCC 6803 for enhanced industrial phenotypes* in [Nature Communications](https://www.nature.com/articles/s41467-020-15491-7)!**

The preprint is available at [BioRxive](https://www.biorxiv.org/content/10.1101/823534v2).

<img src="/png/projects_crispri_example.png" width="100%" align="center"/>

*Example of depletion over time for single CRISPRi knockdown mutants*

We designed a CRISPRi respression library for the cyanobacterium *Synechocystis* sp. PCC6803. The library is based on the inhibitory effect of the dCas9 gene and a corresponding short guide RNA (sgRNA) that conveys specificity to the enzyme. In each cell, the dCas9 enzyme will bind a unique sequence variant of the sgRNA. The dCas9-sgRNA complex then binds a region close to the promoter of the target gene and will repress transcription by physically blocking RNA polymerase. By using a pool of thousands of different sgRNAs, transcription of all genes of a bacterial strain can be repressed, one at a time. The following **R notebooks** detail most of the data analysis for this publication.

**Resources**

- [_Synechocystis_ CRISPRi library data processing](https://m-jahn.github.io/R-notebooks/CRISPRi_library_data_processing.nb.html)
- [_Synechocystis_ CRISPRi library enrichment analysis](https://m-jahn.github.io/R-notebooks/CRISPRi_library_enrichment_analysis.nb.html)
- [_Synechocystis_ CRISPRi library additional tests](https://m-jahn.github.io/R-notebooks/CRISPRi_library_additional_tests.nb.html)


### *Synechocystis* resource allocation

**Published as *Growth of Cyanobacteria Is Constrained by the Abundance of Light and Carbon Assimilation Proteins* in [Cell Reports](http://doi.org/10.1016/j.celrep.2018.09.040)!**

<img src="/png/projects_cyano_graphabstract.png" width="70%" align="center"/>

*Cyanobacteria rearrange their proteome depending on light and CO2 availability*

Cyanobacteria are promising hosts for microbial biotechnology as they convert inorganic CO2 and light into biomass and products. However, low biomass productivity has prevented wider industrial application. In this project we set out to investigate growth bottlenecks using gradual and systematic **limitation of the energy and carbon source (light and CO2, respectively)**. We used shotgun proteomics to investigate protein allocation in the model cyanobacterium *Synechocystis* sp. PCC6803 as it adapts to limitation. We found that cells invest large amounts of resources into a small set of proteins. Of outstanding importance are proteins involved in carbon and light assimilation, as well as the translation machinery. When partitioning the proteome into a few functional sectors, we found that sector sizes changed linearly with growth rate. For example, the translation sector (ribosomes, chaperones) expands proportional to growth rate, confirming the 'growth law' in cyanobacteria. We fed our data into a coarse-grained **cell economy model** where protein costs are explicitly considered and growth rate is maximized. This demonstrated that cyanobacteria actively optimize protein resource allocation depending on environmental cues.

**Resources**

- Coarse grained cell economy models are described in [Metabolic models](/models)
- Label-free proteomics pipelines for openMS/KNIME are [deposited on github](https://github.com/m-jahn/openMS-workflows)

-----

{% include nav-share.html %}  
