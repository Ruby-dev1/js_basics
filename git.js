//!git //!github

//*github,gitlab, bitbucket

//*git
//? distributed vcs(version controlled system)-> version controlled - history tracked
//  -> multiple collaborators

//? branching


//! git commands

//? config 

//* git config --global --list 
//* git config --global user.name "<user_name"
//* git config --global user.email "<user_email"
//* git config --global init.defaultbranch "main"

//! repository /repo
//? local repo -> local folder where git is  initialized and the history is tracked
//? remote repo -> github lab where local repo is tracked

//! git working flow 
//*changes seen in :
//? working directory     -> staging area               -> local repo    -> remote repo
//? changes                  ready state              new version/commit


// -> if change in working directory , we cannot directly commit it, need to take it to the ready state  i.e. staging area and then to local repo for commit.



//! initialize empty local repo 

//* git init -> need to know in which folder you are in 
// if unknowingly .git folder is deleted , then we lost all the files of project.
//normally hidden


//*git status -> gives the current state of the files whether it is added or not

//*git add <file_path> -- it takes changes from working directory to staging area ( ready state)

//*git add .

//* git commit -m "<commit_message>" --- takes the staged area file to local repo 
//* git push origin  <branch_name>

//every changes is new commit


//? remote repo

//* git remote -v -> list remote repo
//* git remote add origin <remote_repoA_url>
//* git remote remove origin


//! branch
//* git branch
//* git branch <branch_name>

//* git switch <branch_name> --- to jump from one branch to another
//* git switch -c <branch_name>
//* git merge <branch_name> ---- for eg , merging the (new_branch)login branch to main branch 

//* git stash 

//! merge conflict
//?A merge conflict happens in Git when two changes can't be combined automatically








