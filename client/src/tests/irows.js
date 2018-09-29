const irows = {
  "dimensions": [
    {
      "name": "time",
      "label": "Time",
      "children": [
        {
          "name": "year",
          "label": "Year",
          "slices": [
            2017,
            2018
          ],
          "children": [
            {
              "name": "quarter",
              "label": "Quarter",
              "slices": [
                1,
                2,
                3,
                4
              ],
              "children": [
                {
                  "name": "month",
                  "label": "Month",
                  "slices": [
                    1,
                    2,
                    3
                  ],
                  "children": [
                    {
                      "name": "week",
                      "label": "Week",
                      "slices": [
                        1,
                        2,
                        3,
                        4
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      "name": "place",
      "label": "Place",
      "children": [
        {
          "name": "country",
          "label": "Country",
          "slices": [
            "Russia",
            "Turkey",
            "Italy"
          ],
          "children": [
            {
              "name": "town",
              "label": "Town",
              "slices": [
                "Barcelona",
                "Rome",
                "Moscow"
              ]
            }
          ]
        }
      ]
    }
  ]
}
// export default initialDimensions
module.exports = irows
