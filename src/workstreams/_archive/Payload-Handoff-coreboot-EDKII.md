---
title: "Payload Handoff Design"
summary: "Design discussion to specify the handoff between host firmware and a payload."
details:
  headline: "Want to join?"
  text: "This workstream is always looking for participitation. Get involved!"
  buttonText: "Go to the calendar"
  buttonLink: "https://calendar.google.com/calendar/event?eid=Mm9ybmFjYnRodGFidHFxZXVyaWR2cmdpanAgY19ndTN2NjZlZnA4NGk2ZXZtNzRmMTF2bHIwMEBn&ctz"
---

The two prominent x86 firmware solutions, EDK2 & coreboot have divergent designs
on how information is passed between programs. The coreboot project uses
coreboot/LinuxBios (the structure dates for early 2000) tables to inform the
payload. EDK2 generally uses HOBs to pass information between modules. Both
have their limitations e.g. coreboot tables need to be 4 byte aligned which
makes decoding on 64bit systems problematic. HOBs tend to be versioned, which
makes agreeing on the struct format a hurdle and have a 64K size limitation.
In 2007 Linux introduced the flattened devicetree (FDT), to do exactly that to
inform the OS about the hardware. It is a very good match for the payload
handoff that we want to achieve in both EDK2 and coreboot. FDT is an industry
standard that is very widely deployed on all sorts of hardware and software
projects, with easy to use code. Due to the widespread use of FDT and existing
implementations in both EDK2 and coreboot (and of course Linux) to support the
format, it is expected to be a simple yet effective solution of doing a payload
handoff. In line with that, CBOR, a newly emerged communication protocol is
gaining momentum in deployments from firmware to OS level usages.

## Resources

- [Draft Design](https://docs.google.com/document/d/1WxEUlCsXpc17DkJhL3XVkOW7e_KIt_zcc9tQ1trOySg)
- [Meeting Notes](https://docs.google.com/document/d/1IDQqr4cv8dQHa9faSxBc29xHSeKuXNTiMP3a3bLJClQ)

## Workstream leads

[Sheng Tan (9elements)](mailto:sheng.tan@9elements.com)  

## Bi-weekly

every Tuesday 4.00PM CEST - 10.00AM ET

  <a href="https://calendar.google.com/calendar/event?eid=Mm9ybmFjYnRodGFidHFxZXVyaWR2cmdpanAgY19ndTN2NjZlZnA4NGk2ZXZtNzRmMTF2bHIwMEBn&ctz" class="button" target="_blank">
    Go to Calendar
  </a>
