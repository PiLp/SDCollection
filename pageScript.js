var button = document.getElementById('menuItemGroup');
var link = document.getElementById('menuItemGroup').getElementsByTagName('a')[0].innerHTML;
var contentBox = document.getElementById('contentBox');


button.style.cursor = 'pointer';
button.onClick = clickButton();


function clickButton() {

	if(link = "Tools") {
		document.getElementById('contentBox')
		contentBox.innerHTML("
				<p>Intranet</p>
				<p>RDP</p>
			")
	}

}
