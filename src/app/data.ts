export const TREE_NODE = {
  "name":"countries",
  "isOpen": false,
  "values":[
      {
          "name":"india",
          "isOpen": false,
          "values":[
              {
                  "name":"zones",
                  "isOpen": false,
                  "values":[
                      {
                          "name":"north",
                          "isOpen": false,
                          "values":[
                              {
                                  "name":"states",
                                  "isOpen": false,
                                  "values":[
                                      {
                                          "name":"punjab",
                                          "stats":[
                                              {
                                                  "name":"population",
                                                  "value":"28000000"
                                              }
                                          ]
                                      },
                                      {
                                        "name":"J&K",
                                        "stats":[
                                            {
                                                "name":"population",
                                                "value":"1000000"
                                            }
                                        ]
                                    }
                                  ]
                              }
                          ]
                      },
                      {
                          "name":"south",
                          "isOpen": false,
                          "values":[
                              {
                                  "name":"states",
                                  "isOpen": true,
                                  "values":[
                                      {
                                          "name":"tamil nadu",
                                          "stats":[
                                              {
                                                  "name":"population",
                                                  "value":"67000000"
                                              }
                                          ]
                                      },
                                      {
                                        "name":"kerala",
                                        "stats":[
                                            {
                                                "name":"population",
                                                "value":"34000000"
                                            }
                                        ]
                                    }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
};
