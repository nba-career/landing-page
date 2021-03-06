# NBA Career Longevity Predictor

Are you tired of guessing which players are going to make a lasting impact in the NBA? Guess no more! This application will let you search current players and give you insightful data into whether or not you should invest in the player you are concerned with for the long haul.

This site serves as a marketing page for the main React application that will feature various players and attempt to predict the longevity of that player using existing data sets. Here's the link [https://nbacareerlength.netlify.com/](https://nbacareerlength.netlify.com/) to the marketing site which provides a few links to get to the main application.

## Grading Rubric Checklist

1. Team Contribution
* I communicated changes to the team through Slack and Trello. 
* I also paired with the Front End Architect to go over the application and then I contributed to the React App by forking the repo, adding styles through Material UI, and then creating a pull request to merge my changes back into the React App ([link here](https://github.com/stlachman/frontend/commit/6a48439f42036a8e14df9d6eca51830cea3cda0c)).

2. HTML/CSS
* I created my own design and used proper positition and layout techniques including the flexbox and grid modules on the site.
* LESS was used to organize my code and make it easier to read and digest for another developer.
* I researched and used the Animated on Scroll library to create transitions for the site.

3. Responsiveness 
* The site is responsive down through the mobile size (below 500px).
* Responsive units (REMS) were used for font-sizing and the site looks professional at 800px and above. 

4. JavaScript Fundamentals
* Objects were created to create the modal component. 
* .map() used to create team member card and player cards on the home page.

5. Applied JavaScript
* Modal component created on about page to display biographies of team members on click.
* Event listeners used to track scroll position of user to resize sticky navigation.


### Brief overview of site and technology decisions

The home page of this site describes the project to potential users and provides a way for users to login into the React application if they are interested in testing the features of this product. There is also an about page that lists all of the team members of this project.

I designed both the home page and about page for this site and I also chose the font stack, colors and images for the site. The site is mobile responsive and also includes breakpoints for tablet sizes as well. Responsive units (REMs) were used for font sizes. The LESS preprocessor was used to style the site and manage variables for colors, media queries, and feature queries (mainly so that I could experiment with CSS Grid). During the course of this project, I also researched and integrated the [Animate on Scroll library](https://github.com/michalsnik/aos) to provide different animations and transitions when the user scrolls down the page. As mentioned previously, I also used CSS Grid (while providing fallbacks for browsers that don't support CSS Grid) because I wanted to get some experience building a progressively enhanced website. 

On the JavaScript side of things, I used an array of objects to create and populate the navigation menu so that I wouldn't need to repeat that section on the home page and the about page. I also created multiple functions and an array of objects with all of the team data (titles, names, links, and images) to create a reusable team member card to keep my code DRY. I repeated this techinique for another card section that lists out a sampling of NBA players along with their projected career longevity on the home page.

I also used JavaScript to randomly select a player from an array to display on the hero section of the home page on each refresh. When a user scrolls past the hero area on any page, the navigation will stick to the top of the browser window. I used JavaScript to track the scroll position of the user and resize the height of the navigation bar when the user scrolls past the hero area. 

On the about page, I created a modal component using JavaScript to display the biographies of each team member. When the button on the tile is clicked, the modal will pop up and display additional information about the team member. If a new team member is added or removed from this project, the component will continue to work as expected.

