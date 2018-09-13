
const initialState = {
  "dimensions": {
    "hidden": false,
    "toggled": false,
    "id": "",
    "name": "root",
    "title": "*",
    "plural": "roots",
    "type": "list",
    "values": ['*'],
    "children" : [
      {
        "hidden": true,
        "toggled": false,
        "id": "0",
        "name": "defect",
        "title": "Defect",
        "plural": "Defects",
        "type": "list",
        "values": [
          "def_1",
          "def_2",
          "def_3",
          "def_4",
          "def_5"
        ],
        "children" : [
          {
            "hidden": true,
            "toggled": false,
            "id": "00",
            "name": "company",
            "title": "Company",
            "plural": "Companies",
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
                "id": "000",
                "name": "department",
                "title": "Department",
                "plural": "Departments",
                "type": "list",
                "values": [
                  "dep_1",
                  "dep_2",
                  "dep_3",
                  "dep_4",
                  "dep_5"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

module.exports = {
  initialState
}
