# Website copy

Canonical editorial copy for the visual-first website. Keep this file and docs/index.html in sync. Illustrations lead the main story; original results remain in expandable sections.

IIT Bhilai · Electrical Engineering · May 2022

# Performance Analysis of RIS Aided Wireless Systems and Joint Transmission in IEEE 802.11be

Ashutosh Soni

Bachelor of Technology (Honours) thesis

Supervised by Dr. Sreejith T. V. ↗ and Dr. Arzad Alam Kherani ↗

Better wireless links. Better ways to share them.

Two approaches to improving wireless communication—and a closer look at the scheduling that turns link capacity into service.

*Caption:* Two complementary research directions. They are studied as separate models in the thesis.

The thesis in a minute

## A stronger signal is only part of the story.

A user between transmitters can face weak reception and interference. This thesis asks two questions: can we improve the path a signal takes, and can transmitters work together to serve a user? It then studies how to schedule that shared service as data keeps arriving.

New to wireless networks? Four useful terms

Signal

The radio wave carrying a message.

Access point (AP)

A Wi-Fi transmitter that connects devices to a network.

Queue

Data waiting for its turn to be sent.

SNR

How strong the wanted signal is compared with background noise.

Reflect intelligently. RIS assistance is more useful when the direct path is strongly attenuated in the studied model.

Transmit together. Joint transmission can outperform independent, interfering service for users in parts of a corridor.

Schedule carefully. Queue evolution depends on arrival rates, service capacities, and how service alternates.

RIS-assisted wireless networks

## Give the signal another path.

A reconfigurable intelligent surface (RIS) redirects an incident signal toward a receiver. The first part studies a UAV uplink reaching its base station through a direct path and additional reflected paths.

*Caption:* The model. Only RIS panels inside a capture sector contribute to the link. Conceptual redraw of Fig. 2.1; simplified geometry, not to scale.

Think of RIS panels as controllable reflectors: they give the receiver another route for the message. In this model, reflected paths are configured to help reception. The question is how much they add to the signal that already arrives directly.

### The same extra path can matter more.

#### Direct link already strong

*Caption:* The reflected contribution is small compared with the strong direct signal.

#### Direct link weaker

*Caption:* The additional path can make a much greater relative difference.

Conceptual comparison of the thesis’s two propagation cases. Arrow widths illustrate the idea; they do not represent measured power.

See the original SNR results and model settings

The plots below vary capture angle with the same listed geometry and RIS density, but different direct-link path-loss exponents. Read the vertical scales carefully: the first plot uses an offset of about 2,533, while the second starts near 1.

*Caption:* Fig. 2.3(a). The reflected contribution is small relative to the strong direct link.

*Caption:* Fig. 2.7(a). RIS assistance adds a much larger relative improvement in this modeled case.

Listed parameters for both panels: capture radius 20 m, UAV–BS distance 50 m, RIS density 0.1 per m². These are theoretical results reproduced from the thesis.

The analysis varies capture radius, angle, panel density, direct-link path loss, and mobility. It uses spatial Poisson models and a noise-limited setting, which excludes interference. The thesis compares theoretical calculations with SimRIS-based simulations.

Why placement matters—and what changes with mobility

Increasing capture radius does not produce uniform returns. The thesis’s knee-point analysis identifies regions near the base station and user where additional RIS deployment can have greater marginal benefit. This is a deployment insight, not a solved allocation algorithm.

*Caption:* Fig. 2.11, printed p. 17. Rate of change of SNR with capture radius.

For the mobility setting, the thesis averages over changing user–base-station distance and reports increased average SNR with RIS assistance (Figs. 2.12–2.13).

Multi-AP coordination

## Let the transmitters work together.

When two access points (APs) serve different users on the same channel, they also create interference. Joint transmission (JT) instead coordinates both APs to send the same message to one user.

Explore the three transmission modes

*Caption:* SAPT: single-AP transmission on separate channels. Each AP serves its own user without mutual interference in this model.

*Caption:* SAPI: single-AP transmission with interference. Two users are served simultaneously, but each receives unwanted energy from the other AP.

*Caption:* JT: joint transmission. Both APs serve one user; serving the other user requires a later turn.

