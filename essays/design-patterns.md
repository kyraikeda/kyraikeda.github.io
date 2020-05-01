---
layout: essay
type: essay
title: "The Art in Design Patterns"
date: 2020-04-30
labels:
  - Design Patterns
  - Software Engineering
  - Code
---

<img class="ui fluid image" align="center" src="https://miro.medium.com/max/1400/1*d_lXoGt-EZDRuwg5lW9swg.png">

As developers, we need to solve problems efficiently, but how do we do that? For painting, we often need a sketch as a basis to help form the finished product. In software engineering, we use something called design patterns as a basis to form solutions. These design patterns are guides to how problems should be addressed; they cannot be directly converted to finished code. They are useful to speeding up development because they are tested and proven! Design patterns even reduce subtle errors that may arise later if software is not being designed efficiently. As there are various methods to sketching on paper, there are different types of design patterns that are applied to different situations. The three general patterns are creational, structural, and behavioral.
<br/>

## Painting Things Clearer
Creational design patterns are about class instantiation, and it can be divided further into class-creation and object-creation. Class-creation patterns use inheritance, while object-creation delegates effectively to finish the job. Some examples of this category are the prototype pattern where objects are created by making copies of a prototypical instance and the singleton pattern where a global variable is provided in an object-oriented language that does not support global variables.
Structural design patterns are about class and object composition. Like creational patterns, structural patterns can be divided into class-creation and object-creation subdivisions. The structural class-creation pattern uses inheritance to compose interfaces, and the structural object-creation pattern defines ways to make objects have new functionality. An example of this pattern is the proxy pattern where objects represent other objects. 
Behavioral design patterns are about class objects’ communication. These are concerned with how objects communicate with each other in code. An example of this is the observer pattern which describes notifying change to other classes.
<br/>

## In My Own Work
Without realizing, I have used some design patterns in my own coding projects. In ICS 111 and 211 where we used Java, I utilized the creational design pattern, specifically the prototype one. Now in ICS 314, we use the framework Meteor to build web applications. Meteor actually uses the Model View Controller (MV) pattern as their basis. The MVC pattern logically divides application concerns into three components where developers can work simultaneously on different parts. Currently, I’m working on a buying/selling site called Manoalist which uses Meteor. For this project specifically, we use MongoDB as our database (model), React to work on our front-end UI design (view), and a router to bring our components to life on the site (controller). Clearly, I can see how design patterns make our coding efficient and the environments we use take advantage of these design patterns.
<br/> 

<img class="ui medium image" align="center" src="https://pics.me.me/software-engineer-e-design-patterns-programmer-design-patterns-software-engineer-31769032.png">


