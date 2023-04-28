var firsttime = true;
// var source = {
//     "name": "Brasil",
//     "children": [{
//         name: "Norte",
//         children: [{
//             name: "Acre",
//             "size": 20
//         }, {
//             name: "Amapá",
//             "size": 20
//         }, {
//             name: "Amazonas",
//             "size": 251
//         }, {
//             name: "Pará",
//             "size": 107
//         }, {
//             name: "Rondônia",
//             "size": 33
//         }, {
//             name: "Roraima",
//             "size": 7
//         }, {
//             name: "Tocantins",
//             "size": 39
//         }]
//     }, {
//         name: "Nordeste",
//         children: [{
//             name: "Alagoas",
//             "size": 60
//         }, {
//             name: "Bahia",
//             "size": 512
//         }, {
//             name: "Ceará",
//             "size": 553
//         }, {
//             name: "Maranhão",
//             "size": 80
//         }, {
//             name: "Paraíba",
//             "size": 89
//         }, {
//             name: "Pernambuco",
//             "size": 671
//         }, {
//             name: "Piauí",
//             "size": 36
//         }, {
//             name: "Rio Grande do Norte",
//             "size": 263
//         }, {
//             name: "Sergipe",
//             "size": 54
//         }]
//     }, {
//         name: "Centro Oeste",
//         children: [{
//             name: "Distrito Federal",
//             "size": 484
//         }, {
//             name: "Goiás",
//             "size": 332
//         }, {
//             name: "Mato Grosso",
//             "size": 126
//         }, {
//             name: "Mato Grosso do Sul",
//             "size": 91
//         }]
//     }, {
//         name: "Sudeste",
//         children: [{
//             name: "Espírito Santo",
//             "size": 201
//         }, {
//             name: "Minas Gerais",
//             "size": 935
//         }, {
//             name: "Rio de Janeiro",
//             "size": 1059
//         }, {
//             name: "São Paulo",
//             "size": 4447
//         }]
//     }, {
//         name: "Sul",
//         children: [{
//             name: "Paraná",
//             "size": 704
//         }, {
//             name: "Rio Grande do Sul",
//             "size": 742
//         }, {
//             name: "Santa Catarina",
//             children: [{
//                 name: "Paraná",
//                 "size": 704
//             }, {
//                 name: "Rio Grande do Sul",
//                 "size": 742
//             }, {
//                 name: "Santa Catarina",
//                 "size": 742

//             }, {
//                 name: "New One",
//                 children: [{
//                     name: "Paraná",
//                     "size": 704
//                 }, {
//                     name: "Rio Grande do Sul",
//                     "size": 742
//                 }, {
//                     name: "Santa Catarina",
//                     "size": 742

//                 }, {
//                     name: "New One",
//                     "size": 742

//                 }
//                 ]

//             }
//             ]

//         }]
//     }]
// };


