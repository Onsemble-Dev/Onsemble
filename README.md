## Onsemble
GUI II project repo

## Easy team workflow
1. Clone the base project:             
`git clone https://github.com/Bunchhieng/Onsemble.git`
2. Make sure you create a new branch (based on development/master branch) every time you want to push a new fix or update. This won't be conflicted with everyone:                       
`git checkout -b your_branch master`
We decided to follow this naming convention for git branch name: your initial + version number. i.e: **bcs_v1**
3. Add any (files) change to the stage:                   
`git add .`
4. Then commit your change:                    
`git commit -m "your comment"`
5. Push changes to your new branch:                     
`git push -u origin your_branch`
6. Before we decide to merge with master, you need to `git push` to make sure that the central repo has your current commit.
7. After you push your code, make sure you pull request in github GUI so everyone knows what you changed.
8. Then we can decide to merge the change:
```
git checkout master
git pull
git pull origin your_branch
git push
```
