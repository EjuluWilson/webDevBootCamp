### HTLML
* When using the `<img />` tag, always provide alternative text using the `alt` attribute for webiste readers. This will for example help visually impaired individuals scan/read through the webiste withoou seeing a thing 
* the `public folder 📁` in in th HTML projects usually contains all the .HTML files that are not index.html

### CSS
* The `id = ""` attribute identifies elements uniqely while the `class = ""` attribute can be shared by multiple elements.
* ` a pt ( a point metric) ` is what MS office uses. E.g when the font siz is 12, it implies  12 pt (12 points). This can give a rough idea of the font-size/weight one is setting. A `px` is smaller.`em` is ralative to the parent and   `rem is raltive` to the root element e.g `<html> </html>`
* In CSS, font-size adjusts text size while font-weight controls text thickness or boldness.
* Use the `div elemetn`to layout or style elements together. It groups elements.
* use the `pesticide` extension to visualise `<div> </div>`
* The `height` and `width` properties are for the inner most box (where the content of the element is to be placed). This can pause challnegs when calculating the dimentions of your element. To resolve this, use the `box-sizing: border-box` property. This which make the height and width property refere to the height of the elememt up to the border (excluding the margin). This can simplify calcualtions.<br><br>
##### Behavior of an Unstyled Inner `<div>`

- **Block-Level**: Starts on a new line, extends full available width.
- **No Visual Distinction**: Appears the same as its parent without specific CSS.
- **Inheritance**: Inherits font and color properties from parent.
- **Margins and Padding**: Defaults to no margins or padding unless specified.
- **Content Flow**: Contains elements (e.g., `<p>`) that also behave as block-level. <br> <br>

>CSS Cascading levels
![cascading levels](./css_cascading_levels.jpg)

>Combining selectors in CSS
![Combining Css Selectors Image](./combining_selectors.png)
![Combining Css Selectors Image](./combining_selectors_2.png)

## CSS Positioning

#### Static
- **Default position:** Elements follow the normal document flow, stacking one after the other.
- **Offsets:** (`top`, `right`, `bottom`, `left`) do not apply.

#### Relative
- **Position:** Moves an element relative to its normal position in the document flow.

#### Absolute
- **Position:** Relative to the nearest parent with a non-static position. If no such parent exists, it positions relative to the initial containing block (typically the HTML document).

### Fixed
- **Position:** Fixed relative to the viewport, unaffected by scrolling.

### Z-index (Stacking Context)
- Think of it like the z axis coming out of the screen. The highert the z-axis value, the more top/ outer the element is the `default value is 0`. Values can be negative as well.

## CSS `display` Property 

- **Block** (default): Each element starts on a new line and extends across the full available width.
- **Inline**: Elements line up one after another horizontally, like words in a sentence. They only take up as much space as their content needs.
- **Inline-Block**: Combines features of both inline and block. Elements line up horizontally but you can set their width and height.
- **None**: Completely hides the element, making it invisible and unclickable.

