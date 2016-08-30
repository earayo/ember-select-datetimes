# ember-select-datetimes

Addon to allow select datetimes like dropdown list or accordeon. It uses [ember-collapsible-panel](https://tedconf.github.io/ember-collapsible-panel) and [ember-power-select](http://www.ember-power-select.com).

### Options

**option**              | **description**
---                     | ---                 
dates                   | Array with the dates are going to paint. The array should contain for each item two attributes: `title` and `intervals`.
handlerController       | Controller where is the callbacks functions are declared and It trigger when select any interval.
onselectcallback        | callback's name invoked on the controller.
collapsible             | `default=false` -> Allow to select if the dates shows in accordeon or dropdown list.
nameElement             | `default=""` -> It is used when `collapsible = true`. allow set a name to all radio buttons.
className               | `default=""` -> It is used when `collapsible = true`. allow set a class style from all items accordeon.
classNameDateSelected   | `default=""` -> It is used when `collapsible = true`. allow set a class style when the interval date is selected.
isSearchabled           | `default=false` -> It is used when `collapsible = false`. It allows searching dates items by title in the first dropdown and the iterm by the format 'HH:mm' in the second dropdown.

## Example

### Dates structure
```js
[
  {
    title: "2016/08/25",
    intervals: [
      {min_date: "2016/08/25 15:00", max_date: "2016/08/25 16:00"},
      {min_date: "2016/08/25 16:00", max_date: "2016/08/25 17:00"},
      {min_date: "2016/08/25 17:00", max_date: "2016/08/25 18:00"},
      {min_date: "2016/08/25 18:00", max_date: "2016/08/25 19:00"},
      {min_date: "2016/08/25 19:00", max_date: "2016/08/25 20:00"},
      ]
    }
    //, ...
  }
  //, ...
]

```

### Component
```js
{{select-datetimes
  dates=dates
  handlerController=this
  selectIntervalCallback="selectInterval"
  className="container"
  nameElement="select_datetimes"
  collapsible=true
}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
