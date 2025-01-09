---
layout: page
title: "Projects"
permalink: /projects/
feature_image: "/png/header/projects.jpg"
feature_text: ""
---

This page gives an overview about ongoing (or finished) research projects. Every project contains a short description and links to bioinformatic resources and related publications.

- [*Cupriavidus necator* energy metabolism](#cupriavidus-necator-energy-metabolism)
- [*Cupriavidus necator* resource allocation](#cupriavidus-necator-resource-allocation)
- [New CRISPRi library in *Synechocystis*](#new-crispri-library-in-synechocystis)
- [CRISPRi library in *Synechocystis*](#crispri-library-in-synechocystis)
- [*Synechocystis* resource allocation](#synechocystis-resource-allocation)


### *Cupriavidus necator* energy metabolism

2021 - 2024

**Published as *The energy metabolism of Cupriavidus necator in different trophic conditions* in [Appl Environ Microbiol](https://doi.org/10.1128/aem.00748-24)**

Preprint is available at [BioRxiv.org](https://www.biorxiv.org/content/10.1101/2024.02.26.582058v2).

<img src="/png/projects_cnecator_energy.png" width="100%" align="center"/>

*A barcoded transposon library was used to screen contribution of each gene to fitness.*

In a continuation of the [*Cupriavidus necator* resource allocation](#cupriavidus-necator-resource-allocation) project, I am investigating the energy metabolism of this versatile chemolithoautotroph. A barcoded transposon knockout library is used to study the growth on different carbon and energy sources including the 1-carbon acid formic acid and hydrogen gas, which utilize *Cupriavidus*' remarkable ability to fix CO2 and obtain energy from oxidation of small compunds such as formate or hydrogen. A particular focus was on gene fitness contribution for the molybdenum cofactor, the formate dehydrogenases, the various hydrogenases, and the electron transport chain. We found for example that *C. necator* utilizes both membrane bound and soluble hydrogenases for growth on hydrogen, but does only utilize the soluble formate dehydrogenase for growth on formate.

**Resources**

- [ShinyLib app to browse fitness data](https://m-jahn.shinyapps.io/ShinyLib/)
- [ShinyProt app to browse proteomics data](https://m-jahn.shinyapps.io/ShinyProt/)
- [Giothub repo with analysis pipelines](https://github.com/m-jahn/R-notebook-ralstonia-energy)

### *Cupriavidus necator* resource allocation

2019 - 2022

**Published as *Protein allocation and utilization in the versatile chemolithoautotroph Cupriavidus necator* in [eLife](https://elifesciences.org/articles/69019)!**

The preprint is available at [BioRxiv.org](https://www.biorxiv.org/content/10.1101/2021.03.21.436304v1).

<img src="/png/projects_cnecator_proteconomy.png" width="100%" align="center"/>

*Study overview (A) and protein abundance mapped to the three chromosomes (B)*

*Ralstonia eutropha* a.k.a. *Cupriavidus necator* is a highly interesting bacterium for its metabolic properties. It is a model organism both for the **production of bioplastics** (polyhydroxy butyrate, PHB) as well as for lithoautotrophic growth. This means it has the special ability to grow solely on CO2 as carbon source and hydrogen (H2) as energy source. These properties make it highly interesting for biotech applications, where we could picture a biorefinery taking CO2 and H2 as (waste) gas streams and feeding a culture of *R. eutropha*. The cells will then turn these substrates into biomass and product (such as PHB). However, *R. eutropha* is also a cryptic organism with a very large genome (6,600 genes), poorly understood metabolism and regulation, and very few genetic tools that are available. 

In this project we want to address some of these shortcomings by analyzing growth under a variety of conditions. We will grow wild type and mutant strains with fixed growth rates (chemostat, turbidostat), gather information about gene expression using proteomics, and feed our data back into a mathematical model of the cell (see also [Metabolic models](/models) for details). The focus of this project is to learn more about how a 'large' bacterium with many duplicated genes manages its gene expression resources. Bottlenecks and inefficiencies in gene expression will then be a starting point for the design of new engineered strains.

**R notebooks for data analysis**

- [_Ralstonia eutropha_ cultivations and physiological data](https://m-jahn.github.io/R-notebook-ralstonia-proteome/Ralstonia_physiology.nb.html)
- [_Ralstonia eutropha_ processing of MS proteomics data](https://m-jahn.github.io/R-notebook-ralstonia-proteome/Ralstonia_proteomics.nb.html)
- [_Ralstonia eutropha_ model constraints](https://m-jahn.github.io/R-notebook-ralstonia-proteome/Ralstonia_model_constraints.nb.html)
- [_Ralstonia eutropha_ RBA model, variability analysis](https://m-jahn.github.io/R-notebook-ralstonia-proteome/Ralstonia_variability_analysis.nb.html)
- [_Ralstonia eutropha_ enzyme abundance and utilization](https://m-jahn.github.io/R-notebook-ralstonia-proteome/Ralstonia_enzyme_saturation.nb.html)
- [_Ralstonia eutropha_ gene essentiality analysis (TnSeq)](https://m-jahn.github.io/R-notebook-ralstonia-proteome/TnSeq-essentiality.nb.html)
- [_Ralstonia eutropha_ condition dependent fitness (BarSeq)](https://m-jahn.github.io/R-notebook-ralstonia-proteome/BarSeq-pulse.nb.html)

**Web apps to browse the data**

- [ShinyProt app to browse proteomics data](https://m-jahn.shinyapps.io/ShinyProt/)
- [ShinyLib app to browse fitness data](https://m-jahn.shinyapps.io/ShinyLib/)

**BioCircos maps** showing the global gene expression profile of *Ralstonia eutropha*. These maps were made using a [modified Biocircos R package](https://github.com/m-jahn/BioCircos.R ).

- [BioCircos map for Ralstonia eutropha, pHG1](https://m-jahn.github.io/BioCircos.R/RE_pHG1.html)
- [BioCircos map for Ralstonia eutropha, chromosome 1](https://m-jahn.github.io/BioCircos.R/RE_chromosome_1.html)
- [BioCircos map for Ralstonia eutropha, chromosome 2](https://m-jahn.github.io/BioCircos.R/RE_chromosome_2.html)


### New CRISPRi library in *Synechocystis*

2021 - 2023

**Published as *CRISPR interference screens reveal growth–robustness tradeoffs in Synechocystis sp. PCC 6803 across growth conditions* in [The Plant Cell](https://doi.org/10.1093/plcell/koad208)**

Preprint is available at [BioRxiv.org](https://www.biorxiv.org/content/10.1101/2023.02.13.528328v1).

<img src="/png/projects_crisprlib2.png" width="100%" align="center"/>

*Light harvesting proteins show high fitness cost in intense light*

This is the second iteration of a CRISPRi respression library for the cyanobacterium *Synechocystis* sp. PCC6803. The library is based on the inhibitory effect of the dCas9 gene and a corresponding short guide RNA (sgRNA) that conveys specificity to the enzyme. Repression of a gene will lead to fitness cost or benefit for the cell. By sequencing the pool of individual CRISPRi strains over time, these fitness effects become visible on a global scale. Besides some difficulties regarding repression efficiency of guide RNAs, this is the most powerful "functional genomics" screening method to date. In the corresponding paper, we addressed the problem of low guide efficiency by developing a machine learning model for efficiency prediction.

**Resources**

- [Repository with all data analysis notebooks on github](https://github.com/m-jahn/R-notebook-crispri-lib)
- [ShinyLib app to browse fitness data](https://m-jahn.shinyapps.io/ShinyLib/)
- [Nextflow pipeline for NGS screening data analysis](https://github.com/MPUSP/nf-core-crispriscreen)


### CRISPRi library in *Synechocystis*

2018 - 2020

**Published as *Pooled CRISPRi screening of the cyanobacterium Synechocystis sp PCC 6803 for enhanced industrial phenotypes* in [Nature Communications](https://www.nature.com/articles/s41467-020-15491-7)!**

The preprint is available at [BioRxiv.org](https://www.biorxiv.org/content/10.1101/823534v2).

<img src="/png/projects_crispri_example.png" width="100%" align="center"/>

*Example of depletion over time for single CRISPRi knockdown mutants*

We designed a CRISPRi respression library for the cyanobacterium *Synechocystis* sp. PCC6803. The library is based on the inhibitory effect of the dCas9 gene and a corresponding short guide RNA (sgRNA) that conveys specificity to the enzyme. In each cell, the dCas9 enzyme will bind a unique sequence variant of the sgRNA. The dCas9-sgRNA complex then binds a region close to the promoter of the target gene and will repress transcription by physically blocking RNA polymerase. By using a pool of thousands of different sgRNAs, transcription of all genes of a bacterial strain can be repressed, one at a time.

**R notebooks for data analysis**

- [_Synechocystis_ CRISPRi library data processing](https://m-jahn.github.io/R-notebooks/CRISPRi_library_data_processing.nb.html)
- [_Synechocystis_ CRISPRi library enrichment analysis](https://m-jahn.github.io/R-notebooks/CRISPRi_library_enrichment_analysis.nb.html)
- [_Synechocystis_ CRISPRi library additional tests](https://m-jahn.github.io/R-notebooks/CRISPRi_library_additional_tests.nb.html)

**Web app to browse the fitness data**

- [ShinyLib app to browse fitness data](https://m-jahn.shinyapps.io/ShinyLib/)


### *Synechocystis* resource allocation

2016 - 2018

**Published as *Growth of Cyanobacteria Is Constrained by the Abundance of Light and Carbon Assimilation Proteins* in [Cell Reports](http://doi.org/10.1016/j.celrep.2018.09.040)!**

<img src="/png/projects_cyano_graphabstract.png" width="70%" align="center"/>

*Cyanobacteria rearrange their proteome depending on light and CO2 availability*

Cyanobacteria are promising hosts for microbial biotechnology as they convert inorganic CO2 and light into biomass and products. However, low biomass productivity has prevented wider industrial application. In this project we set out to investigate growth bottlenecks using gradual and systematic **limitation of the energy and carbon source (light and CO2, respectively)**. We used shotgun proteomics to investigate protein allocation in the model cyanobacterium *Synechocystis* sp. PCC6803 as it adapts to limitation. We found that cells invest large amounts of resources into a small set of proteins. Of outstanding importance are proteins involved in carbon and light assimilation, as well as the translation machinery. When partitioning the proteome into a few functional sectors, we found that sector sizes changed linearly with growth rate. For example, the translation sector (ribosomes, chaperones) expands proportional to growth rate, confirming the 'growth law' in cyanobacteria. We fed our data into a coarse-grained **cell economy model** where protein costs are explicitly considered and growth rate is maximized. This demonstrated that cyanobacteria actively optimize protein resource allocation depending on environmental cues.

**Resources**

- Coarse grained cell economy models are described in [Metabolic models](/models)
- Label-free proteomics pipelines for openMS/KNIME are [deposited on github](https://github.com/m-jahn/openMS-workflows)

Last updated: 2024-10-08

-----

{% include nav-share.html %}  