// var testData = {
//     "name": "Brasil",
//     "children": [{
//         name: "Norte",
//         children: [{
//             name: "Acre",
//             "size": 20
//         }, {
//             name: "Amapá",
//             "size": 20
//         }, {
//             name: "Amazonas",
//             "size": 251
//         }, {
//             name: "Pará",
//             "size": 107
//         }]
//     }]
// }
var newSource = {
    "D3Chart": [
        {
            "name": "Brasil",
            "children": [{
                "name": "Norte",
                "children": []
            }, {
                "name": "Nordeste",
                "children": []
            }, {
                "name": "CentroOeste",
                "children": []
            }, {
                "name": "Sudeste",
                "children": [{
                    "name": "Distrito Federal",
                    "size": 484
                }, {
                    "name": "Goiás",
                    "size": 332
                }, {
                    "name": "Mato Grosso",
                    "size": 126
                }, {
                    "name": "API",
                    "size": 91
                }]
            }, {
                "name": "Sul",
                "children": []
            }]
        }
    ],
    "Sudeste": [{
        "name": "Distrito Federal",
        "size": 484
    }, {
        "name": "Goiás",
        "size": 332
    }, {
        "name": "Mato Grosso",
        "size": 126
    }, {
        "name": "API",
        "size": 91
    }],
    "CentroOeste": [{
        "name": "Federal",
        "size": 484
    }, {
        "name": "Mato Grosso",
        "size": 332
    }, {
        "name": "Goiás",
        "size": 126
    }, {
        "name": "Mato Grosso do Sul",
        "size": 91
    }],
    "Sul": [{
        "name": "sample Sul",
        "size": 484
    }, {
        "name": "sample Sul",
        "size": 332
    }, {
        "name": "sample Sul",
        "size": 126
    }, {
        "name": "sample Sul",
        "size": 91
    }],
    "Nordeste":
        [{
            "name": "sample Nordeste",
            "size": 484
        }, {
            "name": "sample Nordeste",
            "size": 332
        }, {
            "name": "sample Nordeste",
            "size": 126
        }, {
            "name": "sample Nordeste",
            "size": 91
        }],
    "Norte": [{
        "name": "sample Norte",
        "size": 484
    }, {
        "name": "sample Norte",
        "size": 332
    }, {
        "name": "sample Norte",
        "size": 126
    }, {
        "name": "sample Norte",
        "size": 91
    }]
}

var w = 1500,
    h = 560,
    node,
    link,
    root;

var apiData = [];
var dataIsVisibl = false
var storeTestData = {
    "Biology": {

        "name": "Biology",
        "children": [{
            name: "Zoology",
            "size": 20,
            children: []
        }, {
            name: "Botony",
            "size": 20,
            children: []
        }
        ]
    },
    "Physics": {

        "name": "Physics",
        "children": [{
            name: "Organic",
            "size": 20,
            children: []
        }, {
            name: "Material",
            "size": 20,
            children: []
        }
        ]
    },

    "Chemistry": {
        "name": "Chemistry",
        "children": [{
            name: "Atomic Structure",
            "size": 20,
            children: []
        }, {
            name: "Electrochemistry",
            "size": 20,
            children: []
        }
            , {
            name: "Thermochemistry",
            "size": 20,
            children: []
        }
        ]
    }
}
var storeSearchValue;
var selectedValue = [];

var force;
var vis;

function createball() {
    debugger
    force = d3.layout.force().on("tick", tick).charge(function (d) {
         console.log("data from source", d)

       return d.children ? -1000 : -60 * Math.sqrt(d.size);
       //  return -600;
    }).linkDistance(function (d) {
        return 150;
    }).size([w, h -30]);

    vis = d3.select("body").append("svg").attr("width", '100%').attr("height", '600');

    console.log('source')
}

// fetch('http://localhost:3004/D3Chart')
//     .then(response => {
//         console.log('res',response.text())
//         response.text()
//     })
//     .then(data => console.log(data));

//API data Calling...
async function fetchText() {
    debugger
    // let searchURL=document.getElementById("search").value
    let response = await fetch(`http://localhost:3004/Science`); //D3Chart
    console.log('response', response)
    debugger
    apiData = await response.json();
    root =null;
    root=apiData[0];
    root.fixed = true;
    root.x = w / 2;
    root.y = h / 2;
    const id = Math.floor(Math.random() * 10000) + 1;
    root.id = id;
    selectedValue=[];
   // expandChild(root.id,root.name,root.children)

    update()
    // console.log("apidata", apiData);

}

//if (apiData.length === 0)  fetchText()

function toVisbileTreeData(name) {

    if (dataIsVisibl) {
        apiData = source;
        root = apiData[0];
        root.fixed = true;
        root.x = w / 2;
        root.y = h / 2;
    }
    else {
        root = [];
    }
    update();
}


// Drag method...
var drag_handler = d3.drag()
    .on("drag", function(d) {
          d3.select(this)
            .attr("cx", d.x = d3.event.x  )
            .attr("cy", d.y = d3.event.y  );
            });

//update()
function update() {

    nodes = flatten(root);
    links = d3.layout.tree().links(nodes);
    updateLinks();
    updateNodes();
}

