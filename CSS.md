Certainly! Below is a collection of common CSS used to position and design user interfaces. This includes properties for layout, spacing, and general styling to create visually appealing and functional UIs.

### Layout and Positioning

#### Flexbox
Flexbox is commonly used for layout purposes to arrange items in a flexible manner.

```css
/* Flex container */
.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: center; /* flex-start, flex-end, space-between, space-around */
  align-items: center; /* flex-start, flex-end, stretch, baseline */
  flex-wrap: wrap; /* or nowrap */
}

/* Flex item */
.item {
  flex: 1; /* or flex-grow, flex-shrink, flex-basis */
  align-self: center; /* flex-start, flex-end, stretch, baseline */
}
```
```css
.thumbnails {
    display: flex;
    flex-wrap: wrap;/*wraps the elements inside of thumbnails to the max width*/
    /*flex-wrap : wrap-reverse ; reverses the order*/
    gap : 10px 15px;/* the chidl elements now have a top-bot margin of10px and a left right margin of 15px */
    max-width: 560px;
    margin: 50px auto;
}
.item {
	flex-grow : 1; /*expand items to fit the parent element*/
}
```
#### Grid
CSS Grid is a powerful layout system for creating complex designs.

```css
/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Define columns */
  grid-template-rows: auto; /* Define rows */
  gap: 10px; /* Gap between items */
}

/* Grid item */
.grid-item {
  grid-column: span 2; /* Span columns */
  grid-row: 1 / 3; /* Define rows span */
}
```

#### Positioning
Positioning elements using CSS.

```css
/* Position relative */
.relative-container {
  position: relative;
}

.relative-item {
  position: absolute;
  top: 10px;
  left: 20px;
}

/* Fixed position */
.fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Sticky position */
.sticky-nav {
  position: sticky;
  top: 0;
}
```

### Spacing and Sizing

#### Margin and Padding
Used to create space around and inside elements.

```css
.box {
  margin: 20px; /* Outside spacing */
  padding: 15px; /* Inside spacing */
}
```

#### Width and Height
Control the size of elements.

```css
.container {
  width: 100%; /* Full width */
  max-width: 1200px; /* Maximum width */
  height: 50vh; /* 50% of viewport height */
}
```

### Typography

#### Font and Text
Styling text within the UI.

```css
body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

h1, h2, h3 {
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```
cursor style pointer : ` cursor: pointer;`
user select : `user-select:none;`
### Colors and Backgrounds

#### Colors
Setting colors for text, backgrounds, borders, etc.

```css
.primary-color {
  color: #007bff; /* Primary color */
}

.background {
  background-color: #f8f9fa; /* Light background */
}

.border {
  border: 1px solid #dee2e6; /* Border with light gray color */
}
```

#### Backgrounds
Applying background colors and images.

```css
.background-image {
  background-image: url('image.jpg');
  background-size: cover; /* or contain */
  background-position: center;
}
```

### Box Model

#### Box Shadow and Borders
Creating shadows and defining borders.

```css
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect */
  border-radius: 8px; /* Rounded corners */
}

.button {
  border: 2px solid #007bff; /* Border */
  border-radius: 5px; /* Rounded corners */
}
```

### Responsive Design

#### Media Queries
Adjusting the layout for different screen sizes.

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Stack items on smaller screens */
  }

  .grid-container {
    grid-template-columns: 1fr; /* Single column grid */
  }
}
```

### Styles of particular elements : 
```css
ul {
	list-style-type: none; /* No cercles or squares for the list*/
}
```

```css
input {

    width: 100%; /* 100% */*

    padding-left: 10px;

    padding-right: 10px;

    box-sizing: border-box; /*without the border-box the width would be 100% +10px +10px from padding*/

}
```

```cs
button{
	padding : 10px 20px; /*10px top and bottom, 20px left and right*/
}
```