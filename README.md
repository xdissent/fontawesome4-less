fontawesome4-less
=================

Fontawesome 4 LESS source files as meteorite smart package

#Installation
Import Font Awesome in on of your LESS files like this:
```
@import "/packages/font-awesome-4-less/font-awesome.lessimport";
```
Execute this command with the project directory:
```
ln -s ../packages/font-awesome-4-less/lib/fonts public/fontawesome
```

##Note: the imported LESS files use the ```fa-``` prefix

#Usage
Adding icons to your LESS by calling the #fa-icon-mixin (example):
```
.go-back-link i { #fa-icon(reply) }
```
Note that you must not add the prefix to the icon name