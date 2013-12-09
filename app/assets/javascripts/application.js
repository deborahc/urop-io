// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.purr
//= require best_in_place
//= require_tree .


$(function() {

$("#postings_search input").keyup(function() {
  $.get($("#postings_search").attr("action"), $("#postings_search").serialize(), null, "script");
  return false;
});

$("#reviews_search input").keyup(function() {
  $.get($("#reviews_search").attr("action"), $("#reviews_search").serialize(), null, "script");
  return false;
});

$('input#student_major').typeahead( {name: 'majors', local: [ 
    "Anthropology Course 21A",
    "Architecture Course 4",
    "Biological Engineering Course 20",
    "Biology Course 7",
    "Brain and Cognitive Sciences Course 9",
    "Chemical Engineering Course 10",
    "Chemistry Course 5",
    "Civil and Environmental Engineering Course 1",
    "Comparative Media Studies Course CMS",
    "Computational and Systems Biology Course CSB",
    "Earth, Atmospheric, and Planetary Sciences Course 12",
    "Economics Course 14",
    "Electrical Engineering and Computer Science Course 6",
    "Engineering Systems Division Course ESD",
    "Foreign Languages and Literatures Course 21F",
    "Health Sciences and Technology Course HST",
    "History Course 21H",
    "Humanities and Engineering Course 21E",
    "Humanities Course 21",
    "Linguistics and Philosophy Course 24",
    "Literature Course 21L",
    "Management Course 15",
    "Materials Science and Engineering Course 3",
    "Mathematics Course 18",
    "Mechanical Engineering Course 2",
    "Media Arts and Sciences Course MAS",
    "Music and Theater Arts Course 21M",
    "Nuclear Science and Engineering Course 22",
    "Ocean Engineering Course 13",
    "Other",
    "Physics Course 8",
    "Political Science Course 17",
    "Real Estate - MSRED",
    "Undecided",
    "Urban Studies and Planning Course 11",
    "Writing and Humanistic Studies Course 21W"] });

$('input#student_year').typeahead( {name: 'year', local: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] });










});
