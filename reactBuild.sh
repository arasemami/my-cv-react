npm ci
rm -rf build
npm run build
scp -r build/* vishar:/home/projects/others/aras-cv
