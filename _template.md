# <%= projectName %>

<% if (projectDescription) { -%>
<%= projectDescription %>
<% } -%>

<% if (isProjectOnNpm) { -%>
[![Version](https://img.shields.io/npm/v/<%= projectName %>.svg)](https://www.npmjs.com/package/<%= projectName %>)
<% } -%>
<% if (projectVersion && !isProjectOnNpm) { -%>
![Version](https://img.shields.io/badge/version-<%= projectVersion %>-blue.svg?cacheSeconds=2592000)
<% } -%>
<% if (isGithubRepos) { -%>
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](<%= repositoryUrl %>/graphs/commit-activity)
<% } -%>

<% if (projectHomepage) { -%>
[Website](<%= projectHomepage %>)
<% } -%>

<% if (issuesUrl) { -%>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](<%= issuesUrl %>). <%= contributingUrl ? `You can also take a look at the [contributing guide](${contributingUrl}).` : '' %>
<% } -%>

<% if (licenseName && licenseUrl) { -%>

## License

<% if (authorName && authorGithubUsername) { -%>
Copyright © <%= currentYear %> [<%= authorName %>](https://github.com/<%= authorGithubUsername %>).

<% } -%>
This project is [<%= licenseName %>](<%= licenseUrl %>) licensed.
<% } -%>
