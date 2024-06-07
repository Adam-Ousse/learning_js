Certainly! Below is a collection of common CSS used to position and design user interfaces. This includes properties for layout, spacing, and general styling to create visually appealing and functional UIs.
### The box model :

![[Pasted image 20240604114331.png]]

### Layout and Positioning

#### Flexbox
Flexbox is commonly used for layout purposes to arrange items in a flexible manner.
![[Pasted image 20240604114945.png]]
https://yoksel.github.io/flex-cheatsheet/#section-justify-content
align-content : .. in vertical direction
justify content : aligns children in horizontal direction
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
  grid-template-columns: repeat(12, 1fr); /* Define columns split a row into 3 columns ,1fraction unit width*/
  /*repeat(auto-fill,300px)" 300px height, automatic width
  justifyContent : "space-around";
  */
  grid-template-rows: auto; /* Define rows */
  /* or instead 
  gridAutoRows =  "150px" 
  */
  gap: 10px; /* Gap between items rowGap,columnGap */
}

/* Grid item */
.grid-item {
  grid-column: span 2; /* Span of 2 columns or gridColumn*/
  grid-row: 1 / 3; /* Define how many rows span or gridRow : "span 2"*/
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

    box-sizing: border-box; /*without the border-box the width would be 100% +10px +10px from padding by default it's content-box */

}
```

```cs
button{
	padding : 10px 20px; /*10px top and bottom, 20px left and right*/
}
```


```
main {

    padding: 57px 27px;

    color: white;

    background-image: url(./images/react-icon-large.png);

    background-repeat: no-repeat;

    background-position: right 75%;

}
```