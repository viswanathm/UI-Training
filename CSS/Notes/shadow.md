# Shadow

* There are 2 kinds of shadows in CSS, which are:
    1. text-shadow (Text will get shadow)
    2. box-shadow (HTML ele will get shadow)

## Text-shadow

* This CSS property will take 4, which are:

    1. horizantal direction distance
    2. vertical direction distance
    3. blur of shadow
    4. color of shadow

example:
<p>ABC</p>
p{
    text-shadow: 3px 3px 3px #666;
}

## box-shadow
* This CSS property will take 5 values, which are:

    1. horizantal direction distance
    2. vertical direction distance
    3. blur of shadow
    4. shadow size (optional)
    5. color of shadow


example:
<p>ABC</p>
p{
    box-shadow: 3px 3px 3px 3px #666;
}

Note: We can have text-shadow and box-shadow for a same element. like:

<p>ABC</p>
p{
    text-shadow: 3px 3px 3px #666;
    box-shadow: 3px 3px 3px 3px #666;
}