---
layout: page
title: "Pipelines"
permalink: /pipelines/
feature_image: "/png/header/header_treemap_bw_blur.png"
feature_text: PIPELINES
---


- [nf-core-crispriscreen](#nf-core-crispriscreen)
- [snakemake-crispr-guides](#snakemake-crispr-guides)
- [snakemake-ms-proteomics](#snakemake-ms-proteomics)


### nf-core-crispriscreen

[Link to github repository with documentation](https://github.com/MPUSP/nf-core-crispriscreen)

[nf-core/crispriscreen](https://github.com/MPUSP/nf-core-crispriscreen) is a bioinformatics best-practice analysis pipeline to process next generation sequencing data obtained from CRISPRi repression library screenings.

The pipeline is built using Nextflow, a workflow tool to run tasks across multiple compute infrastructures in a very portable manner. It uses Docker/Singularity containers making installation trivial and results highly reproducible. The Nextflow DSL2 implementation of this pipeline uses one container per process which makes it much easier to maintain and update software dependencies. Where possible, these processes have been submitted to and installed from nf-core/modules in order to make them available to all nf-core pipelines, and to everyone within the Nextflow community!

**Topics**: `CRISPR screening`, `guide RNA`, `Amplicon-Seq`, `gene fitness`, `nextflow`, `DESeq2`, `HTML report`, `PDF report`

### snakemake-crispr-guides

[Link to github repository with documentation](https://github.com/MPUSP/snakemake-crispr-guides)

<!-- include logo-->
<img src="https://github.com/MPUSP/snakemake-crispr-guides/raw/main/resources/images/logo.png" align="right" />

[snakemake-crispr-guides](https://github.com/MPUSP/snakemake-crispr-guides) is a best-practice workflow for the automated generation of guide RNAs for CRISPR applications. It's main purpose is to provide a simple, efficient and easy-to-use framework to design thousands of guides simultaneously for CRISPR libraries from as little input as an organism's name/genome ID. For the manual design of single guides, users are instead referred to even simpler web resources such as Chop-Chop, CRISPick, or Cas-OFFinder/Cas-Designer. This workflow relies to a large degree on the underlying Bioconductor package ecosystem [crisprVerse](http://bioconductor.org/packages/release/bioc/html/crisprVerse.html). It goes beyond this by automating all of the design steps, and targeting genes, intergenic regions and creating no-target controls.

**Topics**: `CRISPR screening`, `guide RNA design`, `Amplicon-Seq`, `gene fitness`, `snakemake`, `CrisprVerse`, `gene`, `TSS`, `intergenic`, `HTML report`, `PDF report`

### snakemake-ms-proteomics

[Link to github repository with documentation](https://github.com/MPUSP/snakemake-ms-proteomics)

<!-- include logo-->
<img src="https://github.com/MPUSP/snakemake-ms-proteomics/raw/main/docs/images/logo.png" align="right" />

[snakemake-ms-proteomics](https://github.com/MPUSP/snakemake-ms-proteomics) is a best-practice pipeline for the automated analysis of mass spectrometry proteomics data. It currently supports automated analysis of data-dependent acquisition (DDA) data with label-free quantification. An extension by different wokflows (DIA, isotope labeling) is planned in the future. The pipeline is mainly a wrapper for the excellent tools **fragpipe** and **MSstats**, with additional modules that supply and check the required input files, and generate reports. The pipeline is built using snakemake and processes MS data using the following steps:

**Topics**: `Proteomics`, `mass-spectrometry`, `DDA`, `DIA`, `fragpipe`, `MSstats`, `HTML report`, `PDF report`


Last updated: 2024-01-15

-----

{% include nav-share.html %}  
