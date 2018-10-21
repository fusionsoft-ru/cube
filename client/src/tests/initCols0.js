const initCols = [
  {
    "hidden": true,
    "toggled": true,
    "name": "time",
    "label": "Time",
    "plural": "time",
    "type": "root",
    "values": [
    ],
    "children" : [
      {
        "hidden": false,
        "toggled": false,
        "name": "year",
        "label": "Year",
        "plural": "years",
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
            "name": "Quart1",
            "label": "Quart1",
            "plural": "Quart1",
            "type": "list",
            "values": [
                "Q1_1",
                "Q1_2",
                "Q1_3"
            ],
            "children": [
              {
                "hidden": true,
                "toggled": false,
                "name": "Week1",
                "label": "Week1",
                "plural": "Week1",
                "type": "list",
                "values": [
                    "W1_1",
                    "W1_2",
                    "W1_3"
                ],
              },
              {
                "hidden": true,
                "toggled": false,
                "name": "Week2",
                "label": "Week2",
                "plural": "Week2",
                "type": "list",
                "values": [
                    "W2_1",
                    "W2_2",
                    "W2_3"
                ],
              },
              {
                "hidden": true,
                "toggled": false,
                "name": "Week3",
                "label": "Week3",
                "plural": "Week3",
                "type": "list",
                "values": [
                  "W3_1",
                  "W3_2",
                  "W3_3"
                ],
              },
              {
                "hidden": true,
                "toggled": false,
                "name": "Week4",
                "label": "Week4",
                "plural": "Week4",
                "type": "list",
                "values": [
                  "W4_1",
                  "W4_2",
                  "W4_3"
                ],
              }
            ]
          },
          {
            "hidden": true,
            "toggled": false,
            "name": "QuartQ2",
            "label": "Quart2",
            "plural": "Quart2",
            "type": "list",
            "values": [
              "Q2_1",
              "Q2_2",
              "Q2_3"
            ],
          },
          {
            "hidden": true,
            "toggled": false,
            "name": "Quart3",
            "label": "Quart3",
            "plural": "Quart3",
            "type": "list",
            "values": [
              "Q2_1",
              "Q2_2",
              "Q2_3"
            ],
          },
          {
            "hidden": true,
            "toggled": false,
            "name": "Quart4",
            "label": "Quart4",
            "plural": "Quart4",
            "type": "list",
            "values": [
              "Q2_1",
              "Q2_2",
              "Q2_3"
            ],
          }
        ]
      }
    ]
  }
]
// export default initialDimensions
module.exports = initCols
