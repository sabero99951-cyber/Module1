(function (global) {

var dc = {};
var homeHtml = "snippets/home-snippet.html";
var allCategoriesUrl =
  "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";
var menuItemsUrl =
  "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{{short_name}}.json";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}' with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

// On page load
document.addEventListener("DOMContentLoaded", function (event) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
    insertHtml("#main-content", responseText);
  }, false);
});

// ================== SOLUTION STARTS HERE ==================

// Load the menu items view
dc.loadMenuItems = function (categoryShort) {
  showLoading("#main-content");
  var menuItemsUrlToLoad =
    insertProperty(menuItemsUrl, "short_name", categoryShort);

  $ajaxUtils.sendGetRequest(menuItemsUrlToLoad,
    buildAndShowMenuItemsHTML);
};

// Load home page
dc.loadHomePage = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
    insertHtml("#main-content", responseText);
  }, false);
};

// STEP 0–4: Get random category and replace {{randomCategoryShortName}}
dc.loadRandomCategory = function () {
  showLoading("#main-content");

  $ajaxUtils.sendGetRequest(allCategoriesUrl, function (categories) {

    // STEP 1: Choose random index
    var randomIndex = Math.floor(Math.random() * categories.length);

    // STEP 2: Get short_name
    var randomCategoryShortName = categories[randomIndex].short_name;

    // STEP 3: Load menu items for random category
    dc.loadMenuItems(randomCategoryShortName);

  });
};

global.$dc = dc;

})(window);
