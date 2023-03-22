export class Controller {
    constructor(model,view){
        this.model = model;
        this.view = view;
        this.view.bindAddSection(this.handleAddItem,this.handleDeleteItem,this.handleEditItem,this.handleGetItem);
        // this.view.deleteSectionList(this.handleDeleteItem);
        this.view.inputFieldFilled();
        this.view.sectionBar();
        this.view.showModal();
        this.view.loadImage(this.handleAddItem);
        this.model.bindSectionListChanged(this.onSectionListChanged);
        this.model.bindStaticListChanged(this.onStaticListChanged);
        // this.onResumeChanged(this.model.sectionList)
    }
    onSectionListChanged = (datamodel,sectionName) => {
        this.view.displayResume(datamodel,sectionName);
    }
    onStaticListChanged = (datamodel,sectionName) => {
        this.view.displayStaticResume(datamodel,sectionName);
    }
    handleAddItem = (sectionName,sectionData) => {
        // console.log("inside add item handle",sectionData);
            this.model.addItem(sectionName,sectionData);
            // this.view.deleteSectionList
    }
    handleDeleteItem = (sectionName,currentId) => {
        console.log("handleDeleteItem");
         this.model.deleteItem(sectionName,currentId);
    }
    handleEditItem = (sectionName,newData,currentId) => {
        console.log("handleDeleteItem");
        this.model.editItem(sectionName,newData,currentId);
    }
    handleGetItem = (sectionName,currentId) => {
        return this.model.getItem(sectionName,currentId);
    }
    

}