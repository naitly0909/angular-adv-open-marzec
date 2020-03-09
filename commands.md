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