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

# Flexbox
> There are two axis: The main-axis(horizontal by default) and the cros-axis(perpendicular to the main). The `flex-direction` determines the direction of the main axis. The  `justify-content` property aligns items along the main a-xis
while the `align-content` property aligns along the main-axis.

### Flexbox Sizing and Default Values

Flexbox provides several properties to manage the sizing of items within a container. Understanding the default values and how these properties interact is crucial for mastering layout with Flexbox.

#### Default Values

- **`flex-grow`**: The default value is `0`. This means, by default, flex items won't grow beyond their initial size to fill the container.
- **`flex-shrink`**: The default value is `1`. This implies that flex items can shrink if necessary, to prevent overflowing the container.
- **`flex-basis`**: The default value is `auto`, meaning the size of the item is based on its content or specified dimensions.
- **`flex`**: The shorthand defaults to `0 1 auto`, which combines the three properties: `flex-grow: 0`, `flex-shrink: 1`, `flex-basis: auto`.

#### Size Calculation Priority

Flexbox sizing follows a specific order of priority when calculating the actual size of an item:

1. **Content size**: If `flex-basis` is set to `auto`, the size of the content determines the base size. If there's no explicit size set, the content's natural size is used.
2. **Width/Height**: If specified, this will override the content size unless `flex-basis` is set to something other than `auto`.
3. **`flex-basis`**: This property takes priority over the content size but can be overridden by explicitly set width/height. If `flex-basis` is set to any specific value (like `50%`, `200px`, etc.), it dictates the starting size before flex-grow or flex-shrink are applied.
4. **`min-width`/`max-width`**: These constraints apply last and can override all previous settings. `min-width` ensures a flex item cannot be smaller than the specified value, regardless of the `flex-shrink` settings, while `max-width` ensures that the flex item cannot grow larger than the specified value, regardless of the `flex-grow` settings.

### Understanding the Flexbox Shorthand: `flex`

The `flex` property is a shorthand for setting `flex-grow`, `flex-shrink`, and `flex-basis` together. It simplifies the configuration of flex items within a container.

#### Syntax
- **General form**: `flex: [flex-grow] [flex-shrink] [flex-basis]`
- **Common usage**: `flex: 1` or `flex: 0 1 auto`

#### Components
- **`flex-grow`**: Controls the proportion of available space the item should take after filling the initial size. A value of `0` means no expansion.
- **`flex-shrink`**: Dictates how the item should shrink relative to others in the container. A value of `0` prevents it from shrinking.
- **`flex-basis`**: Sets the initial main size of the item before remaining space is distributed. Specifying this as a percentage (`10%`, `50%`, etc.) sets the size relative to the container's size.

#### Example
- **`flex: 1 0 10%`**: The item will grow to fill extra space if available, will not shrink, and starts with a size of 10% of the container’s total size.

### Display-Grid
- When grid-items using the `grid-area` property, ensure that all the related components are using the same property for things to work out well.
- `grid-area: top/left/bottom/right`

# Bootstrap
- To overwite bootrap css using an external style sheet, place the link for the external CSS below the Boostrap one.
- `col-size(sm/lg/xlg etc) val` implies the size of the compopent when the screen size of the display is of size and above. e.g `col-lg-6` implies occupying 6 cols for screens that are `lg` and above.  
**Note:** If the screen size comes below that specified, the class defaults to `col` (to full width).

# UI/UX
> Color theory
![Color theory](./color_moods.png)

>Font theory
![Font theory](./font_theory.png)


---
---

# Javascript

- `===` evaluates both the datatype and value. `==` does not care about the data type. Similary, use `!==`.