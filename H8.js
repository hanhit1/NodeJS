const organizationTree = {
    name: "CEO",
    children: [
      {
        name: "CFO",
        children: [
          {
            name: "Finance Manager",
            children: [
              { name: "Senior Accountant" },
              { name: "Junior Accountant" },
            ],
          },
          {
            name: "Investment Manager",
            children: [
              { name: "Financial Analyst I" },
              { name: "Financial Analyst II" },
            ],
          },
        ],
      },
      {
        name: "CTO",
        children: [
          {
            name: "Engineering Manager",
            children: [
              { name: "Lead Developer" },
              { name: "Senior Developer" },
              { name: "Junior Developer" },
            ],
          },
          {
            name: "QA Manager",
            children: [
              { name: "Lead QA Engineer" },
              { name: "QA Engineer I" },
              { name: "QA Engineer II" },
            ],
          },
        ],
      },
      {
        name: "COO",
        children: [
          {
            name: "Operations Manager",
            children: [{ name: "HR Manager" }, { name: "Office Coordinator" }],
          },
          {
            name: "Customer Relations Manager",
            children: [
              { name: "Customer Support Specialist I" },
              { name: "Customer Support Specialist II" },
            ],
          },
        ],
      },
    ],
  };
  let count = 1;
  function convertToFlatList(node, parentid = null, position = "") {
    let flatList = [];
    let id = count++;
    let current = (position === "") ? node.name :  node.name + " > " + position;
    flatList.push({
      id: id,
      name: node.name,
      parentid: parentid,
      position: current,
    });
    if (node.children) {
      for (let child of node.children) {
        flatList = flatList.concat(convertToFlatList(child, id, current));
      }
    }
    return flatList;
  }
  let flatList = convertToFlatList(organizationTree);
  console.log(flatList);
  