Conceptual redraws of Figs. 4.1–4.3. This work was motivated by IEEE 802.11be research discussions in 2022.

### Cooperation helps—but compare the whole system.

*Caption:* Location changes the problem. Near one AP, its signal can dominate. Between APs, the other transmission can be a source of interference—or useful signal if the APs coordinate. Schematic illustration based on the corridor model; the shaded region is not a calculated JT boundary.

The corridor model places an AP at each end. The thesis identifies a region where cooperation is preferable to two independent, interfering transmissions.

But cooperation uses both APs for one user. Independent service can serve two users at once. The choice has to consider what the whole system delivers.

See the original capacity and coding results

*Caption:* Fig. 4.6(b). Theoretical system capacity; 40 stations and AP transmit powers of 20 mW each.

The corridor model places an AP at each end. The comparison identifies a region where cooperation is preferable to two independent, interfering transmissions.

There is a trade-off: JT occupies both APs to serve one user, whereas SAPI serves two users at once. A higher individual link rate alone does not settle the system-wide choice.

Modulation and coding also matter. The thesis examines discrete achievable rates alongside idealized Shannon capacities, changing the shape of the curves and the beneficial region.

See the modulation-and-coding example

Fig. 4.7. Best per-station capacities with MCS, with the figure’s noise floor of −70 dBm. This is a different configuration from Fig. 4.6; it is not a matched numerical comparison.

Queueing and scheduling

## A fast link still needs a service plan.

Data continues arriving while users wait. The thesis models a two-AP, two-user system with one queue per user and studies how queues evolve as joint service alternates.

*Caption:* The service rule. Serve the amount queued at the start of a turn, then switch users. The queue need not be empty when the turn ends. Illustration based on Algorithm 1; counts are schematic.

### Can service keep up with new arrivals?

The important question is whether waiting data builds up, settles into a repeating pattern, or drains away. With the same alternating schedule, the thesis shows a stationary example and a draining example by changing the service capacities.

Compare the original queue results

*Caption:* Stationary case, Fig. 5.6(c). Arrival rates: 10 KB/s per user; JT capacities: 20 KB/s per user. Initial queues: 5 KB and 100 KB. The individual queues fluctuate while the total remains constant in this example.

*Caption:* Draining case, Fig. 5.7(c). The same arrivals and initial queues, but JT capacities of 30 KB/s per user. The total queue decreases toward zero over successive service steps.

The full analysis models each service round as a matrix update and derives conditions for stationary queue behavior and stability.

### Take turns together, then serve separately.

The final model mixes the two approaches: both APs first serve one user together, then the other. After that, each AP serves its own user at the same time.

*Caption:* Who serves whom, and when? The two rows show what each AP does during the same round. Illustrative durations, not simulation results. Based on the combined schedule in Chapter 6.

Choosing these time periods affects how long data waits and how much that delay varies from one packet to the next. That variation is called jitter. The thesis studies schedules that keep queues repeating and examines their delay and jitter.

View the reported delay and jitter results

*Caption:* Fig. 6.3(a): packet delay with a 5 s SAPI period. See Table 6.1 for the simulation settings.

*Caption:* Fig. 6.4: reported average jitter versus SAPI duration, for the settings in Table 6.2.

What to take away

## Propagation, cooperation, and scheduling belong in the same conversation.

The thesis explores where extra signal paths and coordinated transmitters can help—and why their benefits must be considered alongside the way users are served.

### Scope of the work

The RIS results assume noise-limited operation and simplified propagation. The coordination analysis uses a two-AP corridor; the queueing analysis focuses on two users. Larger networks, richer channel models, and time-varying capacities are future directions, rather than established results here.

This page is a visual companion to the original thesis. Plots are reproduced from it; the diagrams are new explanatory drawings. Consult the PDF for definitions, derivations, assumptions, and full references.

Related research

The RIS portion relates to the COMSNETS 2022 paper Performance of RIS Assisted Networks in Noise Limited and Interference Limited Scenarios, cited as reference [6] in the thesis. The complete thesis also develops the separate coordination and scheduling work.

### Cite the thesis
