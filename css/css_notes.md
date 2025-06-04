# CSS Notes (only theory)

1. Intro
   - cascading, styling & appearance of a website
   - inline, internal, external, separation of concerns

2. selectors
   - applying styles to html - internal using inline and external using a link
   - american english is used for properties
   - wrong spellings are ignored
   - selector, property, property value, decalration, rule or ruleset
   - universal(*), element, class(.), id(#), nested elements
   - CSS - top down, waterfall, last rule is applied
   - specificity
   - inheritance
   - !important - overrides everything , do not use it
  
3. colors
   - rgb(red,green,blue,alpha)
   - alpha channel - transparency or opacity
   - hexadecimal values #000000 to #FFFFFF - #RRGGBB - shorthand using pairs
   - color palette
   - hsl(hue,saturation,lightness)
   - use hex codes for colors as each browser has its own interpretation of colors

4. units
   - user agent stylesheet
   - absolute units - pixels
   - relative units - percentages, em, rem(not root element), vw (viewport width)
   - em (relative to parent)
   - rem (relative to root)
   - sharpness, PPI vs DPI, physical vs logical pixel
  
5. typography
   - it is the way text is arranged and presented
   - text - decoration, transform, align, indent
   - line height
   - spacing - letter, word
   - font - size, family, wight, syle,
   - oblique is stronger italic
   - popular font family - serif, sans-serif, monospace, cursive, fantasy - fallbacks - font stacks - web safe fonts - importing fonts
  
6. box model
   - content -> padding -> border -> margin (inside to outside)
   - Shorthand Property Value Order (clockwise TRBL - Top Right Bottom Left)
   - css reset using* - to take control of browser styling
   - margin - top right bottom left
   - border,outline - width type color
   - border radius
   - outline offset

7. display
   - box-sizing -> border-box
   - block (new line, custom height,width,margin,padding)
   - inline (same line, content width, horizontal margin,padding)
   - inline-block (inline + custom HWMP)
  
8. position
   - static
   - relative (to the current window, gap is maintained)
   - absolute (closest position ancestor, overlappling)
   - fixed (w.r.t current window)
   - sticky (w.r.t parent)

9. styling links
   - cursor
   - pseudo classes - visited, hover, active, focus

10. styling lists
    - list-style: (type, image, position)
    - pseudo elements - marker
    - values

11. float, clear & overflow
    - collapse
    - scrolling

12. flexbox
    - parent-child containers
    - flex container - main-axis(x-axis,row), cross-axis(y-axis,col)
    - direction (default is row), wrap, flow
    - justify-content, justify-items (main axis)
    - align-items, align-content (cross axis)
    - main & cross axes get switched when flex direction changes
    - flex items - order(sequence), grow, shrink, basis
    - align-self
    - [flexbox game](https://flexboxfroggy.com/)

13. media queries and responsive web design
    - mobile first approach
    - xs, s, md, lg, xl
    - conditional & range-based css styling for various display sizes
    - [reference](https://github.com/gitdagray/css_course/blob/main/17_lesson/css/style.css)

14. shadows (box & text) & variables
    - x-offset y-offset blur-radius color
    - variables are defined in :root as it has more specificity than html
    - var(--custom-variables)
    - [reference](https://github.com/gitdagray/css_course/blob/main/20_lesson/css/style.css)

15. animations
    - series of complex movement (multiple transitions)
    - @keyframe name { from% {} to% {} }
    - name duration timing-function delay iteration-count direction fill-mode play-state name

16. pseudo selectors
    - pseudo classes vs pseudo elements
    - think of specificity

17. transitions
    - change in state (smooth)
    - property duration timing-function delay

18. transforms
    - 2D - rotate(deg), scale(), skew(deg), translate(x, y)
    - 3D - z, perspective()

19. grid and grid layouts
    - container, item, cell, track, rows, cols, line
    - parent-child containers
    - gap, template, start end, area
    - fractional unit, repeat(times, xfr)
    - horizontal - justify-self, justify-item
    - vertical - align-self, justify-item
    - both - place-self, place-items
    - auto-fit, minmax(),
    - [grid game](https://cssgridgarden.com/)
  
20. organising and BEM
    - Follow Your Team
    - Use comments to create headers
    - Sort properties alphabetically ABCSS
    - Larger projects follow a naming convention methodology. For example: BEM - Block, Element, Modifier
    - [reference](https://github.com/gitdagray/css_course/blob/main/23_lesson/css/style.css)
  
21. UI components
    - Navigation Bar
    - SideBar
    - Content
    - Footer
    - Card
    - Hero Section & Featured
    - Carousel
    - Newsletter & Contact

22. Miscellaneous
    - background and responsive images
    - dark mode
    - functions  

- TODO : project - Add styles to Taco Shop project

> Sources : [Dave Gray](https://youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&si=2iSV6pXKPt5TlBIc), [Codehelp](https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=HRaIgfp5NrFFuBhP)
>
> Resources : [Google Fonts](https://fonts.google.com/), [Specificity Calculator](https://specificity.keegan.st/), [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS), [CSS Tricks](https://css-tricks.com/)
