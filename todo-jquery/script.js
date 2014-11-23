var Todo = {
	data : data,
	itemTemplate : null,
	itemContainer : null,
	initTodo : function(){
		this.itemContainer = $("#itemList");
		this.initItemTemplate();
		this.renderTaskList(this.data);
		this.addEventListeners();
	},
	initItemTemplate : function(){
		var source   = $("#item-template").html();
		this.itemTemplate = Handlebars.compile(source);
	},
	renderTaskList : function(data){
		this.itemContainer.html(this.itemTemplate(data));
		this.updateTotalItemsCount(data.length);
	},
	incrementCompletedItemsCount : function(){
		var oCompletedItemsCount = parseInt($("#completedItems").html());
		this.updateCompletedItemsCount(++oCompletedItemsCount);
	},
	decrementCompletedItemsCount : function(){
		var oCompletedItemsCount = parseInt($("#completedItems").html());
		this.updateCompletedItemsCount(--oCompletedItemsCount);
	},
	updateCompletedItemsCount : function(completedItems){
		$("#completedItems").html(completedItems);
	},
	incrementTotalItemsCount : function(){
		var oTotalItemsCount = parseInt($("#totalItems").html());
		this.updateTotalItemsCount(++oTotalItemsCount);
	},
	decrememtTotalItemsCount : function(){
		var oTotalItemsCount = parseInt($("#totalItems").html());
		this.updateTotalItemsCount(--oTotalItemsCount);
	},
	updateTotalItemsCount : function(totalItems){
		$("#totalItems").html(totalItems);
	},
	removeItemMarkup : function($removeBtn){
		$removeBtn.closest("li").remove();
	},
	addNewTask : function(task){
		this.createTaskMarkup(task);
		this.incrementTotalItemsCount();
	},
	createTaskMarkup : function(task){
		var $itemListParent = $("#itemList"),
		$itemList = $itemListParent .find("li"),
		itemLength = $itemList.length,
		$lastLi = $($itemList[itemLength- 1]),
		newItemLi = $lastLi.clone();
		newItemLi.find("._itemName").text(task);
		newItemLi.find("label").attr("for","item_" + itemLength);
		newItemLi.find("input").attr("id", "item_" + itemLength).removeAttr("checked");
		$itemListParent.append(newItemLi);
	},
	addEventListeners : function(){
		this.initTaskCB();
		this.initRemoveButton();
		this.initAddNewTaskButton();
	},
	initTaskCB : function(){
		$(document).on("click","._taskCB", function(){
			var $this = $(this);
			if($this.is(":checked")){
				Todo.incrementCompletedItemsCount();
			}
			else{
				Todo.decrementCompletedItemsCount();
			}
		});
	},
	initRemoveButton : function(){
		$(document).on("click","._removeButton", function(){
			Todo.removeItemMarkup($(this));
			Todo.decrememtTotalItemsCount();
		});
	},
	initAddNewTaskButton : function(){
		var $newTaskTextBox = $("#newTask");
		$("#addTask").on("click", function(){
			var $this = $(this),
			newTaskText = $newTaskTextBox.val();
			if(newTaskText){
				Todo.addNewTask(newTaskText);
				$newTaskTextBox.val("");
			}
		});
	}
}