const icols = [
  {
    "hidden": false,
    "toggled": false,
    "name": "defect",
    "label": "Defect",
    "plural": "defects",
    "type": "list",
    "values": [
      "def_1",
      "def_2",
      "def_3"
    ],
    "children" : [
      {
        "hidden": true,
        "toggled": false,
        "name": "company",
        "label": "Company",
        "plural": "companies",
        "type": "list",
        "values": [
          "com_1",
          "com_2",
          "com_3"
        ],
        "children" : [
          {
            "hidden": true,
            "toggled": false,
            "name": "department",
            "label": "Department",
            "plural": "departments",
            "type": "list",
            "values": [
              "dep_1",
              "dep_2"
            ]
          },
          {
            "hidden": true,
            "toggled": false,
            "name": "reason",
            "label": "Reason",
            "plural": "reasons",
            "type": "list",
            "values": [
              "rea_1",
              "rea_2"
            ]
          }
        ]
      }
    ]
  },
  {
    "hidden": false,
    "toggled": false,
    "name": "Quality",
    "label": "Quality",
    "plural": "qualities",
    "type": "list",
    "values": [
      "qual_1",
      "qual_2",
      "qual_3"
    ],
    "children": [
      {
        "hidden": true,
        "toggled": false,
        "name": "standart",
        "label": "Standart",
        "plural": "standarts",
        "type": "list",
        "values": [
          "std_1",
          "std_2",
          "std_3"
        ]
      }
    ]
  }
]
// export default initialDimensions
module.exports = icols
