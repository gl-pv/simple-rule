# simple-rule

> React flex rules for entity actions access

[![NPM](https://img.shields.io/npm/v/simple-rule.svg)](https://www.npmjs.com/package/simple-rule) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Why
Quite often, in any application, becomes necessary to allow or deny certain actions with objects, depending on the access rights of the current user.
The library allows you to simplify the process of initializing the rules and their checks.

## Install

```bash
npm install --save simple-rule
```

## Quick start
To get you started quickly, here is an example that will get you started right away by providing the easiest and simplest usage possible:

#### Wrapp your component by SimpleRulesProvider and create rulesSchema

```jsx
import React from 'react'
import { SimpleRulesProvider } from 'simple-rule'

const rulesSchema = {
  post: {
    show: ({ currentUser, record }) => !record.owner_id || record.owner_id === currentUser.id,
  },
}

function Example({ currentUser }) {
  return (
    <SimpleRulesProvider rulesSchema={rulesSchema} currentUser={currentUser}>
      <PostsList />
    </SimpleRulesProvider>
  )
}
```

#### Use rules in your components

```jsx
import React from 'react'
import { useRules } from 'simple-rule'

const posts = [
  { id: 1, content: "Post visible for user with id = 1", owner_id: 1 },
  { id: 2, content: "Post visible for user with id = 2", owner_id: 2 },
  { id: 3, content: "Post visible for all users", owner_id: null },
]

function PostsList() {
  const postRules = useRules('post')

  return (
    posts.map((post) => (
      postRules.show(post) && (
        <div key={post.id}>
          { `${post.id}. ${post.content}` }
        </div>
      )
    ))
  )
}
```

## Components
The following components are available as named imports from simple-rule.

### SimpleRulesProvider
The `SimpleRulesProvider` component is used to wrap your React App so an instance of coniditions check will be made available within your React tree.

```jsx
const rulesSchema = {
  post: {
    show: ({ currentUser, record }) => !record.owner_id || record.owner_id === currentUser.id,
  },
}

const userRolesSchema = {
  admin: (currentUser) => currentUser.role === 'admin',
}

function Example({ currentUser }) {
  return (
    <SimpleRulesProvider
      rulesSchema={rulesSchema}
      userRolesSchema={userRolesSchema}
      currentUser={currentUser}
    >
      <PostsList />
    </SimpleRulesProvider>
  )
}
```

#### Props
##### `currentUser`
User object:
```jsx
  const currentUser = { id: 1, role: 'admin', ... }
```

##### `rulesSchema`
Object with keys equal entity names (example: `post`, `user`) or entity usage place (example: `settings/post`).
Each entity value equal object with keys - `action names` and values - `condition functions`.

`Condition function` must return a boolean value of the condition result.
Condition function params:
`currentUser` - passed to `SimpleRulesProvider` user.
`record` - passed to action check record.
`roles` - passed to `userRolesSchema` currentUser roles checks.

```jsx
const rulesSchema = {
  post: {
    show: ({ currentUser, record, roles }) => (
      !record.owner_id || record.owner_id === currentUser.id
    ),
    destroy: ({ currentUser, record, roles }) => (
      roles.admin(currentUser) && record.owner_id === currentUser.id
    ),
  },
}
```
##### `userRolesSchema`
Object with keys - role names and values - `role condition functions`.

`Role condition function` must return a boolean value of the condition result.
Role condition function params:
`currentUser` - passed to `SimpleRulesProvider` user.

```jsx
const userRolesSchema = {
  admin: (currentUser) => currentUser.role === 'admin',
  client: (currentUser) => currentUser.role === 'client'
}
```
## Hooks
### useRules hook
The `useRules` hook is used to connect with entity rule conditions checks by available in rulesSchema condition functions. Condition function parameter is entity instance.
Hook parameter is entity name from rulesSchema.

```jsx
  const rulesSchema = {
    post: {
      show: ({ currentUser, record }) => !record.owner_id || record.owner_id === currentUser.id,
    },
  }
...

  function ExampleComponent({ post }) {
    const postRules = useRules('post')

    if (!postRules.show(post)) {
      return 'Post is invisible!'
    }

    return post.content
  }

```
### usePermissions hook
The `usePermissions` hook is used to connect with entity rule conditions.
Hook return wrapper that renders children when connected rule condition check is true.
Hook parameter is entity name from rulesSchema.
Wrapper props is entity instance `record` and rule name `rule`.

```jsx
  const rulesSchema = {
    post: {
      show: ({ currentUser, record }) => !record.owner_id || record.owner_id === currentUser.id,
    },
  }
...

  function ExampleComponent({ post }) {
    const PostPermission = usePermissions('post')

    return (
      <PostPermission rule="destroy" record={post}>
        { post.content }
      </PostPermission>
    )
  }

```
## License

MIT © [gl-pv](https://github.com/gl-pv)
