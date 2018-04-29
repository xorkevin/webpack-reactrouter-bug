# webpack react-router bug

## Explanation of bug

React router does not display children when building with webpack in production

#### In production

- run `make serve`
- navigate to `localhost:3030`
- `Hello` is not visible

#### In development

- run `make dev`
- navigate to `localhost:3000`
- `Hello` is visible
