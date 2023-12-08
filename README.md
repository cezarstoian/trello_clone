This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## GitHub code and Application Deployment
This project can be found on my GitHub: https://github.com/cezarstoian/trello_clone
The progress can be tracked via the commits made.
The application was deployed using Vercel: 
https://trello-clone-pied.vercel.app/

## Tech Stack and Architecture
This project was made using the following stack: React, NextJS and MySQL
I used NextJS for frontend and backend due to it being supported by Vercel and due to the ease of creating a new project without having to set up an API server using other technologies. Of course, using ExpressJS could have provided some benefits and the use of it is recommended in bigger, more complex projects.
I also used TypeScript instead of JavaScript, because defining the types makes it easier to spot errors.
Also, the app is splitted in multiple components that make up the UI.

To be mentioned, the app is fully reacting to different screen sizes.

## Folder Structure
The folder structure is rather simple:
- 'actions' folder: some general functions that can be reused
- 'app' folder:
  - '(dashboard)' folder: this contains the routes of the web pages:
    For example: '(dashboard)' contains the folder 'board' which contains '[boardId]'. This means that this is a dynamic route, meaning that we can access different boards by going to the routes: https://trello-clone-pied.vercel.app/board/our_desired_board_id
    Also, just to mention, (dashboard) is in parantheses just beacause this is not an actual route. It is more of a folder used for organizing.
  - 'api' folder: the main folder that contain the APIs. Each folder inside is taken as a route:
    For example: the /api/boards/updateName has the same API route as this path. /api/boards/[boardId] is a dynamic route that can be called with different IDs: /api/boards/board_id_111 and so on
- 'components' folder: this contains all the components that were used to create the entire application
- 'lib' folder: contains the definition for the db use. It initiallizes the prismaClient and facilitates the use of database models throughout the application
- 'prisma' folder: contains the schema.prisma file, which includes the database models. I always opt to use prisma, because I can store the database structure and I can easily recreate the database anytime I want, in the future. The only thing that is required, is a database URL.
- 'types.ts' file: contains some new types I defined 

## Components
The app, as mentioned before, contains multiple components, each with a suggestive name.
- Each of the following action buttons: Create, Edit, Delete call the APIs and execute CRUD operations on the database.

Board:
- First of all, we can find the BoardList, which is basically the grid list with all the boards created. It calls for the BoardData and BoardAdd components
- BoardData is being rendered for each board in the database and it makes up the board UI, with the Open, Edit and Delete buttons
- The BoardAdd components is the '+ Add Board' button. When clicked, a modal is opened, which consists of the component BoardAddModal.
- BoardAddModal contains an input for the board name and also two buttons, create and close.

List:
- When a board is opened, you encounter multiple lists, if any are found in the database, and an 'Add List +' button, which is basically a component called, ListAdd.
- When ListAdd component is pressed, a modal opens up. This modal is made from ListAddModal.
- ListAddModal has the same structure as the BoardAddModal: one input for title and two create and close buttons.
- The lists are shown in the UI using a ListContainer. Inside of it, a mapping of each list is executed and a ListObject component is generated for every list there is.
- ListObject renders a CardContainer component for each card inside the list. Also, ListObjects renders the ListInfoModal, which contains the edit list title and delete list operations UI.

Cards:
- Cards are made up from the same components as the lists, which small differences: The cards have also a description.

## DISCLAIMER!! 

This is a very simple clone of Trello, an MVP, which was made in one and a half nights. The UI design will be improved in the future.

There are some improvements that can be made there, regarding the components. For example, the Board, List and Card add modals can be generalized and made into one component, which can have different children (for board and list only the title, and for card, title and description).
When a programmer writes code, he often refactors his code, because there are better ways to implement the solution.

If something does not work, then please inform me at cezarstoian1@gmail.com, as I missed it :)
/