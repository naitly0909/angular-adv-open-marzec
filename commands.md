npm i -g create-nx-workspace
create-nx-workspace

# lub

npx create-nx-workspace
? Workspace name (e.g., org name)     music-apps
? What to create in the new workspace angular           [a workspace with a single Angular application]    
? Application name                    music-app
? Default stylesheet format           SASS(.scss)  [ http://sass-lang.com   ]

# ===========

npm run ng add @nrwl/angular # Add Angular capabilities to a workspace

npm run ng g @nrwl/angular:app music-app

npm install -g @nrwl/cli

ng s music-app

npm run start music-app

===

npm run ng add @angular/material

? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes 
? Set up browser animations for Angular Material? Yes


npm i bootstrap

===

ng g core -m app 
ng g features/blog -m app --routing 
ng g shared/ui -m app 

