# <%= projectName %>

<% if (projectDescription) { -%>
<%= projectDescription %>
<% } -%>

<% if (licenseName && licenseUrl) { -%>
This project is **<%= licenseName %>** licensed.
<% } -%>

<% if (authorName && authorGithubUsername) { -%>
Copyright © <%= currentYear %> [<%= authorName %>](https://github.com/<%= authorGithubUsername %>).
<% } -%>
