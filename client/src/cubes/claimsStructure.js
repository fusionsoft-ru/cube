"nodes": [
  {
    "isOpen": true,
    "name": "defect",
    "label": "Defect",
    "plural": "defects",
    "type": "list",
    "values": [
      "Cracks",
      "Blister",
      "Grinding",
      "Layering",
      "Inclusions"
    ],
    "children" : [
      {
        "isOpen": true,
        "name": "company",
        "label": "Company",
        "plural": "companies",
        "type": "list",
        "values": [
          "Apple",
          "Summsung",
          "HTC"
        ],
        "children" : [
          {
            "isOpen": false,
            "name": "department",
            "label": "Department",
            "plural": "departments",
            "type": "list",
            "values": [
              "Engineering",
              "Marketing",
              "Sales and Support",
              "Design",
              "Strategy"
            ]
          }
        ]
      },
      {
        "isOpen": false,
        "name": "reason",
        "label": "Reason",
        "plural": "reasons",
        "type": "list",
        "values": [
          "Materials",
          "Logistics",
          "Faults",
          "Skills"
        ]
      },
    ]
  },
  {
    "isOpen": true,
    "name": "quality",
    "label": "Quality",
    "plural": "qualities",
    "type": "list",
    "values": [
      "Good",
      "Intermediate",
      "Bad"
    ],
    "children": [
      {
        "isOpen": false,
        "name": "standart",
        "label": "Standart",
        "plural": "standarts",
        "type": "list",
        "values": [
          "ISO 8000",
          "ISO 9000",
          "ISO 9001"
        ]
      }
    ]
  }
]
