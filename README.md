## TODO
- I need to implement a mechanisam in doc page that checks if an existing server action is already going on, the app does not triggers another one.
    For example: If a user has updated the title of new doc and quickly shifts to writing content, I need to make sure the api call that fires
    of is of updated instead creating a new doc with content.
    
## Fix Issues 
- Add debounced api call on edits
- Do not sync the state from backend as it can cause stale response issues.
- Build a sync mechanism that syncs the state from backend time to time