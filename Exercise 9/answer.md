### Git
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
Git state: commited, staged, modified
Advantage:
Tracking
Recover
Remote
Big community
Feature Branch Workflow
GIT provides users to work with both online and offline.

### Commit
Commit là lưu vào csdl nội dung trong vùng staging, kèm thông tin mô tả của commit.
Commit is saving content in staging area into database, attaching description. The git commit command captures a snapshot of the project's currently staged changes. However, if file not change, Git don't save again, instead of reference.
 ![](https://images.viblo.asia/67e40d3c-e395-4a78-a4fd-06be3fe8b6aa.png)
Git commit -m “Message”


### A list of possible issues when a commit is broken: 
Break your feature

### Branch
Branch is a pointer refer to commit (default pointer is master)

Issues is conflicts. Merge branch without review will make difficult to debug

create branch: git branch crazy-experiment

remove brach: git branch -d crazy-experiment (d: can remove after merge, D: can remove without merger)

switch: git checkout <ten branch>

push local branch to remote: git push -u origin <branch>


### Basic command:

Create local repo
$ git init

Clone existing repo
$ git clone https://github.com/user/repository.git

Update

$ git add . (đưa vào staging area)

$ git commit -m "Message"

Push to remote

$ git remote add origin <remote_url>

$ git push origin <name_branch>

Merge branch

$ git merge <new_branch>

Pull remote repository, auto merge

$ git pull

Similar pull, but fetch not auto merge

$ git fetch

### Conflict
Conflict can occur when people change the same file.
Cases: merge code, pull code, rebase

Resolve: select suitable code

### Merge and Rebase
Merge: merge branch to another branch. This cause a commit merger which connects 2 branch. Merge make commit history longer.

Rebase: specializes in integrating changes from one branch onto another. We can use rebase if we want history clear, commit of my branch is the newest.

Choose merge because it dont change branch, easy to revert, commit history ordered by time.

### Good message:

Use the imperative mood in the subject line

Use template "If applied, this commit will" to make clearly

Capitalize the subject line and each paragraph

Try to communicate without watching code

Use body to describe

Max 50 characters for title and 72 characters for body

### Question
Q1: create a new branch from production then cherry pick commit JKL.

Q2: Dont do anything

Q3: create branch A from production. Revert at production branch then merge (not auto merge) with branch A
 
### Case 1
Create branch from feature/create-user
 
### Case 2
 Create branch feature/update-user from prod then merge with feature/create-user (turn off auto merge)

### Case 3
 Merge 2 branch feature/create-user, feature/update-user

