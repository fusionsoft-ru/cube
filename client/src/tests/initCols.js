const initCols = [
  {
    "hidden": false,
    "toggled": true,
    "name": "time",
    "label": "Time",
    "plural": "times",
    "type": "head",
    "children" : [
      {
        "hidden": false,
        "toggled": false,
        "name": "year",
        "label": "Year",
        "plural": "Years",
        "type": "list",
        "values": [
          "2015",
          "2016",
          "2017"
        ],
        "children" : [
          {
            "hidden": true,
            "toggled": false,
            "name": "month",
            "label": "Month",
            "plural": "months",
            "type": "list",
            "values": [
              "Q1",
              "Q2",
              "Q3",
              "Q4"
            ],
            "children": [
              {
                "hidden": true,
                "toggled": false,
                "name": "week",
                "label": "Week",
                "plural": "weeks",
                "type": "list",
                "values": [
                  "M1",
                  "M2",
                  "M3"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
// export default initialDimensions
module.exports = initCols
