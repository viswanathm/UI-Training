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