"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $favorites.show();
  $newStory.show();
}

function showFavorites() {
  $allStoriesList.empty();
  let favs = currentUser.favorites
  for (let fav of favs) {
    
      const $fav = generateStoryMarkup(fav);
      $allStoriesList.append($fav);
    }
  
    $allStoriesList.show();
  }


$favorites.on("click", showFavorites);



function showStoryForm() {
  $storyForm.show();
  
  $addStoryButton.on("click", storyList.addStory);
  
  
}

$newStory.on("click", showStoryForm);


function hideStoryForm(evt) {
  evt.preventDefault();
  $storyForm.hide();
}

$cancel.on("click", hideStoryForm);




