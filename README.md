# bootstrap-alert-helper : A simple bootstrap alert helper.
###Philosophy
This pluging works as a helper to simplify showing new alerts dynamically from js code in twitter bootstrap.
###Dependencies
This plugin replies on the following tools:
* Twitter Bootstrap 3.0.2
* jQuery v1.10.2
* Font Awesome 4.0.3

> The technologies listed above doesn't necessarily indicate that they cannot run on older tools. I still didn't check what is the minimum versions to start using the plugin. If you tested and would like to contribute, please fork the project and create a merge request or simply add a new task.

###How to
To start using the pluging include the js file after you setup Bootstrap as shown in the following:
```html
<script type="text/javascript" src="js/bootstrap-alert-quick.js"></script>
```
Then add a container, it might be like that:
```html
<div class="bootstrap-alert-placeholder"></div>
```
Later add a an alert as follows:
```javascript
    $(".bootstrap-alert-placeholder").bootstrapAlert({content: "Bravo! your alert is simply added"});
```
###Options
Like any other jQuery plugin, this plugin ex extendable with options. The options are:
* __content__(_string_): This is your message content, the content can be either Text, Html, DOM Object or jQuery Object
* __type__(_string_): This is the type of the alert, possiblities are:
  * __success__ to create a green success message
  * __warning__ to show an orange warning message
  * __danger__ to show a red alert message
  * __info__ to show an info blue message
* __showIcon__(_bool_): true or false to whether show an icon on the left of the message
* __icon__(_string_): this is a fontawesome icon class without **fa fa-**. ex: exclamation, exclamation-circle
* __showCloseButton__(_bool_): true or false to whether show the close button

###The End
This is it for now. I will regularly update the plugin for more features if I need them.
Please feel free to fork the plugin and create merge requests if you updated it.