function updateLinks() {
    // console.log('links', links)
    force.links(links).start();

    link = vis.selectAll("line.link").data(links, function (d) {
        return d.target.id;
    });

    // Enter any new links.
    link.enter().insert("line", ".node")
        .attr("class", "link")
        .attr("x1", function (d) {
            return d.source.x;
        }).attr("y1", function (d) {
            return d.source.y;
        }).attr("x2", function (d) {
            return d.target.x;
        }).attr("y2", function (d) {
            return d.target.y;
        });

    link.exit().remove();

}


function updateNodes() {

    force.nodes(nodes).start();

    node = vis.selectAll(".node").data(nodes, function (d) {
        return d.id;
    });

    // Enter any new elements.
    var container = node.enter().append("g").attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        }).call(force.drag);
        // }).call(force.drag);
    container.append("circle").attr("r", radius).style("fill", color)
        .on("click", click);
    container.append("text").style("text-anchor", "middle");

    // update radius and text
    node.selectAll("circle").transition().attr("r", radius).style("fill", color)
    node.select("text").text(function (d) {

        return d.name
        // return !d.children ? d.name : null;
    });

    node.exit().remove();
}

function tick() {
    link.attr("x1", function (d) {
        return d.source.x;
    }).attr("y1", function (d) {
        return d.source.y;
    }).attr("x2", function (d) {
        return d.target.x;
    }).attr("y2", function (d) {
        return d.target.y;
    });
    node.attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

function radius(d) {
    return 25;
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
    return d._children ? "teal" : d.children ? "#65a7d7" : "#c3ddef";
    // return d._children ? "teal" : d.children ? "teal" : "aqua";
}
//API Calling Function
async function APICalling(parentName) {
   if(parentName!='Science'){

        let response = await fetch(`http://localhost:3004/${parentName}`); //D3Chart
        debugger
        if(response.statusText != 'Not Found'){

            apiData = await response.json();
            // console.log('apiData',apiData)
            return apiData;
        }
   }
   else{
    selectedValue=[];
    fetchText()
    // selectedValue = [];
   }
}


var addChild = '';
var storedClickedData = [];


//handle Click
function handleClickEvent(d) {
if(d){

    storedClickedData = d
    console.log("storeClickedData", storedClickedData);
}
}

// handle Search Input

function handleSearchInput(searchValue) {
    debugger
    const searchValues = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    if (searchValues == 'Science') {
        if (firsttime == true) {
            createball();
            firsttime = false
        }
        fetchText();
        storeSearchValue = searchValues;
    }
    else {
      alert("Invalid Request");
    }

}

// add to New Childs
function handleAddChild() {
    if (storedClickedData.name) {
        debugger
        // addToNewChild(storedClickedData);
        addToNewChildAddClick(storedClickedData)
        //Expand Function
        expandChild(storedClickedData.id, storedClickedData.name, storedClickedData.children)


        storedClickedData.children = storedClickedData.children;
        storedClickedData._children = null;
        update();
    }
}

// Add Child...
function addNewChild(newChild) {
    console.log('addNewChild', newChild);
    document.getElementById("addChildInput").innerHTML = newChild;
    addChild = newChild
}

// handle Clear
function handleClearInput() {
    debugger
    document.getElementById("addChildInput").value = '';
    addChild = '';
    // let g= document.getElementById('printValue');
    // g.remove();
}

//
function handleSearchClear(){
    debugger
        // const printValue = document.getElementById('printValue');
        // printValue.innerText = '';
        document.getElementById("inputSearchId").value = '';
        selectedValue=[];
        root=[];
        update();

}

// Toggle children on click.
function click(d) {

    //child close
    if (d.children) {
        debugger
        if(d.name=='Science') selectedValue=[];
        //Filter Functin
       // removeChild(d.id)

        d._children = d.children;
        d.children = null;
        console.log('closs...');
    } else {
        debugger
        console.log('open...');
        //child open

        if (d.headerName) {
            var result;
            APICalling(d.headerName).then((res) => {
                console.log('res', res);
                if(res){

                

                result = res.map((item) => {
                    const id = Math.floor(Math.random() * 10000) + 1;
                    item.fixed = false;
                    item.x = w / 2;
                    item.y = h / 2;
                    item.id = id


                    return item;
                })

                // root=result
                console.log('result', result)
                d._children = result
                d.children = d._children
                d._children = null;
                console.log('apiData', d.children)

                update()

              //  handleClickEvent(d)
                //addToNewChild(d)
                console.log('click @children', d)
                //Expand Function
              //  expandChild(d.id, d.name, d.children)
        
        
                // d.children = d._children;
                // d._children = null;
            }
            else{
              //  handleClickEvent(d)
              //  expandChild(d.id, d.name, d.children)
            }
            });
            // update()

        }
        // ______________________________
        // handleClickEvent(d)
        // //addToNewChild(d)
        // console.log('click @children', d)
        // //Expand Function
        // expandChild(d.id, d.name, d._children)


        // d.children = d._children;
        // d._children = null;

    }
    update();
}

// FilterFunction -- close event for child...

function removeChild(id) {
    //child close
    const printValue = document.getElementById('printValue');
    printValue.innerText = '';
   // var filterValue=[];
    selectedValue.forEach((item)=>{
        if(id==item.id){
           // item.child.
            for(let i=0; i<item.child.length; i++){

                for(let j = 0; j < selectedValue.length; j++) {
                    if(item.child[i].id === selectedValue[j].id) {
                        selectedValue.splice(j, 1);
                }
            }
        }
    }
    });
        var filterValue = selectedValue.filter((item) => id != item.id)
    selectedValue = [];
    selectedValue = filterValue;
    selectedValue.forEach((item) => {

        let newParent = document.createElement('h4');
        newParent.innerText = item.parentName;
         printValue.appendChild(newParent);
 
         if (item.child != 'No Children') {
 
             if (item.child.length > 0) {
 
                 item.child?.forEach((item, i) => {
                     i++
                    let newChild = document.createElement('h5');
                    let value = `${i}. ${item.name}`
                      newChild.innerText=value;
                    printValue.appendChild(newChild);
 
                 })
             }
         }

    })
}

// Expand Child...

function expandChild(id, name, _children) {
    if(name){
    const clearValue = document.getElementById('printValue');
    clearValue.innerText = '';

    const printValue = document.getElementById('printValue');
    // const text = document.createTextNode(` ${(name)}  :`);
    // printValue.appendChild(text);    

    // d._children.push(id)
    var pushToSelectValue = {
        id: id,
        parentName: name,
        child: _children ? _children : 'No Children'
    }
    console.log('pushToSelectValue', pushToSelectValue)
    // selectedValue = []
    var isExist = false;
    selectedValue.forEach((item) => {
        if (item.id === id && item.parentName == name) {
            isExist = true;
        }
    })
    if (isExist) {
        selectedValue.forEach((item) => {
            if (item.id === id || item.parentName == name) {
                item.child = _children ? _children : 'No Children'
            }
        })
    }
    else {
        selectedValue.push(pushToSelectValue)
    }


    selectedValue.forEach((item) => {

        let newParent = document.createElement('h4');
       newParent.innerText = item.parentName;
        printValue.appendChild(newParent);

        if (item.child != 'No Children') {

            if (item.child.length > 0) {

                item.child?.forEach((item, i) => {
                    i++
                   let newChild = document.createElement('h5');
                   let value = `${i}. ${item.name}`
                     newChild.innerText=value;
                   printValue.appendChild(newChild);

                })
            }
        }

    })
}
}

// Add to new Child...
function addToNewChild(d) {
    if (addChild) {
        debugger
        // console.log(d._children);
        if (d._children) {

            let isSameName = d._children.some((item) => item.name == addChild)
            console.log('BooleanValue', isSameName)
            if (!isSameName) {

                console.log('....addChild', addChild);
                const id = Math.floor(Math.random() * 10000) + 1;
                if (d._children) {

                    d._children.push({
                        name: addChild,
                        "size": 742,
                        "id": id

                    })
                }

            }
        }
        else {
            console.log('opened child o child')
            const id = Math.floor(Math.random() * 10000) + 1;
            d._children = [{
                name: addChild,
                "size": 742,
                "id": id
            }]
        }

    }
}

/// New 
// Add to new Child...
function addToNewChildAddClick(d) {
    if (addChild) {
        debugger
        // console.log(d._children);
        if (d.children) {

            let isSameName = d.children.some((item) => item.name == addChild)
            console.log('BooleanValue', isSameName)
            if (!isSameName) {

                console.log('....addChild', addChild);
                var allChilds = addChild.split(",")
                allChilds.forEach((item) => {

                    var id = Math.floor(Math.random() * 10000) + 1;
                    if (d.children) {

                        d.children.push({
                            name: item,
                            "size": 742,
                            "id": id

                        })
                    }
                    console.log('d.chidren', d.children);
                })
            }
        }
        else {
            console.log('opened child o child')
            var allChilds = addChild.split(",")
            allChilds.forEach((item) => {
                const id = Math.floor(Math.random() * 10000) + 1;
                if (d.children) {
                    d.children.push({
                        name: item,
                        "size": 742,
                        "id": id
                    })
                }
                else {

                    d.children = [{
                        name: item,
                        "size": 742,
                        "id": id
                    }]
                }
            });
        }

    }
}


// Returns a list of all nodes under the root.
function flatten(root) {
    var nodes = [],
        i = 0;

    function recurse(node) {
        if (node.children) node.size = node.children.reduce(function (p, v) {
            return p + recurse(v);
        }, 0);
        const id = Math.floor(Math.random() * 10000) + 1;
        if (!node.id) node.id = id;
        nodes.push(node);
        return node.size;
    }

    root.size = recurse(root);
    return nodes;
}

////////////////////////////////////////























var storeTreeStructureValue = [];
var know = {
    "Who are you": "Hello, Bot here",
    "Hi": ["Welcome to AI chatbot,what area want explore?", "Physics", "Biology", "Chemistry", "Maths", "Bot"],
    "Bye": "Okay! Will meet soon..",
    "Physics": "Organic,Materical",
    "Chemistry": "Atomic Structure,Electrochemistry,Thermochemistry",
    "Biology": "Zoology,Botony",
    "Zoology": "Arthropodology,Herpetology,Ichthyology,Malacology,Mammalogy",
    "Botony": "Cytology,Epigenetics,Paleobotany,Palynology",

};

function biologyEvents(itemName) {

    let i;
    switch (itemName) {
        case 'Zoology':
            i = 0
            break;
        case 'Botony':
            i = 1
            break;

        default:
            break;
    }


    let ItemValues = know[itemName].split(",");
    let isBtnExist = document.getElementById(ItemValues[i])
    if (!isBtnExist) {
        let nameExist = storeTestData.Biology.children[i].children
        if (nameExist.length <= 0) {

            chatResponseHead(itemName);

            ItemValues.forEach((item) => {

                createChatButton("alert", item);
                storeTestData.Biology.children[i].children.push({
                    name: item,
                    "size": 20
                })
            })
        }
        else {
            storeTestData.Biology.children[i].children = []
        }
        update()
    }
    else {
        removeContent(itemName, ItemValues);
        storeTestData.Biology.children[i].children = []
        update()
    }
}

function biologyTrigger(item) {

    debugger
    // Click Event For Zoology
    if (item == "Zoology") {
        biologyEvents(item)

    }

    // Click Event For Botony
    if (item == "Botony") {
        biologyEvents(item)

    }
}


function commonTrigger(item) {

    debugger
    if (firsttime == true) {
        createball();
        firsttime = false
    }

    document.getElementById("userBox").value = '';

    // click Event Biology
    if (item == "Biology") {
        var biologyItems = know.Biology.split(",");
        let isExist = document.getElementById(biologyItems[0])
        if (!isExist) {
            chatResponseHead(item)
            biologyItems.forEach((item) => {
                createChatButton("biologyTrigger", item);
            })
            dataIsVisibl = true
            toVisbileTreeData(item);

        }
        else {
            removeContent(item, biologyItems);
            dataIsVisibl = false
            toVisbileTreeData(item);
        }
    }

    // Click event Phydics...
    if (item == "Physics") {
        let physicsItems = know.Physics.split(",");
        let isExist = document.getElementById(physicsItems[0])
        if (!isExist) {
            chatResponseHead(item)
            physicsItems.forEach((item) => {
                createChatButton("physicsTrigger", item);
            })
            dataIsVisibl = true
            toVisbileTreeData(item);

        }
        else {
            removeContent(item, physicsItems);
            dataIsVisibl = false
            toVisbileTreeData(item);
        }
    }

    // Chemistry click event...
    if (item == "Chemistry") {
        debugger
        let chemistryItems = know.Chemistry.split(",");
        let isExist = document.getElementById(chemistryItems[0])
        if (!isExist) {
            chatResponseHead(item)
            chemistryItems.forEach((item) => {
                createChatButton("chemistryTrigger", item);
            })
            dataIsVisibl = true
            toVisbileTreeData(item);

        }
        else {
            removeContent(item, chemistryItems);
            dataIsVisibl = false
            toVisbileTreeData(item);
        }
    }
};

// Remove Content...
function removeContent(name, items) {
    var buttonElement;
    items.forEach((item) => {
        buttonElement = document.getElementById(item);
        buttonElement.remove()
    });
    let content = document.getElementById(name + 'Div');
    content.remove();
}

// Heading and Content Create...
function chatResponseHead(topic) {
    var topicDefinition;

    switch (topic) {
        case "Physics":
            topicDefinition = `Physics is the scientific study of physical phenomena like the motion of matter and energy and force.
        It helps us to understand the world around us.
        Physics is the most fundamental part of science.
        Choose the topic to learn`
            break;
        case "Biology":
            topicDefinition = `Biology is defined as the study of living organisms, their origins, anatomy, morphology, physiology, behaviour, and distribution.
            Choose the topic to learn`
            break;
        case "Chemistry":
            topicDefinition = `Chemistry is a branch of natural science that deals principally with the properties of substances, the changes they undergo, and the natural laws that describe these changes.
            Choose the topic to learn`
            break;
        default:
            topicDefinition = `Choose the topic to learn`
            break;


    }


    var newDiv = document.createElement('div');
    newDiv.id = topic + "Div";
    document.getElementById('chatLog').appendChild(newDiv);

    var newTopic = document.createElement('p');
    newTopic.innerText = topic;
    newTopic.setAttribute("style", "font-size: 20px;");
    document.getElementById(topic + 'Div').appendChild(newTopic);

    var newDesc = document.createElement('p');
    newDesc.innerText = topicDefinition;
    document.getElementById(topic + 'Div').appendChild(newDesc);

}


// Creating Buttons...

function createChatButton(eventName, item) {
    let newBtn = document.createElement('button');
    newBtn.innerText = item;
    document.getElementById('chatLog').appendChild(newBtn);
    newBtn.setAttribute("onclick", "" + eventName + "('" + item + "')");
    newBtn.setAttribute("id", "" + item + "");
    newBtn.setAttribute("style", "padding:10px ; margin-right:20px ; margin-top:20px ;");

}

/// New Chat Bot ......
function talk() {

    var getUser = document.getElementById('userBox').value;
    const user = getUser.charAt(0).toUpperCase() + getUser.slice(1);
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        // add Buttons with Click event
        debugger
        if (user == 'Hi') {
            know.Hi.forEach((item, i) => {
                if (i == 0) {
                    document.getElementById('chatLog').innerHTML = item + "<br>";
                }
                else {

                    createChatButton("commonTrigger", item);                    //onclick = commonTrigger(item);


                }
            })
        }
        else {
            // Normal text response...
            document.getElementById('chatLog').innerHTML = "NormalText   " + know[user] + "<br>";
        }


    }
    else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}

















