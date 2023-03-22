export class Model {
    
    constructor () {
        this.sectionList = {
        //    education:new Array(),
        };
        this.CHECKSTATIC = ["intro","personal-info","image"];
        // console.log(this);
    }

    bindSectionListChanged (handler){
        this.onSectionListChanged = handler;
    }

    bindStaticListChanged (handler){
        this.onStaticListChanged = handler;
    }

    addItem (sectionName,sectionData){
       console.log(sectionName);
        const currentId = Date.now() + Math.random().toString(16).slice(2);
        console.log(this.sectionList[sectionName]);
        console.log(sectionData);    
        if(!this.sectionList[sectionName])
          this.sectionList[sectionName]=new Array();

        if(sectionName == "image") 
             this.sectionList[sectionName]={...sectionData};
        if(this.CHECKSTATIC.filter( item => item == sectionName ).length != 0)
            this.sectionList[sectionName]={...sectionData};
        else
            this.sectionList[sectionName].push({[currentId]:{...sectionData}});
            
        this.commitSectionList(sectionName);
    }

    getItem (sectionName,currentId){
        console.log(this.sectionList[sectionName]);
        const currentItem = this.sectionList[sectionName].filter( item => currentId in item );
        // console.log(this.sectionList[sectionName],currentItem);
        return currentItem[0][currentId];
    }

    deleteItem(sectionName,currentId){
            let currentSection = this.sectionList[sectionName];
            this.sectionList[sectionName] = currentSection.filter( item => !(currentId in item));
            // console.log(this.sectionList[sectionName],currentSection);
            this.commitSectionList(sectionName);
    }

    editItem(sectionName,newData,currentId){
        this.sectionList[sectionName] =  this.sectionList[sectionName].map( item=> {
            console.log(item);
            if(item[currentId]) item[currentId]={...newData};
            return item;
        })
        // console.log(this.sectionList);
        this.commitSectionList(sectionName);
    }

    commitSectionList(sectionName) {
        localStorage.setItem(`${sectionName}`,JSON.stringify(this.sectionList[sectionName]));
        if(this.CHECKSTATIC.filter( item => item == sectionName).length != 0)
           this.onStaticListChanged(this.sectionList,sectionName);
        else
           this.onSectionListChanged(this.sectionList,sectionName);
    }


}
