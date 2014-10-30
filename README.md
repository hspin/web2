# dunveganspace angularjs web app

## Install instructions

### first global installs

make sure you have node installed
    
    node --version

install bower

    npm install -g bower

install grunt 

    npm install -g grunt-cli
    
### get application code

    git clone git@github.com:hspin/cli_dunveganspace.git

### second install application

switch to app root and run

    npm install

and then

    bower install

finally fire up the server (note spelling = serve )

    grunt serve

now you should be able to open a browser and see the app at-

    localhost:9000


## Final build instructions

switch to app root and run

    grunt build

Production ready code will be generated and placed in the directory /dist

ftp /dist directory to production server

