# Corporate Dashboard

You must develop a corporate dashboard application using a front-end MVC framework of your choosing. The dashboard application must contain a header (with the currently selected dashboard’s name); a menu, allowing the user to navigate between dashboards; and the primary dashboard display area. You should find, or create, your own data files in CSV and JSON formats to provide data to the dashboards. The required dashboards are:

A geospatial view, identifying the number of employees at various company locations.
A “key metrics” view, containing components displaying: the number of open issues, a line chart reflecting number of paying customers over a period of time, and a bar chart reflecting number of reported issues over a period of time.
A “data view” of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable.

![ScreenShot](https://raw.githubusercontent.com/marxtseng/corporate-dashboard/master/Corporate%20Dashboard.png)

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Install the bower package & node package

```
$ npm install -g bower
$ bower install
$ npm install
```

## Viewing Your Application

```
$ polymer serve
```

## Building & Tests

```
$ gulp
```
