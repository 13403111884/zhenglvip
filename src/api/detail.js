const projectList = [
  {
    id: 1,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 2,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 3,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 4,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 5,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 6,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 7,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 8,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  },
  {
    id: 9,
    contactPerson: 'blog',
    customerName: 'https://neveryu.github.io/index.html',
    contactNumber: 'Yu',
    area: '使用GitPage搭建的博客',
    industry: 'dadad',
    closingTime: '78878798798798',
    haveDoneBusiness: 'asfdasdfg',
    contractSum: 123,
    profit: 222,
    remarks: 'bkmnb,m'
  }
]

export function getProjectList() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, projectList)
  })
}

export function getItem(id) {
  let Item = {}
  Item.total = projectList.length
  Item.item = {}
  for(let i = 0; i < projectList.length; i++) {
    if(projectList[i].id === parseInt(id)) {
      Item.item = projectList[i]
      break
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, Item)
  })
}
