# B.Tech. (Honours) Thesis — IIT Bhilai

## Performance Analysis of RIS Aided Wireless Systems and Joint Transmission in IEEE 802.11be

**Ashutosh Soni**  
Bachelor of Technology (Honours) in Electrical Engineering  
Indian Institute of Technology Bhilai · May 2022

**Supervisors:** Dr. Sreejith T. V. and Dr. Arzad Alam Kherani

[**Read the complete thesis (PDF)**](ashutosh-soni-btech-honours-thesis.pdf)

## About this repository

This repository preserves my undergraduate honours thesis at IIT Bhilai and provides a single place to reference the work from my résumé, academic profile, and other research materials. It contains the original signed thesis, with its filename simplified for sharing.

The thesis studies two approaches to improving wireless communication performance: using reconfigurable intelligent surfaces (RIS) to assist signal propagation, and coordinating multiple access points (APs) to serve users through joint transmission (JT).

## Research overview

### 1. RIS-assisted wireless networks

The first part studies uplink signal-to-noise ratio (SNR) in a noise-limited network, using a UAV-to-base-station link as the motivating scenario. Base stations and RIS panels are modeled using spatial Poisson processes, and panels within a sector around the serving base station contribute to the received signal.

The analysis examines how SNR changes with RIS density, capture radius, capture angle, direct-link path loss, and user mobility. Numerical analysis is compared with SimRIS-based simulations. Within the studied model, RIS assistance offers little improvement when the direct link follows free-space propagation, but substantially greater gains when the direct link suffers stronger path loss. A knee-point analysis identifies regions that may offer better gains per deployed RIS panel.

### 2. Multi-AP coordination and joint transmission

The second part investigates coordinated transmission in the context of research toward IEEE 802.11be (Wi-Fi 7) at the time the thesis was written in 2022. A two-AP, one-dimensional corridor model compares single-AP transmission, single-AP transmission with interference (SAPI), and joint transmission. Capacity and modulation-and-coding considerations are used to identify the regions where JT is beneficial.

The thesis then develops fluid queueing models for JT-only scheduling and scheduling that combines JT with SAPI. It studies queue evolution, stability, stationary queue conditions, and delay and jitter, supported by mathematical analysis and simulations. The scheduling analysis focuses on a two-station system; extending it to larger systems is identified as future work.

## Thesis contents

| Chapters | Topic |
| --- | --- |
| 1–2 | RIS background, uplink SNR analysis, deployment parameters, and mobility |
| 3–4 | Multi-AP coordination, transmission modes, and corridor capacity analysis |
| 5 | Fluid model for JT-only scheduling, stability, and queue evolution |
| 6 | Combined JT and SAPI scheduling, stability, delay, and jitter |
| 7 | Conclusions and future directions |
| Appendices | Supporting mathematical proofs |

## Repository contents

- [`ashutosh-soni-btech-honours-thesis.pdf`](ashutosh-soni-btech-honours-thesis.pdf): complete signed thesis.
- `README.md`: context and research summary.

Simulation source code and LaTeX sources are not included in this repository.

## Citation

> Ashutosh Soni. *Performance Analysis of RIS Aided Wireless Systems and Joint Transmission in IEEE 802.11be*. B.Tech. (Honours) thesis, Electrical Engineering, Indian Institute of Technology Bhilai, May 2022.

```bibtex
@thesis{soni2022btech,
  author      = {Soni, Ashutosh},
  title       = {Performance Analysis of {RIS} Aided Wireless Systems and Joint Transmission in {IEEE} 802.11be},
  type        = {Bachelor of Technology (Honours) thesis},
  institution = {Indian Institute of Technology Bhilai},
  year        = {2022},
  month       = may
}
```
