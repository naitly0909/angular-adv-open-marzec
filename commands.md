# GIT 
git clone https://bitbucket.org/ev45ive/angular-adv-open-marzec.git

cd angular-adv-open-marzec
npm i 
npm run serve

# Visual Studio Code

https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

> https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials

https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

# Nrwl Nx Workspaces

npm i -g create-nx-workspace
create-nx-workspace

# lub

npx create-nx-workspace
? Workspace name (e.g., org name) music-apps
? What to create in the new workspace angular [a workspace with a single Angular application]  
? Application name music-app
? Default stylesheet format SASS(.scss) [ http://sass-lang.com ]

# ===========

npm run ng add @nrwl/angular # Add Angular capabilities to a workspace

npm run ng g @nrwl/angular:app music-app

npm install -g @nrwl/cli

ng s music-app

npm run start music-app

===

npm run ng add @angular/material

? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes

npm i bootstrap

===
npm i -g @angular/cli

ng g m core -m app
ng g m shared/ui -m app

ng g m features/blog -m ./src/app/app.module.ts --routing true --force

<!-- ng g m features/blog -m app --routing --force -->

npm run ng g c features/blog/containers/blog-posts -m ./src/app/features/blog.module.ts
<!-- npm run ng g c features/blog/containers/user-posts -m ./src/app/features/blog.module.ts
npm run ng g c features/blog/containers/recent-posts -m ./src/app/features/blog.module.ts -->

npm run ng g c features/blog/components/blog-post
<!-- npm run ng g c features/blog/components/blog-post-full -->


ng g s core/api/blog-api

ng g c features/blog/components/comments
ng g c features/blog/containers/single-post

ng g c shared/components/PageNotFound --export


ng g s features/blog/services/blog-post


# ZAsoby

https://jsonplaceholder.typicode.com/

https://ng-bootstrap.github.io/#/components/nav/overview

https://material.angular.io/components/form-field/overview#prefix-amp-suffix


https://ng.ant.design/components/grid/en

https://github.com/angular/flex-layout/wiki/Declarative-API-Overview

https://material.angular.io/guide/theming

https://material.io/design/color/the-color-system.html#color-theme-creation

https://designsystemsrepo.com/design-systems/

http://mdfostrap.blogspot.com/

http://www.jsontots.com/

https://material.io/resources/icons/?style=sharp

https://nx.dev/angular/getting-started/nx-and-cli

https://clarity.design/

https://ant.design/

https://www.carbondesignsystem.com/

http://styleguides.io/

https://angularplayground.it/

https://storybook.js.org/docs/guides/guide-angular/

https://nx.dev/angular/guides/modernize-storybook-angular

https://blog.nrwl.io/ui-testing-with-storybook-and-nx-4b86975224c

https://www.npmjs.com/package/@nrwl/storybook

https://material.angular.io/guide/schematics

https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2


# Lazy load
https://webpack.js.org/guides/lazy-loading/

# Music App

ng g m features/music -m ./src/app/app.module.ts --routing 

ng g c features/music/containers/music-search
ng g c features/music/containers/album-details

ng g c features/music/components/album-card
ng g c features/music/components/search-form
ng g c features/music/components/search-results
ng g c features/music/components/tracks-list

# Express
npm install --save-dev @nrwl/express
ng g @nrwl/express:app blog-api --frontendProject=music-app

nx serve blog-api-blog-api

<!-- nx serve blog-api-blog-api >>> package.json > scripts > api -->
npm run api



ng g m src/app/features/todos --routing true 
ng g s src/app/features/todos/services/todos 
ng g c src/app/features/todos/views/todos-main
ng g c src/app/features/todos/components/todos-list
ng g c src/app/features/todos/components/todo-item
ng g c src/app/features/todos/components/todo-details


# NgRx
npm i --save @ngrx/schematics
npm install @ngrx/{store,effects,entity,store-devtools} --save

ng generate @ngrx/schematics:store State --root --module app.module.ts


# Reducer
ng generate @ngrx/schematics:reducer Counter --reducers reducers/index.ts


ng generate @ngrx/schematics:store Todo --module features/todos/todos.module.ts --dry-run

ng generate @ngrx/schematics:feature features/todos/Todo --flat false --creators true --reducers reducers/index.ts --module features/todos/todos.module.ts --dry-run
 
# Feature module
$ ng generate @ngrx/schematics:store features/todos/Todo --module todos.module.ts

$ ng generate @ngrx/schematics:feature features/todos/Todo --module todos.module.ts  --group --creators
