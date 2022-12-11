import React from 'react'
import { useRules, usePermissions } from 'simple-rule'

const posts = [
  { id: 1, content: "Post is visible for user with id = 1", owner_id: 1 },
  { id: 2, content: "Post is visible for user with id = 2", owner_id: 2 },
  { id: 3, content: "Post is visible for all users and unavailable for destroy", owner_id: null },
]

const List = () => {
  const postRules = useRules('post')
  const PostPermission = usePermissions('post')

  return (
    posts.map((post) => (
        <div key={post.id}>
          { postRules.show(post) && `${post.id}. ${post.content}` }
          <PostPermission action="destroy" record={post}>
            (This post is available for destroy when your role is admin)
          </PostPermission>
        </div>
      )
    )
  )
}

export default List
