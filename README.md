# vue-js lazy loading routes group with webpack example | Multiple Entrypoints

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

As this example we crete an web application with 4 main parts like below. 
* Home - /
* Admin - /admin
    * profile - /admin/profile
    * task - /admin/task
* Cashier
    * profile - /cashier/profile
    * task - /cashier/task
* About

so, if we use general way to build this application using webpack, then this application's webpack be a large file.
but as this application, the user admin doesn't use cashier section anywhere.
and other hand cashier doesn't use admin section anywhere. 
in this situation we are do meaningless work creating on js bundle for entire application.
At this situation we can create separate js bundle for each users/sections instead of creating one js bundle for entire application. 
And other spacial thing is, in that particular section a section's other sub components must be a single js bundle. 
its mustn't be separates js bundles.  
those components must be group together.


![](https://github.com/mafei-dev/repo-imgs/blob/master/vue-js-lazy-loading-routes-group-with-webpack-example/ScreenShot_20200122233949.png)
