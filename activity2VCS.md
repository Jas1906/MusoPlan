# VCS

### GitHub

GitHub is a popular version control system (VCS) and code hosting platform that offers several benefits compared to other version control systems. Here are some of the key advantages of using GitHub:

1. Collaboration and Social Coding: 
GitHub facilitates collaboration among developers by providing a platform for sharing and contributing to projects.
Social features such as pull requests, issues, and comments make it easy for developers to communicate and work together.

2. Distributed Version Control: 
GitHub is built on top of Git, a distributed version control system. This allows developers to work on their local copies of a repository and merge changes seamlessly.

3. Branching and Merging: 
GitHub provides robust support for branching and merging, making it easy for developers to work on different features or bug fixes in parallel and then merge their changes back into the main codebase.

4. Code Review: 
Pull requests on GitHub enable a structured code review process. Team members can review proposed changes, add comments, and discuss improvements before merging.

5. Issue Tracking:
GitHub's issue tracking system helps teams manage and prioritize tasks, bugs, and enhancements. It provides a centralized location for discussing and tracking the progress of various issues.

6. Continuous Integration and Deployment (CI/CD) Integration: 
GitHub integrates with popular CI/CD tools, allowing developers to automate the testing and deployment processes. This helps ensure the stability and reliability of the codebase.

7. Community and Open Source:
GitHub is widely used for hosting open-source projects, making it easy for developers to contribute to projects beyond their own teams or organizations. The platform fosters a sense of community and collaboration.

8. Documentation and Wikis:
GitHub provides built-in support for documentation and wikis, making it easy to create and maintain project documentation alongside the code.

9. Security Features:
GitHub offers security features such as vulnerability scanning, dependency tracking, and alerts to help teams identify and address potential security issues in their code.

10. Integrations and APIs:
GitHub integrates with a wide range of third-party tools and services, making it easy to connect your development workflow with other tools your team uses.

### Subversion (SVN)

Subversion (SVN), also known as Apache Subversion, is a centralized version control system that has been widely used in various software development scenarios. While Git has gained more popularity in recent years, SVN still has its own set of benefits, particularly in certain use cases. Here are some advantages of using SVN:

1. Centralized Repository: 
SVN follows a centralized repository model, which means there is a single, central repository that contains the entire version history. This can simplify management and control over the versioning process, making it easier to track changes.

2. Mature and Stable: 
SVN has been around for a long time and is considered mature and stable. It has a well-established user base, and many organizations have successfully used SVN for version control in large and complex projects.

3. Atomic Commits: 
SVN commits are atomic, meaning that changes are treated as a single, indivisible unit. This ensures that all changes associated with a commit are applied together or not at all, which can be beneficial in maintaining a consistent project state.

4. Easier Learning Curve: 
Some users find SVN to have a more straightforward and easier-to-understand command set compared to Git. This can be advantageous, especially for teams that are new to version control or have members with less technical experience.

5. Integrated Authentication: 
SVN supports integrated authentication mechanisms, making it easier to control access to the repository. This can be important in enterprise settings where security and access control are critical.

6. Binary File Handling: 
SVN handles binary files more efficiently than Git, especially in terms of storage size. This can be important for projects that involve a significant number of binary assets, such as multimedia files.

7. Renaming and Moving Files: 
SVN handles file and directory renaming and moving more intuitively than Git. In Git, these operations are treated as separate actions, whereas SVN tracks them as modifications to the existing file or directory.

8. Mature Ecosystem: 
SVN has a mature ecosystem with a range of tools and plugins that integrate with various IDEs (Integrated Development Environments) and other development tools.

### Perforce (Helix Core)


Perforce, also known as Helix Core, is a centralized version control system that is widely used in enterprise settings, particularly in industries dealing with large binary assets, such as game development and hardware design. Here are some benefits of using Perforce:

1. Efficient Handling of Large Binary Assets: 
Perforce is known for its efficiency in handling large binary assets, such as graphics, multimedia files, and binary executables. This makes it well-suited for projects that involve heavy use of non-text files.

2. Fine-Grained Access Control: 
Perforce offers robust access control features, allowing administrators to define fine-grained permissions for users and groups. This is crucial in enterprise environments where access to sensitive code or assets needs to be carefully managed.

3. Atomic Transactions: 
Perforce ensures atomic transactions, meaning that all changes associated with a single commit are applied together or not at all. This helps maintain consistency in the version history.

4. Changelists and Shelves: 
Perforce uses the concept of changelists, which are sets of related changes that can be submitted together. Shelves allow users to temporarily store changes without committing them to the central repository, facilitating code review and collaboration.

5. Branching and Merging: 
Perforce provides robust branching and merging capabilities, making it easier to manage different development streams and merge changes between them. This is particularly useful in complex projects with multiple feature branches.

6. Integrations with IDEs: 
Perforce integrates well with many popular Integrated Development Environments (IDEs) and other development tools. This integration streamlines the development workflow for users and provides a seamless experience.

7. Scalability: 
Perforce is designed to scale efficiently, supporting large codebases and distributed teams. Its architecture is well-suited for handling the demands of enterprise-level development.

8. Audit Trails and Reporting: 
Perforce includes features for tracking changes and generating detailed audit trails. This is valuable for compliance and regulatory purposes, providing a transparent record of who made what changes and when.

9. Helix Swarm (Code Review Tool): 
Helix Swarm is a code review and collaboration tool integrated with Perforce. It allows teams to conduct code reviews, discuss changes, and collaborate within the context of the version control system.

10. Helix Insights (Analytics Tool): 
Helix Insights is an analytics tool that provides insights into development processes and trends. It can help teams optimize their workflows and identify areas for improvement.

### Why use GitHub?

We decide to go with github because it fits our goal for our software project. most of the benefits listed fits our organisational requirement. Things such as branchiung and merging, Security Features, Collaboration and Social Coding, issue tracking fits our requirement.

### Installing GitHub

- First of all we are using gitbash for our terminal so we need to download and install it
- once downloaded open gitbash and type "git version" to make sure it is installed properly
- next is to configure it to have author name and email
- we have to sign up on github with email address
- once signed up we configure on our gitbash terminal with "git config --global user.name "FIRST_NAME LAST_NAME"" and "git config --global user.email "MY_NAME@example.com""
- and installation should be done

installing Git was easy and straight foward and we did not encountered any issue.