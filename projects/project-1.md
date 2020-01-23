---
layout: project
type: project
image: images/ART115D Flyer.jpg
title: ART 115D Flyer
permalink: projects/designflyer
# All dates must be YYYY-MM-DD format!
date: 2018-04-15
labels:
  - Art
  - Design
  - Graphics
summary: A flyer that I made for an ART 115D class at Leeward Community College.
---

<div class="ui small rounded images">
  <img class="ui image" src="../images/ART115D Flyer.jpg">
</div>

This project was an assignment for ART 115D at Leeward Community College. The objective was to design a flyer to advertise for next semester's class using concepts learned already and focusing on the C.R.A.P. principles. For those unfamiliar with design, this acronym stands for Contrast, Repetition, Alignment, and Proximity. It is widely used by graphic and visual designers for websites.

For this project, I used Adobe Photoshop to make everything from the cardboard box to the starry sky. This took hours as I was busy with finding the right texture for the box and figuring out how to make the most realistic shadows. Learning the C.R.A.P. principles helped to define what it is about a design or art piece that makes it visually appealing. In my case, I used colors white and navy blue to contrast with each other and emphasized "Digital Design" by making it huge and underlining it.
Although I took this class about two years ago, the concepts learned are still present in my life especially now taking software engineering. 
I wanted this flyer to convey that design is up to your imagination. The cardboard box represents a person's mind, and the flowing night sky represents the endless possibility of ideas that can come out of one's head.

Here is some code that illustrates how we read values from the line sensors:

```js
byte ADCRead(byte ch)
{
    word value;
    ADC1SC1 = ch;
    while (ADC1SC1_COCO != 1)
    {   // wait until ADC conversion is completed   
    }
    return ADC1RL;  // lower 8-bit value out of 10-bit data from the ADC
}
```

You can learn more at the [UH Micromouse Website](http://www-ee.eng.hawaii.edu/~mmouse/about.html).



