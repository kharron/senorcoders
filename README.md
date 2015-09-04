## rdio-landing
A Top-end landing page for Rdio

## Resources
- Interaction Notes - https://www.dropbox.com/s/9gd25u1x5o4e5sm/RDI0102-interaction-notes.pdf?dl=0
- Handoff Folder - https://www.dropbox.com/sh/vxtwelrfykhtclf/AADQLtGFfgXm7AHxjA-mzxSIa?dl=0
- [Guide for developers at ROI DNA](https://github.com/roimarketing/dev-team-guide)
- [Git Commit Message Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)
- [JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/es5)
- [Front-end resources](https://docs.google.com/document/d/1eFUqEzfznHMbbI_Tm9Qyrrb5abu8gsWDdB_mtZB-jGE)

## Environment
- cd to project folder
- npm install
- gulp build (compiles less to css / processes javascript)
- gulp (same as above / browser reload on saved changes)

## Environment eplanation
-	The less folder, well contains all of the less files under another folder called modules/
- The vendors folder /less/vendors/ contains stuff such as bootstrap, jquery, etc.
- Items in the less folder are compiled and min files are created from them (Awesome!)
- The html/ folder contains the break up of the site into modules.  The master of the 
  site will need to place this all together in an index.html file.
