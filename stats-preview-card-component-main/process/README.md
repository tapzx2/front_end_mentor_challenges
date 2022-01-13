# From Mobile to Desktop

After doing a few designs on Front End Mentor I'm trying to develop a replicable pattern of design -> website.

I've gotten a few tidbits from folks on Front End Mentor. I've seen other people's design processes like [Chen Hui Jing's](https://chenhuijing.com/blog/how-i-design-with-css-grid/#%F0%9F%96%8A).

1. Fill in screen widths
2. Sketch design + changes on paper
3. Mark up (with design in mind!)
4. Check in Lynx (thanks Chen Hui Jing!)
5. Mobile First - Outside In

## 1. Fill in Widths

Front end mentor gives 2 designs for this (top left and bottom right). I though a little added margin around the content in the middle widths made it look more balanced.

![](./Screen%20Shot%202022-01-13%20at%2011.15.00%20AM.png)

## 2. Sketch Changes

## 3. Markup + 4. Lynx

Since there are 2 images for different widths, this seems to bethe perfect time to try CCS-Tricks' [A Guide to the Responsive Images Syntax in HTML](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#using-picture).

```
<picture>
  <source 
    srcset="images/image-header-desktop.jpg"
    media="(min-width: 1100px)"
  />
  <img 
    src="images/image-header-mobile.jpg" 
    alt="people working"
  />
</picture>
```

Linux seems to like it.

![](Screen%20Shot%202022-01-13%20at%2011.24.21%20AM.png)


Ok... let's try the literal version from the guide.

## 5. Mobile First - Outside In

Add a simple reset. Set default styles for tags like h1 and p. Set default styles for accent blocks and accent spans.

Starting from the "outside" boxes and working in, here's the first draft.

![](./Screen%20Shot%202022-01-13%20at%2012.36.18%20PM.png)

The fronts are not breaking right and the margin between the picture and the text is wrong.

Inspecting the image, it is taking too much space. There's a gap after PLUS the margin.

![](Screen%20Shot%202022-01-13%20at%2012.44.33%20PM.png)

A shot in the dark search `image in css takes up space at bottom,but doesn't show there` returns a [hopeful answer](https://stackoverflow.com/questions/44857664/css-image-overflows). Images are treated as inline elements and need to be set as block elements to make this little bit of space go away.

Setting it to block does make a little space go away, but that wasn't it. The `margin-bottom: 40px` I assigned to `<picture>` flowed down at applied to the `<img>` child as well, doubling the margin. Fixed it by applying the margin to the `<img>` child only.

That leaves the text breaking.

```
h1 {
    max-width: 280px;
}

p {
    max-width: 250px;
}
```

![](Screen%20Shot%202022-01-13%20at%2012.57.04%20PM.png)

Ok, looks good! Moving on to the mid size.

```
@media screen and (min-width:500px){ 
    .container{
        box-sizing: content-box;
        border: 35px solid #1B1937;; 
    }
}
```

Then the large size. This was kinda not great? Took way too long. Can't tell if its because this was first time, but I did keep getting confused. But it is done!

![](Screen%20Shot%202022-01-13%20at%202.10.56%20PM.png)