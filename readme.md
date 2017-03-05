#Sass & SCSS

##Notes
  + Variables
    ```scss
    $main-color: #fff;
    ```
  + Nesting
    ```scss
    nav {

      ul {
        background-color: $main-color;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        display: inline-block;
      }
    }
    ```
  + Partials
    - main.scss
    - _profile.scss
    ```scss
    @import "profile";
    p {
      font-size: 24px;
    }
    ```
  + Extend
    @extend .whatever;
    ```scss
    .panel {
      background-color: lightgreen;
      margin: 10px;
      color: #fff;
    }

    .little-panel {
      @extend .panel;
      font-size: 16px;
      padding: 5px;
    }

    .big-panel {
      @extend .panel;
      font-size: 32px;
      padding: 20px;
    }
    ```
  + Mixin
    @mixin foo(param)
    ```scss
    .panel {
      border: 3px solid gray;
      background-color: lightgreen;
      margin: 10px;
      color: #fff;
    }

    @mixin border-radius($radius) {
      -webkit-border-radius: $radius;
      -moz-border-radius: $radius;
      -ms-border-radius: $radius;
      border-radius: $radius;
    }

    .little-panel {
      @extend .panel;
      @include border-radius(5px);
      font-size: 16px;
      padding: 5px;
    }

    .big-panel {
      @extend .panel;
      @include border-radius(20px);
      font-size: 32px;
      padding: 20px;
    }
    ```
  + Operations
    ```scss
    $buttonBackground: #006699;
    $buttonColor: #fff;
    $buttonPadding: 5px;

    .button {
      background: $buttonBackground;
      border-radius: 8px;
      color: $buttonColor;
      display: inline-block;
      padding: $buttonPadding;
      text-decoration: none;
    }

    .jumbo-button {
      @extend .button;
      padding: $buttonPadding + 30;
    }

    .light-button {
      @extend .button;
      background-color: $buttonBackground * 1.5;
    }
    ```