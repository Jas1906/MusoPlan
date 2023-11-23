# Use and Management of VCS Report

### Introduction
In our software development endeavors, the implementation of a robust Version Control System (VCS) is paramount to ensuring code integrity, collaboration efficiency, and project traceability. This report details the use and management of GitHub as our chosen VCS, highlighting challenges faced during development, adherence to organizational requirements, and verification processes to ensure optimal system performance.

### GitHub Implementation
GitHub was selected as our VCS due to its widespread adoption, collaborative features, and seamless integration with popular development tools. Leveraging Git as the underlying technology, GitHub empowers our team to manage and track changes in our source code effectively.

### Difficulties and challenges during developtment

Working on this project and using GitHub even though we did not come accross any issue we encountered some difficulties and challenges. Such as everytime we make changes and need to commit the files we have to add the files one by one and commit one by one so that its easily trackable on the log. it is annoying and challenging because if you forgot to do any of those steps it the commit will not work.

### How we complied with the organisational requirements

as listed above we have to commit the changes everytime we made or add a function or other things in order to comply with the organisational requirement. we also have to set up so that it shows author name and email address on the log.

### Verification Processes:
Ensuring the VCS's optimal performance involved rigorous testing of various functionalities. The following aspects were scrutinized to guarantee the VCS met our development needs:

- Branches: The branching strategy was tested by creating feature branch.This ensured that parallel development efforts could be managed efficiently, and code changes could be integrated seamlessly

- Stages: Continuous Integration (CI) pipelines were established to automate the testing and deployment of code changes at different stages. This verification step helped catch integration issues early in the development lifecycle.

- Commits: Commit history was regularly reviewed to ensure meaningful commit messages, proper documentation, and adherence to coding standards. This facilitated traceability and simplified the identification of specific changes within the codebase.

- Merges: The merging process was thoroughly tested to prevent conflicts and maintain code integrity. Automated testing, combined with manual reviews, ensured that merged code retained its functionality and did not introduce new issues.

- Push/Pull with Remotes: Regular push and pull operations were executed to synchronize local repositories with remote ones. This validated that developers could seamlessly share their changes with the team and pull the latest updates from the central repository.

- Pull Requests: Pull requests were extensively used for code reviews, ensuring that proposed changes met the project's quality standards. Testing pull requests before merging minimized the risk of introducing bugs or breaking existing functionality.

- Commit Log: The commit log was regularly audited to track changes, identify contributors, and maintain a comprehensive history of the project. This log served as a valuable resource for troubleshooting and understanding the evolution of the codebase.

### Integration of Forked Repositories
In the scenario where our repository was forked from another, integrating changes into the central repository involved a systematic approach. We would create a new branch in our fork, pull the changes from the original repository, resolve any conflicts, test thoroughly, and finally create a pull request to merge the changes into our fork. Once the changes were validated, they could be proposed to the central repository through a pull request.

### Conclusion
In conclusion, the adoption of GitHub as our VCS has significantly enhanced our development workflow. Challenges were addressed through strategic branching, conflict resolution, and adherence to organizational requirements. Rigorous testing of VCS functionalities ensured that branches, stages, commits, merges, push/pull operations, pull requests, and commit logs performed optimally. As a result, our team can confidently collaborate, manage code changes, and deliver high-quality software with the assurance that our VCS is a reliable foundation for our development endeavors.
