#font-awesome-4-less
Fontawesome 4 LESS source files as meteorite smart package.

##Installation
Import Font Awesome in on of your LESS files like this:
```css
@import "/packages/font-awesome-4-less/font-awesome.lessimport";
```
Execute this command with the project directory:
```bash
ln -s ../packages/font-awesome-4-less/lib/fonts public/fontawesome
```

**Note:** the imported LESS files use the `fa-` prefix.

##Usage
Adding icons to your LESS by simply calling the #fa-icon-mixin (example):
```css
.go-back-link i { #fa-icon(reply) }
```
Use the icon name without any prefixes.