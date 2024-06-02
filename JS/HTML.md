```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
makes websites look good on phones and tablets.
- **`width=device-width`**: Make the website as wide as the screen of the device.
- **`initial-scale=1.0`**: Start with a zoom level of 100%, so everything looks normal-sized.

### Favicon :
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>

  <!-- Favicon for all devices -->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <!-- Favicon for Apple devices -->
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

  <!-- Favicon for Android devices -->
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">

  <!-- Favicon for Microsoft devices -->
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-TileImage" content="mstile-144x144.png"> 
</head>
<body>
</body>
</html>
```
