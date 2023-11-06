# Social Profile Props Task

In this task, you're required to build a social media profile using React. This profile consists of a user card as the parent component and specific sections such as the user's posts and friends list as child components.

## Task Steps:

- Props Data:
  Import `data.js` inside your `App` and pass the required data from the parent component to the children components.

- `ProfileCard` Component:
  This component acts as the main profile display.

  - Pass the user object as props to this component.
  - Display the user's name, age, location, and a brief bio.

- `UserPosts` Component:
  This component displays a list of the user's recent posts.

  - Pass an array of posts as props to this component.
  - Uncomment the map to render the list of posts

- `FriendsList` Component:
  Implement a FriendsList component displaying the user's friends.

  - Pass an array of friends objects (name, mutual friends, etc.) as props.
  - Uncomment the map to render the list of friends
