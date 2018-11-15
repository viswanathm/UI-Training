# Transition - Animate:

* We can animate any change in the webpage using 2 ways, they are:

    1. Transition
    2. Animate

* Transition: When we are defining any CSS properties using selectors, we can mention transition in that definition as below:

div {
    color: red;

    transition-property: color;
}

* we can also mention the duration for which the animation should happen using transition-duration property.

div {
    color: red;

    transition-property: color;
    transition-duration: 2s;
}

Note: duration value should be followed by 's' - seconds.

* We can also mention transition delay, which means after how much time the animation should start, using transition-delay property.

transition-delay: 2s;

* We can also mention transition timing type, which means what is the flow or timing of the animation , using transition-timing-function property.

transition-timing-function: ease-in;

Note: other values for timing funtion can be linear, ease-out, cubic-brezer and so on...

Note: We trigger transition, by changing the particular propety (mentioned for transition-property) on mouse over, click or in any other way.

# Animation

* We can animate any HTML element using 'animation' CSS properties.

* This is similar to transition properties, like we have duration, dealy, timing function.

* Apart from these CSS properties like transition, we also have other properties like interation count, animation direction.

* Unlike transition, we define animation using a selector called @keyframes and use the name of keyframes in our actual selector.

* While defining @keyframes, we can define what should happen during the animation at a specific keyframe.

example:
## definition of keyframe

@keyframes colorchange {
    from {background-color: red;}
    to {background-color: yellow;}
}


@keyframes colorchange {
    0% {background-color: red;}
    100% {background-color: yellow;}
}


@keyframes colorchange {
    0% {background-color: red;}
    25% {background-color: pink;}
    50% {background-color: blue;}
    75% {background-color: green;}
    100% {background-color: yellow;}
}

##usage of keyfarme
div {           
    animation-name: colorchange;
    animation-duration: 4s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

* CSS property 'animation-name' should be given a value of keyframes name.

* CSS property 'animation-duration' should be given a value of time like 2s (2 seconds). This property defines how long the animation will happen.

* CSS property 'animation-delay' should be given a value of time like 2s (2 seconds). This property defines when will the animation start.

* CSS property 'animation-iteration-count' should be given a value of number like 1,2,...,infinite. This property defines when how many times the animation should repeat.

* CSS property 'animation-direction' should be given a value like normal, reverse, alternate, alternate-reverse... This property defines when direction in which the animation should repeat.

Note: if we defined keyframes from 0% to 100%.
    1. Normal: will go from 0% - 100%
    2. Reverse: will go from 100% - 0%
    3. Alternate: will go 0% - 100% - 0% - 100% - ......
    4. Alternate-reverse: will go 100% - 0% - 100% - 0% - ......
