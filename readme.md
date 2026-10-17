## Building and Watching

This is the repo for my personal website www.eusonic.com. It's built with my open source static site generator [Underdot](https://github.com/Lab43/underdot).

* First run `npm install` to install dependencies.
* Use `npm run build` to compile the site.
* Use `npm run watch` to have [nodemon](https://nodemon.io) automatically compile the site when it detects changes in the source directory.

## Working with q

This project uses [q](https://www.npmjs.com/package/@lab43/q), an agentic coding workflow that grounds Claude Code sessions in the project's own conventions. It arrives with the project's dependencies, and Claude Code loads it from the repo's tracked settings.

The project's rules live in `q-docs/conventions/`, and q ships rules of its own inside the package. Sessions read both before writing code, and record new decisions into the project's docs as they are made — the docs assemble themselves out of the work.

A session lists every `/q:` skill. Start with these:

- `/q:implement` — take on a task or bug
- `/q:create-plan`, then `/q:implement-plan` — plan bigger work, then execute the plan
- `/q:review` — review anything against the project's conventions
- `/q:upstream` — turn friction with q's rules or an extension's into a PR against the repo that owns them
