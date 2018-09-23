const initialFacts = {
  "hidden": false,
  "toggled": false,
  "id": "*",
  "name": "root",
  "label": "*",
  "plural": "*",
  "type": "list",
  "values": ['*'],
  "children" : [
    {
      "hidden": true,
      "toggled": false,
      "id": "0",
      "name": "defect",
      "label": "Defect",
      "plural": "Defects",
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
          "id": "00",
          "name": "company",
          "label": "Company",
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
              "label": "Department",
              "plural": "Departments",
              "type": "list",
              "values": [
                "dep_1",
                "dep_2"
              ]
            }
          ]
        },
        {
          "hidden": true,
          "toggled": false,
          "id": "01",
          "name": "reason",
          "label": "Reason",
          "plural": "Reasons",
          "type": "list",
          "values": [
            "rea_1",
            "rea_2"
          ]
        }
      ]
    },
    {
      "hidden": true,
      "toggled": false,
      "id": "1",
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
          "id": "10",
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
}

export default initialFacts
