#1. What problem does the context API help solve?

The context API allows us to store data on a context object and reference that data just in the components where it’s being used. This means we no longer have to “prop drill” anymore - which is passing props down each component in the component tree.

#1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - What happened. Transports the data from the application to the store. Needs an action type and (not required) also usually contains a payload
Reducers - How the state changed. Function that is referenced by the action type that returns state data
Store - Holds all the application’s state data that is being referenced in each component using that data

The store is the “single source of truth” because it holds the state data for the application. Because it is where the state data is being stored, the components rely on it to get their data - whenever the state data for the store changes, the components will trigger a re-render of that data.

#1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Redux - Application state
React - Component state

The difference between the two states is where the data is being stored and how that data being stored is being referenced with your components. In Application state (Redux), the data is being stored globally in the Redux store and only needs to be called in the components using that data. In Component state (React), the data is being stored locally in the components and being passed through each component in the tree as props.

The use cases for both depend on what your app is trying to accomplish and how it is set up. If you have a lot of components but only some need access to the state, it probably makes more sense to use the Application state and only access state with those particular components so you don’t have to prop drill. If you have a short-term state that is changing rapidly or not that many levels of components in the tree, it might make more sense to use your Component state and just pass them down via props.

#1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to convert our Redux action to reducer flow from synchronous to asynchronous. It changes our action-creators by accessing dispatch and dispatching a new action based on the result of your API call (or whatever your action may be).

#1. What is your favorite state management system you've learned and this sprint? Please explain why!

Although it was a difficult topic for me to learn, I really enjoyed Redux. I think it’s extremely cool that you can differentiate “what happened” in your app with “what you want it to do.” Both Context API and Redux were interesting to learn how you don’t need to pass props down through each component, but I feel like Redux was more challenging and rewarding in terms of the projects we worked on while using it. I also still want to spend more time looking into the use cases for Context API vs Redux.
